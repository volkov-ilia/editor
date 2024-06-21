import { useEffect, useRef } from "react"
import Content from "../../../common/types/Content"
import { Platforms } from "../../types/platforms/platformConfig"
import { saveArticleInLocalStorage } from "./saveArticleInLocalStorage"

export const useSaveArticleWithInterval = (
  idCard: string,
  source: Platforms,
  article: Content.LocalStorageArticleType
) => {
  const _article = useRef<Content.LocalStorageArticleType>()
  useEffect(() => {
    _article.current = article
  }, [article])
  useEffect(() => {
    const interval = setInterval(() => {
      if (_article.current) saveArticleInLocalStorage(idCard, source, _article.current)
    }, 1000 * 5)
    return () => {
      if (_article.current) saveArticleInLocalStorage(idCard, source, _article.current)
      clearInterval(interval)
    }
  }, [source])
}
