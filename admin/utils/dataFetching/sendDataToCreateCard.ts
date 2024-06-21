import client from "../../../common/utils/APIRequests/src/client"
import { responseHandler } from "../../../common/utils/APIRequests/src/responseHandler"
import router from "next/router"

export const sendDataToCreateCard = async (apiURL: string, title: string, description: string, platform: string) => {
  if (title) {
    try {
      const response = await client.post(apiURL, {
        params: { title, description, tags: platform },
      })
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return response.data
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      responseHandler(error.response.status, router)
    }
  }
}
