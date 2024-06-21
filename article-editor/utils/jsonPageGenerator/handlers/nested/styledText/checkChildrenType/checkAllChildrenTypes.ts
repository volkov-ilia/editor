import checkStyledText from "./checkStyledText"
import checkSimpleText from "./checkSimpleText"
import checkNewLineSymbol from "./checkNewLineSymbol"
import checkLink from "./checkLink"
import { Descendant } from "slate"

const checkAllTypes = (component: Descendant) => [
  checkStyledText(component),
  checkSimpleText(component),
  checkNewLineSymbol(component),
  checkLink(component),
]

export default checkAllTypes
