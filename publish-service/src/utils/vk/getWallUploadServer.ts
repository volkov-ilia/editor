import axios from "axios"

export const getWallUploadServer = async () => {
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
