import BaseProps from "../BaseProps"
import HrefProps from "./HrefProps"

type LinkInTextProps = BaseProps &
  HrefProps & {
    title?: string
    withNoColor?: boolean
  }

export default LinkInTextProps
