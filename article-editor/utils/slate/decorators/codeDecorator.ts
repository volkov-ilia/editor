import Prism from "prismjs"
import "prismjs/components/prism-kotlin.min"
import "prismjs/components/prism-csharp.min"
import "prismjs/components/prism-clike.min"
import "prismjs/components/prism-python.min"
import "prismjs/components/prism-json.min"
import "prismjs/components/prism-java.min"
import "prismjs/components/prism-c.min"
import "prismjs/components/prism-cpp.min"
import getTokenLength from "../../codeHighlight/getTokenLength"
import getNodes from "../childrenParser/getNodes"
import { Editor, Node, Path, Element } from "slate"
import get from "lodash/get"
import CODE_ITEM from "../globalValues/article/nestedTypes/CODE_ITEM"
import SELECTOR from "../globalValues/article/nestedTypes/SELECTOR"
import CodeRange from "../../../types/Slate/Utils/CodeRange"
import CustomNodeType from "../../../types/Slate/Utils/CustomNodeType"

const decorator = (editor: Editor, node: CustomNodeType, path: Path) => {
  const ranges: CodeRange[] = []

  if (node.type !== CODE_ITEM) {
    return ranges
  }

  const [parentNode] = Editor.parent(editor, path)

  const language = get(getNodes(parentNode.children, SELECTOR), "[0].children[0].text")
  const codeText = Node.string(node)

  const prismLang = Prism.languages[language]
  if (prismLang) {
    const tokens = Prism.tokenize(codeText, prismLang)

    let start = 0

    for (const token of tokens) {
      const length = getTokenLength(token)
      const end = start + length

      if (typeof token !== "string") {
        ranges.push({
          isCode: true,
          className: `${token.type}`,
          anchor: { path, offset: start },
          focus: { path, offset: end },
        })
      }

      start = end
    }
  }

  return ranges
}

export default decorator
