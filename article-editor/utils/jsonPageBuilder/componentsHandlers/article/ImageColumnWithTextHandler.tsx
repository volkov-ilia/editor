import React from "react"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ArticleChildren, ImageColumnWithText } from "hwdtech-admin-components"
import textLinkPrepareData from "../../textLinkPrepareData"
import ImageComponentHandler from "../common/nestedComponents/ImageComponentHandler"
import { NestedMap } from "../../../../types/utils/jsonPageBuilder/ParsedPage"

const Handler: ComponentHandlerFC = ({ component }) => {
  const componentName = "ImageColumnWithText"
  const fields = {
    id: get(component, "id"),
    key: get(component, "id"),
    children: ImageComponentHandler({
      component: get(component, "image") as NestedMap,
      parentComponentName: componentName,
    }),
    text: textLinkPrepareData(get(component, "text"), componentName),
  }

  const requiredFields = ["id", "text"]

  checkRequiredFields(component, requiredFields, componentName)

  return (
    <ArticleChildren>
      <ImageColumnWithText {...fields} />
    </ArticleChildren>
  )
}

export default Handler
