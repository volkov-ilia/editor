/* eslint-disable no-console */
import axios from "axios"
import {
  DATA_BUILDER_PAGE_STRUCTURE,
  DATA_BUILDER_SLATE_STRUCTURE,
} from "../../types/utils/contentful/CRUDArticlesTypes"
import JsonPage from "../../types/utils/jsonPageBuilder/JsonPage"
import { PageFieldsTypes } from "../../types/Slate/Components/PageFieldsTypes"
import merge from "lodash/merge"
import omit from "lodash/omit"
import PAGE_FIELDS_NAMES_TO_OMIT from "./PAGE_FIELDS_NAMES_TO_OMIT"
import { Entry } from "contentful-management/types"
import commonErrorHandler from "../commonErrorHandler"

export const editPageStructure = async (
  buttonType: string,
  jsonPage: JsonPage,
  slateValue: string,
  pageFields: PageFieldsTypes,
  locale: string
) => {
  const json = JSON.stringify(
    merge(jsonPage, {
      articleData: omit(pageFields, PAGE_FIELDS_NAMES_TO_OMIT),
    })
  )
  const formValue = JSON.stringify(pageFields)
  const slug = pageFields.slug
  const path = pageFields.path
  const publicationDate = pageFields.publicationDate || new Date().toLocaleString("en-US")
  const typePageStructure = process.env.NEXT_PUBLIC_CONTENTFUL_PAGE_STRUCTURE_TYPE_ID
  const checkEntry = await axios.get(`/api/getEntries?locale=${locale}&id=${slug}&type=${typePageStructure}`)
  const formDataPageStructure = new FormData()
  const formDataSlateStructure = new FormData()
  if (checkEntry.data.message) {
    console.error(checkEntry.data.message)
    return
  }
  try {
    const data = checkEntry.data as Entry[]
    if (data.length === 1) {
      formDataPageStructure.append("contentfulFieldsType", DATA_BUILDER_PAGE_STRUCTURE)
      formDataPageStructure.append("json", json)
      formDataPageStructure.append("locale", locale)
      formDataPageStructure.append("path", path)
      formDataPageStructure.append("slug", slug)
      formDataPageStructure.append("publicationDate", publicationDate)
      formDataPageStructure.append("buttonType", buttonType)
      await axios.post("/api/updateEntry", formDataPageStructure, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })

      formDataSlateStructure.append("contentfulFieldsType", DATA_BUILDER_SLATE_STRUCTURE)
      formDataSlateStructure.append("json", slateValue)
      formDataSlateStructure.append("locale", locale)
      formDataSlateStructure.append("form", formValue)
      formDataSlateStructure.append("path", path)
      formDataSlateStructure.append("slug", slug)
      formDataSlateStructure.append("buttonType", buttonType)

      await axios.post("/api/updateEntry", formDataSlateStructure, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
    } else console.warn(`Entry with slug ${slug} not exist!`)
  } catch (e) {
    commonErrorHandler(e)
  }
}
