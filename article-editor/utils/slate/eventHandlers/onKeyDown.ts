import get from "lodash/get"
import { Editor } from "slate"
import onKeyDownElementActions from "./onKeyDownElementActions"
import React from "react"

const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, editor: Editor) => {
  if (editor.selection) {
    const pathElement = editor.selection.focus.path[0]
    const element = get(Editor.node(editor, [pathElement]), "[0].type")
    const key = event.key
    const currentActionsMap = get(onKeyDownElementActions, element, get(onKeyDownElementActions, "default"))
    const action = get(currentActionsMap, key)
    if (action) action({ event, editor })
  }
}

export default onKeyDown
