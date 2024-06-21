import { TwoImageWithText } from "hwdtech-admin-components"
import React from "react"
import getElements from "../../../../utils/slate/childrenParser/getElements"
import IMAGE from "../../../../utils/slate/globalValues/article/nestedTypes/IMAGE"
import DESCRIPTION from "../../../../utils/slate/globalValues/article/nestedTypes/DESCRIPTION"
import CompletedWrapper from "../CompoletedWrapper"
import WrappedComponentsProps from "../../../../types/Slate/Components/Elements/WrappedComponentsProps"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, element, editor, children }) => {
  const text = getElements(children, DESCRIPTION)
  const imagesElements = getElements(children, IMAGE)
  return (
    <CompletedWrapper attributes={attributes} element={element} editor={editor}>
      <TwoImageWithText text={text}>{imagesElements}</TwoImageWithText>
    </CompletedWrapper>
  )
}

export default Wrapped
