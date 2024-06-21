import nextConnect from "next-connect"
import middleware from "../../utils/codeHighlight/middleware"
import { createAsset } from "../../utils/contentful/createAsset"
import { NextApiResponse } from "next"
import EditorRequest from "../../utils/types/api/EditorRequest"

const handler = nextConnect()
handler.use(middleware)

const callback: (req: EditorRequest, res: NextApiResponse) => Promise<void> = async (req, res) => {
  const result = await createAsset(req)
  res.statusCode = "message" in result ? 404 : 200
  res.send(result)
}

handler.post(callback)

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
