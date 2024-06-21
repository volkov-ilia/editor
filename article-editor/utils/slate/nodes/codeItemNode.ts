import CODE_ITEM from "../globalValues/article/nestedTypes/CODE_ITEM"
import BaseType from "../../../types/Slate/Utils/nodes/BaseType"

const node: () => BaseType = () => ({
  type: CODE_ITEM,
  children: [{ text: "" }],
})

export default node
