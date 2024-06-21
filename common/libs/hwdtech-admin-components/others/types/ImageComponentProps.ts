import React from "react"
import ImageProps from "./ImageProps"

type Props = ImageProps & {
  classNameImage?: string
  className?: string
  sources?: React.ReactNode
  sizes?: string
  easterEggs?: React.ReactNode[]
  ampStyleImg?: { [key: string]: string }
  ampWidth?: number
  ampHeight?: number
  layout?: string
}

export default Props
