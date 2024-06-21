import React from "react"
import BaseProps from "../../../others/types/BaseProps"

export const UnorderedList: React.FC<BaseProps> = ({ children }) => {
  return (
    <>
      <ul className="unordered-list">{children}</ul>
      <style jsx>{`
        .unordered-list {
          list-style-type: none;
          padding: 0;
          margin-block-start: 0;
          margin-block-end: 0;
        }
      `}</style>
    </>
  )
}
