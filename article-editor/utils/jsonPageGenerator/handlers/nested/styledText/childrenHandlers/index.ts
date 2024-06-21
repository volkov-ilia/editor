import NEW_LINE_SYMBOL from "../childrenTypes/NEW_LINE_SYMBOL"
import newLineSymbolHandler from "./newLineSymbolHandler"
import STYLED_TEXT from "../childrenTypes/STYLED_TEXT"
import styledTextHandler from "./styledTextHandler"
import SIMPLE_TEXT from "../childrenTypes/SIMPLE_TEXT"
import simpleTextHandler from "./simpleTextHandler"
import LINK from "../childrenTypes/LINK"
import linkTextHandler from "./linkTextHandler"
import ChildrenHandlerReturnType from "../../../../../../types/utils/jsonPageGenerator/ChildrenHandlerReturnType"
import { Descendant } from "slate"

const map: {
  [key: string]: (component: Descendant) => string | ChildrenHandlerReturnType
} = {
  [NEW_LINE_SYMBOL]: newLineSymbolHandler,
  [STYLED_TEXT]: styledTextHandler,
  [SIMPLE_TEXT]: simpleTextHandler,
  [LINK]: linkTextHandler,
}

export default map
