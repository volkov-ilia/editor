/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react"
import { useGetCard } from "../../utils/getCard/useGetCard"
import * as getCard from "../../utils/getCardAndArticle"

describe("test useGetCard", () => {
  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementation((callback) => {
      callback()
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("setCard should set card values", () => {
    const TEST_CARD_ID = "629dcd2de7d591bb5950738c"
    const router = {
      query: {
        idCard: TEST_CARD_ID,
      },
    }
    // @ts-ignore
    jest.spyOn(getCard, "getCard").mockImplementation(() => {
      return Promise.resolve({ name: "Jora" })
    })
    const setCard = jest.fn((card) => {
      expect(card.name).toEqual("Jora")
    })
    //@ts-ignore
    useGetCard(router, setCard)
  })
})
