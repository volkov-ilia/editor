import { ToolbarItem } from "hwdtech-admin-components"
import React from "react"
import { useSlate } from "slate-react"
import LINK_IN_TEXT from "../../../utils/slate/globalValues/article/nestedTypes/LINK_IN_TEXT"
import LinkButtonProps from "../../../types/Slate/Components/LinkButtonProps"

const LinkButton: React.FC<LinkButtonProps> = ({ setContentFormType, icon, setIsFormOpen, setSelection }) => {
  const editor = useSlate()
  return (
    <ToolbarItem
      onMouseDown={(event: MouseEvent) => {
        event.preventDefault()
        setContentFormType(LINK_IN_TEXT)
        setSelection(editor.selection)
        setIsFormOpen(true)
      }}
      icon={icon}
    />
  )
}

export default LinkButton
