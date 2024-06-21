import nextConnect from "next-connect"
import { getEntries } from "../../utils/contentful/getEntries"
import EditorRequest from "../../utils/types/api/EditorRequest"
import { NextApiResponse } from "next"

const handler = nextConnect()

handler.get(async (req: EditorRequest, res: NextApiResponse) => {
  const result = await getEntries(req)
  res.send(result)
})

export default handler
