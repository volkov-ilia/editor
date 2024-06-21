import React from "react"
import get from "lodash/get"
import { checkRequiredFields } from "../../../checkRequiredFields"
import { ImageCarouselItem } from "hwdtech-admin-components"
import { NestedComponentHandlerFC } from "../../../../../types/utils/jsonPageBuilder/ComponentHandler"
import { nestedFieldPathBuilder } from "../../../messages"

const Handler: NestedComponentHandlerFC = ({ component, parentComponentName }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "ImageCarouselItem")
  const fields = {
    key: get(component, "id"),
    src: get(component, "src"),
    description: get(component, "description"),
    alt: get(component, "alt"),
    width: get(component, "width"),
    height: get(component, "height"),
  }

  const requiredFields = ["id", "src", "alt", "width", "height"]

  checkRequiredFields(component, requiredFields, componentName)

  return <ImageCarouselItem {...fields} />
}

export default Handler
