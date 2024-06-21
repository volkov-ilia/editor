import React from "react"
import ChildrenProp from "../../../others/types/AtomicProps/ChildrenProp"

export const FewOnLineElementsContainer: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <div className={"few-on-line place-items-center justify-items-stretch w-full grid grid-rows-1 grid-cols-2 gap-4"}>
      {children}
      <style jsx>{`
        .few-on-line {
          display: grid;
          grid-template-columns: repeat(${React.Children.count(children)}, minmax(0, 1fr));
          grid-template-rows: repeat(1, minmax(0, 1fr));
        }
      `}</style>
    </div>
  )
}
