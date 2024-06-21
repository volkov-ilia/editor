import { useSlate } from "slate-react"
import { ComponentsToolbarItem } from "hwdtech-admin-components"
import React from "react"
import insertComponentFromToolBar from "../../../utils/slate/insertComponentFromToolBar"
import ComponentButtonProps from "../../../types/Slate/Components/ComponentButtonProps"

const ComponentButton: React.FC<ComponentButtonProps> = ({ format, preview, description, title }) => {
  const editor = useSlate()
  return (
    <ComponentsToolbarItem
      preview={preview}
      description={description}
      title={title}
      onMouseDown={(event: MouseEvent) => {
        event.preventDefault()
        insertComponentFromToolBar(editor, format)
      }}
    />
  )
}

export default ComponentButton
