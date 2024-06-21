import { Injectable } from "@nestjs/common"
import TaskTable from "../types/TaskTable"
import { TaskRepository } from "./task.repository"

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async saveTask(task: TaskTable.Task, name: string) {
    task.payload.data.body.name = name
    return await this.taskRepository.saveTask(task)
  }
}
