import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { CardsRepository } from "../cards/cards.repository"
import Content from "../../../common/types/Content"
import { ArticlesRepository } from "./articles.repsitory"
import { InjectConnection } from "@nestjs/mongoose"
import * as mongoose from "mongoose"
import { decode } from "jsonwebtoken"

@Injectable()
export class ArticlesService {
  constructor(
    private readonly cardRepository: CardsRepository,
    private readonly articleRepository: ArticlesRepository,
    @InjectConnection() private readonly connection: mongoose.Connection
  ) {}

  incrementArticleVersion(version: string) {
    if (isNaN(Number(version))) throw new Error("version is not a number")
    const num_version = Number(version)
    if (num_version < 0 || num_version > 999) throw new Error("version is invalid")
    const newStringVersion: string = "000" + (num_version + 1)
    return newStringVersion.slice(newStringVersion.length - 3, newStringVersion.length)
  }

  async saveArticleAndUpdateCardInDatabase(cardId: string, source: string, article: Content.Article, name: string) {
    try {
      const [savedArticle] = await this.articleRepository.createOrUpdateArticle(article)
      const [currentCard] = await this.cardRepository.getCard(cardId)
      const indexSourceItemInCardsResources: number = currentCard.resources
        .map((resource) => resource.source)
        .indexOf(source)
      if (indexSourceItemInCardsResources === -1) {
        currentCard.resources.push({
          source: source,
          slug: savedArticle._id,
          version: "001",
        } as Content.SourceItem)
        const newHistoryItem: Content.HistoryItem = {
          status: "created",
          source: source,
          version: "001",
          date: new Date(),
          name: name,
          slug: savedArticle._id,
        }
        currentCard.history.push(newHistoryItem)
      }
      if (indexSourceItemInCardsResources >= 0) {
        // эта проверка нужна для старых карточек, выгруженных из контентфула
        if (!currentCard.resources[indexSourceItemInCardsResources].version) {
          currentCard.resources[indexSourceItemInCardsResources].version = "000"
        }
        currentCard.resources[indexSourceItemInCardsResources].version = this.incrementArticleVersion(
          currentCard.resources[indexSourceItemInCardsResources].version
        )
        currentCard.resources[indexSourceItemInCardsResources].slug = savedArticle._id
        const newHistoryItem: Content.HistoryItem = {
          status: "updated",
          source: source,
          version: currentCard.resources[indexSourceItemInCardsResources].version,
          date: new Date(),
          name: name,
          slug: savedArticle._id,
        }
        currentCard.history.push(newHistoryItem)
      }
      await this.cardRepository.updateCard(cardId, currentCard)
      return savedArticle._id
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  //TODO: Использовать этот метод для получения статьи на publish-service
  async getArticleById(idArticle: string) {
    return await this.articleRepository.getArticle(idArticle)
  }

  async decodeJWTPayload(token: string) {
    return decode(token)
  }
}
