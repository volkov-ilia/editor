import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import * as mongoose from "mongoose"
import { Model } from "mongoose"
import Content from "../../../common/types/Content"
import { CardDocument } from "../cards/schemas/cards.schemas"
import { ArticleDocument } from "./schemas/articles.schemas"

@Injectable()
export class ArticlesRepository {
  constructor(
    @InjectModel("Article") private articleModel: Model<ArticleDocument>,
    @InjectModel("Card") private cardModel: Model<CardDocument>
  ) {}

  async createOrUpdateArticle(article: Content.Article) {
    try {
      return this.articleModel.create([article])
    } catch (error) {
      throw new Error(`Failed to save article`)
    }
  }

  async getArticle(idArticle: string) {
    try {
      return await this.articleModel.findOne({ _id: idArticle })
    } catch (error) {
      throw new Error(`Failed to get article`)
    }
  }
}
