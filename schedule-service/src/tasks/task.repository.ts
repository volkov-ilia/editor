import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import TaskTable from "../types/TaskTable"
import { TaskDocument } from "./schemas/task.schemas"

@Injectable()
export class TaskRepository {
  constructor(@InjectModel("Task") private taskModel: Model<TaskDocument>) {}

  async saveTask(task: TaskTable.Task) {
    try {
      return await this.taskModel.create([task])
    } catch (error) {
      throw new Error(`Failed to create task`)
    }
  }

  async getUnCompletedRecords(): Promise<TaskTable.Task[] | undefined> {
    try {
      return await this.taskModel.find({ isComplete: false }).then((records) => {
        return records.map((record) => {
          record.idTask = record.id
          return record
        })
      })
    } catch (e) {
      throw new Error("There is an error with getting uncompleted records")
    }
  }

  async getUnCompletedAndOutdatedRecords(): Promise<TaskTable.Task[] | undefined> {
    const currentDate: number = new Date().getTime()
    try {
      return await this.getUnCompletedRecords().then((records) => {
        return records.filter((record) => record.time <= currentDate)
      })
    } catch (e) {
      throw new Error("There is an error with getting uncompleted and outdated records")
    }
  }

  async setCompleteTheTaskInDB(taskID: string) {
    try {
      await this.taskModel.findByIdAndUpdate(taskID, { $set: { isComplete: true } })
    } catch (e) {
      throw new Error("There is an error with setting the task complete")
    }
  }
}
