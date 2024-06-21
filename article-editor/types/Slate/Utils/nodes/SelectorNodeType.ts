import BaseType from "./BaseType"
import SelectorOnChangeType from "../eventHandlers/SelectorOnChangeType"

type SelectorNodeType = BaseType & {
  onChange: ({ event, editor, node }: SelectorOnChangeType) => void
  values: string[]
}

export default SelectorNodeType
