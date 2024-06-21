import React, { useEffect } from "react"
import { getCardsFromLocalStorage } from "../localStorage/getCardsFromLocalStorage"
import { getArticle } from "../getCardAndArticle"
import { getResourceItemFromCardBySource } from "../getResourceItemFromCardBySource"
import { compareArticleVersions } from "./compareArticleVersions"
import Content from "../../../common/types/Content"
import { NextRouter } from "next/router"

export const useGetArticle = (
  card: Content.Card | undefined,
  locale: string,
  router: NextRouter,
  updateValueAndPageFields: (arg0: Array<object>, arg1: Content.PageFields) => void,
  setToggleModalWindow: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    if (card) {
      const idCard = router.query.idCard as string
      const cardsFromLS = getCardsFromLocalStorage()
      const articleVersionFromLS: string = cardsFromLS?.[idCard]?.[locale]?.version ?? "000"
      compareArticleVersions(idCard, articleVersionFromLS, locale).then((result) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (result.status === 200) {
          if (cardsFromLS?.[idCard]?.[locale]) {
            setToggleModalWindow(true)
          } else {
            const articleFromCard = getResourceItemFromCardBySource(card, locale)
            if (articleFromCard)
              getArticle(articleFromCard.slug).then((result) => {
                updateValueAndPageFields(
                  JSON.parse(result!.formDataSlateStructure.json),
                  result!.formDataSlateStructure.form
                )
              })
          }
        }
      })
    }
  }, [card, locale])
}
