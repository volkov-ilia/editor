import React from "react"
import get from "lodash/get"
import { MetaTwitter } from "hwdtech-admin-components"
import { checkRequiredFields } from "../../checkRequiredFields"
import textLinkPrepareData from "../../textLinkPrepareData"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"

const MetaTwitterHandler: ComponentHandlerFC = ({ component, absoluteURL, isNoIndex }) => {
  const componentName = "MetaTwitter"
  const fields = {
    key: get(component, "id"),
    title: get(component, "title"),
    description: textLinkPrepareData(get(component, "description"), componentName, true),
    imageUrl: get(component, "imageUrl"),
  }
  const requiredFields = ["id", "title", "description", "imageUrl"]

  checkRequiredFields(component, requiredFields, componentName)

  return <MetaTwitter {...fields} uri={absoluteURL} isNoIndex={isNoIndex} />
}

export default MetaTwitterHandler
