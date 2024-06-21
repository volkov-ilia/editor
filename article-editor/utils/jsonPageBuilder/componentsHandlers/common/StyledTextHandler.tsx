import { nestedFieldPathBuilder } from "../../messages"
import get from "lodash/get"
import forEach from "lodash/forEach"
import { checkRequiredFields } from "../../checkRequiredFields"
import React from "react"
import { NestedComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"

const StyledTextHandler: NestedComponentHandlerFC = ({ component, parentComponentName }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "")
  const fields: { children: string; style: { [key: string]: string } } = {
    children: get(component, "text") as string,
    style: {},
  }

  const styles = get(component, "styles") as unknown as string[]

  const stylesValues = {
    bold: { name: "fontWeight", value: "bold" },
    underline: { name: "textDecoration", value: "underline" },
    lineThrough: { name: "textDecoration", value: "line-through" },
    strike: { name: "textDecoration", value: "line-through" },
    overline: { name: "textDecoration", value: "overline" },
    italic: { name: "fontStyle", value: "italic" },
  }

  if (styles) {
    forEach(styles, (s) => {
      const currentStyle = get(stylesValues, s)
      if (currentStyle) {
        const { name: styleName, value: currentValue } = currentStyle
        const oldValue = get(fields.style, styleName)
        fields.style[styleName] = oldValue && oldValue !== currentValue ? `${oldValue} ${currentValue}` : currentValue
      }
    })
  }

  const requiredFields = ["styles", "text"]

  checkRequiredFields(component, requiredFields, componentName)

  return <span {...fields} />
}

export default StyledTextHandler
