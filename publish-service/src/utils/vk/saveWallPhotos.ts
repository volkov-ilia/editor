import axios from "axios"
import Vk from "../../types/Vk"

export const saveWallPhotos = async (
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
