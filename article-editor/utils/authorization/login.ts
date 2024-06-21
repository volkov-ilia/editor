import EditorRequest from "../types/api/EditorRequest"
import get from "lodash/get"

export const login = (req: EditorRequest) => {
  const query = get(req, "body")
  const login = get(query, "login") as string
  const pass = get(query, "pass") as string
  const sLogin = process.env.NEXT_PUBLIC_CONTENTFUL_SECRET_LOGIN_L
  const sPass = process.env.NEXT_PUBLIC_CONTENTFUL_SECRET_LOGIN_P
  return login === sLogin && pass === sPass
}
