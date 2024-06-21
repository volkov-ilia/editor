import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { dbModule, TaskDBModule } from "./dbModules"
import { ScheduleModule } from "@nestjs/schedule"
import { TaskModule } from "./tasks/task.module"
import { CronJobModule } from "./cron-job/cron-job.module"
import { AuthModule } from "./auth/auth.module"

@Module({
  imports: [
    ConfigModule.forRoot(),
    dbModule.forRoot(process.env.SCHEDULE_DB_CONNECTION),
    ScheduleModule.forRoot(),
    TaskDBModule,
    TaskModule,
    CronJobModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
