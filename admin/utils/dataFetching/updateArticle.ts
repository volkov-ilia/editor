import client from "../../../common/utils/APIRequests/src/client"
import { responseHandler } from "../../../common/utils/APIRequests/src/responseHandler"
import router from "next/router"

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateArticle = async (id: string, payload: any) => {
  try {
    const res = await client.put(`/${id}`, {
      payload,
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return res.data.id
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    responseHandler(error.response.status, router)
  }
}
