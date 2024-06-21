import React from "react"
import { TextAlign } from "hwdtech-admin-components"
import BaseProps from "../../../../../types/BaseProps"

const Nested: React.FC<BaseProps> = ({ attributes, children }) => {
  return (
    <TextAlign attributes={attributes} align={"center"}>
      {children}
    </TextAlign>
  )
}

export default Nested
