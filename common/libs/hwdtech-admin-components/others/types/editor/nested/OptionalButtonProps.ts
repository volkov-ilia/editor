import { MouseEventHandler } from "react"

type Props = {
  color?: string
  icon: string
  title: string
  onClick: MouseEventHandler<HTMLButtonElement>
  onMouseDown?: MouseEventHandler<HTMLSpanElement>
}

export default Props
