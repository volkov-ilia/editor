import { Editor } from "slate"

const toggleMark = (editor: Editor, format: string) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isMarkActive = (editor: Editor, format: string) => {
  const marks: { [key: string]: boolean } | null = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

export default toggleMark
