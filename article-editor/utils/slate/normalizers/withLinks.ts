import LINK_IN_TEXT from "../globalValues/article/nestedTypes/LINK_IN_TEXT"
import { Editor } from "slate"
import { CustomElement } from "../../../custom-types"

const withLinks = (editor: Editor) => {
  const { isInline } = editor

  editor.isInline = (element: CustomElement) => {
    return element.type === LINK_IN_TEXT ? true : isInline(element)
  }

  return editor
}

export default withLinks
