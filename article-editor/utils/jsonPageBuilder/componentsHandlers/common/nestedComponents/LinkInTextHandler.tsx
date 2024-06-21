import { nestedFieldPathBuilder } from "../../../messages"
import get from "lodash/get"
import { checkRequiredFields } from "../../../checkRequiredFields"
import { LinkInText } from "hwdtech-admin-components"
import React from "react"
import { NestedComponentHandlerFC } from "../../../../../types/utils/jsonPageBuilder/ComponentHandler"

const LinkInTextHandler: NestedComponentHandlerFC = ({ component, parentComponentName }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "Text")
  const fields = {
    linkTitle: get(component, "linkTitle"),
    withNoColor: get(component, "withNoColor"),
    children: get(component, "text"),
    href: get(component, "href"),
  }

  const requiredFields = ["href", "linkTitle", "text"]

  checkRequiredFields(component, requiredFields, componentName)

  return <LinkInText {...fields} />
}

export default LinkInTextHandler
