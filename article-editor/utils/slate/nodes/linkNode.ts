import LINK from "../globalValues/article/nestedTypes/LINK"
import LinkNodeType from "../../../types/Slate/Utils/nodes/LinkNodeType"

const node: (placeholder?: string) => LinkNodeType = (placeholder = "Type the url") => ({
  type: LINK,
  children: [{ text: "" }],
  placeholder,
})

export default node
