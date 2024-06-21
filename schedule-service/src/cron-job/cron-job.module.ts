import { Module } from "@nestjs/common"
import { TaskDBModule } from "../dbModules"
import { ScheduleModule } from "@nestjs/schedule"
import { CronJobService } from "./cron-job.service"
import { TaskModule } from "../tasks/task.module"

@Module({
  imports: [TaskDBModule, ScheduleModule.forRoot(), TaskModule],
  controllers: [],
  providers: [CronJobService],
  exports: [CronJobService],
})
export class CronJobModule {}
