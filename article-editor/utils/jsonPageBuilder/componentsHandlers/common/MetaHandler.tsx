import React from "react"
import get from "lodash/get"
import { Meta } from "hwdtech-admin-components"
import { checkRequiredFields } from "../../checkRequiredFields"
import textLinkPrepareData from "../../textLinkPrepareData"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"

const MetaHandler: ComponentHandlerFC = ({ component, absoluteURL, isNoIndex }) => {
  const componentName = "Meta"
  const fields = {
    key: get(component, "id"),
    title: get(component, "title"),
    description: textLinkPrepareData(get(component, "description"), componentName, true),
    keywords: get(component, "keywords"),
  }
  const requiredFields = ["id", "title", "description", "keywords"]

  checkRequiredFields(component, requiredFields, componentName)

  return <Meta {...fields} uri={absoluteURL} isNoIndex={isNoIndex} />
}

export default MetaHandler
