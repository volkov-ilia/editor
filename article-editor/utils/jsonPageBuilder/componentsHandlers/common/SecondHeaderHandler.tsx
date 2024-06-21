import React from "react"
import { NestedComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import { SecondHeader } from "hwdtech-admin-components"
import { nestedFieldPathBuilder } from "../../messages"

const Handler: NestedComponentHandlerFC = ({ component, parentComponentName }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "SecondHeader")
  const fields = {
    id: get(component, "id"),
    key: get(component, "id"),
    children: get(component, "text"),
  }

  const requiredFields = ["id", "text"]

  checkRequiredFields(component, requiredFields, componentName)

  return <SecondHeader {...fields} />
}

export default Handler
