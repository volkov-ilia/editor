import map from "lodash/map"
import { FormattedTextHandler } from "../../../../../types/utils/jsonPageGenerator/NodeHandler"
import paragraphHandler from "./paragraphHandler"
import ChildrenHandlerReturnType from "../../../../../types/utils/jsonPageGenerator/ChildrenHandlerReturnType"
import camelCase from "lodash/camelCase"
import { Descendant } from "slate"

const listsHandler: FormattedTextHandler = ({ component }) => {
  const children = component.children as Descendant[]
  const type = camelCase(component.type)
  const processedListItems = map(children, (child) => {
    return paragraphHandler({ component: child })
  })
  return {
    type,
    text: processedListItems,
  } as ChildrenHandlerReturnType
}

export default listsHandler
