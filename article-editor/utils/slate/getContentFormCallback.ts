import callbacks from "./callbacks"
import get from "lodash/get"

const getContentFormCallback = (type: string) => {
  return get(callbacks, type)
}

export default getContentFormCallback
