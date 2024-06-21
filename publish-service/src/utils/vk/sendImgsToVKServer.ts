import axios from "axios"
import * as fs from "fs"
import Vk from "../../types/Vk"

export const sendImgsToVKServer = async (uploadServer: string, imgs: string[]): Promise<Vk.SendImgToVKServerRes[]> => {
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
