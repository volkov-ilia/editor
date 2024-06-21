import get from "lodash/get"
import forEach from "lodash/forEach"
import { NodeHandlersMap } from "../../types/utils/jsonPageGenerator/NodeHandler"
import { Descendant } from "slate"
import JsonPage from "../../types/utils/jsonPageBuilder/JsonPage"
import { PageFieldsTypes } from "../../types/Slate/Components/PageFieldsTypes"
import runHandler from "./runHandler"
import viewSettingsPrepare from "./viewSettingsPrepare"
import merge from "lodash/merge"

const generator = (
  slateValue: Descendant[],
  handlers: NodeHandlersMap,
  unprintableFields?: PageFieldsTypes,
  unprintableComponents?: string[]
) => {
  let json: JsonPage = {
    components: [],
  }
  const warnings: Error[] = []
  const loopStep = (value: Descendant | PageFieldsTypes, componentName: string) => {
    try {
      const handler = get(handlers, componentName)
      if (handler) {
        const newJson = runHandler(json, value, handler)
        if (newJson) json = newJson
      }
    } catch (e) {
      warnings.push(e as Error)
    }
  }
  if (unprintableFields) {
    forEach(unprintableComponents, (componentName) => {
      loopStep(unprintableFields, componentName)
    })
  }
  forEach(slateValue, (value) => {
    loopStep(value, value.type)
  })
  const viewSettings = viewSettingsPrepare({ component: unprintableFields })
  json = merge(json, viewSettings)
  return { json, warnings }
}

export default generator
