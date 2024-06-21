import BaseProps from "../../../BaseProps"
import { Editor } from "slate"
import { CustomElement } from "../../../../custom-types"

type Props = BaseProps & {
  editor: Editor
  element: CustomElement
}

export default Props
