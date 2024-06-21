import { requiredFieldsRule } from "./requiredFields"
import { parseRulesFunctions } from "./parseRulesFunctions"
import getFromJson from "./getFromJson"
import JsonPage, { ComponentRule } from "../../types/utils/jsonPageBuilder/JsonPage"
import IStringJson from "../../types/utils/contentful/IStringJson"

const parseRule = (jsonPage: JsonPage | IStringJson, rule: ComponentRule) => {
  const name = getFromJson(rule, requiredFieldsRule.name)
  const func = getFromJson(rule, requiredFieldsRule.func)
  const args = getFromJson(rule, requiredFieldsRule.args)
  const value = parseRulesFunctions[func](jsonPage, ...args)
  return { name, value }
}

export default parseRule
