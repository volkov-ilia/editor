import React from "react"
import { ThirdHeader } from "hwdtech-admin-components"
import ChildrenProp from "../../../../types/AtomicProps/ChildrenProp"

const Leaf: React.FC<ChildrenProp> = ({ children }) => {
  return <ThirdHeader>{children}</ThirdHeader>
}

export default Leaf
