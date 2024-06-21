import IDENTITY from "../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import identityFiedsBuilder from "./identityFieldsBuilder"
import CONTAINER from "../rulesBuilder/functionsRules/functionsNames/CONTAINER"
import containerFiedsBuilder from "./containerFieldsBuilder"

const map = {
  [IDENTITY]: identityFiedsBuilder,
  [CONTAINER]: containerFiedsBuilder,
}

export default map
