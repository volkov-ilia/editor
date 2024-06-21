import EasterEggsProp from "../AtomicProps/EasterEggsProp"
import AmpStyleProp from "../AtomicProps/AmpStyleProp"
import ClassNameProp from "../AtomicProps/ClassNameProp"

type PrimaryButtonProps = AmpStyleProp &
  ClassNameProp & {
    title: string
    text: string
    disabled?: boolean
    action?: React.MouseEventHandler<HTMLButtonElement> | string
    type?: "button" | "submit" | "reset"
    isNotUpperCase?: boolean
    href?: string
    linkTitle?: string
    easterEggs: EasterEggsProp
  }

export default PrimaryButtonProps
