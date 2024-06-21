import React, { ReactElement } from "react"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ArticleChildren, Code } from "hwdtech-admin-components"
import StringCodeDecorator from "./nested/StringCodeDecorator"
import { Token } from "prismjs"
import split from "lodash/split"
import map from "lodash/map"

const Handler: ComponentHandlerFC = ({ component }) => {
  const componentName = "Code"
  const fields = {
    id: get(component, "id"),
    key: get(component, "id"),
    children: get(component, "code") as
      | string
      | (string | Token)[]
      | ReactElement
      | ReactElement[]
      | (ReactElement | ReactElement[])[],
    language: get(component, "language"),
  }

  if (fields.children) {
    const lines = split(fields.children as string, "\n")
    fields.children = map(lines, (line) => <span>{StringCodeDecorator(fields.language as string, line)}</span>)
  }

  const requiredFields = ["id", "code", "language"]

  checkRequiredFields(component, requiredFields, componentName)

  return (
    <ArticleChildren>
      <Code {...fields} />
    </ArticleChildren>
  )
}

export default Handler
