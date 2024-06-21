import { Quote } from "hwdtech-admin-components"
import React from "react"
import CompletedWrapper from "../CompoletedWrapper"
import getElements from "../../../../utils/slate/childrenParser/getElements"
import SIGNATURE from "../../../../utils/slate/globalValues/article/nestedTypes/SIGNATURE"
import QUOTE_TEXT from "../../../../utils/slate/globalValues/article/nestedTypes/QUOTE_TEXT"
import WrappedComponentsProps from "../../../../types/Slate/Components/Elements/WrappedComponentsProps"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, element, editor, children }) => {
  const quote = getElements(children, QUOTE_TEXT)
  const signature = getElements(children, SIGNATURE)
  return (
    <CompletedWrapper attributes={attributes} element={element} editor={editor}>
      <Quote signature={signature}>{quote}</Quote>
    </CompletedWrapper>
  )
}

export default Wrapped
