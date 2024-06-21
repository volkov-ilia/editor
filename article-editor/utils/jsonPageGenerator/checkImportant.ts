import { NodeHandlerComponentProp } from "../../types/utils/jsonPageGenerator/NodeHandler"
import keys from "lodash/keys"
import indexOf from "lodash/indexOf"
import forEach from "lodash/forEach"
import { vitalsFieldMessage } from "./messages"

const checkImportant = (componentName: string, important: string[], component: NodeHandlerComponentProp) => {
  const componentKeys = keys(component)
  forEach(important, (field) => {
    const contains = indexOf(componentKeys, field) !== -1
    // eslint-disable-next-line no-console
    if (!contains) console.warn(vitalsFieldMessage(componentName, field))
  })
}

export default checkImportant
