import responseHandlers from "./responseHandlers"
import getByType from "./getByType"
import { AxiosResponse } from "axios"

const loadAssetOnContentful = async ({ type, response }: { type: string; response: AxiosResponse }) => {
  const resHandler = getByType(responseHandlers, type, `There is no response handler for ${type}`)
  return resHandler(response)
}

export default loadAssetOnContentful
