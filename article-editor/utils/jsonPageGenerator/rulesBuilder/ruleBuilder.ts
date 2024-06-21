import get from "lodash/get"
import { RuleMeta } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import functions from "./functionsRules"

const ruleBuilder = (rulesMeta: RuleMeta) => {
  const builder = get(functions, rulesMeta.function)
  if (builder) return builder(rulesMeta.componentVariableName, rulesMeta.args)
}

export default ruleBuilder
