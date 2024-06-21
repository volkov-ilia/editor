import get from "lodash/get"
import size from "lodash/size"
import indexOf from "lodash/indexOf"
import replace from "lodash/replace"
import clone from "lodash/clone"
import { Editor, Node, Path, Transforms } from "slate"
import editableFieldsTypes from "../globalValues/editableFieldsTypes"
import ZWSP from "../globalValues/ZWSP"

type CustomNodeType = Node & {
  type?: string
  text?: string
}

const withTextEntry = (editor: Editor) => {
  const { normalizeNode } = editor
  editor.normalizeNode = (entry) => {
    const [node, path]: [CustomNodeType, Path] = entry
    const type = get(node, "type")
    if (type && editableFieldsTypes.indexOf(type) !== -1) {
      const text = get(node, "text")
      const textSize = size(text)
      if (indexOf(text, ZWSP) !== -1 && textSize > 1) {
        const newText = text && replace(text, ZWSP, "")
        const newNode = clone(node)
        newNode.text = newText
        newText && Transforms.insertText(editor, newText, { at: path })
      }
    }
    normalizeNode(entry)
  }

  return editor
}

export default withTextEntry
