import { forEach, get, isEmpty } from "lodash"
import Contentful from "../../../../types/Contentful"
import fieldsBuildersMap from "./FieldsBuilder"

class ComponentJsonGenerator {
  static generateJson(componentName: string, type: string, fields: Contentful.ValueMeta[]) {
    const componentData: { [key: string]: Contentful.ValueMetaCommon | Contentful.ComponentRule[] } = {}
    const componentRules: Contentful.ComponentRule[] = []
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
    const result: Contentful.ComponentHandlerResult = {
      name: componentName,
      component: {
        type,
        rules: componentRules,
      },
      fields: componentData,
    }
    return result
  }
}

export default ComponentJsonGenerator
