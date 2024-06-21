import { SmallComponentsToolbarItem } from "hwdtech-admin-components"
import React from "react"
import { useSlate } from "slate-react"
import LINK_IN_TEXT from "../../../utils/slate/globalValues/article/nestedTypes/LINK_IN_TEXT"
import getDisable from "../../../utils/slate/getDisable"
import RightLinkButtonProps from "../../../types/Slate/Components/RightLinkButtonProps"

const Button: React.FC<RightLinkButtonProps> = ({ setContentFormType, icon, setIsFormOpen, setSelection }) => {
  const editor = useSlate()
  const disabled = getDisable(editor, LINK_IN_TEXT)
  return (
    <SmallComponentsToolbarItem
      title={`set format link`}
      disabled={disabled}
      onClick={(event: MouseEvent) => {
        event.preventDefault()
        setContentFormType(LINK_IN_TEXT)
        setSelection(editor.selection)
        setIsFormOpen(true)
      }}
      icon={icon}
    />
  )
}

export default Button
