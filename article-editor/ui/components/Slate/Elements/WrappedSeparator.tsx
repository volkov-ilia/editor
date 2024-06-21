import { Separator } from "hwdtech-admin-components"
import React from "react"
import CompletedWrapper from "../CompoletedWrapper"
import WrappedComponentsProps from "../../../../types/Slate/Components/Elements/WrappedComponentsProps"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, element, editor, children }) => {
  return (
    <CompletedWrapper attributes={attributes} element={element} editor={editor}>
      <Separator>{children}</Separator>
    </CompletedWrapper>
  )
}

export default Wrapped
