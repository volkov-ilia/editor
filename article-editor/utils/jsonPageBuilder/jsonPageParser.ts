import { requiredFieldsComponents, requiredFieldsPage } from "./requiredFields"
import getFromJson from "./getFromJson"
import parseRule from "./parseRule"
import parserWarnings from "./parserWarnings"
import { NoValueByKeyMessage } from "./messages"
import forEach from "lodash/forEach"
import { ParsedPageComponentProps } from "../../types/utils/easterEggsConfig/ParsedPage"
import JsonPage from "../../types/utils/jsonPageBuilder/JsonPage"

const jsonPageParser = (jsonPage: JsonPage) => {
  const components = getFromJson(jsonPage, requiredFieldsPage.components)
  const componentsProps: ParsedPageComponentProps[] = []
  forEach(components, (comp) => {
    if (jsonPage[comp]) {
      const rules = getFromJson(jsonPage[comp], requiredFieldsComponents.rules) || []
      const componentProp: ParsedPageComponentProps = {
        type: getFromJson(jsonPage[comp], requiredFieldsComponents.type),
      }
      forEach(rules, (rule) => {
        const parsedRule = parseRule(jsonPage, rule)
        if (parsedRule.value) componentProp[parsedRule.name] = parsedRule.value
      })
      componentsProps.push(componentProp)
    } else {
      parserWarnings.push(NoValueByKeyMessage(comp))
    }
  })

  const result = { componentsProps, warnings: parserWarnings.copy() }
  parserWarnings.clear()
  return result
}

export default jsonPageParser
