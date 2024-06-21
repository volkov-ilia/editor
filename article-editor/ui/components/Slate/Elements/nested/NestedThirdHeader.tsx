import { ThirdHeader } from "hwdtech-admin-components"
import React from "react"
import BaseProps from "../../../../../types/BaseProps"

const Wrapped: React.FC<BaseProps> = ({ attributes, children }) => {
  return <ThirdHeader attributes={attributes}>{children}</ThirdHeader>
}

export default Wrapped
