import { Module } from "@nestjs/common"

import { CardDBModule } from "../dbModules"
import { CardsController } from "./cards.controller"
import { CardsRepository } from "./cards.repository"
import { CardsService } from "./cards.service"

@Module({
  imports: [CardDBModule],
  controllers: [CardsController],
  providers: [CardsRepository, CardsService],
  exports: [CardsRepository, CardsService],
})
export class CardsModule {}
