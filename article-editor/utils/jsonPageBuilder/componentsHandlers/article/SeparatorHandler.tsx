import React from "react"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ArticleChildren, Separator } from "hwdtech-admin-components"

const Handler: ComponentHandlerFC = ({ component }) => {
  const componentName = "Separator"
  const fields = {
    key: get(component, "id"),
  }

  const requiredFields = ["id"]

  checkRequiredFields(component, requiredFields, componentName)

  return (
    <ArticleChildren>
      <Separator {...fields} />
    </ArticleChildren>
  )
}

export default Handler
