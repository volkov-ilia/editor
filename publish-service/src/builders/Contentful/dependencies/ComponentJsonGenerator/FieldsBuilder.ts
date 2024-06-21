import { CONTAINER, IDENTITY } from "./FieldsNames"
import Contentful from "../../../../types/Contentful"
import functionsRules from "./FunctionsRules"
import { camelCase, compact, map } from "lodash"

class FieldsBuilder {
  public [IDENTITY] = this.identityFieldsBuilder
  public [CONTAINER] = this.containerFieldsBuilder

  private containerFieldsBuilder(field: Contentful.ValueMeta, componentName: string): Contentful.ProcessedField | void {
    const props = field as Contentful.ContainerValueMeta
    const fieldNameValues: string = camelCase(`page ${componentName} ${props.name}Values`)
    const fieldNameMeta: string = camelCase(`page ${componentName} ${props.name}Meta`)
    const ruleMeta: Contentful.RuleMeta = {
      componentVariableName: props.name,
      args: [
        {
          args: fieldNameValues,
          componentVariableName: `${props.name}Values`,
          function: IDENTITY,
        },
        {
          args: fieldNameMeta,
          componentVariableName: `${props.name}Meta`,
          function: IDENTITY,
        },
      ],
      function: props.function,
    }
    const values = props.value.values

    const meta: Contentful.ComponentRule[] = compact(
      map(props.value.meta, (meta) => {
        const ruleMeta: Contentful.RuleMeta = {
          componentVariableName: meta.name,
          args: meta.name,
          function: meta.function,
        }
        const rule = functionsRules[ruleMeta.function](ruleMeta.componentVariableName, ruleMeta.args)
        if (rule) return rule
      })
    )
    const rule = functionsRules[ruleMeta.function](ruleMeta.componentVariableName, ruleMeta.args)
    if (rule) {
      return {
        data: [
          { name: fieldNameValues, value: values },
          { name: fieldNameMeta, value: meta },
        ],
        rule,
      }
    }
  }

  private identityFieldsBuilder(field: Contentful.ValueMeta, componentName: string): Contentful.ProcessedField | void {
    const props = field as Contentful.IdentityValueMeta
    const fieldName = camelCase(`page ${componentName} ${props.name}`)
    const ruleMeta: Contentful.RuleMeta = {
      componentVariableName: props.name,
      args: fieldName,
      function: props.function,
    }
    const rule = functionsRules[ruleMeta.function](ruleMeta.componentVariableName, ruleMeta.args)
    if (rule) {
      return { data: [{ name: fieldName, value: props.value }], rule }
    }
  }
}

export default new FieldsBuilder()
