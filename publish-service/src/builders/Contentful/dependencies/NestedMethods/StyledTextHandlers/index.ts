import Contentful from "../../../../../types/Contentful"
import { map, get, size, camelCase, find } from "lodash"
import childrenHandlers from "./ChildrenHandlers"
import checkChildrenType from "./CheckChildrenType"
import { SlateComponent } from "../../../../../types/SlateComponent"

class StyledTextHandlers {
  paragraph: Contentful.FormattedTextHandler = (arg) => {
    const children = arg.children as SlateComponent[]
    const processedChildren = map(children, (child) => {
      const componentJsonType = checkChildrenType(child)
      const handler = get(childrenHandlers, componentJsonType)
      if (handler) return handler(child)
    })
    return (size(processedChildren) > 1 ? processedChildren : get(processedChildren, [0])) as Contentful.JsonFewText
  }
  SecondHeader: Contentful.FormattedTextHandler = (arg) => {
    const children = arg.children as SlateComponent[]
    const type = camelCase(arg.type)
    const processedHeaderText = get(children, "[0].text") as string
    return {
      type,
      text: processedHeaderText,
    }
  }
  ThirdHeader: Contentful.FormattedTextHandler = (arg) => {
    return this.SecondHeader(arg)
  }
  OrderedList: Contentful.FormattedTextHandler = (arg) => {
    const children = arg.children as SlateComponent[]
    const type = camelCase(arg.type)
    const processedListItems = map(children, (child) => {
      return this.paragraph(child)
    })
    return {
      type,
      text: processedListItems,
    } as Contentful.ChildrenHandlerReturnType
  }
  UnorderedList: Contentful.FormattedTextHandler = (arg) => {
    return this.OrderedList(arg)
  }
}

export default new StyledTextHandlers()
