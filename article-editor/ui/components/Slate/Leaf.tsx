import React from "react"
import keys from "lodash/keys"
import forEach from "lodash/forEach"
import get from "lodash/get"
import leaves from "./Leaves"
import leavesWithParams from "./Leaves/leavesWithParams"
import LeafProps from "../../../types/Slate/Components/LeafProps"

type paramsType = {
  [key: string]: string | boolean
}

const Leaf: React.FC<LeafProps> = ({ attributes, children, leaf }) => {
  const allKeys = keys(leaf)
  forEach(allKeys, (l) => {
    const Format = get(leaves, `${l}`)
    const paramsKeys = get(leavesWithParams, `${l}`)
    if (Format) {
      const params: paramsType = {}
      forEach(paramsKeys, (p) => {
        // eslint-disable-next-line @typescript-eslint/ban-types
        params[p as keyof {}] = get(leaf, `${p}`)
      })
      children = <Format {...params}>{children}</Format>
    }
  })

  return <span {...attributes}>{children}</span>
}

export default Leaf
