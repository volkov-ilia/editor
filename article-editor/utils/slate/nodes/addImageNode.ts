import ADD_IMAGE from "../globalValues/article/nestedTypes/ADD_IMAGE"
import AddImageNodeType from "../../../types/Slate/Utils/nodes/AddImageNodeType"

const node: () => AddImageNodeType = () => ({
  type: ADD_IMAGE,
  children: [{ text: "" }],
  isVoid: true,
})

export default node
