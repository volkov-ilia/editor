import React from "react"
import BaseProps from "../../../../../types/BaseProps"

const Wrapped: React.FC<BaseProps> = ({ attributes, children }) => {
  return <li {...attributes}>{children}</li>
}

export default Wrapped
