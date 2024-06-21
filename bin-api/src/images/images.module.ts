import { Module } from "@nestjs/common"

import { ImagesController } from "./images.controller"
import { ImagesRepository } from "./images.repository"
import { ImagesService } from "./images.service"

@Module({
  imports: [],
  controllers: [ImagesController],
  providers: [ImagesRepository, ImagesService],
  exports: [ImagesRepository, ImagesService],
})
export class ImagesModule {}
