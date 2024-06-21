import { Module } from "@nestjs/common"

import { TaskDBModule } from "../dbModules"
import { TaskController } from "./task.controller"
import { TaskRepository } from "./task.repository"
import { TaskService } from "./task.service"

@Module({
  imports: [TaskDBModule],
  controllers: [TaskController],
  providers: [TaskRepository, TaskService],
  exports: [TaskRepository, TaskService],
})
export class TaskModule {}
