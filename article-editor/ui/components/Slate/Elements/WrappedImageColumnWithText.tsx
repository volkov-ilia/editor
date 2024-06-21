import { ImageColumnWithText } from "hwdtech-admin-components"
import React from "react"
import IMAGE from "../../../../utils/slate/globalValues/article/nestedTypes/IMAGE"
import PARAGRAPH from "../../../../utils/slate/globalValues/article/nestedTypes/PARAGRAPH"
import getElements from "../../../../utils/slate/childrenParser/getElements"
import CompletedWrapper from "../CompoletedWrapper"
import WrappedComponentsProps from "../../../../types/Slate/Components/Elements/WrappedComponentsProps"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, element, editor, children }) => {
  const text = getElements(children, PARAGRAPH)
  const image = getElements(children, IMAGE)
  return (
    <CompletedWrapper attributes={attributes} element={element} editor={editor}>
      <ImageColumnWithText text={text}>{image}</ImageColumnWithText>
    </CompletedWrapper>
  )
}

export default Wrapped
