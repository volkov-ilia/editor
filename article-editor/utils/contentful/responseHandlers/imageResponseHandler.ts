import get from "lodash/get"
import indexOf from "lodash/indexOf"
import { NextApiResponse } from "next"

const handler = (response: NextApiResponse) => {
  const url = get(response, "data.fields.file.en-US.url")
  const req = get(response, "request.responseURL")
  const protocol = indexOf(req, "localhost") === -1 ? "https" : "http"
  return { url: `${protocol}:${url}` }
}

export default handler
