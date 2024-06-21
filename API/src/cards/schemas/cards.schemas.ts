import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
import Content from "../../../../common/types/Content"

export type CardDocument = Card & Document

@Schema()
export class Card implements Content.Card {
  @Prop()
  idCard: string

  @Prop({ required: true })
  documentFormatVersion: string

  @Prop({ required: true })
  title: string

  @Prop({ required: true })
  tags: string[]

  @Prop({ required: true })
  history: Content.HistoryItem[]

  @Prop()
  imgSrc: string

  @Prop()
  description: string

  @Prop()
  note: string

  @Prop()
  resources: Content.SourceItem[]
}

export const CardSchema = SchemaFactory.createForClass(Card)
