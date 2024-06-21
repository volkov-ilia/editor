import SIGNATURE from "../globalValues/article/nestedTypes/SIGNATURE"
import SignatureNodeType from "../../../types/Slate/Utils/nodes/SignatureNodeType"

const node: () => SignatureNodeType = () => ({
  children: [{ text: "" }],
  type: SIGNATURE,
  placeholder: "Type the author",
  placeholderRight: true,
})

export default node
