import client from "../../../common/utils/APIRequests/src/client"
import { responseHandler } from "../../../common/utils/APIRequests/src/responseHandler"
import router from "next/router"

export async function compareArticleVersions(idCard: string, version: string, locale: string) {
  try {
    const res = await client.head("articles", {
      headers: {
        "if-none-match": version,
      },
      params: {
        idCard: idCard,
        source: locale,
      },
      validateStatus: function (status: number) {
        return status === 200 || status === 304
      },
    })
    return res
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    responseHandler(error.response.status, router)
  }
}
