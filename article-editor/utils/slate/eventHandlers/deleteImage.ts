import { ReactEditor } from "slate-react"
import { BaseElement, Editor, Transforms } from "slate"
import imageNode from "../nodes/imageNode"

const deleteImage = (element: BaseElement, editor: Editor, save: boolean) => {
  const currentPath = ReactEditor.findPath(editor as ReactEditor, element)
  if (currentPath) {
    Transforms.removeNodes(editor, {
      at: currentPath,
    })
    if (save) {
      const image = imageNode()
      Transforms.insertNodes(editor, image, {
        at: currentPath,
      })
    }
  }
}

export default deleteImage
