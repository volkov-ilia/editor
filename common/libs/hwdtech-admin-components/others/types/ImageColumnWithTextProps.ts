import React from "react"
import BaseProps from "./BaseProps"

type Props = BaseProps & {
  text: React.ReactNode
  isImageLeft?: boolean
}

export default Props
