import React from "react"
import BaseProps from "../../../others/types/BaseProps"

export const Italic: React.FC<BaseProps> = ({ children }) => (
  <>
    <i className="italic">{children}</i>
    <style jsx>{`
      .italic {
        font-style: italic;
      }
      .italic:focus {
        outline: none;
      }
    `}</style>
  </>
)
