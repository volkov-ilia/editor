import get from "lodash/get"
import { Editor, Element as SlateElement, Node, Path, Transforms } from "slate"
import find from "lodash/find"
import includes from "lodash/includes"
import POSITION from "../globalValues/article/nestedTypes/POSITION"
import elementsWithPosition from "./settings/elementsWithPosition"
import positionNode from "../nodes/positionNode"
import size from "lodash/size"
import slice from "lodash/slice"
import VoidType from "../../../types/Slate/Utils/nodes/VoidType"

const withHandler = (editor: Editor) => {
  const { normalizeNode } = editor
  editor.normalizeNode = (entry) => {
    const [node, path] = entry as [VoidType, Path]
    if (SlateElement.isElement(node) && includes(elementsWithPosition, node.type) && !node.isVoid) {
      const position = find(node.children, { type: POSITION })
      let lastPosition = get(Node.last(editor, path), "[1]")
      lastPosition = size(lastPosition) > 2 ? slice(get(Node.last(editor, path), "[1]"), 0, 3) : lastPosition
      if (!position) {
        const element = positionNode()
        const options = { at: Path.next(lastPosition) }
        Transforms.insertNodes(editor, element, options)
      }
    }
    normalizeNode(entry)
  }

  return editor
}

export default withHandler
