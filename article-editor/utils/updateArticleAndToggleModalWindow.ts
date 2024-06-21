import Content from "../../common/types/Content"
import { Platforms } from "../types/platforms/platformConfig"
import { getArticle, getCard } from "./getCardAndArticle"
import { getResourceItemFromCardBySource } from "./getResourceItemFromCardBySource"
import { saveArticleInLocalStorage } from "./localStorage/saveArticleInLocalStorage"
import { AppDispatch } from "../app/store"
import { hide } from "../app/reducers/ModalWindowSlice"

export async function updateArticleAndToggleModalWindow(
  idCard: string | string[] | undefined,
  setCard: React.Dispatch<React.SetStateAction<Content.Card | undefined>>,
  locale: Platforms,
  updateValueAndPageFields: (value: Array<object>, pageFields: Content.PageFields) => void,
  changeStatus: AppDispatch
) {
  const promiseCard = await getCard(idCard)
  const articleFromCard = getResourceItemFromCardBySource(promiseCard!, locale)
  const promiseArticle = await getArticle(articleFromCard!.slug)
  updateValueAndPageFields(
    JSON.parse(promiseArticle!.formDataSlateStructure.json),
    promiseArticle!.formDataSlateStructure.form
  )
  const article = {
    formDataSlateStructure: promiseArticle!.formDataSlateStructure,
    version: articleFromCard!.version,
  }
  saveArticleInLocalStorage(idCard as string, locale, article)
  setCard(promiseCard)
  changeStatus(hide)
}
