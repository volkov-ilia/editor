import { MouseEventHandler } from "react"

type TextSaveAndCancel = {
  cancelButton: string
  header: string
  saveButton: string
  titleCancel: string
  titleSave: string
}

type Props = {
  onClickCancel: MouseEventHandler<HTMLButtonElement>
  onClickSave: MouseEventHandler<HTMLButtonElement>
  text: TextSaveAndCancel
}

export default Props
