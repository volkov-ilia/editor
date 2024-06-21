import React from "react"
import BaseProps from "../BaseProps"
import AttributesProp from "../AtomicProps/AttributesProp"

type Props = BaseProps &
  AttributesProp & {
    plusButton: React.ReactElement
    optionalButtons?: React.ReactNode
    contentEditable?: boolean
  }

export default Props
