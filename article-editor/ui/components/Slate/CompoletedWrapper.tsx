import CompletedOptionalButtons from "./CompletedOptionalButtons"
import CompletedPlusButton from "./CompletedPlusButton"
import { AddWrapper } from "hwdtech-admin-components"
import React from "react"
import CompletedWrapperProps from "../../../types/Slate/Components/CompletedWrapperProps"

const CompletedWrapper: React.FC<CompletedWrapperProps> = ({ attributes, editor, element, children }) => {
  return (
    <AddWrapper
      attributes={attributes}
      optionalButtons={<CompletedOptionalButtons editor={editor} element={element} />}
      plusButton={<CompletedPlusButton editor={editor} element={element} />}
    >
      {children}
    </AddWrapper>
  )
}

export default CompletedWrapper
