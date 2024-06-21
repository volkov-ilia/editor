import React from "react"
import get from "lodash/get"
import { EasterEgg } from "hwdtech-admin-components"
import { checkRequiredFields } from "../../../checkRequiredFields"
import { nestedFieldPathBuilder } from "../../../messages"
import { v4 as key } from "uuid"
import { NestedComponentHandlerFC } from "../../../../../types/utils/jsonPageBuilder/ComponentHandler"

const Handler: NestedComponentHandlerFC = ({ component, parentComponentName }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "EasterEgg")
  const fields = {
    key: key(),
    posX: get(component, "posX"),
    posY: get(component, "posY"),
    textSize: get(component, "textSize"),
    icon: get(component, "icon"),
    color: get(component, "color"),
    bg: get(component, "bg"),
    hover: get(component, "hover"),
    rotate: get(component, "rotate"),
    path: componentName,
  }

  const requiredFields = ["posX", "posY", "textSize", "icon", "color"]

  checkRequiredFields(component, requiredFields, componentName)

  return <EasterEgg {...fields} />
}

export default Handler
