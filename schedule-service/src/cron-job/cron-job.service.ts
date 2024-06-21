/* eslint-disable @typescript-eslint/ban-ts-comment */
import { client } from "@hwdtech/api-requests"
import { Injectable } from "@nestjs/common"
import { Cron, CronExpression } from "@nestjs/schedule"
import { TaskRepository } from "../tasks/task.repository"

@Injectable()
export class CronJobService {
  constructor(private readonly dbRepository: TaskRepository) {}
  @Cron(CronExpression.EVERY_30_SECONDS)
  async watcher() {
    const records = await this.dbRepository.getUnCompletedAndOutdatedRecords()
    records?.forEach(async (task) => {
      if (task.payload.data.config) {
        task.payload.data.config.headers = {
          Cookie: `internal_token=${process.env.SCHEDULE_SERVICE_TOKEN};`,
        }
      } else {
        task.payload.data.config = {
          headers: {
            Cookie: `internal_token=${process.env.SCHEDULE_SERVICE_TOKEN};`,
          },
        }
      }
      client
        // @ts-ignore
        .sendReq(task.payload.service, task.payload.action, {
          ...task.payload.data,
        })
        .then((request) => {
          this.dbRepository.setCompleteTheTaskInDB(task.idTask)
        })
    })
  }
}
