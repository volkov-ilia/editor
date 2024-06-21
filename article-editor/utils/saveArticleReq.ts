import client from "../../common/utils/APIRequests/src/client"
import { responseHandler } from "../../common/utils/APIRequests/src/responseHandler"

const interval = 15000

export const saveArticle = async (article: any, source: string, idCard: string, timeout = 0) => {
  try {
    await client.post(`${process.env.API_ARTICLES}/save`, {
      article: article,
      source: source,
      idCard: idCard,
    })
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    responseHandler(error.response.status, router)
    if (timeout < 3) {
      setTimeout(() => {
        timeout++
        saveArticle(article, source, idCard, timeout)
      }, interval)
    }
  }
}
