import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { PublishHistoryType } from "../types/PublishHistoryType"
import { PublishHistoryDocument } from "./schemas/publish.schemas"

@Injectable()
export class PublishRepository {
  constructor(@InjectModel("PublishHistory") private publishHistoryModel: Model<PublishHistoryDocument>) {}

  async savePublishHistory(
    idArticle: string,
    source: string,
    name: string,
    publishTime: number,
    version: string,
    status: string
  ) {
    const newPublishHistory: PublishHistoryType = {
      idArticle,
      history: [{ source, name, date: new Date(publishTime), version, status, slug: idArticle }],
    }
    try {
      const res = await this.publishHistoryModel.findOneAndUpdate(
        {
          idArticle: { $eq: idArticle },
        },
        {
          $push: {
            history: newPublishHistory.history[0],
          },
        }
      )
      if (!res) {
        await this.publishHistoryModel.create([newPublishHistory])
      }
    } catch {
      throw new Error("Failed to save publishHistory")
    }
  }

  async getPublishHistory(idArticles) {
    const result = []
    for (const array of idArticles) {
      const card = {}
      for (const idArticle of array) {
        const res = await this.publishHistoryModel.findOne({ idArticle: idArticle })
        if (res) {
          card[idArticle] = res.history.pop()
        }
      }
      result.push(card)
    }
    return result
  }
}
