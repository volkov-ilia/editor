import React from "react"
import ChildrenProp from "../../../others/types/AtomicProps/ChildrenProp"
import AttributesProp from "../../../others/types/AtomicProps/AttributesProp"

export const ArticleChildren: React.FC<ChildrenProp & AttributesProp> = ({ attributes, children }) => (
  <div {...attributes} className={"container rich-text"}>
    {children}
    <style jsx>{`
      .rich-text {
        padding: 0 120px;
      }
      @media (max-width: 992px) {
        .rich-text {
          padding: 0 30px;
        }
      }
      @media (max-width: 768px) {
        .rich-text {
          padding: 0 15px;
        }
      }
    `}</style>
  </div>
)
