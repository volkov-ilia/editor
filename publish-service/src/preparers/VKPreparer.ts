import axios from "axios"
import Vk from "../types/Vk"
import * as fs from "fs"

class VKPreparer {
  public static getWallUploadServer = async () => {
    const res = await axios.get("https://api.vk.com/method/photos.getWallUploadServer", {
      params: {
        group_id: process.env.VK_GROUP_ID,
        access_token: process.env.VK_TOKEN,
        v: process.env.VK_VERSION,
      },
    })
    if (res.data.error) {
      throw new Error(res.data.error.error_msg)
    }
    return res.data.response.upload_url
  }

  public static saveWallPhotos = async (
    sendImgToVKServerRes: Vk.SendImgToVKServerRes[]
  ): Promise<Vk.SaveWallPhotoRes[]> => {
    return await Promise.all(
      sendImgToVKServerRes.map(async (item) => {
        try {
          const res = await axios.post(
            "https://api.vk.com/method/photos.saveWallPhoto",
            {},
            {
              params: {
                group_id: process.env.VK_GROUP_ID,
                photo: item.photo,
                hash: item.hash,
                server: item.server,
                access_token: process.env.VK_TOKEN,
                v: process.env.VK_VERSION,
              },
            }
          )
          if (res.data.error) {
            throw new Error(res.data.error.error_msg)
          }
          return {
            id: res.data.response[0].id,
            owner_id: res.data.response[0].owner_id,
          }
        } catch {
          throw new Error("Failed photos.saveWallPhoto")
        }
      })
    )
  }

  public static sendImgsToVKServer = async (
    uploadServer: string,
    imgs: string[]
  ): Promise<Vk.SendImgToVKServerRes[]> => {
    return await Promise.all(
      imgs.map(async (img) => {
        try {
          const res = await axios.post(
            uploadServer,
            {
              photo: fs.createReadStream(`../img/${img.split("/")[5]}`),
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          if (res.data.photo === "[]") {
            throw new Error("Failed to send image to vk server")
          }
          return res.data
        } catch {
          throw new Error("Failed to save image")
        }
      })
    )
  }

  public static wallPost = async (
    convertedArticleText: string[],
    saveWallPhotoRes: Vk.SaveWallPhotoRes[],
    publishTime: number
  ) => {
    const attachments = saveWallPhotoRes.map((item) => {
      return `photo${item.owner_id}_${item.id}`
    })
    const publish_date = publishTime <= new Date().getTime() ? new Date().getTime() : publishTime
    const res = await axios.post(
      "https://api.vk.com/method/wall.post",
      {},
      {
        params: {
          owner_id: `-${process.env.VK_GROUP_ID}`,
          from_group: 1,
          message: convertedArticleText.join("\n"),
          attachments: attachments.join(","),
          publish_date: Math.floor((publish_date + 100000) / 1000),
          access_token: process.env.VK_TOKEN,
          v: process.env.VK_VERSION,
        },
      }
    )
    if (res.data.error) {
      throw new Error(res.data.error.error_msg)
    }
  }
}

export default VKPreparer
