import { Path, Transforms } from "slate"
import { ReactEditor } from "slate-react"
import defaultFields from "./globalValues/defaultFields"
import { Node } from "slate"
import get from "lodash/get"
import insertComponentFromDropDownProps from "../../types/Slate/Utils/insertComponentFromDropDownProps"

const insertComponentFromDropDown = ({ type, element, editor }: insertComponentFromDropDownProps) => {
  const fields = get(defaultFields, type, get(defaultFields, "default"))
  const block = {
    type,
    ...fields,
  }
  Transforms.insertNodes(editor, block, {
    at: Path.next(ReactEditor.findPath(editor as ReactEditor, element)),
  })
}

export default insertComponentFromDropDown
