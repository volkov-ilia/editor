import { ReactEditor } from "slate-react"
import slice from "lodash/slice"
import size from "lodash/size"
import { BaseElement, Editor, Transforms } from "slate"

const moveImageCarouselItemTo = async (editor: Editor, element: BaseElement, position: string) => {
  const currentPath = ReactEditor.findPath(editor as ReactEditor, element)
  const newPath = slice(currentPath, 0, size(currentPath) - 1)
  const integerPosition = parseInt(position)
  const newPosition = integerPosition === 0 ? 0 : integerPosition - 1
  newPath.push(newPosition)
  Transforms.moveNodes(editor, {
    at: currentPath,
    to: newPath,
  })
}

export default moveImageCarouselItemTo
