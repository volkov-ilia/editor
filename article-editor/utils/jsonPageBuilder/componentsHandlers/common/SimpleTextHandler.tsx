import get from "lodash/get"
import { isString } from "lodash"
import React from "react"
import { themeColorsColors } from "hwdtech-admin-components"
import { ComponentHandlerFunc } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import IStringJson from "../../../../types/utils/contentful/IStringJson"

const SimpleTextHandler: ComponentHandlerFunc = ({ component }) => {
  const fields = {
    children: isString(component) ? component : get(component, "text"),
    style: {
      color: (themeColorsColors as IStringJson)[get(component, "color")],
    },
  }

  return fields.style ? <span {...fields} /> : fields.children
}

export default SimpleTextHandler
