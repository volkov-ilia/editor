import React, { useEffect } from "react"
import Content from "../../../common/types/Content"
import { Platforms } from "../../types/platforms/platformConfig"
import { compareArticles } from "./compareArticles"
import { cloneObject } from "./cloneObject"

export const useUpdateArticleBufferOnRerender = (
  setArticleBuffer: React.Dispatch<
    React.SetStateAction<
      Partial<{
        [key in Platforms]: Content.LocalStorageArticleType
      }>
    >
  >,
  currentArticle: Content.LocalStorageArticleType,
  platform: Platforms
) => {
  useEffect(() => {
    setArticleBuffer((articleBuffer) => {
      if (!compareArticles(articleBuffer?.[platform], currentArticle)) {
        const newState = cloneObject(articleBuffer)
        newState[platform] = currentArticle
        return newState
      }
      return articleBuffer
    })
  }, [currentArticle, platform])
}
