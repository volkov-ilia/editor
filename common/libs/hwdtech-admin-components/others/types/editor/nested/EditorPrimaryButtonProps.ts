import React, { MouseEventHandler } from "react"

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  text: React.ReactNode
  title?: string
  className?: string
}

export default Props
