import React from "react"
import { useSaveArticleWithInterval } from "../../utils/localStorage/useSaveArticleWithInterval"
import * as saveArticleInLocalStorage from "../../utils/localStorage/saveArticleInLocalStorage"
import * as getCardsFromLocalStorage from "../../utils/localStorage/getCardsFromLocalStorage"
import * as compareArticles from "../../utils/localStorage/compareArticles"
import * as useRouter from "next/router"

jest.useFakeTimers()
describe("useSaveArticleWithInterval tests", () => {
  let idCard: string
  let mockedSetArticleBuffer: jest.Mock
  const TwoMinutes = 1000 * 60 * 2
  const ru = { name: "ru" }
  const en = { name: "en" }
  const articleBuffer = { ru, en }
  beforeEach(() => {
    idCard = "idCard"
    jest.spyOn(React, "useEffect").mockImplementation((callback) => {
      callback()
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    jest.spyOn(useRouter, "useRouter").mockImplementation(() => {
      return {
        query: {
          idCard,
        },
      }
    })
    mockedSetArticleBuffer = jest.fn((callback) => {
      callback()
    })
  })
  afterEach(() => {
    jest.clearAllMocks()
    jest.clearAllTimers()
  })
  it("should clear the buffer after all", () => {
    jest.spyOn(getCardsFromLocalStorage, "getCardsFromLocalStorage").mockImplementation(() => ({}))
    mockedSetArticleBuffer.mockImplementation((callback) => {
      expect(callback({})).toEqual({})
    })
    useSaveArticleWithInterval(mockedSetArticleBuffer)
    jest.advanceTimersByTime(TwoMinutes)
    expect.assertions(1)
  })
  it("should save all articles from buffer", () => {
    jest.spyOn(getCardsFromLocalStorage, "getCardsFromLocalStorage").mockImplementation(() => ({}))
    jest.spyOn(compareArticles, "compareArticles").mockImplementation(() => false)
    const saveMock = jest.spyOn(saveArticleInLocalStorage, "saveArticleInLocalStorage").mockImplementation(jest.fn())
    mockedSetArticleBuffer.mockImplementation((callback) => {
      callback(articleBuffer)
    })
    useSaveArticleWithInterval(mockedSetArticleBuffer)
    jest.advanceTimersByTime(TwoMinutes)
    expect(saveMock.mock.calls.length).toBe(2)
    expect(saveMock.mock.calls[0][0]).toBe(idCard)
    expect(saveMock.mock.calls[0][1]).toBe("ru")
    expect(saveMock.mock.calls[0][2]).toEqual(ru)
    expect(saveMock.mock.calls[1][0]).toBe(idCard)
    expect(saveMock.mock.calls[1][1]).toBe("en")
    expect(saveMock.mock.calls[1][2]).toEqual(en)
  })
  it("shouldn't save an article if it doesn't change", () => {
    jest.spyOn(getCardsFromLocalStorage, "getCardsFromLocalStorage").mockImplementation(() => ({}))
    jest
      .spyOn(compareArticles, "compareArticles")
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => false)
    const saveMock = jest.spyOn(saveArticleInLocalStorage, "saveArticleInLocalStorage").mockImplementation(jest.fn())
    mockedSetArticleBuffer.mockImplementation((callback) => {
      callback(articleBuffer)
    })
    useSaveArticleWithInterval(mockedSetArticleBuffer)
    jest.advanceTimersByTime(TwoMinutes)
    expect(saveMock.mock.calls.length).toBe(1)
    expect(saveMock.mock.calls[0][0]).toBe(idCard)
    expect(saveMock.mock.calls[0][1]).toBe("en")
    expect(saveMock.mock.calls[0][2]).toEqual(en)
  })
  it("should create an interval for 2 minutes", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    jest.spyOn(global, "setInterval").mockImplementation((callback, delay) => {
      expect(delay).toBe(TwoMinutes)
    })
    useSaveArticleWithInterval(mockedSetArticleBuffer)
    expect.assertions(1)
  })
  it("should provide a cleaner of the created interval", () => {
    const timer = {}
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    jest.spyOn(global, "setInterval").mockImplementation(() => {
      return timer
    })
    jest.spyOn(global, "clearInterval").mockImplementation((Timeout) => {
      expect(Timeout).toEqual(timer)
    })
    jest.spyOn(React, "useEffect").mockImplementation((callback) => {
      const functionToClearTimeout = callback()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      functionToClearTimeout()
    })
    useSaveArticleWithInterval(mockedSetArticleBuffer)
    expect.assertions(1)
  })
})
