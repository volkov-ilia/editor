import { Editor, Element as SlateElement, Node, Path, Transforms } from "slate"
import includes from "lodash/includes"
import elementsWithCode from "./settings/elementsWithCode"
import find from "lodash/find"
import get from "lodash/get"
import size from "lodash/size"
import slice from "lodash/slice"
import CODE_ITEM from "../globalValues/article/nestedTypes/CODE_ITEM"
import codeItemNode from "../nodes/codeItemNode"
import CustomNodeType from "../../../types/Slate/Utils/CustomNodeType"

const withHandler = (editor: Editor) => {
  const { normalizeNode } = editor
  editor.normalizeNode = (entry) => {
    const [node, path]: [CustomNodeType, Path] = entry
    if (SlateElement.isElement(node) && includes(elementsWithCode, node.type)) {
      const item = find(node.children, { type: CODE_ITEM })
      let lastPosition = get(Node.last(editor, path), "[1]")
      lastPosition = size(lastPosition) > 2 ? slice(get(Node.last(editor, path), "[1]"), 0, 3) : lastPosition
      if (!item) {
        const element = codeItemNode()
        const options = { at: Path.next(lastPosition) }
        Transforms.insertNodes(editor, element, options)
      }
    }
    normalizeNode(entry)
  }

  return editor
}

export default withHandler
