import size from "lodash/size"
import keys from "lodash/keys"
import includes from "lodash/includes"
import { Descendant } from "slate"

const hasOnlyStringTextField = (component: Descendant) => {
  const firstKeys = keys(component)
  if (size(firstKeys) !== 1 && !includes(firstKeys, "text")) return false
  return typeof component["text"] === "string"
}

export default hasOnlyStringTextField
