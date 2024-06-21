import BaseProps from "../../BaseProps"
import React from "react"

type Props = BaseProps & {
  format: string
  preview: React.ReactNode
  description: React.ReactNode
  title: React.ReactNode
}

export default Props
