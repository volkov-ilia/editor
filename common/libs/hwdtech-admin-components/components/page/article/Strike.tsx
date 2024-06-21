import React from "react"
import BaseProps from "../../../others/types/BaseProps"

export const Strike: React.FC<BaseProps> = ({ children }) => (
  <>
    <span className={"strike"}>{children}</span>
    <style jsx>{`
      .strike {
        text-decoration: line-through;
      }
    `}</style>
  </>
)
