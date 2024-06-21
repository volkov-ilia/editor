import { SetStateAction, useEffect } from "react"
import { getCard } from "../getCardAndArticle"
import Content from "../../../common/types/Content"
import { NextRouter } from "next/router"

export const useGetCard = (
  router: NextRouter,
  setCard: { (value: SetStateAction<Content.Card | undefined>): void; (arg0: Content.Card): void }
) => {
  useEffect(() => {
    const idCard = router.query.idCard
    const promiseCard = getCard(idCard)
    promiseCard.then((card?: Content.Card) => {
      setCard(card)
    })
  }, [])
}
