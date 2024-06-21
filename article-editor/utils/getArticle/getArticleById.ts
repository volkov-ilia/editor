import client from "../../../common/utils/APIRequests/src/client"
import { LocalStringType } from "../../types/Slate/Components/PageFieldsTypes"
import { responseHandler } from "../../../common/utils/APIRequests/src/responseHandler"
import router from "next/router"

export const getArticleById = (idArticle: LocalStringType | undefined, cookies: string) => {
  const res = async () => {
    try {
      await client.get(`articles/get`, {
        headers: { Cookie: `${cookies}` },
        params: { idArticle },
      })
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      responseHandler(error.response.status, router)
    }
  }
  return res
}
