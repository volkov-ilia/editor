import {
  IdentityValueMeta,
  ProcessedFieldBuilder,
  RuleMeta,
  ValueMeta,
} from "../../../types/utils/jsonPageGenerator/RulesTypes"
import ruleBuilder from "../rulesBuilder/ruleBuilder"
import fieldNameBuilder from "../fieldNameBuilder"

const fieldsBuilder: ProcessedFieldBuilder = (field: ValueMeta, componentName: string) => {
  const props = field as IdentityValueMeta
  const fieldName = fieldNameBuilder(componentName, props.name)
  const ruleMeta: RuleMeta = {
    componentVariableName: props.name,
    args: fieldName,
    function: props.function,
  }
  const rule = ruleBuilder(ruleMeta)
  if (rule) {
    return { data: [{ name: fieldName, value: props.value }], rule }
  }
}

export default fieldsBuilder
