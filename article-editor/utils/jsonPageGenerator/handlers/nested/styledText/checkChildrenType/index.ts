import find from "lodash/find"
import checkAllChildrenTypes from "./checkAllChildrenTypes"
import { Descendant } from "slate"

const checkType = (component: Descendant) => {
  const allTypes = checkAllChildrenTypes(component)
  const resultType = find(allTypes, "isThisType")
  return resultType ? resultType.type : "undefined"
}

export default checkType
