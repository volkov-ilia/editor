import Contentful from "../../../../../types/Contentful"
import { find, includes, intersection, isEmpty, keys, size } from "lodash"
import textFormats from "./textFormats"
import { LINK } from "../../TypesVariables"
import { SlateComponent } from "../../../../../types/SlateComponent"

class CheckChildrenType {
  public static checkType(component: SlateComponent) {
    const allTypes = [
      CheckChildrenType.checkStyledText(component),
      CheckChildrenType.checkSimpleText(component),
      CheckChildrenType.checkNewLineSymbol(component),
      CheckChildrenType.checkLink(component),
    ]
    const resultType = find(allTypes, "isThisType")
    return resultType ? resultType.type : "undefined"
  }

  private static checkStyledText(component: SlateComponent) {
    const formatKeys = intersection(keys(component), textFormats)
    return { type: "styledText", isThisType: size(formatKeys) > 0 }
  }

  private static checkSimpleText(component: SlateComponent) {
    const onlyTextString = CheckChildrenType.hasOnlyStringTextField(component)
    if (!onlyTextString) return { type: "simpleText", isThisType: false }
    if (!((size(component) === 1 && component.text) || (size(component) === 2 && component.type && component.text)))
      return {
        type: "simpleText",
        isThisType: false,
      }
    if (size(component) !== 1) return { type: "simpleText", isThisType: false }
    return { type: "simpleText", isThisType: !isEmpty(component["text"]) }
  }

  private static checkNewLineSymbol(component: SlateComponent) {
    const onlyTextString = CheckChildrenType.hasOnlyStringTextField(component)
    if (!onlyTextString) return { type: "newLineSymbol", isThisType: false }
    return { type: "newLineSymbol", isThisType: !!isEmpty(component["text"]) }
  }

  private static checkLink(component: SlateComponent) {
    const linkFields = ["url", "title"]
    const formatKeys = intersection(keys(component), linkFields)
    return { type: LINK, isThisType: size(formatKeys) === size(linkFields) }
  }

  private static hasOnlyStringTextField(component: SlateComponent) {
    const firstKeys = keys(component)
    if (size(firstKeys) !== 1 && !includes(firstKeys, "text")) return false
    return typeof component["text"] === "string"
  }
}

export default CheckChildrenType.checkType
