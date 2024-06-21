import ALT from "../globalValues/article/nestedTypes/ALT"
import AltNodeType from "../../../types/Slate/Utils/nodes/AltNodeType"

const node: () => AltNodeType = () => ({
  type: ALT,
  children: [{ text: "" }],
})

export default node
