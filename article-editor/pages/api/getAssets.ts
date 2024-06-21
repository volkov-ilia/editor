import nextConnect from "next-connect"
import { getAssets } from "../../utils/contentful/getAssets"
import EditorRequest from "../../utils/types/api/EditorRequest"
import { NextApiResponse } from "next"

const handler = nextConnect()

handler.get(async (req: EditorRequest, res: NextApiResponse) => {
  const result = await getAssets(req)
  res.send(result)
})

export default handler
