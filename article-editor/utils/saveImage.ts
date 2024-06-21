import router from "next/router"
import client from "../../common/utils/APIRequests/src/client"
import { responseHandler } from "../../common/utils/APIRequests/src/responseHandler"

export const saveImage = async (file: Blob) => {
  const data = new FormData()
  data.append("image", file)
  try {
    const resSaveImage = await client.binSaveImage(`new`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return resSaveImage
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    responseHandler(error.response.status, router)
  }
}
