import LIST_ITEM from "../globalValues/article/nestedTypes/LIST_ITEM"
import BaseType from "../../../types/Slate/Utils/nodes/BaseType"

const node: () => BaseType = () => ({
  children: [{ text: "" }],
  type: LIST_ITEM,
})

export default node
