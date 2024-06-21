import QuoteBackspace from "./onKeyDownActions/QuoteBackspace"
import QUOTE from "../globalValues/article/QUOTE"
import IMAGE_COLUMN_WITH_TEXT from "../globalValues/article/IMAGE_COLUMN_WITH_TEXT"
import CODE from "../globalValues/article/CODE"

const onKeyDownElementActions = {
  [QUOTE]: {
    Backspace: QuoteBackspace,
  },
  [IMAGE_COLUMN_WITH_TEXT]: {
    Backspace: QuoteBackspace,
  },
  [CODE]: {
    Backspace: QuoteBackspace,
  },
  default: {},
}

export default onKeyDownElementActions
