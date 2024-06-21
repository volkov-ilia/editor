import { ImageCarousel } from "hwdtech-admin-components"
import React from "react"
import get from "lodash/get"
import IMAGE_CAROUSEL_ITEM from "../../../../utils/slate/globalValues/article/nestedTypes/IMAGE_CAROUSEL_ITEM"
import getElements from "../../../../utils/slate/childrenParser/getElements"
import ADD_IMAGE from "../../../../utils/slate/globalValues/article/nestedTypes/ADD_IMAGE"
import CompletedWrapper from "../CompoletedWrapper"
import WrappedComponentsProps from "../../../../types/Slate/Components/Elements/WrappedComponentsProps"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, element, editor, children }) => {
  const imageSet = getElements(children, IMAGE_CAROUSEL_ITEM)
  const first = get(getElements(children, ADD_IMAGE), "[0]")
  return (
    <CompletedWrapper attributes={attributes} element={element} editor={editor}>
      <ImageCarousel firstNode={first}>{imageSet}</ImageCarousel>
    </CompletedWrapper>
  )
}

export default Wrapped
