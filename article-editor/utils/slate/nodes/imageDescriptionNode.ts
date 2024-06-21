import IMAGE_DESCRIPTION from "../globalValues/article/nestedTypes/IMAGE_DESCRIPTION"
import ImageDescriptionNodeType from "../../../types/Slate/Utils/nodes/ImageDescriptionNodeType"

const node: () => ImageDescriptionNodeType = () => ({
  type: IMAGE_DESCRIPTION,
  children: [{ text: "" }],
})

export default node
