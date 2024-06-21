import { ReactEditor } from "slate-react"
import get from "lodash/get"
import { BaseElement, Editor, Transforms } from "slate"
import { saveImage } from "../../saveImage"

const imageLoader = async (editor: Editor, element: BaseElement, dataType: string, file: Blob, slateType: string) => {
  const path = ReactEditor.findPath(editor as ReactEditor, element)
  const resSaveImage = await saveImage(file)
  const opts = { at: path }

  Transforms.removeNodes(editor, opts)

  const oldChildren = get(element, "children")

  const node = {
    ...element,
    type: slateType,
    children: oldChildren,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    url: resSaveImage.data,
  }

  Transforms.insertNodes(editor, node, opts)
}

export default imageLoader
