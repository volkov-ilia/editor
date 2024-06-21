import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
import Content from "../../../../common/types/Content"

export type ArticleDocument = Article & Document

@Schema()
export class Article implements Content.Article {
  @Prop({ required: true, type: Object })
  formDataSlateStructure: Content.FormDataSlateStructureType
}

export const ArticleSchema = SchemaFactory.createForClass(Article)
