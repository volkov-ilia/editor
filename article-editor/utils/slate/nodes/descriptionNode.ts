import DESCRIPTION from "../globalValues/article/nestedTypes/DESCRIPTION"
import BaseType from "../../../types/Slate/Utils/nodes/BaseType"

const node: () => BaseType = () => ({
  type: DESCRIPTION,
  children: [{ text: "" }],
})

export default node
