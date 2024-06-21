import React from "react"
import { UnorderedListItem } from "hwdtech-admin-components"
import BaseProps from "../../../../../types/BaseProps"

const Wrapped: React.FC<BaseProps> = ({ attributes, children }) => {
  return <UnorderedListItem {...attributes}>{children}</UnorderedListItem>
}

export default Wrapped
