import AmpStyleProp from "../AtomicProps/AmpStyleProp"
import ClassNameProp from "../AtomicProps/ClassNameProp"
import EasterEggsProps from "./EasterEggsProps"

type ButtonArrowProps = AmpStyleProp &
  ClassNameProp & {
    text: React.ReactNode
    isNotUpperCase: boolean
    icon: string
    href: string
    linkTitle: string
    easterEggs: EasterEggsProps
  }

export default ButtonArrowProps
