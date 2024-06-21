import React, { ReactElement } from "react"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ArticleChildren, TwoImageWithText } from "hwdtech-admin-components"
import textLinkPrepareData from "../../textLinkPrepareData"
import ImageComponentHandler from "../common/nestedComponents/ImageComponentHandler"
import { NestedMap } from "../../../../types/utils/jsonPageBuilder/ParsedPage"
import map from "lodash/map"

const Handler: ComponentHandlerFC = ({ component }) => {
  const componentName = "TwoImageWithText"
  const fields = {
    id: get(component, "id"),
    key: get(component, "id"),
    children: get(component, "images") as NestedMap[] | ReactElement[],
    text: textLinkPrepareData(get(component, "text"), componentName),
  }

  if (fields.children) {
    fields.children = map(
      fields.children,
      (image) =>
        ImageComponentHandler({
          component: image as NestedMap,
          parentComponentName: componentName,
        }) as ReactElement
    )
  }

  const requiredFields = ["id", "images"]

  checkRequiredFields(component, requiredFields, componentName)

  return (
    <ArticleChildren>
      <TwoImageWithText {...fields} />
    </ArticleChildren>
  )
}

export default Handler
