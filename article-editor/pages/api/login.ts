import nextConnect from "next-connect"
import { login } from "../../utils/authorization/login"
import EditorRequest from "../../utils/types/api/EditorRequest"
import { NextApiResponse } from "next"

const handler = nextConnect()

handler.post(async (req: EditorRequest, res: NextApiResponse) => {
  const isCorrect = login(req)
  if (isCorrect) {
    res.statusCode = 200
  } else {
    res.statusCode = 401
  }
  res.send({})
})

export default handler
