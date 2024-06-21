import includes from "lodash/includes"
import elementsVoid from "./settings/elementsVoid"
import { Editor } from "slate"
import { CustomElement } from "../../../custom-types"

const withHandler = (editor: Editor) => {
  const { isVoid } = editor

  editor.isVoid = (element: CustomElement) => {
    return includes(elementsVoid, element.type) ? true : isVoid(element)
  }

  return editor
}

export default withHandler
