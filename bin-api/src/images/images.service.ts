import { Injectable } from "@nestjs/common"
import { ImagesRepository } from "./images.repository"
import { v4 } from "uuid"
import * as fs from "fs"

@Injectable()
export class ImagesService {
  constructor(private readonly imageRepository: ImagesRepository) {}

  async saveImage(buffer) {
    const fileName = v4()
    fs.writeFile(`./img/${fileName}.png`, buffer, (error) => {
      if (error) throw new Error(`Picture not saved`)
    })
    return `${process.env.BASE_URL}/bin-api/images/${fileName}.png`
  }
}
