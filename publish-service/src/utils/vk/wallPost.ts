import axios from "axios"
import Vk from "../../types/Vk"

export const wallPost = async (
  convertedArticleText: string[],
  saveWallPhotoRes: Vk.SaveWallPhotoRes[],
  publishTime: number
) => {
  const attachments = saveWallPhotoRes.map((item) => {
    return `photo${item.owner_id}_${item.id}`
  })
  const res = await axios.post(
    "https://api.vk.com/method/wall.post",
    {},
    {
      params: {
        owner_id: `-${process.env.VK_GROUP_ID}`,
        from_group: 1,
        message: convertedArticleText.join("\n"),
        attachments: attachments.join(","),
        publish_date: Math.floor(publishTime / 1000),
        access_token: process.env.VK_TOKEN,
        v: process.env.VK_VERSION,
      },
    }
  )
  if (res.data.error) {
    throw new Error(res.data.error.error_msg)
  }
}
