import { EditorPrimaryButton } from "hwdtech-admin-components"
import s from "./updateVersionArticle.module.css"
import React from "react"
import { getArticleFromLocalStorage } from "../../../utils/getArticle/getArticleFromLocalStorage"
import { getArticleById } from "../../../utils/getArticle/getArticleById"

export const UpdateVersionArticle = ({
  articleSource,
  articleSlug,
  cookies,
}: {
  articleSource: string
  articleSlug: string
  cookies: string
}) => {
  return (
    <>
      <div className={s.text_title}>Локальная версия статьи устарела, желаете обновить?</div>
      <EditorPrimaryButton
        onClick={(event: React.MouseEvent) => getArticleById(articleSlug, cookies)}
        text={"Да"}
        title={"Fetch article from database"}
      />
      <EditorPrimaryButton
        onClick={(event: React.MouseEvent) => getArticleFromLocalStorage(articleSource)}
        text={"Нет"}
        title={"Fetch article from localStorage"}
      />
    </>
  )
}
