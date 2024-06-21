import React, { ReactElement } from "react"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import get from "lodash/get"
import map from "lodash/map"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ArticleChildren, ImageCarousel } from "hwdtech-admin-components"
import { NestedMap } from "../../../../types/utils/jsonPageBuilder/ParsedPage"
import ImageCarouselItemHandler from "./nested/ImageCarouselItemHandler"

const Handler: ComponentHandlerFC = ({ component }) => {
  const componentName = "ImageCarousel"
  const fields = {
    id: get(component, "id"),
    key: get(component, "id"),
    children: get(component, "images") as NestedMap[] | ReactElement[],
  }

  if (fields.children) {
    fields.children = map(fields.children as NestedMap[], (image) => {
      return ImageCarouselItemHandler({
        component: image,
        parentComponentName: componentName,
      }) as ReactElement
    })
  }

  const requiredFields = ["id", "text", "images"]

  checkRequiredFields(component, requiredFields, componentName)

  return (
    <ArticleChildren>
      <ImageCarousel {...fields} />
    </ArticleChildren>
  )
}

export default Handler
