import get from "lodash/get"
import getByType from "./getByType"
import dataBuilders from "./dataBuilders"
import * as fs from "fs"
import EditorRequest from "../types/api/EditorRequest"
import { Asset } from "contentful-management/types"
import ContClient from "./client"
import getArgs from "./getArgs"
import ContClientArgs from "../../types/utils/contentful/ContClientArgs"
import commonErrorHandler from "../commonErrorHandler"

export const createAsset: (req: EditorRequest) => Promise<Asset | { message: string }> = async (req) => {
  try {
    const fileData = get(req, "files.file[0]")
    const fileType = get(fileData, "headers.content-type")
    const fileName = get(fileData, "originalFilename")
    const file = fs.readFileSync(get(fileData, "path"))
    const type = get(req, "body.contentfulFieldsType[0]")
    const description = get(req, "body.fileHash[0]")
    const locale = get(req, "query.locale")
    const clientArgs = getArgs(locale)
    const client = new ContClient(clientArgs as ContClientArgs)
    const upload = await client.createUpload(file)
    const fileDataBuilder = getByType(dataBuilders, type, `There is no file data builder for ${type}`)
    const fileAssetData = fileDataBuilder({
      assetName: fileName,
      fileName,
      fileType,
      upload,
      description,
    })
    const asset = await client.createAsset(fileAssetData)
    const processedAsset = await asset.processForAllLocales()

    return await processedAsset.publish()
  } catch (e) {
    return commonErrorHandler(e)
  }
}
