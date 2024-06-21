import React from "react"
import ChildrenProp from "../../others/types/AtomicProps/ChildrenProp"

export const Toolbar: React.FC<ChildrenProp> = ({ children }) => {
  return <div className={"toolbar flex items-start justify-center -mt-px mb-11"}>{children}</div>
}
