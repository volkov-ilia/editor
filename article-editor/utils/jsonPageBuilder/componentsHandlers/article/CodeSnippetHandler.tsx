import React from "react"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ArticleChildren, CodeSnippet } from "hwdtech-admin-components"

const Handler: ComponentHandlerFC = ({ component }) => {
  const componentName = "CodeSnippet"
  const fields = {
    id: get(component, "id"),
    key: get(component, "id"),
    src: get(component, "src"),
    resource: get(component, "resource"),
    iframeId: get(component, "title"),
    heightValue: get(component, "height"),
  }

  const requiredFields = ["id", "src", "resource", "title", "height"]

  checkRequiredFields(component, requiredFields, componentName)

  return (
    <ArticleChildren>
      <CodeSnippet {...fields} />
    </ArticleChildren>
  )
}

export default Handler
