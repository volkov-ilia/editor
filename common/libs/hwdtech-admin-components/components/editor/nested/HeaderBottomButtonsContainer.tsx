import React from "react"
import ChildrenProp from "../../../others/types/AtomicProps/ChildrenProp"

export const HeaderBottomButtonsContainer: React.FC<ChildrenProp> = ({ children }) => {
  return <div className={"my-auto grid grid-rows-3 grid-cols-1 gap-4"}>{children}</div>
}
