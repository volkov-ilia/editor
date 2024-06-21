import nextConnect from "next-connect"
import { NextApiResponse } from "next"
import EditorRequest from "../../utils/types/api/EditorRequest"
import middleware from "../../utils/codeHighlight/middleware"
import get from "lodash/get"
import { publishPageStructure } from "../../utils/contentful/publishPageStructure"
import { updateEntry } from "../../utils/contentful/updateEntry"
import EntryResult from "../../types/utils/contentful/EntryResult"
import { Entry } from "contentful-management/types"

const handler = nextConnect()
handler.use(middleware)

const callback: (req: EditorRequest, res: NextApiResponse) => Promise<void> = async (req, res) => {
  const result: EntryResult = await updateEntry(req)
  if (result) {
    if ("message" in result) {
      try {
        const contRes = JSON.parse(result.message)
        res.statusCode = Number(get(contRes, "status"))
        res.statusMessage = get(contRes, "statusText")
      } catch (e) {
        res.statusCode = 500
        e instanceof Error ? (res.statusMessage = result.message) : (res.statusMessage = "Unknown error :(")
      }
      res.send(result)
      return
    }
    await publishPageStructure(get(req, "body.buttonType[0]"), result as Entry)
    res.statusCode = 200
    res.send(result)
  }
}

handler.post(callback)
export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
