/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
import TaskTable from "../../types/TaskTable"

export type TaskDocument = Task & Document

@Schema()
export class Task implements TaskTable.Task {
  @Prop()
  idTask: string

  @Prop({ required: true })
  time: number

  @Prop({ required: true, type: Object })
  payload: { service: string; action: string; data: any }

  @Prop({ required: true, default: false })
  isComplete: boolean
}

export const TaskSchema = SchemaFactory.createForClass(Task)
