import React from "react"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ArticleChildren, ImageWithSize } from "hwdtech-admin-components"
import ImageComponentHandler from "../common/nestedComponents/ImageComponentHandler"
import { NestedMap } from "../../../../types/utils/jsonPageBuilder/ParsedPage"

const Handler: ComponentHandlerFC = ({ component }) => {
  const componentName = "ImageWithSize"
  const fields = {
    id: get(component, "id"),
    key: get(component, "id"),
    children: ImageComponentHandler({
      component: get(component, "image") as NestedMap,
      parentComponentName: componentName,
    }),
  }

  const requiredFields = ["id", "image"]

  checkRequiredFields(component, requiredFields, componentName)

  return (
    <ArticleChildren>
      <ImageWithSize {...fields} />
    </ArticleChildren>
  )
}

export default Handler
