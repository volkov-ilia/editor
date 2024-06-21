import React from "react"
import get from "lodash/get"
import { checkRequiredFields } from "../../../checkRequiredFields"
import { ListItemComponentHandlerFC } from "../../../../../types/utils/jsonPageBuilder/ComponentHandler"
import { nestedFieldPathBuilder } from "../../../messages"
import textLinkPrepareData from "../../../textLinkPrepareData"
import { UnorderedListItem } from "hwdtech-admin-components"

const Handler: ListItemComponentHandlerFC = ({ component, parentComponentName }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "ListItem")
  const fields = {
    children: textLinkPrepareData(get(component, "item"), componentName),
  }

  const isOrdered = get(component, "isOrdered")

  const requiredFields = ["item"]

  checkRequiredFields(component, requiredFields, componentName)

  return isOrdered ? <li {...fields} /> : <UnorderedListItem {...fields} />
}

export default Handler
