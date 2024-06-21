/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
import Content from "../../../../common/types/Content"
import { PublishHistoryType } from "../../types/PublishHistoryType"

export type PublishHistoryDocument = PublishHistory & Document

@Schema()
export class PublishHistory implements PublishHistoryType {
  @Prop({ required: true })
  idArticle: string

  @Prop({ required: true })
  history: Content.HistoryItem[]
}

export const PublishHistorySchema = SchemaFactory.createForClass(PublishHistory)
