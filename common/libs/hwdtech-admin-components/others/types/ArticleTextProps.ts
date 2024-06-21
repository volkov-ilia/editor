import BaseProps from "./BaseProps"
import ClassNameProp from "./AtomicProps/ClassNameProp"

type Props = BaseProps &
  ClassNameProp & {
    backgroundColor?: string
  }

export default Props
