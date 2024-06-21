import { Module } from "@nestjs/common"
import { PublishDBModule } from "../dbModules"
import { PublishController } from "./publish.controller"
import { PublishService } from "./publish.service"
import { PublishRepository } from "./publsih.repository"

@Module({
  imports: [PublishDBModule],
  controllers: [PublishController],
  providers: [PublishService, PublishRepository],
})
export class PublishModule {}
