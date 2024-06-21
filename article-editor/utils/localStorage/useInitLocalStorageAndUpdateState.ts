import { useEffect } from "react"
import Content from "../../../common/types/Content"
import { getCardsFromLocalStorage } from "./getCardsFromLocalStorage"
import { getResourceItemFromCardBySource } from "../getResourceItemFromCardBySource"
import { useRouter } from "next/router"
import { Platforms } from "../../types/platforms/platformConfig"
import { PageFieldsTypes } from "../../types/Slate/Components/PageFieldsTypes"
import { saveArticleInLocalStorage } from "./saveArticleInLocalStorage"
import initialValue from "../slate/globalValues/initialValue"

export const useInitLocalStorageAndUpdateState = (
  card: Content.Card | undefined,
  locale: Platforms,
  pageFields: PageFieldsTypes,
  updateValueAndPageFields: (value: Array<object>, pageFields: Content.PageFields) => void
) => {
  const router = useRouter()
  useEffect(() => {
    if (card) {
      const idCard = router.query.idCard as string
      const localCard: undefined | Content.LocalStorageCardType = getCardsFromLocalStorage()[idCard]
      const sourceItem: undefined | Content.SourceItem = getResourceItemFromCardBySource(card, locale)

      if (localCard && localCard[locale]) {
        updateValueAndPageFields(
          JSON.parse(localCard[locale]!.formDataSlateStructure.json),
          localCard[locale]!.formDataSlateStructure.form
        )
      }
      if ((localCard && !localCard[locale] && !sourceItem) || (!localCard && !sourceItem)) {
        const initialArticle: Content.LocalStorageArticleType = {
          formDataSlateStructure: {
            contentfulFieldsType: "",
            json: JSON.stringify(initialValue),
            form: Object.keys(pageFields).reduce((acc, field) => {
              acc[field] = ""
              if (
                field === "arrowButtonLink" ||
                field === "labelPrimaryLink" ||
                field === "labelUsualLink" ||
                field === "primaryButtonLink"
              ) {
                acc[field] = { href: "", linkTitle: "" }
              }
              return acc
            }, {} as any),
            path: "",
            slug: "",
          },
          version: "000",
        }
        saveArticleInLocalStorage(idCard, locale, initialArticle)
        updateValueAndPageFields(
          JSON.parse(initialArticle.formDataSlateStructure.json),
          initialArticle.formDataSlateStructure.form
        )
      }
    }
  }, [locale, card])
}
