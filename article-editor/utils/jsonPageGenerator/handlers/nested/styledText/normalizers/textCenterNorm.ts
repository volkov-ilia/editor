import PARAGRAPH from "../../../../../slate/globalValues/article/nestedTypes/PARAGRAPH"
import { Descendant } from "slate"

const norm = (component: Descendant) => ({
  ...component,
  type: PARAGRAPH,
  children: [
    {
      ...component.children[0],
      textCenter: true,
    },
  ],
})

export default norm
