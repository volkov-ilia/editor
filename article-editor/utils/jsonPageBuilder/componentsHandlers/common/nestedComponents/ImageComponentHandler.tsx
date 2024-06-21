import get from "lodash/get"
import { ImageComponent } from "hwdtech-admin-components"
import React from "react"
import { checkRequiredFields } from "../../../checkRequiredFields"
import { nestedFieldPathBuilder } from "../../../messages"
import easterEggsListHandler from "../../../easterEggsListHandler"
import { NestedComponentHandlerFC } from "../../../../../types/utils/jsonPageBuilder/ComponentHandler"
import { NestedMap } from "../../../../../types/utils/jsonPageBuilder/ParsedPage"

const ImageComponentHandler: NestedComponentHandlerFC = ({ component, parentComponentName }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "ImageComponent")
  const fields = {
    src: get(component, "src"),
    alt: get(component, "alt"),
    width: get(component, "width"),
    height: get(component, "height"),
    ampWidth: get(component, "ampWidth"),
    ampHeight: get(component, "ampHeight"),
    classNameImage: get(component, "classNameImage"),
    ampStyleImg: get(component, "ampStyleImg"),
    responsive: get(component, "responsive"),
    easterEggs: easterEggsListHandler(get(component, "easterEggs") as NestedMap[], componentName),
  }

  const requiredFields = ["src", "alt"]

  checkRequiredFields(component, requiredFields, componentName)

  return <ImageComponent {...fields} />
}

export default ImageComponentHandler
