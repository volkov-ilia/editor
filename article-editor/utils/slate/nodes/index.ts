import CODE_SNIPPET from "../globalValues/article/CODE_SNIPPET"
import CODE from "../globalValues/article/CODE"
import originSnippetSelectorNode from "./originSnippetSelectorNode"
import languageSelectorNode from "./languageSelectorNode"
import SelectorNodeType from "../../../types/Slate/Utils/nodes/SelectorNodeType"

const map: { [p: string]: () => SelectorNodeType } = {
  [CODE_SNIPPET]: originSnippetSelectorNode,
  [CODE]: languageSelectorNode,
}

export default map
