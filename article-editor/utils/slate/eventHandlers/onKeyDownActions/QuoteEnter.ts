import get from "lodash/get"
import size from "lodash/size"
import { Editor, Transforms } from "slate"
import QuoteEventsType from "../../../../types/Slate/Utils/eventHandlers/QuoteEventsType"

const QuoteEnter: ({ event, editor }: QuoteEventsType) => void = ({ event, editor }) => {
  const focusPath = get(editor, "selection.focus.path")
  const lastIndexInElement = size(get(Editor.node(editor, [focusPath[0]]), "[0].children")) - 1
  const currentElement = get(Editor.node(editor, focusPath), "[0]")
  if (focusPath[1] !== lastIndexInElement) {
    event.preventDefault()
    const currentElementType = get(currentElement, "type")
    if (currentElementType !== "signature") {
      Transforms.move(editor, { distance: 1, unit: "line" })
    }
  } else {
    Transforms.move(editor, { distance: 1, unit: "line" })
  }
}

export default QuoteEnter
