import DescriptionProps from "../AtomicProps/DescriptionProps"
import React, { MouseEventHandler } from "react"

type Props = DescriptionProps & {
  position: number
  alt?: React.ReactNode
  moveOnClick: MouseEventHandler<HTMLButtonElement>
}

export default Props
