import { Node } from "slate"

type CustomNodeType = Node & {
  type?: string
}

export default CustomNodeType
