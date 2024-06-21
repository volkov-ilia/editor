import { nestedFieldPathBuilder } from "../../messages"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import React from "react"
import { icons } from "hwdtech-admin-components"
import { SymbolIcon, themeColorsColors } from "hwdtech-admin-components"
import { NestedComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import IStringJson from "../../../../types/utils/contentful/IStringJson"

const SymbolIconHandler: NestedComponentHandlerFC = ({ component, parentComponentName }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "SymbolIcon")

  const size = (get(component, "size") as string) || "base"

  const iconSizesClassName = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  }

  const iconSizesStyle = {
    xs: { fontSize: "0.75rem" },
    sm: { fontSize: "0.875rem" },
    base: { fontSize: "1rem" },
    lg: { fontSize: "1.125rem" },
    xl: { fontSize: "1.25rem" },
    "2xl": { fontSize: "1.5rem" },
    "3xl": { fontSize: "1.875rem" },
    "4xl": { fontSize: "2.25rem" },
  }

  const fields = {
    icon: get(icons, `component.icon`),
    color: (themeColorsColors as IStringJson)[get(component, "color") as string],
    className: get(iconSizesClassName, size),
    ampStyle: get(iconSizesStyle, size),
  }

  const requiredFields = ["icon"]

  checkRequiredFields(component, requiredFields, componentName)

  return <SymbolIcon {...fields} />
}

export default SymbolIconHandler
