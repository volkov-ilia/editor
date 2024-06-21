import React from "react"
import ChildrenProp from "./AtomicProps/ChildrenProp"

type Props = ChildrenProp & {
  openText: React.ReactNode
  closeText: React.ReactNode
}

export default Props
