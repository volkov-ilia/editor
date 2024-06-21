import { DATA_BUILDER_SLATE_STRUCTURE } from "../../types/utils/contentful/CRUDArticlesTypes"
import { PageFieldsTypes } from "../../types/Slate/Components/PageFieldsTypes"
import { getCardsFromLocalStorage } from "../localStorage/getCardsFromLocalStorage"
import Content from "../../../common/types/Content"
import { compareArticleVersions } from "../getArticle/compareArticleVersions"
import { getResourceItemFromCardBySource } from "../getResourceItemFromCardBySource"
import { saveArticleHandler } from "../saveArticleHandler"
import { AppDispatch } from "../../app/store"

export const createPageStructureDB = async (
  slateValue: string,
  pageFields: PageFieldsTypes,
  locale: string,
  card: Content.Card,
  dispatch: AppDispatch,
  setCard: React.Dispatch<React.SetStateAction<Content.Card | undefined>>
) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const idCard = card._id
  if (idCard === undefined) throw new Error("idCard is not defined")
  const slug = pageFields.slug
  const path = pageFields.path
  const formDataSlateStructure = {
    contentfulFieldsType: DATA_BUILDER_SLATE_STRUCTURE,
    json: slateValue,
    form: pageFields,
    path: path,
    slug: slug,
  }
  const cards = getCardsFromLocalStorage()
  const resourceFromCard = getResourceItemFromCardBySource(card, locale)
  const article = {
    formDataSlateStructure: formDataSlateStructure,
    version: cards?.[idCard]?.[locale]?.version ?? resourceFromCard?.version ?? "000",
  }

  const statusVersion = await compareArticleVersions(idCard, article.version, locale)
  saveArticleHandler(idCard, cards, locale, statusVersion, article, dispatch, setCard)

  for (const source in cards[idCard]) {
    if (source !== locale) {
      const article = {
        formDataSlateStructure: {
          ...cards[idCard][source].formDataSlateStructure,
          contentfulFieldsType: DATA_BUILDER_SLATE_STRUCTURE,
          json: cards[idCard][source].formDataSlateStructure.json,
        },
        version: cards[idCard][source].version,
      }
      const statusVersion = await compareArticleVersions(idCard, article.version, source)
      saveArticleHandler(idCard, cards, source, statusVersion, article, dispatch, setCard)
    }
  }
}
