import get from "lodash/get"
import { Editor, Transforms } from "slate"
import isElementEmpty from "../../isElementEmpty"
import textSize from "../../textSize"
import ZWSP from "../../globalValues/ZWSP"
import QuoteEventsType from "../../../../types/Slate/Utils/eventHandlers/QuoteEventsType"

const QuoteBackspace: ({ event, editor }: QuoteEventsType) => void = ({ event, editor }) => {
  const focusPath = get(editor, "selection.focus.path")
  const focusOffset = get(editor, "selection.focus.offset")
  const elementPath = [focusPath[0]]
  const nodePath = get(focusPath, "[1]")
  const element = get(Editor.node(editor, [focusPath[0]]), "[0]")
  const isEmptyElement = isElementEmpty(element)
  const elementTextSize = textSize(element)
  if (focusOffset === 0) {
    if (isEmptyElement) {
      event.preventDefault()
      if (nodePath === 0) {
        Transforms.removeNodes(editor, { at: elementPath })
      } else {
        Transforms.move(editor, { distance: 1, unit: "line", reverse: true })
      }
    } else {
      if (nodePath === 0 && elementTextSize === 1) {
        event.preventDefault()
        Transforms.insertText(editor, ZWSP, { at: focusPath })
        Transforms.move(editor, { distance: 1, unit: "line", reverse: true })
      }
    }
  }
}

export default QuoteBackspace
