import Content from "../../../common/types/Content"
import { Platforms } from "../../types/platforms/platformConfig"
import React from "react"
import { PageFieldsTypes } from "../../types/Slate/Components/PageFieldsTypes"
import { useRouter } from "next/router"
import { useInitLocalStorageAndUpdateState } from "../../utils/localStorage/useInitLocalStorageAndUpdateState"
import * as getCardsFromLocalStorage from "../../utils/localStorage/getCardsFromLocalStorage"

jest.mock("../../utils/getCardAndArticle", () => {
  return {
    getArticle: (idArticle: string): Promise<Content.Article> => {
      return new Promise((resolve, reject) => {
        resolve({
          formDataSlateStructure: {
            json: "[]",
            form: {
              slug: "string",
              path: "string",
              title: "qqq",
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
          },
        } as Content.Article)
      })
    },
  }
})

jest.mock("next/router", () => ({
  useRouter: jest.fn(() => {
    return {
      query: {
        idCard: "some_card",
      },
    }
  }),
}))

describe("useInitLocalStorageAndUpdateState tests", () => {
  let card: Content.Card | undefined
  let locale: Platforms
  let pageFields: PageFieldsTypes
  let updateValueAndPageFields: (value: Array<object>, pageFields: Content.PageFields) => void
  beforeEach(() => {
    locale = "ru"
    pageFields = {
      slug: "",
      path: "",
      title: "",
      description: "",
      keywords: "",
      previewImage: "",
      bgImage: "",
      authors: "",
      firstLineLastSymbol: "",
      secondLineLastSymbol: "",
      tags: "",
      readingTime: "",
      publicationDate: "",
      reviewCount: "",
      ratingValue: "",
      worstRating: "",
      theme: "",
      effect: "",
      primaryButtonText: "",
      primaryButtonAction: "",
      arrowButtonText: "",
      arrowButtonLink: {},
      labelPrimaryText: "",
      labelUsualText: "",
      labelPrimaryLink: {},
      labelUsualLink: {},
      primaryButtonTitle: "",
      primaryButtonLink: {},
    }
    const router = useRouter()
    const idCard = router.query.idCard as string
    card = {
      idCard: idCard,
      title: "string",
      tags: ["front-end", "it", "rich_text_editor", "slate"],
      imgSrc: "string",
      description: "string",
      note: "",
      history: [],
      documentFormatVersion: "1",
      resources: [
        {
          source: "ru",
          slug: "some_id",
          version: "000",
        },
      ],
    }
    updateValueAndPageFields = jest.fn((value: Array<object>, pageFields: Content.PageFields): void => {
      expect(pageFields.slug).toBe("string")
    })
    jest.spyOn(React, "useEffect").mockImplementation((callback) => {
      callback()
    })
  })
  it("useInitLocalStorageAndUpdateState should request article and save her in localStorage", () => {
    useInitLocalStorageAndUpdateState(card, locale, pageFields, updateValueAndPageFields)
    expect.assertions(1)
  })
  it("useInitLocalStorageAndUpdateState should update value and pageFields from localStorage", () => {
    jest.spyOn(getCardsFromLocalStorage, "getCardsFromLocalStorage").mockImplementation(() => {
      return {
        some_card: {
          ru: {
            formDataSlateStructure: {
              json: "[]",
              form: { ...pageFields, slug: "string" },
            },
          },
        },
      }
    })
    useInitLocalStorageAndUpdateState(card, locale, pageFields, updateValueAndPageFields)
  })
  it("useInitLocalStorageAndUpdateState should update value, pageFields, localStorage default value article", () => {
    jest.spyOn(getCardsFromLocalStorage, "getCardsFromLocalStorage").mockImplementation(() => {
      return {
        some_card: {},
      }
    })
    updateValueAndPageFields = jest.fn((value: Array<object>, pageFields: Content.PageFields): void => {
      expect(pageFields.slug).toBe("")
    })
    const router = useRouter()
    const idCard = router.query.idCard as string
    card = {
      idCard: idCard,
      title: "string",
      tags: ["front-end", "it", "rich_text_editor", "slate"],
      imgSrc: "string",
      description: "string",
      note: "",
      history: [],
      documentFormatVersion: "1",
      resources: [],
    }
    useInitLocalStorageAndUpdateState(card, locale, pageFields, updateValueAndPageFields)
  })
  it("useInitLocalStorageAndUpdateState should do nothing since the card is undefined", () => {
    card = undefined
    useInitLocalStorageAndUpdateState(card, locale, pageFields, updateValueAndPageFields)
  })
})
