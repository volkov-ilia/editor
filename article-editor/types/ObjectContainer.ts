import { MouseEventHandler } from "react"
import ChildrenProp from "./AtomicProps/ChildrenProp"

type ObjectContainer = {
  url: string
  title: string
  values: string
  onChange: MouseEventHandler<HTMLButtonElement>
  children: ChildrenProp
}

export default ObjectContainer
