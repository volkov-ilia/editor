import ContClient from "./client"
import get from "lodash/get"
import EditorRequest from "../types/api/EditorRequest"
import getArgs from "./getArgs"
import ContClientArgs from "../../types/utils/contentful/ContClientArgs"

export const getAssets = async (req: EditorRequest) => {
  const query = get(req, "query")
  const locale = get(query, "locale") as string
  const clientArgs = getArgs(locale)
  const client = new ContClient(clientArgs as ContClientArgs)
  const assets = await client.getAssets(query)
  if (get(query, "single")) {
    return get(assets, "items[0]")
  }
  return get(assets, "items")
}
