import UNORDERED_LIST_ITEM from "../globalValues/article/nestedTypes/UNORDERED_LIST_ITEM"
import BaseType from "../../../types/Slate/Utils/nodes/BaseType"

const node: () => BaseType = () => ({
  children: [{ text: "" }],
  type: UNORDERED_LIST_ITEM,
})

export default node
