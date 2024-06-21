import React from "react"
import BaseProps from "./BaseProps"

type Props = BaseProps & {
  selector: React.ReactNode
  language?: string
}

export default Props
