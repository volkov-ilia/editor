import IMAGE from "../globalValues/article/nestedTypes/IMAGE"
import altChild from "./altNode"
import imageDescriptionNode from "./imageDescriptionNode"
import ImageNodeType from "../../../types/Slate/Utils/nodes/ImageNodeType"

const node: () => ImageNodeType = () => ({
  type: IMAGE,
  children: [altChild(), imageDescriptionNode()],
  position: 0,
  url: "",
})

export default node
