import { NodeHandlerComponentProp } from "../../types/utils/jsonPageGenerator/NodeHandler"
import every from "lodash/every"
import isEmpty from "lodash/isEmpty"

const containsVitals = (componentName: string, vitals: string[], component: NodeHandlerComponentProp) => {
  return every(vitals, (field) => {
    return !isEmpty(component[field])
  })
}

export default containsVitals
