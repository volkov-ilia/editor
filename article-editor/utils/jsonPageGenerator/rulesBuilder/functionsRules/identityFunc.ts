import { CommonMeta } from "../../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "./functionsNames/IDENTITY"
import { IdentityArgs, IdentityRule } from "../../../../types/utils/jsonPageBuilder/JsonPage"

const func: (name: string, args: CommonMeta) => IdentityRule = (name, args) => {
  return {
    name,
    function: IDENTITY,
    args: [args] as IdentityArgs,
  }
}

export default func
