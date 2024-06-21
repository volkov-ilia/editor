import Content from "../../common/types/Content"

export const formatHistory = (history: Content.HistoryItem[]) => {
  return history.filter((story) => {
    return story.status === "created"
  })
}
