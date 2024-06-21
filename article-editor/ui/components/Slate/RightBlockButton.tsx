import { SmallComponentsToolbarItem } from "hwdtech-admin-components"
import React from "react"
import { useSlate } from "slate-react"
import { toggleBlock } from "../../../utils/slate/toggleBlock"
import getDisable from "../../../utils/slate/getDisable"
import RightBlockButtonProps from "../../../types/Slate/Components/RightBlockButtonProps"

const Button: React.FC<RightBlockButtonProps> = ({ format, icon, size }) => {
  const editor = useSlate()
  const disabled = getDisable(editor, format)
  return (
    <SmallComponentsToolbarItem
      title={`set format ${format}`}
      disabled={disabled}
      onClick={(event: MouseEvent) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
      icon={icon}
      size={size}
    />
  )
}

export default Button
