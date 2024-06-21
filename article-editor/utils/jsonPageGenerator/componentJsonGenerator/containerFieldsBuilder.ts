import {
  ContainerValueMeta,
  ProcessedFieldBuilder,
  RuleMeta,
  ValueMeta,
} from "../../../types/utils/jsonPageGenerator/RulesTypes"
import ruleBuilder from "../rulesBuilder/ruleBuilder"
import fieldNameBuilder from "../fieldNameBuilder"
import IDENTITY from "../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import map from "lodash/map"
import { ComponentRule } from "../../../types/utils/jsonPageBuilder/JsonPage"
import compact from "lodash/compact"

const fieldsBuilder: ProcessedFieldBuilder = (field: ValueMeta, componentName: string) => {
  const props = field as ContainerValueMeta
  const fieldNameValues = fieldNameBuilder(componentName, `${props.name}Values`)
  const fieldNameMeta = fieldNameBuilder(componentName, `${props.name}Meta`)
  const ruleMeta: RuleMeta = {
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

  const meta: ComponentRule[] = compact(
    map(props.value.meta, (meta) => {
      const ruleMeta: RuleMeta = {
        componentVariableName: meta.name,
        args: meta.name,
        function: meta.function,
      }
      const rule = ruleBuilder(ruleMeta)
      if (rule) return rule
    })
  )
  const rule = ruleBuilder(ruleMeta)
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

export default fieldsBuilder
