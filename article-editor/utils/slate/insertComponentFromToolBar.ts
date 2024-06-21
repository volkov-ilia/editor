import { Editor, Path, Location, Transforms } from "slate"

const insertComponentFromToolBar = (editor: Editor, format: string) => {
  const { selection } = editor
  const block = { type: format, children: [{ text: "some text" }] }
  if (Boolean(selection) && selection && "focus" in selection) {
    const [parentNode, parentPath] = Editor.parent(editor, selection.focus?.path as Location)
    Transforms.insertNodes(editor, block, { at: Path.next(parentPath) })
  }
}

export default insertComponentFromToolBar
