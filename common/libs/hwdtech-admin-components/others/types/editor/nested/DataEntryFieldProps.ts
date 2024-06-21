import BaseProps from "../../BaseProps"
import AttributesProp from "../../AtomicProps/AttributesProp"

type Props = BaseProps &
  AttributesProp & {
    isEmpty: boolean
    placeholderRight: boolean
    placeholderCenter: boolean
    placeholder: string
  }

export default Props
