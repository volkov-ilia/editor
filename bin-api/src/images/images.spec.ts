/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Test } from "@nestjs/testing"
import * as of from "rxjs"
import { ImagesController } from "./images.controller"
import { ImagesRepository } from "./images.repository"
import { ImagesService } from "./images.service"

let imagesController: ImagesController
let imagesService: ImagesService

let bufferReq = "bits"
const fileReq = {
  buffer: bufferReq,
}
const fileName = "name"
const imageUrl = `${process.env.BASE_URL}/bin-api/images/${fileName}.png`

jest.mock("uuid", () => ({
  v4: jest.fn(() => "name"),
}))
jest.mock("fs", () => ({
  writeFile: jest.fn(() => {
    if (!bufferReq) {
      throw new Error(`Picture not saved`)
    }
  }),
}))
beforeEach(async () => {
  const moduleRef = await Test.createTestingModule({
    controllers: [ImagesController],
    providers: [ImagesRepository, ImagesService],
  }).compile()
  imagesController = moduleRef.get<ImagesController>(ImagesController)
  imagesService = moduleRef.get<ImagesService>(ImagesService)
})

describe("ImagesController methods should return correct value", () => {
  it("imagesController.saveImage should return an imageUrl", async () => {
    // @ts-ignore
    jest.spyOn(imagesService, "saveImage").mockImplementation(async (buffer) => {
      expect(buffer).toEqual(bufferReq)
      return imageUrl
    })
    expect(await imagesController.saveImage(fileReq)).toBe(imageUrl)
  })

  it("imagesController.getImage should call 'of' method", async () => {
    const resReq = {
      sendFile() {
        return 1
      },
    }
    const imgReq = "img"
    const resGetImage = "res"
    // @ts-ignore
    jest.spyOn(of, "of").mockImplementation(async (res) => {
      expect(res).toEqual(resReq.sendFile())
      return resGetImage
    })
    expect(await imagesController.getImage(imgReq, resReq)).toEqual(resGetImage)
    expect.assertions(2)
  })
})

describe("ImagesService methods should return correct value", () => {
  it("ImagesService.saveImage should return an imageUrl", async () => {
    expect(await imagesService.saveImage(bufferReq)).toEqual(imageUrl)
  })

  it("ImagesService.saveImage should throw an exception if the image is not saved", async () => {
    bufferReq = undefined
    try {
      await imagesService.saveImage(fileReq)
    } catch (error) {
      expect(error).toEqual(new Error("Picture not saved"))
    }
  })
})
