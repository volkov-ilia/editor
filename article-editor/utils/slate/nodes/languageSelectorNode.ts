import SELECTOR from "../globalValues/article/nestedTypes/SELECTOR"
import selectorOnChange from "../eventHandlers/selectorOnChange"
import codeLanguages from "../globalValues/codeLanguages"
import SelectorNodeType from "../../../types/Slate/Utils/nodes/SelectorNodeType"

const node: () => SelectorNodeType = () => ({
  type: SELECTOR,
  children: [{ text: "js" }],
  onChange: selectorOnChange,
  values: codeLanguages,
})

export default node
