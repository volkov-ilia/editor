/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios"
import { getWallUploadServer } from "../vk/getWallUploadServer"

describe("getWallUploadServer should return correct value", () => {
  const configReq = {
    params: {
      group_id: process.env.VK_GROUP_ID,
      access_token: process.env.VK_TOKEN,
      v: process.env.VK_VERSION,
    },
  }
  let isError = false
  // @ts-ignore
  jest.spyOn(axios, "get").mockImplementation((url, config) => {
    expect(url).toEqual("https://api.vk.com/method/photos.getWallUploadServer")
    expect(config).toEqual(configReq)
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
        response: {
          upload_url: "upload url",
        },
      },
    }
  })

  it("getWallUploadServer should return upload url", async () => {
    expect(await getWallUploadServer()).toEqual("upload url")
  })

  it("getWallUploadServer should throw exception if response contains error", async () => {
    isError = true
    try {
      await getWallUploadServer()
    } catch (e) {
      expect(e.message).toEqual("error message")
    }
  })
})
