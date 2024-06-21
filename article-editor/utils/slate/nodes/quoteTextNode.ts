import QUOTE_TEXT from "../globalValues/article/nestedTypes/QUOTE_TEXT"
import QuoteTextNodeType from "../../../types/Slate/Utils/nodes/QuoteTextNodeType"

const node: () => QuoteTextNodeType = () => ({
  type: QUOTE_TEXT,
  children: [{ text: "" }],
  placeholder: "Type the quote",
})

export default node
