import { ReactEditor } from "slate-react"
import { Transforms, BaseElement, Editor } from "slate"
import initialValue from "../globalValues/initialValue"
import BaseType from "../../../types/Slate/Utils/nodes/BaseType"

const deleteComponent = (
  element: BaseElement,
  editor: Editor,
  setValue: (newValue: BaseType[]) => void,
  value: BaseType[]
) => {
  const currentPath = ReactEditor.findPath(editor as ReactEditor, element)
  if (editor.children.length === 1) {
    Transforms.deselect(editor)
    setValue(initialValue)
  } else if (currentPath) {
    if (editor.children.length - 1 === currentPath[0]) {
      const newValue = value.filter((item, index) => index != currentPath[0])
      Transforms.deselect(editor)
      setValue(newValue)
    } else {
      Transforms.removeNodes(editor, {
        at: currentPath,
      })
    }
  }
}

export default deleteComponent
