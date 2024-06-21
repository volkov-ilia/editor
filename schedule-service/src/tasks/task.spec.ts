/* eslint-disable @typescript-eslint/ban-ts-comment  */
/* eslint-disable @typescript-eslint/no-explicit-any  */
import { getModelToken } from "@nestjs/mongoose"
import { Test } from "@nestjs/testing"
import TaskTable from "../types/TaskTable"
import { Task } from "./schemas/task.schemas"
import { TaskController } from "./task.controller"
import { TaskRepository } from "./task.repository"
import { TaskService } from "./task.service"

let taskController: TaskController
let taskService: TaskService
let taskRepository: TaskRepository

const taskToSave: TaskTable.Task = {
  payload: { action: "", data: undefined, service: "" },
  time: 0,
  isComplete: false,
}

const cardToSave = {
  title: "title",
  description: "description",
  tags: "tag1 tag2",
}

const req = {
  params: taskToSave,
}

const resultSaveTask = "resultSaveTask"
let mockRepository
beforeEach(async () => {
  mockRepository = {
    create: jest.fn(),
  }
  const moduleRef = await Test.createTestingModule({
    controllers: [TaskController],
    providers: [
      TaskRepository,
      TaskService,
      {
        provide: getModelToken("Task"),
        useValue: mockRepository,
      },
    ],
  }).compile()
  taskRepository = moduleRef.get<TaskRepository>(TaskRepository)
  taskService = moduleRef.get<TaskService>(TaskService)
  taskController = moduleRef.get<TaskController>(TaskController)
})

describe("TaskController methods should return correct value", () => {
  it("TaskService.saveTask should return result of save task", async () => {
    // @ts-ignore
    jest.spyOn(taskRepository, "saveTask").mockImplementation(async (task) => {
      expect(task).toEqual(taskToSave)
      return resultSaveTask
    })
    expect(await taskController.saveTask(req)).toBe(resultSaveTask)
  })
})

describe("TaskService methods should return correct value", () => {
  it("TaskService.saveTask should return result of save task", async () => {
    // @ts-ignore
    jest.spyOn(taskRepository, "saveTask").mockImplementation(async (task) => {
      expect(task).toEqual(taskToSave)
      return resultSaveTask
    })
    expect(await taskService.saveTask(taskToSave)).toBe(resultSaveTask)
  })
})
