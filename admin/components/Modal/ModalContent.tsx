import React, { useState } from "react"
import { Button } from "../../hwdtech-editor/components/UI/Button/Button"
import s from "./modal.module.css"
import { sendDataToCreateCard } from "../../utils/dataFetching/sendDataToCreateCard"
import { IoC } from "../../hwdtech-editor/IoC/IoC"

export const ModalContent = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const onClick = async () => {
    await sendDataToCreateCard("cards/new", title, description, "article")
    IoC.resolve("IoC.Resolve", "ModalWindow:toggle")
    IoC.resolve("IoC.Resolve", "CardList:updateAll")
  }

  return (
    <>
      <input className={s.input} placeholder="Title" onChange={(e) => setTitle(e.target.value)} type="text" required />
      <input
        className={s.input}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        type="text"
      />
      <Button content="Сохранить" action={onClick} />
    </>
  )
}
