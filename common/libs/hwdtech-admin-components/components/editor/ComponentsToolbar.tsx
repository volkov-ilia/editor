import React from "react"
import ChildrenProp from "../../others/types/AtomicProps/ChildrenProp"

export const ComponentsToolbar: React.FC<ChildrenProp> = ({ children }) => (
  <div className={"grid grid-cols-2 gap-4 mx-4"}>{children}</div>
)
