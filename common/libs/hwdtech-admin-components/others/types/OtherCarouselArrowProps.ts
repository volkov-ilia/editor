import React from "react"
import AmpStyleProp from "./AtomicProps/AmpStyleProp"

type Props = AmpStyleProp & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  isPrev?: boolean
  on?: string
}

export default Props
