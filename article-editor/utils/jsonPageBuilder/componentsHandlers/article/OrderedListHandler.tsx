import React, { ReactElement } from "react"
import { NestedComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import get from "lodash/get"
import map from "lodash/map"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ArticleChildren, OrderedList } from "hwdtech-admin-components"
import ListItemHandler from "./nested/ListItemHandler"
import { NestedNestedMap } from "../../../../types/utils/jsonPageBuilder/ParsedPage"
import { nestedFieldPathBuilder } from "../../messages"
import { v4 as uniqueKey } from "uuid"

const Handler: NestedComponentHandlerFC = ({ component, parentComponentName }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "OrderedList")
  const fields = {
    key: get(component, "id") || uniqueKey(),
    children: get(component, "text") as NestedNestedMap[] | ReactElement[],
  }

  if (fields.children) {
    fields.children = map(
      fields.children as NestedNestedMap[],
      (item) =>
        ListItemHandler({
          component: { item, isOrdered: true },
          parentComponentName: componentName,
        }) as ReactElement
    )
  }

  const requiredFields = ["text"]

  checkRequiredFields(component, requiredFields, componentName)

  return (
    <ArticleChildren>
      <OrderedList {...fields} />
    </ArticleChildren>
  )
}

export default Handler
