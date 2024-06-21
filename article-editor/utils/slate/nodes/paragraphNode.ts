import PARAGRAPH from "../globalValues/article/nestedTypes/PARAGRAPH"
import BaseType from "../../../types/Slate/Utils/nodes/BaseType"

const node: () => BaseType = () => ({
  children: [{ text: "" }],
  type: PARAGRAPH,
})

export default node
