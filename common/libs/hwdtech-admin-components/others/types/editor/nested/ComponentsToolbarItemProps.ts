import React, { MouseEventHandler } from "react"

type Props = {
  preview: React.ReactNode
  description: React.ReactNode
  title: React.ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
  onMouseDown: MouseEventHandler<HTMLSpanElement>
}

export default Props
