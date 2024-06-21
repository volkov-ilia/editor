import { UnorderedList } from "hwdtech-admin-components"
import React from "react"
import BaseProps from "../../../../../types/BaseProps"

const Wrapped: React.FC<BaseProps> = ({ attributes, children }) => {
  return (
    <UnorderedList>
      <span {...attributes}>{children}</span>
    </UnorderedList>
  )
}

export default Wrapped
