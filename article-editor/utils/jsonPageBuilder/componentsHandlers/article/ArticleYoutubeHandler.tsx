import React, { ReactElement } from "react"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ArticleChildren, ArticleYoutube } from "hwdtech-admin-components"
import ImageComponentHandler from "../common/nestedComponents/ImageComponentHandler"
import { NestedMap } from "../../../../types/utils/jsonPageBuilder/ParsedPage"

const Handler: ComponentHandlerFC = ({ component }) => {
  const componentName = "ArticleYoutube"
  const fields = {
    id: get(component, "id"),
    key: get(component, "id"),
    previewImage: get(component, "previewImage") as NestedMap | ReactElement,
    videoId: get(component, "videoId"),
    title: get(component, "title"),
  }

  const requiredFields = ["id", "previewImage", "videoId"]

  if (fields.previewImage) {
    const image = fields.previewImage as NestedMap
    fields.previewImage = ImageComponentHandler({
      component: {
        src: image.src,
        alt: image.alt,
        easterEggs: image.easterEggs,
        width: image.width,
        height: image.height,
      },
      parentComponentName: componentName,
    }) as ReactElement
  }

  checkRequiredFields(component, requiredFields, componentName)

  return (
    <ArticleChildren>
      <ArticleYoutube {...fields} />
    </ArticleChildren>
  )
}

export default Handler
