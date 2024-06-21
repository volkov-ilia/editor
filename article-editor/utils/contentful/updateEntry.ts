import ContClient from "./client"
import get from "lodash/get"
import getByType from "./getByType"
import dataBuilders from "./dataBuilders"
import EditorRequest from "../types/api/EditorRequest"
import { Entry } from "contentful-management/types"
import commonErrorHandler from "../commonErrorHandler"
import dataBuilderTypeToEvnMap from "./dataBuilderTypeToEvnMap"
import getArgs from "./getArgs"

export const updateEntry: (req: EditorRequest) => Promise<Entry | { message: string } | undefined> = async (req) => {
  try {
    const type = get(req, "body.contentfulFieldsType[0]")
    const pageId = get(req, "body.slug[0]")
    const slug = get(req, "body.slug[0]")
    const path = get(req, "body.path[0]")
    const publicationDate = new Date(get(req, "body.publicationDate[0]"))
    const json = JSON.parse(get(req, "body.json[0]"))
    const locale = get(req, "body.locale[0]")
    const form = get(req, "body.form[0]") && JSON.parse(get(req, "body.form[0]"))
    const clientArgs = getArgs(locale)
    const client = new ContClient(clientArgs)
    const jsonDataBuilder = getByType(dataBuilders, type, `There is no file data builder for ${type}`)
    const fileEntryData = jsonDataBuilder({
      pageId,
      slug,
      path,
      json,
      form,
      publicationDate,
    })
    const page = await client.getEntries(dataBuilderTypeToEvnMap[type], {
      id: slug,
    })
    const item = page.items[0]
    item.fields = fileEntryData.fields
    return await item.update()
  } catch (e) {
    return commonErrorHandler(e)
  }
}
