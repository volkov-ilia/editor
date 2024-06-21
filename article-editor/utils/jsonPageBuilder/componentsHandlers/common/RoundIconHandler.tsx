import { nestedFieldPathBuilder } from "../../messages"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import React from "react"
import { iconColorsMapper, RoundIcon } from "hwdtech-admin-components"
import { icons } from "hwdtech-admin-components"
import IStringJson from "../../../../types/utils/contentful/IStringJson"
import { NestedComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"

const RoundIconHandler: NestedComponentHandlerFC = ({ component, parentComponentName }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "RoundIcon")
  const fields = {
    icon: (icons as IStringJson)[get(component, "icon") as string],
    iconColor: (iconColorsMapper as IStringJson)[get(component, "iconColor") as string],
    className: get(component, "className"),
    ampStyle: get(component, "ampStyle"),
    size: get(component, "size"),
  }

  const requiredFields = ["icon", "iconColor"]

  checkRequiredFields(component, requiredFields, componentName)

  return <RoundIcon {...fields} />
}

export default RoundIconHandler
