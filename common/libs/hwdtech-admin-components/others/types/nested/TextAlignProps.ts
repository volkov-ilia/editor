import BaseProps from "../BaseProps"
import AttributesProp from "../AtomicProps/AttributesProp"

type Props = BaseProps &
  AttributesProp & {
    align: string
  }

export default Props
