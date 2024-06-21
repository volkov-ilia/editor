import ORIGIN from "../globalValues/article/nestedTypes/ORIGIN"
import ORIGIN_SANDBOX from "../globalValues/article/nestedTypes/ORIGIN_SANDBOX"
import BaseType from "../../../types/Slate/Utils/nodes/BaseType"

const node: () => BaseType = () => ({
  type: ORIGIN,
  children: [{ text: ORIGIN_SANDBOX }],
})

export default node
