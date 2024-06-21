import { Descendant } from "slate"
import Content from "../../../common/types/Content"
import { PageFieldsTypes } from "../../types/Slate/Components/PageFieldsTypes"
import { createPageStructureDB } from "../contentful/createPageStructureDB"
import { AppDispatch } from "../../app/store"

export const createArticle = async (
  value: Descendant[],
  fields: PageFieldsTypes,
  locale: string,
  card: Content.Card,
  dispatch: AppDispatch,
  setCard: React.Dispatch<React.SetStateAction<Content.Card | undefined>>
) => {
  const res = await createPageStructureDB(JSON.stringify(value), fields, locale, card, dispatch, setCard)
  return res
}
