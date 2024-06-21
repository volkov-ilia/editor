import BaseProps from "../BaseProps"
import AttributesProp from "../AtomicProps/AttributesProp"
import SaveImageHandlerFunc from "../SaveImageHandlerFunc"

type Props = BaseProps &
  AttributesProp & {
    saveImageHandler: SaveImageHandlerFunc
    width: number
    height: number
  }

export default Props
