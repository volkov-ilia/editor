import isEmpty from "lodash/isEmpty"
import hasOnlyStringTextField from "./hasOnlyStringTextField"
import NEW_LINE_SYMBOL from "../childrenTypes/NEW_LINE_SYMBOL"
import { Descendant } from "slate"

const check = (component: Descendant) => {
  const onlyTextString = hasOnlyStringTextField(component)
  if (!onlyTextString) return { type: NEW_LINE_SYMBOL, isThisType: false }
  return { type: NEW_LINE_SYMBOL, isThisType: !!isEmpty(component["text"]) }
}

export default check
