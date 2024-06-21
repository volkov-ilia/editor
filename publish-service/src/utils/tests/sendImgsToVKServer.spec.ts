/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios"
import * as fs from "fs"
import { sendImgsToVKServer } from "../vk/sendImgsToVKServer"

describe("sendImgsToVKServer should return correct value", () => {
  const upload_url = "upload_url"
  const imgs = ["https://tools.hwdtech.ru/bin-api/img/upload_url", "https://tools.hwdtech.ru/bin-api/img/upload_url"]
  const createReadStreamRes = "createReadStreamRes"
  const axiosRes = "res"
  const sendImgsToVKServerRes = [{ response: "res" }, { response: "res" }]
  let isError = false
  // @ts-ignore
  jest.spyOn(fs, "createReadStream").mockImplementation((url) => {
    expect(url).toEqual("../img/upload_url")
    return createReadStreamRes
  })
  // @ts-ignore
  jest.spyOn(axios, "post").mockImplementation((url) => {
    expect(url).toEqual(upload_url)
    if (isError) {
      return {
        data: {
          error: {
            error_msg: "error message",
          },
        },
      }
    }
    return {
      data: {
        response: axiosRes,
      },
    }
  })

  it("saveWallPhotos should return saveWallPhotosRes", async () => {
    // @ts-ignore
    expect(await sendImgsToVKServer(upload_url, imgs)).toEqual(sendImgsToVKServerRes)
  })

  it("saveWallPhotos should throw exception if response contains error", async () => {
    isError = true
    try {
      await sendImgsToVKServer(upload_url, imgs)
    } catch (e) {
      expect(e.message).toEqual("Failed to save image")
    }
  })
})
