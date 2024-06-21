import React from "react"
import { Button } from "../Button"
import s from "./modal.module.css"
import { AppDispatch } from "../../../app/store"
import { hide } from "../../../app/reducers/ModalWindowSlice"
import { updateArticleAndToggleModalWindow } from "../../../utils/updateArticleAndToggleModalWindow"
import Content from "../../../../common/types/Content"
import { Platforms } from "../../../types/platforms/platformConfig"

type modalContentType = {
  idCard: string | string[] | undefined
  setCard: React.Dispatch<React.SetStateAction<Content.Card | undefined>>
  locale: Platforms
  updateValueAndPageFields: (value: Array<object>, pageFields: Content.PageFields) => void
  status: string
  changeStatus: AppDispatch
}

interface MessageStatus {
  [key: string]: any
}

export const ModalSaveStatus: React.FC<modalContentType> = ({
  idCard,
  setCard,
  locale,
  updateValueAndPageFields,
  status,
  changeStatus,
}) => {
  const message: MessageStatus = {
    saved: "Статья успешно сохранена!",
    savedError: "Что-то пошло не так =(",
    updateArticle: "Версия статьи устарела, для сохрания изменений необходимо получить последнюю версию статьи",
  }

  return (
    <>
      <span className={s.input}>{message[status]}</span>
      {status === "saved" || status === "savedError" ? (
        <Button content="Ок" action={() => changeStatus(hide)} />
      ) : status === "updateArticle" ? (
        <Button
          content="Получить"
          action={() =>
            updateArticleAndToggleModalWindow(idCard, setCard, locale, updateValueAndPageFields, changeStatus)
          }
        />
      ) : (
        <></>
      )}
    </>
  )
}
