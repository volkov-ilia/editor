import VOID from "../globalValues/article/nestedTypes/VOID"
import BaseType from "../../../types/Slate/Utils/nodes/BaseType"
import EmptyNodeType from "../../../types/Slate/Utils/nodes/EmptyNodeType"

const node: () => EmptyNodeType = () => ({
  children: [{ text: "", type: VOID }],
})

export default node
