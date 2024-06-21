import get from "lodash/get"
import { FormattedTextHandler } from "../../../../../types/utils/jsonPageGenerator/NodeHandler"
import checkChildrenType from "./checkChildrenType"
import childrenHandlers from "./childrenHandlers"
import { JsonFewText } from "../../../../../types/utils/jsonPageGenerator/StyledText"
import map from "lodash/map"
import size from "lodash/size"
import { Descendant } from "slate"

const paragraphHandler: FormattedTextHandler = ({ component }) => {
  const children = component.children as Descendant[]
  const processedChildren = map(children, (child) => {
    const componentJsonType = checkChildrenType(child)
    const handler = get(childrenHandlers, componentJsonType)
    if (handler) return handler(child)
  })
  return (size(processedChildren) > 1 ? processedChildren : get(processedChildren, [0])) as JsonFewText
}

export default paragraphHandler
