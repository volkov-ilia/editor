import TEXT_CENTER from "../../../../../slate/globalValues/leafs/TEXT_CENTER"
import TEXT_RIGHT from "../../../../../slate/globalValues/leafs/TEXT_RIGHT"
import TEXT_LEFT from "../../../../../slate/globalValues/leafs/TEXT_LEFT"
import textCenterNorm from "./textCenterNorm"
import textRightNorm from "./textRightNorm"
import textLeftNorm from "./textLeftNorm"
import defaultNorm from "./defaultNorm"
import { Descendant } from "slate"
import DESCRIPTION from "../../../../../slate/globalValues/article/nestedTypes/DESCRIPTION"
import descriptionNorm from "./descriptionNorm"
import QUOTE_TEXT from "../../../../../slate/globalValues/article/nestedTypes/QUOTE_TEXT"

const childrenNormalizerMap: {
  [key: string]: (component: Descendant) => Descendant
} = {
  [TEXT_CENTER]: textCenterNorm,
  [TEXT_RIGHT]: textRightNorm,
  [TEXT_LEFT]: textLeftNorm,
  [DESCRIPTION]: descriptionNorm,
  [QUOTE_TEXT]: descriptionNorm,
  default: defaultNorm,
}

export default childrenNormalizerMap
