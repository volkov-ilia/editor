import get from "lodash/get"
import { Editor, Element as SlateElement, Node, Path, Transforms } from "slate"
import find from "lodash/find"
import includes from "lodash/includes"
import size from "lodash/size"
import slice from "lodash/slice"
import LINK from "../globalValues/article/nestedTypes/LINK"
import linkNode from "../nodes/linkNode"
import elementsWithLink from "./settings/elementsWithLink"
import CustomNodeType from "../../../types/Slate/Utils/CustomNodeType"

const withHandler = (editor: Editor) => {
  const { normalizeNode } = editor
  editor.normalizeNode = (entry) => {
    const [node, path]: [CustomNodeType, Path] = entry
    if (SlateElement.isElement(node) && includes(elementsWithLink, node.type)) {
      const item = find(node.children, { type: LINK })
      let lastPosition = get(Node.last(editor, path), "[1]")
      lastPosition = size(lastPosition) > 2 ? slice(get(Node.last(editor, path), "[1]"), 0, 2) : lastPosition
      if (!item) {
        const element = linkNode()
        const options = { at: Path.next(lastPosition) }
        Transforms.insertNodes(editor, element, options)
      }
    }
    normalizeNode(entry)
  }

  return editor
}

export default withHandler
