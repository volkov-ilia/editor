import size from "lodash/size"
import intersection from "lodash/intersection"
import keys from "lodash/keys"
import { textFormats } from "../childrenHandlers/textFormatsHandler"
import STYLED_TEXT from "../childrenTypes/STYLED_TEXT"
import { Descendant } from "slate"

const check = (component: Descendant) => {
  const formatKeys = intersection(keys(component), textFormats)
  return { type: STYLED_TEXT, isThisType: size(formatKeys) > 0 }
}

export default check
