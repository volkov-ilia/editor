import React from "react"
import get from "lodash/get"
import { MetaOpenGraph } from "hwdtech-admin-components"
import { getSiteNameFromAbsoluteURL } from "../../getAbsoluteUri"
import { checkRequiredFields } from "../../checkRequiredFields"
import textLinkPrepareData from "../../textLinkPrepareData"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"

const MetaOpenGraphHandler: ComponentHandlerFC = ({ component, absoluteURL, isNoIndex }) => {
  const componentName = "MetaOpenGraph"
  const fields = {
    key: get(component, "id"),
    title: get(component, "title"),
    description: textLinkPrepareData(get(component, "description"), componentName, true),
    imageUrl: get(component, "imageUrl"),
  }
  const requiredFields = ["id", "title", "description", "imageUrl"]

  checkRequiredFields(component, requiredFields, componentName)

  return (
    <MetaOpenGraph
      {...fields}
      siteName={getSiteNameFromAbsoluteURL(absoluteURL as string)}
      uri={absoluteURL}
      isNoIndex={isNoIndex}
    />
  )
}

export default MetaOpenGraphHandler
