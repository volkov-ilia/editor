import { TextWithGreenLine } from "hwdtech-admin-components"
import React from "react"
import CompletedWrapper from "../CompoletedWrapper"
import WrappedComponentsProps from "../../../../types/Slate/Components/Elements/WrappedComponentsProps"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, element, editor, children }) => (
  <CompletedWrapper attributes={attributes} element={element} editor={editor}>
    <TextWithGreenLine>{children}</TextWithGreenLine>
  </CompletedWrapper>
)

export default Wrapped
