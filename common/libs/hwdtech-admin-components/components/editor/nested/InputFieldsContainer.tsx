import React from "react"
import ChildrenProp from "../../../others/types/AtomicProps/ChildrenProp"

export const InputFieldsContainer: React.FC<ChildrenProp> = ({ children }) => {
  return <div className={"w-full grid grid-cols-1 gap-y-4"}>{children}</div>
}
