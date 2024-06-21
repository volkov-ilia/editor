import BaseProps from "../BaseProps"
import React from "react"
import AttributesProp from "../AtomicProps/AttributesProp"
import SaveImageHandlerFunc from "../SaveImageHandlerFunc"

type Props = BaseProps &
  AttributesProp & {
    saveImageHandler: SaveImageHandlerFunc
    node: Object
    width: number
    height: number
    buttons: React.ReactNode
    emptyImageText?: {
      click: string
      loading: string
    }
  }

export default Props
