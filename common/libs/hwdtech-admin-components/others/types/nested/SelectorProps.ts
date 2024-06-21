import BaseProps from "../BaseProps"
import AttributesProp from "../AtomicProps/AttributesProp"

type Props = BaseProps &
  AttributesProp & {
    onChange: (args: Object) => void
    values: Array<string>
    selectedItem?: string
  }

export default Props
