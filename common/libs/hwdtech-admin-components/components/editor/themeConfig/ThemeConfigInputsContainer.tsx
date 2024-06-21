import React from "react"
import ChildrenProp from "../../../others/types/AtomicProps/ChildrenProp"

export const ThemeConfigInputsContainer: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <div className={"px-4 grid-components"}>
      {children}
      <style jsx>{`
        .grid-components {
          display: grid;
          grid-template-rows: repeat(auto-fill, minmax(0, 1fr));
          row-gap: 1rem;
        }
      `}</style>
    </div>
  )
}
