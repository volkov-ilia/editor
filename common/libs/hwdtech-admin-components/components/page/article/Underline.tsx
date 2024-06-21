import React from "react"
import BaseProps from "../../../others/types/BaseProps"

export const Underline: React.FC<BaseProps> = ({ children }) => (
  <>
    <u className="underline">{children}</u>
    <style jsx>{`
      .underline {
        text-decoration: underline;
      }
    `}</style>
  </>
)
