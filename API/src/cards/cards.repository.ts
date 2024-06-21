import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import * as mongoose from "mongoose"
import { Model } from "mongoose"
import { Card, CardDocument } from "./schemas/cards.schemas"
import { ObjectId } from "mongodb"
import { ReqParams } from "../utils/ReqParams"
import Content from "../../../common/types/Content"

@Injectable()
export class CardsRepository {
  constructor(@InjectModel("Card") private cardModel: Model<CardDocument>) {}

  async getCards(contentType: string, { tags, page = 1, count = 10 }): Promise<{ cards: Content.MongoCard[] }> {
    ReqParams.pageShouldBeANumberAndGreatThanZero(page)
    ReqParams.countShouldBeANumberAndBetweenZeroAnd100(count)
    tags = ReqParams.putContentTypeIntoTags(tags, contentType)
    tags = ReqParams.convertTagsToArrayOfStrings(tags)
    return this.loadCards(tags, page, count)
  }

  private async loadCards(tags: string[], page: number, count: number): Promise<{ cards: Content.MongoCard[] }> {
    try {
      return {
        cards: await this.cardModel
          .find({ tags: { $all: tags } })
          .skip(Number(count) * (page - 1))
          .limit(Number(count)),
      }
    } catch (error) {
      throw new Error(`Service unavailable`)
    }
  }

  async createCard(card: Content.Card, session?: mongoose.ClientSession) {
    try {
      return await this.cardModel.create([card], { session })
    } catch (e) {
      throw new Error(`Failed to create card`)
    }
  }

  async getCard(idCard: string, session?: mongoose.ClientSession) {
    try {
      return await this.cardModel.find({ _id: idCard })
    } catch (error) {
      throw new Error(`Failed to get card`)
    }
  }

  async updateCard(idCard: string, newCard: Content.Card, session?: mongoose.ClientSession) {
    try {
      return await this.cardModel.updateOne({ _id: idCard }, newCard)
    } catch (error) {
      throw new Error(`Failed to update card`)
    }
  }

  async getCardById(idCard: string) {
    try {
      return await this.cardModel.findOne({ _id: idCard })
    } catch (error) {
      throw new Error(`Failed to get card`)
    }
  }

  async saveCard(card) {
    const cardDBForm: Content.Card = this.cardToDBForm(card)
    const mongoCard = (await this.saveCardInDB(cardDBForm))[0]
    cardDBForm.idCard = mongoCard._id
    return [cardDBForm]
  }

  cardToDBForm(card) {
    return {
      title: card.title,
      tags: card.tags.split(" "),
      description: card.description,
      history: [],
      documentFormatVersion: "1",
      resources: [],
    }
  }

  async saveCardInDB(cardToSave: Content.Card) {
    try {
      return await this.cardModel.create([cardToSave])
    } catch (e) {
      throw new Error(`Failed to save card`)
    }
  }

  async updateArticleStatusFromCard(idArticle: string, source: string, name: string, status: string) {
    try {
      const cardFromDB: Content.Card = await this.cardModel.findOne({
        resources: {
          $elemMatch: {
            slug: {
              $eq: new ObjectId(idArticle),
            },
          },
        },
      })
      const lastHistoryItem = cardFromDB.history.filter((item) => item.source === source).pop()
      const newHistoryItem: Content.HistoryItem = {
        status: status,
        source: source,
        version: lastHistoryItem.version,
        date: new Date(),
        name: name,
        slug: idArticle,
      }
      if (lastHistoryItem.status !== status) {
        await this.cardModel.findOneAndUpdate(
          {
            resources: {
              $elemMatch: {
                slug: {
                  $eq: new ObjectId(idArticle),
                },
              },
            },
          },
          {
            $push: {
              history: newHistoryItem,
            },
          }
        )
      }
    } catch (error) {
      return new Error("Поменять статус не удалось")
    }
  }
}
