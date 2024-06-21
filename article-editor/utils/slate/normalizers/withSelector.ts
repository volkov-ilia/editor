import get from "lodash/get"
import nodes from "../nodes"
import { Editor, Element as SlateElement, Node, Path, Transforms } from "slate"
import find from "lodash/find"
import includes from "lodash/includes"
import elementsWithSelector from "./settings/elementsWithSelector"
import size from "lodash/size"
import slice from "lodash/slice"
import SELECTOR from "../globalValues/article/nestedTypes/SELECTOR"
import CustomNodeType from "../../../types/Slate/Utils/CustomNodeType"
import SelectorNodeType from "../../../types/Slate/Utils/nodes/SelectorNodeType"

const withHandler = (editor: Editor) => {
  const { normalizeNode } = editor
  editor.normalizeNode = (entry) => {
    const [node, path]: [CustomNodeType, Path] = entry
    if (SlateElement.isElement(node) && includes(elementsWithSelector, node.type)) {
      const item = find(node.children, { type: SELECTOR })
      let lastPosition = get(Node.last(editor, path), "[1]")
      lastPosition = size(lastPosition) > 2 ? slice(get(Node.last(editor, path), "[1]"), 0, 2) : lastPosition
      if (!item) {
        const element = node.type && nodes[node.type]
        const options = { at: Path.next(lastPosition) }
        Transforms.insertNodes(editor, element, options)
      }
    }
    normalizeNode(entry)
  }

  return editor
}

export default withHandler
