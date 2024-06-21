import React from "react"
import get from "lodash/get"
import { Editor } from "slate"
import { DataEntryField } from "hwdtech-admin-components"
import WrappedComponentsProps from "../../../../types/Slate/Components/Elements/WrappedComponentsProps"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, element, editor, children }) => {
  const isEmpty = Editor.isEmpty(editor, element)
  const placeholder = get(element, "placeholder")
  const placeholderRight = get(element, "placeholderRight")
  const placeholderCenter = get(element, "placeholderCenter")

  return (
    <DataEntryField
      attributes={attributes}
      isEmpty={isEmpty}
      placeholder={placeholder}
      placeholderRight={placeholderRight}
      placeholderCenter={placeholderCenter}
    >
      {children}
    </DataEntryField>
  )
}

export default Wrapped
