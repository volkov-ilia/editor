import { getSiteName } from "../getAbsoluteUri"

const contFetcher = async (url) => {
  const absUrl = new URL(url, getSiteName())
  const res = await fetch(absUrl, { method: "GET" })
  return { result: await res.json(), ok: res.ok, status: res.status }
}

export default contFetcher
