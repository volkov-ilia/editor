import React from "react"
import ChildrenProp from "../AtomicProps/ChildrenProp"

type Props = ChildrenProp & {
  toolbar?: React.ReactNode
  width: number
}

export default Props
