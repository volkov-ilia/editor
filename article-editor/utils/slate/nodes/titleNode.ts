import TITLE from "../globalValues/article/nestedTypes/TITLE"
import TitleNodeType from "../../../types/Slate/Utils/nodes/TitleNodeType"

const node: () => TitleNodeType = () => ({
  type: TITLE,
  children: [{ text: "" }],
  placeholder: "Type the title",
})

export default node
