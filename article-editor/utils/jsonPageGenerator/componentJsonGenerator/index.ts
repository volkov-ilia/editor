import { ValueMeta, ValueMetaCommon } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import { ComponentRule } from "../../../types/utils/jsonPageBuilder/JsonPage"
import forEach from "lodash/forEach"
import get from "lodash/get"
import { ComponentHandlerResult } from "../../../types/utils/jsonPageGenerator/NodeHandler"
import fieldsBuildersMap from "./fieldsBuildersMap"
import isEmpty from "lodash/isEmpty"

const componentJsonGenerator = (componentName: string, type: string, fields: ValueMeta[]) => {
  const componentData: { [key: string]: ValueMetaCommon | ComponentRule[] } = {}
  const componentRules: ComponentRule[] = []
  forEach(fields, (propsField) => {
    if (propsField.value) {
      const fieldBuilder = get(fieldsBuildersMap, propsField.function)
      if (fieldBuilder) {
        const processedField = fieldBuilder(propsField, componentName)
        if (processedField) {
          forEach(processedField.data, (data) => {
            if (!isEmpty(data.value)) componentData[data.name] = data.value
          })
          componentRules.push(processedField.rule)
        }
      }
    }
  })
  const result: ComponentHandlerResult = {
    name: componentName,
    component: {
      type,
      rules: componentRules,
    },
    fields: componentData,
  }
  return result
}

export default componentJsonGenerator
