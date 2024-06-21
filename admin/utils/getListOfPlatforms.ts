import Content from "../../common/types/Content"

export const getListOfPlatforms = (history: Content.HistoryItem[]) => {
  const listOfPlatform = new Set()
  history.map((story) => listOfPlatform.add(story.source))
  return listOfPlatform
}
