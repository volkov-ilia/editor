/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios"
import { saveWallPhotos } from "../vk/saveWallPhotos"

describe("saveWallPhotos should return correct value", () => {
  const SendImgToVKServerRes = [
    {
      photo: "photo",
      hash: "hash",
      server: 1,
    },
    {
      photo: "photo",
      hash: "hash",
      server: 2,
    },
  ]
  const axiosRes = [
    {
      id: 1,
      owner_id: 1,
    },
  ]
  const saveWallPhotosRes = [
    { id: 1, owner_id: 1 },
    { id: 1, owner_id: 1 },
  ]
  let isError = false
  // @ts-ignore
  jest.spyOn(axios, "post").mockImplementation((url, body) => {
    expect(url).toEqual("https://api.vk.com/method/photos.saveWallPhoto")
    expect(body).toEqual({})
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
    expect(await saveWallPhotos(SendImgToVKServerRes)).toEqual(saveWallPhotosRes)
  })

  it("saveWallPhotos should throw exception if response contains error", async () => {
    isError = true
    try {
      await saveWallPhotos(SendImgToVKServerRes)
    } catch (e) {
      expect(e.message).toEqual("Failed photos.saveWallPhoto")
    }
  })
})
