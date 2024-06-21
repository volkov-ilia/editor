import Content from "../../common/types/Content"
import client from "../../common/utils/APIRequests/src/client"
import { responseHandler } from "../../common/utils/APIRequests/src/responseHandler"
import router from "next/router"

export async function getCard(idCard: string | string[] | undefined): Promise<Content.Card | undefined> {
  try {
    const card: Request = await client.get(`cards`, {
      params: {
        idCard,
      },
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return card.data
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    responseHandler(error.response.status, router)
  }
}

export async function getArticle(idArticle: string): Promise<Content.Article | undefined> {
  try {
    const article: Request = await client.get(`articles`, {
      params: {
        idArticle: idArticle,
      },
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return article.data
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    responseHandler(error.response.status, router)
  }
}
