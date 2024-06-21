import * as getCardAndArticle from "../utils/getCardAndArticle"
import Content from "../../common/types/Content"
import * as getResourceItemFromCardBySource from "../utils/getResourceItemFromCardBySource"
import { useGetArticle } from "../utils/getArticle/useGetArticle"
import React from "react"
import * as getCardsFromLocalStorage from "../utils/localStorage/getCardsFromLocalStorage"
import * as compareArticleVersions from "../utils/getArticle/compareArticleVersions"

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
const cardsFromLocalStorage = {
  [idCardReq]: {
    [localeReq]: articleLocalStorage,
  },
}
const cardsFromLocalStorageWithoutLocale = {
  [idCardReq]: {},
}
const setToggleModalWindow = jest.fn((boolean) => {
  expect(boolean).toEqual(true)
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
jest.spyOn(getCardAndArticle, "getArticle").mockImplementation((idArticle) => {
  expect(idArticle).toEqual(sourceItemReq.slug)
  return Promise.resolve(articleReq)
})
const routerReq = {
  query: {
    idCard: "1",
  },
}

beforeEach(() => {
  jest.spyOn(React, "useEffect").mockImplementation((callback) => {
    callback()
  })
})

afterEach(() => {
  jest.clearAllMocks()
})

describe("useGetArticle should return correct value", () => {
  it("useGetArticle should call getCardsFromLocalStorage, compareArticleVersions and setToggleModalWindow if card have not locale", async () => {
    jest.spyOn(getCardsFromLocalStorage, "getCardsFromLocalStorage").mockImplementation(() => {
      return cardsFromLocalStorage
    })
    jest
      .spyOn(compareArticleVersions, "compareArticleVersions")
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .mockImplementation((idCard, articleVersionFromLS, locale) => {
        expect(idCard).toEqual(idCardReq)
        expect(articleVersionFromLS).toEqual(sourceItemReq.version)
        expect(locale).toEqual(localeReq)
        return Promise.resolve({ status: 200 })
      })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await useGetArticle(cardReq, localeReq, routerReq, updateValueAndPageFields, setToggleModalWindow)
    expect(getCardsFromLocalStorage.getCardsFromLocalStorage).toHaveBeenCalledTimes(1)
    expect(compareArticleVersions.compareArticleVersions).toHaveBeenCalledTimes(1)
    expect(setToggleModalWindow).toHaveBeenCalledTimes(1)
  })
  it("useGetArticle should call getCardsFromLocalStorage, compareArticleVersions, getResourceItemFromCardBySource and getArticle if card have locale", async () => {
    jest.spyOn(getCardsFromLocalStorage, "getCardsFromLocalStorage").mockImplementation(() => {
      return cardsFromLocalStorageWithoutLocale
    })
    jest
      .spyOn(compareArticleVersions, "compareArticleVersions")
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .mockImplementation((idCard, articleVersionFromLS, locale) => {
        expect(idCard).toEqual(idCardReq)
        expect(articleVersionFromLS).toEqual("000")
        expect(locale).toEqual(localeReq)
        return Promise.resolve({ status: 200 })
      })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await useGetArticle(cardReq, localeReq, routerReq, updateValueAndPageFields, setToggleModalWindow)
    expect(getCardsFromLocalStorage.getCardsFromLocalStorage).toHaveBeenCalledTimes(1)
    expect(compareArticleVersions.compareArticleVersions).toHaveBeenCalledTimes(1)
    expect(getResourceItemFromCardBySource.getResourceItemFromCardBySource).toHaveBeenCalledTimes(1)
    expect(getCardAndArticle.getArticle).toHaveBeenCalledTimes(1)
  })
})
