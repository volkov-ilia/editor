import textFormatsHandler from "./textFormatsHandler"
import STYLED_TEXT from "../childrenTypes/STYLED_TEXT"
import ChildrenHandlerReturnType from "../../../../../../types/utils/jsonPageGenerator/ChildrenHandlerReturnType"
import { Descendant } from "slate"

const handler = (component: Descendant) => {
  const formats = textFormatsHandler(component)
  if (formats.length !== 0) {
    return {
      type: STYLED_TEXT,
      text: component.text,
      styles: formats,
    } as ChildrenHandlerReturnType
  }
}

export default handler
