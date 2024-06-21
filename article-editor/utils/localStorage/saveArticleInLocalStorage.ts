import { Platforms } from "../../types/platforms/platformConfig"
import Content from "../../../common/types/Content"
import { getCardsFromLocalStorage } from "./getCardsFromLocalStorage"

export function saveArticleInLocalStorage(idCard: string, source: Platforms, article: Content.LocalStorageArticleType) {
  const localCards = getCardsFromLocalStorage()
  if (localCards[idCard] === undefined) localCards[idCard] = {}
  localCards[idCard][source] = article
  localStorage.setItem("cards", JSON.stringify(localCards))
}
