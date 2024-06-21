import React from "react"
import BaseProps from "../../../../types/BaseProps"

const Wrapped: React.FC<BaseProps> = ({ children }) => {
  return <span>{children}</span>
}

export default Wrapped
