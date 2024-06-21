import { getArticles } from "../../../utils/contentful/getArticles"

export default async function handler(req, res) {
  const answer = await getArticles(req, res)
  answer.message ? res.status(404) : res.status(200)
  res.send(answer)
}
