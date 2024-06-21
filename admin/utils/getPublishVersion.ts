import Content from "../../common/types/Content"
import { getListOfPlatforms } from "./getListOfPlatforms"

export const getPublishVersion = (history: Content.HistoryItem[]) => {
  const allPublishedVersionsOfArticles = new Map()
  history
    .filter((story) => {
      return story.status === "published"
    })
    .map((el) => {
      allPublishedVersionsOfArticles.set(el.source, el)
    })
  if (allPublishedVersionsOfArticles.size === 0) {
    getListOfPlatforms(history).forEach((el) => {
      allPublishedVersionsOfArticles.set(el, { version: 0 })
    })
  }
  return allPublishedVersionsOfArticles
}
