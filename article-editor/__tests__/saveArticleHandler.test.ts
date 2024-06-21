import Content from "../../common/types/Content"
import { saveArticleHandler } from "../utils/saveArticleHandler"
import * as saveArticle from "../utils/saveArticleReq"
import * as updateCardInEditor from "../utils/updateCardInEditor"

const cardReq: Content.Card = {
  documentFormatVersion: "",
  title: "",
  tags: [],
  history: [],
  resources: [],
}
const idCardReq = "1"
const localeReq = "ru"
const cardsReq = {
  [idCardReq]: {
    [localeReq]: {},
  },
}
const statusVersion200 = {
  status: 200,
}
const statusVersion304 = {
  status: 304,
}
const articleReq = {
  formDataSlateStructure: {},
  version: "001",
}
const dispatch = jest.fn()
const setCard = jest.fn((card) => {
  expect(card).toEqual(cardReq)
})
jest.spyOn(updateCardInEditor, "updateCardInEditor").mockImplementation((idCard) => {
  expect(idCard).toEqual(idCardReq)
  return Promise.resolve()
})
jest.spyOn(window.localStorage.__proto__, "setItem").mockImplementation((location, cards) => {
  expect(location).toBe("cards")
  expect(cards).toEqual(JSON.stringify(cardsReq))
})

beforeEach(() => {
  jest.clearAllMocks()
})

describe("saveArticleHandler should return correct value", () => {
  it("saveArticleHandler should throw exception if article not saved", async () => {
    jest.spyOn(saveArticle, "saveArticle").mockImplementation((article, locale, idCard) => {
      expect(article).toEqual(articleReq)
      expect(locale).toEqual(localeReq)
      expect(idCard).toEqual(idCardReq)
      return Promise.reject("Article not saved")
    })
    try {
      await saveArticleHandler(idCardReq, cardsReq, localeReq, statusVersion304, articleReq, dispatch, setCard)
    } catch (error) {
      expect(error).toEqual("Article not saved")
    }
  })
  it("saveArticleHandler should call saveArticle, localStorage.setItem and updateCardInEditor if statusVersion.status === 304", async () => {
    jest.spyOn(saveArticle, "saveArticle").mockImplementation((article, locale, idCard) => {
      expect(article).toEqual(articleReq)
      expect(locale).toEqual(localeReq)
      expect(idCard).toEqual(idCardReq)
      return Promise.resolve()
    })
    await saveArticleHandler(idCardReq, cardsReq, localeReq, statusVersion304, articleReq, dispatch, setCard)
    expect(saveArticle.saveArticle).toHaveBeenCalledTimes(1)
    expect(window.localStorage.__proto__.setItem).toHaveBeenCalledTimes(1)
    expect(updateCardInEditor.updateCardInEditor).toHaveBeenCalledTimes(1)
  })
})
