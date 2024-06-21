import { OrderedList } from "hwdtech-admin-components"
import React from "react"
import BaseProps from "../../../../../types/BaseProps"

const Wrapped: React.FC<BaseProps> = ({ attributes, children }) => (
  <OrderedList>
    <span {...attributes}>{children}</span>
  </OrderedList>
)

export default Wrapped
