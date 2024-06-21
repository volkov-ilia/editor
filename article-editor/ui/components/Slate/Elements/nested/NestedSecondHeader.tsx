import { SecondHeader } from "hwdtech-admin-components"
import React from "react"
import BaseProps from "../../../../../types/BaseProps"

const Wrapped: React.FC<BaseProps> = ({ attributes, children }) => {
  return <SecondHeader attributes={attributes}>{children}</SecondHeader>
}

export default Wrapped
