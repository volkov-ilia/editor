import { ToolbarItem } from "hwdtech-admin-components"
import React from "react"
import { useSlate } from "slate-react"
import { toggleBlock } from "../../../utils/slate/toggleBlock"
import BlockButtonProps from "../../../types/Slate/Components/BlockButtonProps"

const BlockButton: React.FC<BlockButtonProps> = ({ format, icon, size }) => {
  const editor = useSlate()
  return (
    <ToolbarItem
      onMouseDown={(event: MouseEvent) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
      icon={icon}
      size={size}
    />
  )
}

export default BlockButton
