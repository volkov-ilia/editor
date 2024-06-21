import { MouseEventHandler } from "react"

type Props = {
  size?: string
  icon: string
  className?: string
  title: string
  onClick: MouseEventHandler<HTMLButtonElement>
  onMouseDown?: MouseEventHandler<HTMLSpanElement>
}

export default Props
