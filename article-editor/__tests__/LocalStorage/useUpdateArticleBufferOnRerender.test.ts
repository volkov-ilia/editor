import React from "react"
import { useUpdateArticleBufferOnRerender } from "../../utils/localStorage/useUpdateArticleBufferOnRerender"
import * as compareArticles from "../../utils/localStorage/compareArticles"

describe("useUpdateArticleBufferOnRerender tests", () => {
  let mockedSetArticleBuffer: jest.Mock
  const articleBuffer = {
    platform: { article: "bufferedArticle" },
  }

  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementation((callback) => {
      callback()
    })
    mockedSetArticleBuffer = jest.fn()
  })
  it("should update buffer if article changes ", () => {
    const currentArticle = { article: "article" }
    const platform = "platform"
    jest.spyOn(compareArticles, "compareArticles").mockImplementation((bufferedArticle, current) => {
      expect(bufferedArticle).toEqual(articleBuffer.platform)
      expect(current).toEqual(currentArticle)
      return false
    })
    mockedSetArticleBuffer.mockImplementation((callback) => {
      expect(callback(articleBuffer)).toEqual({
        ...articleBuffer,
        [platform]: currentArticle,
      })
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useUpdateArticleBufferOnRerender(mockedSetArticleBuffer, currentArticle, platform)
    expect.assertions(3)
  })
  it("shouldn't update buffer if article doesn't changes ", () => {
    const currentArticle = { article: "article" }
    const platform = "platform"
    jest.spyOn(compareArticles, "compareArticles").mockImplementation((bufferedArticle, current) => {
      expect(bufferedArticle).toEqual(articleBuffer.platform)
      expect(current).toEqual(currentArticle)
      return true
    })
    mockedSetArticleBuffer.mockImplementation((callback) => {
      expect(callback(articleBuffer)).toEqual(articleBuffer)
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useUpdateArticleBufferOnRerender(mockedSetArticleBuffer, currentArticle, platform)
    expect.assertions(3)
  })
})
