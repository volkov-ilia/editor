import { Editor, Path } from "slate"
import size from "lodash/size"
import includes from "lodash/includes"
import get from "lodash/get"
import dropRight from "lodash/dropRight"
import disablingToolbarItemMap from "./disablingToolbar"
import CustomNodeType from "../../types/Slate/Utils/CustomNodeType"
import keys from "lodash/keys"

const getDisable = (editor: Editor, format: string) => {
  const { selection } = editor
  if (selection) {
    let [current, path]: [CustomNodeType, Path] = Editor.node(editor, selection)
    while (size(path) > 1 && !includes(keys(disablingToolbarItemMap), current.type) && !current.type) {
      path = dropRight(path)
      ;[current as CustomNodeType, path] = Editor.node(editor, path)
    }
    return current ? !includes(get(disablingToolbarItemMap, current.type as string), format) : true
  }
  return true
}

export default getDisable
