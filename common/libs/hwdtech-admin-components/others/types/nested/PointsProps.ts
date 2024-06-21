import { ReactElement } from "react"
import EasterEggsProp from "../AtomicProps/EasterEggsProp"

export type PointProps = {
  className?: string
  children: ReactElement
  icon?: ReactElement
  style?: { [key: string]: string }
  onRight?: boolean
}

export type ItemsTextWithHeader = {
  header: string
  text: ReactElement[] | ReactElement
  key?: string
}

export type PointsProps = EasterEggsProp & {
  items: ItemsTextWithHeader[] | ReactElement[]
  icon: ReactElement[]
  className?: string
  style?: { [key: string]: string }
  type: string
  onRight: boolean
}

export default PointsProps
