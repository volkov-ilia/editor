import React from "react"
import { Editor, Node } from "slate"

type Props = {
  element: Node
  editor: Editor
  isOpen?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export default Props
