import { Transforms } from "slate"
import initialValue from "./slate/globalValues/initialValue"
import { ReactEditor } from "slate-react"

export const deleteAllNodes = (editor: any, setValue: any) => {
  Transforms.deselect(editor)
  setValue(initialValue)
  ReactEditor.focus(editor)
  return editor
}
