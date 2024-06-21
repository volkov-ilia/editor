import React from "react"
import ChildrenProp from "../../../others/types/AtomicProps/ChildrenProp"

export const FlexColumnCentered: React.FC<ChildrenProp> = ({ children }) => {
  return <div className={"flex flex-col justify-center items-center"}>{children}</div>
}
