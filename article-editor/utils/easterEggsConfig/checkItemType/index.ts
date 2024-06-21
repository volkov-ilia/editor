import checkAllTypes from "./checkAllTypes"
import find from "lodash/find"
import ComponentTypeBuilderProps from "../../../types/utils/easterEggsConfig/ComponentTypeBuilderProps"

const checkType = ({ component, item }: ComponentTypeBuilderProps) => {
  const allTypes = checkAllTypes({ component, item })
  return find(allTypes, "isThisType")
}

export default checkType
