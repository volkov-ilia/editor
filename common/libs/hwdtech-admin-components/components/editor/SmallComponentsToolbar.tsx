import React from "react"
import ChildrenProp from "../../others/types/AtomicProps/ChildrenProp"

export const SmallComponentsToolbar: React.FC<ChildrenProp> = ({ children }) => (
  <div className={"grid xxxl:grid-cols-autoSize xxl:grid-cols-autoSize xl:grid-cols-1 grid-cols-1 gap-2 mx-4"}>
    {children}
  </div>
)
