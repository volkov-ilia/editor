import { getSiteName } from "../getAbsoluteUri"
import axios from "axios"

const contFetcher = async (url: string) => {
  const absUrl = new URL(url, getSiteName())
  const res = await axios.get(`${absUrl}`)
  return {
    result: await res.data,
    ok: res.data.length !== 0,
    status: res.status,
  }
}

export default contFetcher
