import React from "react"
import TitleProps from "../../../others/types/editor/nested/TitleProps"

export const Title: React.FC<TitleProps> = ({ children, color = "green" }) => (
  <div className={`text-${color} text-2xl inline-flex`}>{children}</div>
)
