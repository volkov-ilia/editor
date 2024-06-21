import get from "lodash/get"
import { Editor, Element as SlateElement, Node, Path, Transforms } from "slate"
import find from "lodash/find"
import includes from "lodash/includes"
import size from "lodash/size"
import slice from "lodash/slice"
import imageDescriptionNode from "../nodes/imageDescriptionNode"
import elementsWithQuoteText from "./settings/elementsWithQuoteText"
import QUOTE_TEXT from "../globalValues/article/nestedTypes/QUOTE_TEXT"
import CustomNodeType from "../../../types/Slate/Utils/CustomNodeType"

const withHandler = (editor: Editor) => {
  const { normalizeNode } = editor
  editor.normalizeNode = (entry) => {
    const [node, path]: [CustomNodeType, Path] = entry
    if (SlateElement.isElement(node) && includes(elementsWithQuoteText, node.type)) {
      const description = find(node.children, { type: QUOTE_TEXT })
      let lastPosition = get(Node.last(editor, path), "[1]")
      lastPosition = size(lastPosition) > 2 ? slice(get(Node.last(editor, path), "[1]"), 0, 3) : lastPosition
      if (!description) {
        const element = imageDescriptionNode()
        const options = { at: Path.next(lastPosition) }
        Transforms.insertNodes(editor, element, options)
      }
    }
    normalizeNode(entry)
  }

  return editor
}

export default withHandler
