import ContClient from "./client"
import get from "lodash/get"
import getByType from "./getByType"
import dataBuilders from "./dataBuilders"
import EditorRequest from "../types/api/EditorRequest"
import { Entry } from "contentful-management/types"
import commonErrorHandler from "../commonErrorHandler"
import getArgs from "./getArgs"

export const createEntry: (req: EditorRequest) => Promise<Entry | { message: string } | undefined> = async (req) => {
  try {
    const type = get(req, "body.contentfulFieldsType[0]")
    const pageId = get(req, "body.slug[0]")
    const slug = get(req, "body.slug[0]")
    const path = get(req, "body.path[0]")
    const publicationDate = new Date(get(req, "body.publicationDate[0]"))
    const json = JSON.parse(get(req, "body.json[0]"))
    const locale: string = get(req, "body.locale[0]")
    const clientArgs = getArgs(locale)
    const client = new ContClient(clientArgs)
    const jsonDataBuilder = getByType(dataBuilders, type, `There is no data builder for ${type}`)
    const fileEntryData = jsonDataBuilder({
      pageId,
      slug,
      path,
      json,
      publicationDate,
    })
    return await client.createEntry(type, fileEntryData)
  } catch (e) {
    return commonErrorHandler(e)
  }
}
