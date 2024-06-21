import PARAGRAPH from "../../../../../slate/globalValues/article/nestedTypes/PARAGRAPH"
import { Descendant } from "slate"

const norm = (component: Descendant) => ({
  ...component,
  type: PARAGRAPH,
})

export default norm
