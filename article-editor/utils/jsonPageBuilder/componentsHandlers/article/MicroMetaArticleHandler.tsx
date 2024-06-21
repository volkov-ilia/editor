import React from "react"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import { MicroMetaArticle } from "../../../../ui/components/MicroMetaArticle"
import { getMetaPost } from "../../../meta/getMetaPost"
import IStringJson from "../../../../types/utils/contentful/IStringJson"
import MicroMetaArticleType from "../../../../types/utils/jsonPageBuilder/MicroMetaArticleType"
import MicroMetaArticlePreparedType from "../../../../types/utils/jsonPageGenerator/MicroMetaArticlePreparedType"

const Handler: ComponentHandlerFC = ({ component }) => {
  const componentName = "MicroMetaArticle"
  const fields = {
    data: getMetaPost(component as IStringJson as MicroMetaArticlePreparedType) as MicroMetaArticleType,
  }

  const requiredFields = ["headline", "description", "modifiedDate", "datePublished", "previewImage", "path", "slug"]

  checkRequiredFields(component, requiredFields, componentName)

  return <MicroMetaArticle {...fields} />
}

export default Handler
