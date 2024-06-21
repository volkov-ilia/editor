import React from "react"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ArticleChildren, ArticleText } from "hwdtech-admin-components"
import textLinkPrepareData from "../../textLinkPrepareData"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"

const Handler: ComponentHandlerFC = ({ component }) => {
  const componentName = "ArticleText"
  const fields = {
    id: get(component, "id"),
    key: get(component, "id"),
    children: textLinkPrepareData(get(component, "text"), componentName),
  }

  const requiredFields = ["id", "text"]

  checkRequiredFields(component, requiredFields, componentName)

  return (
    <ArticleChildren>
      {" "}
      <ArticleText {...fields} />{" "}
    </ArticleChildren>
  )
}

export default Handler
