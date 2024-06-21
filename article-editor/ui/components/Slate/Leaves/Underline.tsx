import { Underline } from "hwdtech-admin-components"
import React from "react"
import ChildrenProp from "../../../../types/AtomicProps/ChildrenProp"

const Leaf: React.FC<ChildrenProp> = ({ children }) => {
  return <Underline>{children}</Underline>
}

export default Leaf
