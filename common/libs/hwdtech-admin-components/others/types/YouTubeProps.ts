import BaseProps from "./BaseProps"
import { ReactElement } from "react"

type Props = BaseProps & {
  title?: string
  videoId?: string
  id?: string
  previewImage?: ReactElement
}

export default Props
