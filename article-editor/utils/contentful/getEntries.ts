import ContClient from "./client"
import get from "lodash/get"
import EditorRequest from "../types/api/EditorRequest"
import getArgs from "./getArgs"
import ContClientArgs from "../../types/utils/contentful/ContClientArgs"
import commonErrorHandler from "../commonErrorHandler"

export const getEntries = async (req: EditorRequest) => {
  const query = get(req, "query")
  const type = get(query, "type") as string
  const locale = get(query, "locale") as string
  const clientArgs = getArgs(locale)
  try {
    const client = new ContClient(clientArgs as ContClientArgs)
    const assets = await client.getEntries(type, query)
    if (get(query, "single")) {
      return get(assets, "items[0]")
    }
    return get(assets, "items")
  } catch (e) {
    return commonErrorHandler(e)
  }
}
