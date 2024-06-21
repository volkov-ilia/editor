import React from "react"
import { Italic } from "hwdtech-admin-components"
import ChildrenProp from "../../../../types/AtomicProps/ChildrenProp"

const Leaf: React.FC<ChildrenProp> = ({ children }) => {
  return <Italic>{children}</Italic>
}

export default Leaf
