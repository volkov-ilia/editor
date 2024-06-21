import LIST_TYPES from "./globalValues/leafs/lists/LIST_TYPES"
import { Editor, Element as SlateElement, Transforms } from "slate"
import includes from "lodash/includes"
import get from "lodash/get"
import PARAGRAPH from "./globalValues/article/nestedTypes/PARAGRAPH"
import LIST_WITH_ITEM from "./globalValues/leafs/lists/LIST_WITH_ITEM"
import CustomNodeType from "../../types/Slate/Utils/CustomNodeType"

export const toggleBlock = (editor: Editor, format: string) => {
  const isActive = isBlockActive(editor, format)
  const isList = includes(LIST_TYPES, format)

  Transforms.unwrapNodes(editor, {
    match: (n: CustomNodeType) => includes(LIST_TYPES, !Editor.isEditor(n) && SlateElement.isElement(n) && n.type),
    split: true,
  })
  const itemType = get(LIST_WITH_ITEM, format, format)

  const newProperties: Partial<CustomNodeType> = {
    type: isActive ? PARAGRAPH : itemType,
  }
  Transforms.setNodes(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const isBlockActive = (editor: Editor, format: string) => {
  const [match] = Editor.nodes(editor, {
    match: (n: CustomNodeType) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  })

  return !!match
}
