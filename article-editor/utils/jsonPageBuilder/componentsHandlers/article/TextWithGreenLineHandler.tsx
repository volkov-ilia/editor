import React from "react"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ArticleChildren, TextWithGreenLine } from "hwdtech-admin-components"
import textLinkPrepareData from "../../textLinkPrepareData"

const Handler: ComponentHandlerFC = ({ component }) => {
  const componentName = "TextWithGreenLine"
  const fields = {
    id: get(component, "id"),
    key: get(component, "id"),
    children: textLinkPrepareData(get(component, "text"), componentName),
  }

  const requiredFields = ["id", "text"]

  checkRequiredFields(component, requiredFields, componentName)

  return (
    <ArticleChildren>
      <TextWithGreenLine {...fields} />
    </ArticleChildren>
  )
}

export default Handler
