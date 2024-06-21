import get from "lodash/get"
import { Descendant } from "slate"

const handler = (component: Descendant) => {
  return get(component, "text") as string
}

export default handler
