import SELECTOR from "../globalValues/article/nestedTypes/SELECTOR"
import selectorOnChange from "../eventHandlers/selectorOnChange"
import ORIGIN_SANDBOX from "../globalValues/article/nestedTypes/ORIGIN_SANDBOX"
import snippetOrigins from "../globalValues/snippetOrigins"
import SelectorNodeType from "../../../types/Slate/Utils/nodes/SelectorNodeType"

const node: () => SelectorNodeType = () => ({
  type: SELECTOR,
  children: [{ text: ORIGIN_SANDBOX }],
  onChange: selectorOnChange,
  values: snippetOrigins,
})

export default node
