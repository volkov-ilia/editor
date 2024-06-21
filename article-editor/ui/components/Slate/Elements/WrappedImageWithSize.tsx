import { ImageWithSize } from "hwdtech-admin-components"
import React from "react"
import IMAGE from "../../../../utils/slate/globalValues/article/nestedTypes/IMAGE"
import getElements from "../../../../utils/slate/childrenParser/getElements"
import CompletedWrapper from "../CompoletedWrapper"
import WrappedComponentsProps from "../../../../types/Slate/Components/Elements/WrappedComponentsProps"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, element, editor, children }) => {
  const image = getElements(children, IMAGE)
  return (
    <CompletedWrapper attributes={attributes} element={element} editor={editor}>
      <ImageWithSize>{image}</ImageWithSize>
    </CompletedWrapper>
  )
}

export default Wrapped
