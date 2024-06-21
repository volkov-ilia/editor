import { ComponentHandlerResult, NodeHandler } from "../../types/utils/jsonPageGenerator/NodeHandler"
import merge from "lodash/merge"
import JsonPage from "../../types/utils/jsonPageBuilder/JsonPage"
import { Descendant } from "slate"
import cloneDeep from "lodash/cloneDeep"

const generator = (json: JsonPage, value: Descendant, handler: NodeHandler) => {
  const component = handler({
    component: value,
  }) as ComponentHandlerResult
  const tempJson = cloneDeep(json)
  if (component) {
    tempJson.components.push(component.name)
    tempJson[component.name] = component.component
    return merge(tempJson, component.fields)
  }
}

export default generator
