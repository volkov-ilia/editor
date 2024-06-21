import { useSlate } from "slate-react"
import { ToolbarItem } from "hwdtech-admin-components"
import React from "react"
import toggleMark from "../../../utils/slate/toggleMark"
import MarkButtonProps from "../../../types/Slate/Components/MarkButtonProps"

const MarkButton: React.FC<MarkButtonProps> = ({ format, icon, size }) => {
  const editor = useSlate()
  return (
    <ToolbarItem
      onMouseDown={(event: MouseEvent) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
      icon={icon}
      size={size}
    />
  )
}

export default MarkButton
