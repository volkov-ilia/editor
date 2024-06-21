import { getSiteName } from "../getAbsoluteUri"
import Content from "../../../common/types/Content"
import join from "lodash/join"
import ICardsDataFetcher from "./ICardsDataFetcher"
import { responseHandler } from "../../../common/utils/APIRequests/src/responseHandler"
import router from "next/router"
import httpClient from "../../../common/utils/APIRequests/src/client"
import { client } from "@hwdtech/api-requests"

class CardsFetcher implements ICardsDataFetcher {
  protected page: number
  protected readonly count: number
  readonly siteName: string = getSiteName()

  constructor(page = 1, count = 10) {
    this.page = page
    this.count = count
    this.getPublishServiceStatus = this.getPublishServiceStatus.bind(this)
  }

  nextPage(cards: Content.Card[]) {
    if (cards.length === this.count) {
      this.page += 1
    }
  }

  inlineTags(tags?: string[]) {
    return join(tags, "+")
  }

  async updateAll(apiURL: string, tags?: string[]) {
    try {
      const res = await httpClient.get(apiURL, {
        params: { tags: this.inlineTags(tags), page: 1, count: this.count * this.page },
      })
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const cards: Content.Card[] = res.data.cards
      const publishServiceHistory = await this.getPublishServiceStatus(cards)
      cards.map((card, index) => {
        return (card.history = card.history.concat(Object.values(publishServiceHistory[index])))
      })

      return cards
    } catch (error) {
      /* istanbul ignore next */
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      responseHandler(error.response.status, router)
    }
  }

  getPublishServiceStatus = async (cards: Content.Card[]) => {
    const idArticles: any[] = []
    idArticles.length = cards.length
    cards.forEach((el, index) => {
      const idArticlesInCurrentCard: string[] = []
      el.history.map((his) => {
        idArticlesInCurrentCard.push(his.slug)
      })
      idArticles[index] = idArticlesInCurrentCard
    })

    const result = await client.sendReq("publish-service", "publish/getPublishHistory", {
      reqType: "post",
      body: { idArticles },
    })
    return result.data
  }

  async fetch(apiURL: string, tags?: string[]) {
    try {
      const res = await httpClient.get(apiURL, {
        params: { tags: this.inlineTags(tags), page: this.page, count: this.count },
      })
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const cards: Content.Card[] = res.data.cards
      const publishServiceHistory = await this.getPublishServiceStatus(cards)
      cards.map((card, index) => {
        return (card.history = card.history.concat(Object.values(publishServiceHistory[index])))
      })
      this.nextPage(cards)
      return cards
    } catch (error) {
      /* istanbul ignore next */
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      responseHandler(error.response.status, router)
    }
  }

  getCount() {
    return this.count
  }
}

export default CardsFetcher
