import get from "lodash/get"
import { IncorrectJsonValueByKey } from "../messages"
import parserWarnings from "../parserWarnings"
import checkEmpty from "../checkEmpty"
import { IdentityFunc } from "../../../types/utils/jsonPageBuilder/RulesFunctions"

const identity: IdentityFunc = (json, argName) => {
  const res = get(json, argName, null)
  if (checkEmpty(res)) parserWarnings.push(IncorrectJsonValueByKey("Page Structure Parser", argName, res))
  return res
}

export default identity
