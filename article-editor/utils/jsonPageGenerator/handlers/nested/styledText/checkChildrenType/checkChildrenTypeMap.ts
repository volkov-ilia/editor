import checkStyledText from "./checkStyledText"
import checkNewLineSymbol from "./checkNewLineSymbol"
import checkSimpleText from "./checkSimpleText"
import STYLED_TEXT from "../childrenTypes/STYLED_TEXT"
import NEW_LINE_SYMBOL from "../childrenTypes/NEW_LINE_SYMBOL"
import SIMPLE_TEXT from "../childrenTypes/SIMPLE_TEXT"
import TextType from "../../../../../../types/utils/jsonPageGenerator/TextType"
import LINK from "../childrenTypes/LINK"
import checkLink from "./checkLink"
import { Descendant } from "slate"

const checkChildrenTypeMap: {
  [key: string]: (component: Descendant) => TextType
} = {
  [STYLED_TEXT]: checkStyledText,
  [NEW_LINE_SYMBOL]: checkNewLineSymbol,
  [SIMPLE_TEXT]: checkSimpleText,
  [LINK]: checkLink,
}

export default checkChildrenTypeMap
