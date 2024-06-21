import { Editor, Element as SlateElement, Range, Transforms } from "slate"
import LINK_IN_TEXT from "./globalValues/article/nestedTypes/LINK_IN_TEXT"
import CustomNodeType from "../../types/Slate/Utils/CustomNodeType"

const isLinkActive = (editor: Editor) => {
  const [link] = Editor.nodes(editor, {
    match: (n: CustomNodeType) => {
      return !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === LINK_IN_TEXT
    },
  })
  return !!link
}

const unwrapLink = (editor: Editor) => {
  Transforms.unwrapNodes(editor, {
    match: (n: CustomNodeType) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === LINK_IN_TEXT,
  })
}

export const wrapLink = (editor: Editor, url?: string, title?: string) => {
  if (url && title) {
    if (isLinkActive(editor)) {
      unwrapLink(editor)
    }
    const { selection } = editor
    const isCollapsed = selection && Range.isCollapsed(selection)
    const link = {
      type: LINK_IN_TEXT,
      url,
      title,
      children: isCollapsed ? [{ text: url }] : [],
    }

    if (isCollapsed) {
      Transforms.insertNodes(editor, link)
    } else {
      Transforms.wrapNodes(editor, link, { split: true })
      Transforms.collapse(editor, { edge: "end" })
    }
  }
}

const insertLink = (editor: Editor, url: string, title: string) => {
  if (editor.selection) {
    wrapLink(editor, url, title)
  }
}

export default insertLink
