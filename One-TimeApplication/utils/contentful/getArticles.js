import initializeClient from "./contentfulTool"
import get from "lodash/get"
import errorHandler from "../errorHandler"

export const getArticles = async (req) => {
  const query = get(req, "query")
  const type = get(query, "type")
  const locale = get(query, "locale")
  try {
    const client = initializeClient(locale)
    const entries = await client.getEntries(type, query)
    return get(entries, "items")
  } catch (e) {
    return errorHandler(e)
  }
}
