import POSITION from "../globalValues/article/nestedTypes/POSITION"
import PositionNodeType from "../../../types/Slate/Utils/nodes/PositionNodeType"

const node: () => PositionNodeType = () => ({
  type: POSITION,
  children: [{ text: "" }],
  placeholder: "Type the position",
})

export default node
