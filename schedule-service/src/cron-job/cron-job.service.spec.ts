import { Test, TestingModule } from "@nestjs/testing"
import { CronJobService } from "./cron-job.service"
import { TaskRepository } from "../tasks/task.repository"
import { getConnectionToken, getModelToken } from "@nestjs/mongoose"
import TaskTable from "../types/TaskTable"
import { client } from "@hwdtech/api-requests"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line
const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  startSession: () => {
    return {
      startTransaction() {
        return null
      },
      commitTransaction() {
        return null
      },
      abortTransaction() {
        return null
      },
      endSession() {
        return null
      },
    }
  },
}))
let mockRepository
describe("CronJobService", () => {
  let service: CronJobService
  let repository: TaskRepository

  beforeEach(async () => {
    mockRepository = {
      findByIdAndUpdate: jest.fn(),
      find: jest.fn(),
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CronJobService,
        TaskRepository,
        {
          provide: getConnectionToken("Database"),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getModelToken("Task"),
          useValue: mockRepository,
        },
      ],
    }).compile()

    service = module.get<CronJobService>(CronJobService)
    repository = module.get<TaskRepository>(TaskRepository)
  })

  describe("watcher", () => {
    it("Should use api library and mark as completed in db", async () => {
      const task: TaskTable.Task = {
        payload: { service: "service", action: "action", data: "data" },
        idTask: "0",
        isComplete: false,
        time: 0,
      }
      const task2: TaskTable.Task = {
        payload: { service: "service1", action: "action2", data: "data2" },
        idTask: "1",
        isComplete: false,
        time: 0,
      }
      jest.spyOn(repository, "getUnCompletedAndOutdatedRecords").mockImplementation(() => {
        return Promise.resolve([task, task2])
      })
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn(client, "sendReq").mockImplementation(() => Promise.resolve())
      const mockOnComplete = jest.spyOn(repository, "setCompleteTheTaskInDB").mockImplementation(jest.fn())

      await service.watcher()
      expect(mockOnComplete).toBeCalledTimes(2)
      expect(mockOnComplete.mock.calls[0][0]).toEqual(task.idTask)
      expect(mockOnComplete.mock.calls[1][0]).toEqual(task2.idTask)
    })
  })
  describe("task.repository", () => {
    it("setCompleteTheTaskInDB should call findByIdAndUpdate with correct params", async () => {
      await repository.setCompleteTheTaskInDB("1")
      expect(mockRepository.findByIdAndUpdate).toHaveBeenCalled()
      expect(mockRepository.findByIdAndUpdate.mock.calls[0][0]).toEqual("1")
    })
    it("setCompleteTheTaskInDB should throw an error", async () => {
      mockRepository.findByIdAndUpdate.mockImplementation(() => {
        throw new Error()
      })
      try {
        await repository.setCompleteTheTaskInDB("1")
      } catch (e) {
        expect(e).toEqual(new Error("There is an error with setting the task complete"))
      }
      expect.assertions(1)
    })
    it("getUnCompletedRecords should find all uncompleted records", async () => {
      const records = [{ id: 1 }, { id: 2 }, { id: 3 }]
      const options = { isComplete: false }
      mockRepository.find.mockImplementation(() => Promise.resolve(records))
      await repository.getUnCompletedRecords()
      expect(mockRepository.find.mock.calls[0][0]).toEqual(options)
    })
    it("getUnCompletedRecords should throw an error", async () => {
      mockRepository.find.mockImplementation(() => {
        throw new Error()
      })
      try {
        await repository.getUnCompletedRecords()
      } catch (e) {
        expect(e).toEqual(new Error("There is an error with getting uncompleted records"))
      }
      expect.assertions(1)
    })
    it("getUnCompletedAndOutdatedRecords should return outdatedRecords", async () => {
      const task: TaskTable.Task = {
        payload: { service: "", action: "", data: "" },
        idTask: "0",
        isComplete: false,
        time: 0,
      }
      const task2: TaskTable.Task = {
        payload: { service: "", action: "", data: "" },
        idTask: "1",
        isComplete: false,
        time: 100,
      }
      const task3: TaskTable.Task = {
        payload: { service: "", action: "", data: "" },
        idTask: "0",
        isComplete: false,
        time: 10,
      }
      jest.spyOn(repository, "getUnCompletedRecords").mockImplementation(() => Promise.resolve([task, task2, task3]))
      jest.useFakeTimers().setSystemTime(10)
      const result = await repository.getUnCompletedAndOutdatedRecords()
      expect(result).toEqual([task, task3])
      jest.clearAllTimers()
    })
    it("getUnCompletedAndOutdatedRecords should throw an error", async () => {
      jest.spyOn(repository, "getUnCompletedRecords").mockImplementation(() => {
        throw new Error()
      })
      try {
        await repository.getUnCompletedAndOutdatedRecords()
      } catch (e) {
        expect(e).toEqual(new Error("There is an error with getting uncompleted and outdated records"))
      }
      expect.assertions(1)
    })
  })
})
