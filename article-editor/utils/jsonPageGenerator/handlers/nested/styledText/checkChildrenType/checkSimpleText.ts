import hasOnlyStringTextField from "./hasOnlyStringTextField"
import isEmpty from "lodash/isEmpty"
import SIMPLE_TEXT from "../childrenTypes/SIMPLE_TEXT"
import size from "lodash/size"
import { Descendant } from "slate"

const check = (component: Descendant) => {
  const onlyTextString = hasOnlyStringTextField(component)
  if (!onlyTextString) return { type: SIMPLE_TEXT, isThisType: false }
  if (!((size(component) === 1 && component.text) || (size(component) === 2 && component.type && component.text)))
    return {
      type: SIMPLE_TEXT,
      isThisType: false,
    }
  if (size(component) !== 1) return { type: SIMPLE_TEXT, isThisType: false }
  return { type: SIMPLE_TEXT, isThisType: !isEmpty(component["text"]) }
}

export default check
