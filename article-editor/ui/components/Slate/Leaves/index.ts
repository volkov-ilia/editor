import Bold from "./Bold"
import SecondHeader from "./SecondHeader"
import Strike from "./Strike"
import Italic from "./Italic"
import Underline from "./Underline"
import ThirdHeader from "./ThirdHeader"
import Link from "./Link"
import isCode from "./isCode"

const map = {
  bold: Bold,
  strike: Strike,
  italic: Italic,
  underline: Underline,
  h2: SecondHeader,
  h3: ThirdHeader,
  link: Link,
  isCode: isCode,
}

export default map
