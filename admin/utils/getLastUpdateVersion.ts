import { getListOfPlatforms } from "./getListOfPlatforms"
import Content from "../../common/types/Content"

export const getLastUpdateVersion = (history: Content.HistoryItem[], platform: string) => {
  const distributedStatus = new Map()
  getListOfPlatforms(history).forEach((value) => {
    distributedStatus.set(
      value,
      history.filter((el) => {
        return el.source === value
      })
    )
  })
  const delPublishStatus = distributedStatus.get(platform)?.filter((el: { status: string }) => {
    if (el.status !== "published") {
      return el
    }
  })
  return delPublishStatus?.pop()
}
