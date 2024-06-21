import { ReactEditor } from "slate-react"
import { BaseElement, Editor, Transforms } from "slate"

const moveComponent = (element: BaseElement, editor: Editor, direction: string, step = 1) => {
  const currentPath = ReactEditor.findPath(editor as ReactEditor, element)
  if (currentPath) {
    const newPath = direction === "up" ? [currentPath[0] - step] : [currentPath[0] + step]
    Transforms.moveNodes(editor, {
      at: currentPath,
      to: newPath,
    })
  }
}

export default moveComponent
