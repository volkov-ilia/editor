import CardsFetcher from "../utils/dataFetching/CardsFetcher"
import Content from "../../common/types/Content"
import httpClient from "../../common/utils/APIRequests/src/client"
import { client } from "@hwdtech/api-requests"

describe("CardsFetcher methods should return correct value", () => {
  const historyItem: Content.HistoryItem = {
    status: "created",
    date: new Date(),
    source: "string",
    version: "003",
    name: "Nekto",
    slug: "ru",
  }
  const sourceItem: Content.SourceItem = {
    source: "source",
    slug: "slug",
    version: "002",
  }
  const cards: Content.Card[] = [
    {
      title: "Title",
      documentFormatVersion: "1",
      tags: ["tag1"],
      history: [historyItem],
      resources: [sourceItem],
    },
  ]
  const res = {
    data: {
      cards: cards,
    },
  }
  const resultPublish = {
    data: [
      {
        idArticle_1_1: {
          status: "publish",
          source: "string",
          version: "003",
          date: new Date(),
          name: "Nekto",
          slug: "ru",
        },
        idArticle_1_2: {
          status: "publish",
          source: "string",
          version: "003",
          date: new Date(),
          name: "Nekto",
          slug: "ru",
        },
      },
      {
        idArticle_2_1: {
          status: "publish",
          source: "string",
          version: "003",
          date: new Date(),
          name: "Nekto",
          slug: "ru",
        },
        idArticle_2_2: {
          status: "publish",
          source: "string",
          version: "003",
          date: new Date(),
          name: "Nekto",
          slug: "ru",
        },
      },
      {
        idArticle_3_1: {
          status: "publish",
          source: "string",
          version: "003",
          date: new Date(),
          name: "Nekto",
          slug: "ru",
        },
        idArticle_3_2: {
          status: "publish",
          source: "string",
          version: "003",
          date: new Date(),
          name: "Nekto",
          slug: "ru",
        },
      },
    ],
  }
  class FakeCardsFetcher extends CardsFetcher {
    public getPage() {
      return this.page
    }
  }
  const fakeCardsFetcher = new FakeCardsFetcher()
  test("CardsFetcher.inlineTags should return a string of tags separated by +", () => {
    const cardsFetcher = new CardsFetcher()
    expect(cardsFetcher.inlineTags(["tag1", "tag2"])).toBe("tag1+tag2")
  })

  test("CardsFetcher.nextPage should increase page if cards.length === count", () => {
    const fakeCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(fakeCardsFetcher.getPage()).toBe(1)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    fakeCardsFetcher.nextPage(fakeCards)
    expect(fakeCardsFetcher.getPage()).toBe(2)
    fakeCardsFetcher.nextPage([])
    expect(fakeCardsFetcher.getPage()).toBe(2)
  })

  test("CardsFetcher.fetch should return an array of cards", async () => {
    const cardsFetcher = new CardsFetcher()
    jest.spyOn(httpClient, "get").mockImplementation(() => {
      return new Promise((resolve) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        resolve(res)
      })
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    jest.spyOn(cardsFetcher, "getPublishServiceStatus").mockImplementation(() => {
      return resultPublish.data
    })
    expect(await cardsFetcher.fetch("", [])).toBe(cards)
    expect(fakeCardsFetcher.getPage()).toBe(2)
  })

  test("CardsFetcher.getCount should return count", async () => {
    const cardsFetcher = new CardsFetcher()
    expect(cardsFetcher.getCount()).toBe(10)
  })

  test("CardsFetcher.getPublishServiceStatus should return array of hisItem", () => {
    const cardsFetcher = new CardsFetcher()
    jest.spyOn(client, "sendReq").mockImplementation(() => {
      return new Promise((resolve) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        resolve(resultPublish)
      })
    })
    cardsFetcher.getPublishServiceStatus(cards).then((data) => {
      expect(data).toEqual(resultPublish.data)
    })
  })
})
