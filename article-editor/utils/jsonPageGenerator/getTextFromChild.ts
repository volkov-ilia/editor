import { Descendant } from "slate"
import get from "lodash/get"

const getTextFromChild = (parent: Descendant, childIdx = 0) => {
  return get(parent, `children[${childIdx}].text`)
}

export default getTextFromChild
