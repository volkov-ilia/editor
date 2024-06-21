import { Editor, Element as SlateElement, Path, Transforms } from "slate"
import find from "lodash/find"
import includes from "lodash/includes"
import PARAGRAPH from "../globalValues/article/nestedTypes/PARAGRAPH"
import elementsWithParagraph from "./settings/elementsWithParagraph"
import paragraphNode from "../nodes/paragraphNode"
import CustomNodeType from "../../../types/Slate/Utils/CustomNodeType"

const withHandler = (editor: Editor) => {
  const { normalizeNode } = editor
  editor.normalizeNode = (entry) => {
    const [node, path]: [CustomNodeType, Path] = entry
    if (SlateElement.isElement(node) && includes(elementsWithParagraph, node.type)) {
      const paragraph = find(node.children, { type: PARAGRAPH })
      if (!paragraph) {
        const element = paragraphNode()
        const options = { at: [path[0], 0] }
        Transforms.insertNodes(editor, element, options)
        Transforms.move(editor, { distance: 1, unit: "line" })
      }
    }
    normalizeNode(entry)
  }

  return editor
}

export default withHandler
