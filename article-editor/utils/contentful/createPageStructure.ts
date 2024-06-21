/* eslint-disable no-console */
import axios from "axios"
import merge from "lodash/merge"
import omit from "lodash/omit"
import {
  DATA_BUILDER_PAGE_STRUCTURE,
  DATA_BUILDER_SLATE_STRUCTURE,
} from "../../types/utils/contentful/CRUDArticlesTypes"
import { PageFieldsTypes } from "../../types/Slate/Components/PageFieldsTypes"
import JsonPage from "../../types/utils/jsonPageBuilder/JsonPage"
import PAGE_FIELDS_NAMES_TO_OMIT from "./PAGE_FIELDS_NAMES_TO_OMIT"

export const createPageStructure = async (
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
  if (checkEntry.data.length === 0) {
    formDataPageStructure.append("contentfulFieldsType", DATA_BUILDER_PAGE_STRUCTURE)
    formDataPageStructure.append("json", json)
    formDataPageStructure.append("locale", locale)
    formDataPageStructure.append("path", path)
    formDataPageStructure.append("slug", slug)
    formDataPageStructure.append("publicationDate", publicationDate)
    formDataPageStructure.append("buttonType", buttonType)
    await axios.post("/api/createEntry", formDataPageStructure, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })

    formDataSlateStructure.append("contentfulFieldsType", DATA_BUILDER_SLATE_STRUCTURE)
    formDataSlateStructure.append("json", slateValue)
    formDataSlateStructure.append("form", formValue)
    formDataSlateStructure.append("path", path)
    formDataSlateStructure.append("slug", slug)
    formDataSlateStructure.append("buttonType", buttonType)
    await axios.post(`/api/createEntry?locale=${locale}`, formDataSlateStructure, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
  } else console.warn(`Entry with slug ${slug} already exist!`)
}
