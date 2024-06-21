import React from "react"
import { TextAlign } from "hwdtech-admin-components"
import BaseProps from "../../../../../types/BaseProps"

const Nested: React.FC<BaseProps> = ({ attributes, children }) => {
  return (
    <TextAlign attributes={attributes} align={"right"}>
      {children}
    </TextAlign>
  )
}

export default Nested
