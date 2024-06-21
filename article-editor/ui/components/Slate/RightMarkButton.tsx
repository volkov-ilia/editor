import { useSlate } from "slate-react"
import React from "react"
import toggleMark from "../../../utils/slate/toggleMark"
import { SmallComponentsToolbarItem } from "hwdtech-admin-components"
import size from "lodash/size"
import getDisable from "../../../utils/slate/getDisable"
import RightMarkButtonProps from "../../../types/Slate/Components/RightMarkButtonProps"

const Button: React.FC<RightMarkButtonProps> = ({ format, icon }) => {
  const editor = useSlate()
  const disabled = getDisable(editor, format)
  return (
    <SmallComponentsToolbarItem
      title={`set format ${format}`}
      disabled={disabled}
      onClick={(event: MouseEvent) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
      icon={icon}
      size={size}
    />
  )
}

export default Button
