import React from "react"
import ChildrenProp from "../../../others/types/AtomicProps/ChildrenProp"

export const FewInlineInputsContainer: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <div className={"flex relative items-center justify-center inputs-container input-flex-gap"}>
      {children}
      <style global jsx>{`
        .inputs-container.input-flex-gap > :not(:last-child) {
          margin-right: 4rem;
        }
      `}</style>
    </div>
  )
}
