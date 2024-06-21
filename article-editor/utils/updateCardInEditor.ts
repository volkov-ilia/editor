import Content from "../../common/types/Content"
import { getCard } from "./getCardAndArticle"

export const updateCardInEditor = (
  idCard: string,
  setCard: React.Dispatch<React.SetStateAction<Content.Card | undefined>>
) => {
  const promiseCard = getCard(idCard)
  promiseCard.then((card) => setCard(card))
}
