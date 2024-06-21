import { Editor, Element as SlateElement, Node, Path, Transforms } from "slate"
import find from "lodash/find"
import get from "lodash/get"
import SIGNATURE from "../globalValues/article/nestedTypes/SIGNATURE"
import includes from "lodash/includes"
import elementsWithSignature from "./settings/elementsWithSignature"
import signatureNode from "../nodes/signatureNode"
import CustomNodeType from "../../../types/Slate/Utils/CustomNodeType"

const withSignature = (editor: Editor) => {
  const { normalizeNode } = editor

  editor.normalizeNode = (entry) => {
    const [node, path]: [CustomNodeType, Path] = entry
    if (SlateElement.isElement(node) && includes(elementsWithSignature, node.type)) {
      const signature = find(node.children, { type: SIGNATURE })
      const lastPosition = get(Node.last(editor, path), "[1]")
      if (!signature) {
        const element = signatureNode()
        const options = { at: Path.next(lastPosition) }
        Transforms.insertNodes(editor, element, options)
      }
    }
    normalizeNode(entry)
  }

  return editor
}

export default withSignature
