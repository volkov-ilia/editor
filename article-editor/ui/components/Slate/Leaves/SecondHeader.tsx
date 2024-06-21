import React from "react"
import { SecondHeader } from "hwdtech-admin-components"
import ChildrenProp from "../../../../types/AtomicProps/ChildrenProp"

const Leaf: React.FC<ChildrenProp> = ({ children }) => {
  return <SecondHeader>{children}</SecondHeader>
}

export default Leaf
