import React from "react"
import ChildrenProp from "../../../others/types/AtomicProps/ChildrenProp"

export const ToolbarItemsBox: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <div className={`toolbar-items-box flex justify-center items-center`}>
      {children}
      <style jsx>{`
        .toolbar-items-box:not(:last-child) {
          margin-right: 5rem;
        }
      `}</style>
    </div>
  )
}
