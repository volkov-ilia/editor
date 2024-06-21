import Content from "../../common/types/Content"
import { saveArticle } from "./saveArticleReq"
import { updateCardInEditor } from "./updateCardInEditor"
import { AppDispatch } from "../app/store"
import { saved, savedError, updateArticle } from "../app/reducers/ModalWindowSlice"

export const saveArticleHandler = async (
  idCard: string,
  cards: any,
  locale: string,
  statusVersion: any,
  article: any,
  dispatch: AppDispatch,
  setCard: React.Dispatch<React.SetStateAction<Content.Card | undefined>>
) => {
  if (statusVersion.status === 200) {
    dispatch(updateArticle())
  } else if (statusVersion.status === 304) {
    try {
      await saveArticle(article, locale, idCard)
      delete cards?.[idCard]?.[locale]
      localStorage.setItem("cards", JSON.stringify(cards))
      updateCardInEditor(idCard, setCard)
      dispatch(saved())
    } catch (e) {
      dispatch(savedError())
    }
  }
}
