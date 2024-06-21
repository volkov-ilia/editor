import IDENTITY from "./functionsNames/IDENTITY"
import identityFunc from "./identityFunc"
import CONTAINER from "./functionsNames/CONTAINER"
import { CommonMeta } from "../../../../types/utils/jsonPageGenerator/RulesTypes"
import containerFunc from "./containerFunc"
import { ComponentRule } from "../../../../types/utils/jsonPageBuilder/JsonPage"

const map: {
  [key: string]: (name: string, args: CommonMeta) => ComponentRule
} = {
  [IDENTITY]: identityFunc,
  [CONTAINER]: containerFunc,
}

export default map
