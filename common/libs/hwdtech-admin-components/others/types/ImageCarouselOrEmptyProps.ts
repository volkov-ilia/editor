import AttributesProp from "./AtomicProps/AttributesProp"
import React, { MouseEventHandler } from "react"
import SaveImageHandlerFunc from "./SaveImageHandlerFunc"

type Props = AttributesProp & {
  slates?: Object
  node?: Object
  saveImageHandler: SaveImageHandlerFunc
  moveOnClick: MouseEventHandler<HTMLButtonElement>
  width: number
  height: number
  buttons?: React.ReactNode
}

export default Props
