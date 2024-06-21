import { ReactEditor } from "slate-react"
import get from "lodash/get"
import size from "lodash/size"
import { BaseElement, Editor, Transforms } from "slate"
import IMAGE_CAROUSEL_ITEM from "../globalValues/article/nestedTypes/IMAGE_CAROUSEL_ITEM"
import altNode from "../nodes/altNode"
import { saveImage } from "../../saveImage"

const imageCarouselLoader = async (editor: Editor, element: BaseElement, type: string, file: Blob) => {
  const path = ReactEditor.findPath(editor as ReactEditor, element)
  const resSaveImage = await saveImage(file)
  const newPosition = path

  const node = {
    type: IMAGE_CAROUSEL_ITEM,
    children: [altNode()],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    url: resSaveImage.data,
    position: get(newPosition, size(newPosition) - 1),
  }
  const opts = { at: newPosition }
  Transforms.insertNodes(editor, node, opts)
}

export default imageCarouselLoader
