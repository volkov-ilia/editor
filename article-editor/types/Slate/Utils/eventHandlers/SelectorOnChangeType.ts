import { Editor, Node } from "slate"

type SelectorOnChangeType = {
  editor: Editor
  event: React.ChangeEvent<HTMLSelectElement>
  node: Node
}

export default SelectorOnChangeType
