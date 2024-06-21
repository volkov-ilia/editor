import { checkRequiredFields } from "../../../checkRequiredFields"
import { nestedFieldPathBuilder } from "../../../messages"
import get from "lodash/get"
import { NestedComponentHandlerFunc } from "../../../../../types/utils/jsonPageBuilder/ComponentHandler"

const LinkHandler: NestedComponentHandlerFunc = ({ component, parentComponentName }) => {
  if (component) {
    const componentName = nestedFieldPathBuilder(parentComponentName, "Link")
    const fields = {
      linkTitle: get(component, "linkTitle"),
      href: get(component, "href"),
    }
    const requiredFields = ["linkTitle", "href"]

    checkRequiredFields(component, requiredFields, componentName)

    return fields
  }
  return {}
}

export default LinkHandler
