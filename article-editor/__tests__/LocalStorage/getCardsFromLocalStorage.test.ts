import { getCardsFromLocalStorage } from "../../utils/localStorage/getCardsFromLocalStorage"

describe("getCardsFromLocal", () => {
  it("should return empty object if cards doesn't exist in local storage", () => {
    jest.spyOn(window.localStorage.__proto__, "getItem").mockImplementation((location) => {
      expect(location).toBe("cards")
      return undefined
    })
    expect(getCardsFromLocalStorage()).toEqual({})
  })
  it("should return correct object from local storage", () => {
    const cards = {
      property: "something",
    }
    jest.spyOn(window.localStorage.__proto__, "getItem").mockImplementation((location) => {
      expect(location).toBe("cards")
      return JSON.stringify(cards)
    })
    expect(getCardsFromLocalStorage()).toEqual(cards)
  })
})
