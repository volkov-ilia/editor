import { NextApiRequest } from "next"

interface ExtendedRequest {
  files: Array<Blob>
}

type Type = ExtendedRequest & NextApiRequest

export default Type
