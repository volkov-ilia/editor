import { Transforms } from "slate"
import { ReactEditor } from "slate-react"
import SelectorOnChangeType from "../../../types/Slate/Utils/eventHandlers/SelectorOnChangeType"

const onChange: ({ event, editor, node }: SelectorOnChangeType) => void = ({ event, editor, node }) => {
  Transforms.insertText(editor, event.target.value, {
    at: ReactEditor.findPath(editor as ReactEditor, node),
  })
}

export default onChange
