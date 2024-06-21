import React, { ReactElement } from "react"
import { NestedComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import get from "lodash/get"
import map from "lodash/map"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ArticleChildren, UnorderedList } from "hwdtech-admin-components"
import ListItemHandler from "./nested/ListItemHandler"
import { nestedFieldPathBuilder } from "../../messages"
import { NestedNestedMap } from "../../../../types/utils/jsonPageBuilder/ParsedPage"

const Handler: NestedComponentHandlerFC = ({ component, parentComponentName }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "UnorderedList")
  const fields = {
    key: get(component, "id"),
    children: get(component, "text") as NestedNestedMap[] | ReactElement[],
  }

  if (fields.children) {
    fields.children = map(
      fields.children as NestedNestedMap[],
      (item) =>
        ListItemHandler({
          component: { item },
          parentComponentName: componentName,
        }) as ReactElement
    )
  }

  const requiredFields = ["text"]

  checkRequiredFields(component, requiredFields, componentName)

  return (
    <ArticleChildren>
      <UnorderedList {...fields} />
    </ArticleChildren>
  )
}

export default Handler
