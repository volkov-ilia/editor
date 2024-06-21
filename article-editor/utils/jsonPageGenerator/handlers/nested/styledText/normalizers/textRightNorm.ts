import PARAGRAPH from "../../../../../slate/globalValues/article/nestedTypes/PARAGRAPH"
import { Descendant } from "slate"

const norm = (component: Descendant) => ({
  ...component,
  type: PARAGRAPH,
  children: [
    {
      ...component.children[0],
      textRight: true,
    },
  ],
})

export default norm
