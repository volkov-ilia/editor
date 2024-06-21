import size from "lodash/size"
import intersection from "lodash/intersection"
import keys from "lodash/keys"
import LINK from "../childrenTypes/LINK"
import { Descendant } from "slate"

const check = (component: Descendant) => {
  const linkFields = ["url", "title"]
  const formatKeys = intersection(keys(component), linkFields)
  return { type: LINK, isThisType: size(formatKeys) === size(linkFields) }
}

export default check
