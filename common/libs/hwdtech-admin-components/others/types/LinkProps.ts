import React from "react"
import BaseProps from "./BaseProps"

type Props = BaseProps & {
  title?: string
  href?: string
  onDoubleClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export default Props
