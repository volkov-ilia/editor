import React from "react"
import ChildrenProp from "../../../others/types/AtomicProps/ChildrenProp"

export const ThemeConfigDescriptionContainer: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <div className={"whitespace-pre-wrap w-full h-full flex items-center justify-center text-lg"}>
      <div className={"my-auto w-full max-w-7xl"}>{children}</div>
    </div>
  )
}
