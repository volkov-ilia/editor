import nextConnect from "next-connect"
import { NextApiResponse } from "next"
import EditorRequest from "../../utils/types/api/EditorRequest"
import { createEntry } from "../../utils/contentful/createEntry"
import middleware from "../../utils/codeHighlight/middleware"
import get from "lodash/get"
import { publishPageStructure } from "../../utils/contentful/publishPageStructure"
import { Entry } from "contentful-management/types"
import EntryResult from "../../types/utils/contentful/EntryResult"

const handler = nextConnect()
handler.use(middleware)

const callback: (req: EditorRequest, res: NextApiResponse) => Promise<void> = async (req, res) => {
  const result: EntryResult = await createEntry(req)
  await publishPageStructure(get(req, "body.buttonType[0]"), result as Entry)
  if (result) {
    res.statusCode = "message" in result ? 404 : 200
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
