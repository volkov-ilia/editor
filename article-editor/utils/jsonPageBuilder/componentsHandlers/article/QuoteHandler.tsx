import React from "react"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ArticleChildren, Quote } from "hwdtech-admin-components"
import textLinkPrepareData from "../../textLinkPrepareData"

const Handler: ComponentHandlerFC = ({ component }) => {
  const componentName = "Quote"
  const fields = {
    id: get(component, "id"),
    key: get(component, "id"),
    children: textLinkPrepareData(get(component, "quote"), componentName),
    signature: textLinkPrepareData(get(component, "signature"), componentName),
  }

  const requiredFields = ["id", "quote"]

  checkRequiredFields(component, requiredFields, componentName)

  return (
    <ArticleChildren>
      <Quote {...fields} />
    </ArticleChildren>
  )
}

export default Handler
