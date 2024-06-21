import fields from "./fields"
import get from "lodash/get"

const getFieldsByElementType = (type: string) => {
  return get(fields, type)
}

export default getFieldsByElementType
