import HEIGHT from "../globalValues/article/nestedTypes/HEIGHT"
import HeightNodeType from "../../../types/Slate/Utils/nodes/HeightNodeType"

const node: () => HeightNodeType = () => ({
  type: HEIGHT,
  children: [{ text: "" }],
  placeholder: "Type iframe height",
})

export default node
