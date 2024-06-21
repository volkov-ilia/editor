import React from "react"
import BaseProps from "../../../others/types/BaseProps"

export const Bold: React.FC<BaseProps> = ({ children }) => (
  <>
    <b className="bold">{children}</b>
    <style jsx>{`
      .bold {
        font-weight: 700;
      }
    `}</style>
  </>
)
