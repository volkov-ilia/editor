import filter from "lodash/filter"

type NodesType = {
  type: string
  children?: []
}

const getNodes = (nodes: NodesType[], type: string) => filter(nodes, (n: NodesType) => n.type === type)

export default getNodes
