import { Platforms } from "../../types/platforms/platformConfig"
import Content from "../../../common/types/Content"
import { saveArticleInLocalStorage } from "../../utils/localStorage/saveArticleInLocalStorage"
import * as getCardsDeps from "../../utils/localStorage/getCardsFromLocalStorage"

jest.mock("../../utils/localStorage/getCardsFromLocalStorage")

describe("save tests", () => {
  let idCard: string
  let source: Platforms
  let article: Content.LocalStorageArticleType
  let cards: { [x: string]: { [x: string]: Content.LocalStorageArticleType } }
  beforeEach(() => {
    idCard = "banana"
    source = "ru"
    article = {
      formDataSlateStructure: {
        contentfulFieldsType: "string",
        json: "string",
        form: {
          slug: "string",
          path: "string",
          title: "string",
          previewImage: "string",
          bgImage: "string",
          authors: "string",
          tags: "string",
          readingTime: "string",
          publicationDate: "string",
          arrowButtonLink: {
            href: "string",
            linkTitle: "string",
          },
          labelPrimaryText: "string",
          labelUsualText: "string",
        },
        path: "string",
        slug: "string",
      },
      version: 2,
    }
    cards = {}
    jest.spyOn(getCardsDeps, "getCardsFromLocalStorage").mockImplementation(() => cards)
    jest.spyOn(window.localStorage.__proto__, "setItem").mockImplementation((location, cardsFromLocalStorage) => {
      expect(location).toBe("cards")
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      cards[idCard] = {
        [source]: article,
      }
      expect(cardsFromLocalStorage).toEqual(JSON.stringify(cards))
    })
  })
  it("LocalStorage should save article if card doesn't exist", async () => {
    jest.spyOn(window.localStorage.__proto__, "getItem").mockImplementation((location) => {
      expect(location).toBe("cards")
      return JSON.stringify(cards)
    })
    jest.spyOn(getCardsDeps, "getCardsFromLocalStorage").mockImplementation(() => cards)
    saveArticleInLocalStorage(idCard, source, article)
  })
  it("LocalStorage should save article should overwrite existing article", async () => {
    const copyOfArticle: Content.LocalStorageArticleType = JSON.parse(JSON.stringify(article))
    copyOfArticle.version = 1
    cards[idCard] = {
      ru: copyOfArticle,
    }
    saveArticleInLocalStorage(idCard, source, article)
  })
})
