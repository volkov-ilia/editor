import { Strike } from "hwdtech-admin-components"
import React from "react"
import ChildrenProp from "../../../../types/AtomicProps/ChildrenProp"

const Leaf: React.FC<ChildrenProp> = ({ children }) => {
  return <Strike>{children}</Strike>
}

export default Leaf
