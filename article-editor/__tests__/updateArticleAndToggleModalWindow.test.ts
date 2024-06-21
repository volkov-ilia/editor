import { updateArticleAndToggleModalWindow } from "../utils/updateArticleAndToggleModalWindow"
import * as getCardAndArticle from "../utils/getCardAndArticle"
import Content from "../../common/types/Content"
import * as getResourceItemFromCardBySource from "../utils/getResourceItemFromCardBySource"
import * as saveArticleInLocalStorage from "../utils/localStorage/saveArticleInLocalStorage"

const cardReq: Content.Card = {
  documentFormatVersion: "",
  title: "",
  tags: [],
  history: [],
  resources: [],
}
const sourceItemReq: Content.SourceItem = {
  source: "",
  slug: "1",
  version: "",
}
const articleReq: Content.Article = {
  formDataSlateStructure: {
    contentfulFieldsType: "",
    json: "[]",
    form: {
      slug: "",
      path: "",
      title: "",
      previewImage: "",
      bgImage: "",
      authors: "",
      tags: "",
      readingTime: "",
      publicationDate: "",
      arrowButtonLink: {
        href: "",
        linkTitle: "",
      },
      labelPrimaryText: "",
      labelUsualText: "",
    },
    path: "",
    slug: "",
  },
}
const articleLocalStorage = {
  formDataSlateStructure: articleReq.formDataSlateStructure,
  version: sourceItemReq.version,
}
const idCardReq = "1"
const localeReq = "ru"
const dispatch = jest.fn()
const setCard = jest.fn((card) => {
  expect(card).toEqual(cardReq)
})
const updateValueAndPageFields = jest.fn((value, pageFields) => {
  expect(value).toEqual(JSON.parse(articleReq.formDataSlateStructure.json))
  expect(pageFields).toEqual(articleReq.formDataSlateStructure.form)
})
jest.spyOn(getResourceItemFromCardBySource, "getResourceItemFromCardBySource").mockImplementation((card, locale) => {
  expect(card).toEqual(cardReq)
  expect(locale).toEqual(localeReq)
  return sourceItemReq
})
jest.spyOn(saveArticleInLocalStorage, "saveArticleInLocalStorage").mockImplementation((idCard, locale, article) => {
  expect(idCard).toEqual(idCardReq)
  expect(locale).toEqual(localeReq)
  expect(article).toEqual(articleLocalStorage)
})
jest.spyOn(getCardAndArticle, "getCard").mockImplementation((idCard) => {
  expect(idCard).toEqual(idCardReq)
  return Promise.resolve(cardReq)
})
jest.spyOn(getCardAndArticle, "getArticle").mockImplementation((idArticle) => {
  expect(idArticle).toEqual(sourceItemReq.slug)
  return Promise.resolve(articleReq)
})

afterEach(() => {
  jest.clearAllMocks()
})

describe("updateArticleAndToggleModalWindow should return correct value", () => {
  it("updateArticleAndToggleModalWindow should call getCard, getResourceItemFromCardBySource, getArticle, updateValueAndPageFields, saveArticleInLocalStorage, setCard and setToggleModalWindow", async () => {
    await updateArticleAndToggleModalWindow(idCardReq, setCard, localeReq, updateValueAndPageFields, dispatch)
    expect(getCardAndArticle.getCard).toHaveBeenCalledTimes(1)
    expect(getResourceItemFromCardBySource.getResourceItemFromCardBySource).toHaveBeenCalledTimes(1)
    expect(getCardAndArticle.getArticle).toHaveBeenCalledTimes(1)
    expect(updateValueAndPageFields).toHaveBeenCalledTimes(1)
    expect(saveArticleInLocalStorage.saveArticleInLocalStorage).toHaveBeenCalledTimes(1)
    expect(setCard).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledTimes(1)
  })
})
