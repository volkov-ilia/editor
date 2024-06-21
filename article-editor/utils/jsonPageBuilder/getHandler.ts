import componentsHandlers from "./componentsHandlers"
import { NoHandlerMessage } from "./messages"

const getHandler = (type: string) => {
  const handler = componentsHandlers[type]
  if (!handler) throw Error(NoHandlerMessage(type))
  return handler
}

export default getHandler
