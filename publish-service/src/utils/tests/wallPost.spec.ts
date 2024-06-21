/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios"
import { wallPost } from "../vk/wallPost"

describe("wallPost should return correct value", () => {
  const convertedArticleText = ["text1", "text2"]
  let isError = false
  const saveWallPhotoRes = [
    { id: "id1", owner_id: "owner_id1" },
    { id: "id2", owner_id: "owner_id2" },
  ]
  const attachments = `photo${saveWallPhotoRes[0].owner_id}_${saveWallPhotoRes[0].id},photo${saveWallPhotoRes[1].owner_id}_${saveWallPhotoRes[1].id}`
  const configReq = {
    params: {
      owner_id: `-${process.env.VK_GROUP_ID}`,
      from_group: 1,
      message: convertedArticleText.join("\n"),
      attachments,
      access_token: process.env.VK_TOKEN,
      v: process.env.VK_VERSION,
    },
  }
  // @ts-ignore
  jest.spyOn(axios, "post").mockImplementation((url, data, config) => {
    expect(url).toEqual("https://api.vk.com/method/wall.post")
    expect(data).toEqual({})
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
      data: "response",
    }
  })

  it("wallPost should call axios.post with correct args", async () => {
    await wallPost(convertedArticleText, saveWallPhotoRes)
    expect(axios.post).toHaveBeenCalledTimes(1)
  })

  it("wallPost should throw exception if response contains error", async () => {
    isError = true
    try {
      await wallPost(convertedArticleText, saveWallPhotoRes)
    } catch (e) {
      expect(e.message).toEqual("error message")
    }
  })
})
