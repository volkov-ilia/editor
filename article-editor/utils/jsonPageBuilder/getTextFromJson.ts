import isArray from "lodash/isArray"
import isString from "lodash/isString"
import forEach from "lodash/forEach"
import get from "lodash/get"
import { removeSpaceOnStartAndEnd } from "./titleFormatter"
import TextJson from "../../types/utils/jsonPageBuilder/TextJson"
import { NestedNestedMap, NestedNestedMapChild } from "../../types/utils/jsonPageBuilder/ParsedPage"

const getTextFromJson = (textJson: NestedNestedMap | NestedNestedMapChild | TextJson) => {
  const text = []
  if (isString(textJson)) {
    text.push(removeSpaceOnStartAndEnd(textJson))
  }
  if (isArray(textJson)) {
    forEach(textJson, (item) => {
      const textItem = get(item, "text") ? get(item, "text") : item
      text.push(getTextFromJson(textItem))
    })
  }
  return text.join(" ")
}

export default getTextFromJson
