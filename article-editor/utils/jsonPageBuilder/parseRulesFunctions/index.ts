import identity from "./identity"
import container from "./container"
import { RulesFunctionsMap } from "../../../types/utils/jsonPageBuilder/RulesFunctions"

export const parseRulesFunctions: RulesFunctionsMap = {
  identity: identity,
  container: container,
}
