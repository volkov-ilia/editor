import React from "react"
import { OptionalButton, OptionalButtonsBox } from "hwdtech-admin-components"
import deleteImage from "../../../utils/slate/eventHandlers/deleteImage"
import imageOptionalButtonsTexts from "../../../utils/texts/imageOptionalButtonsTexts"
import ImageOptionalButtonsProps from "../../../types/Slate/Components/ImageOptionalButtonsProps"

const button: React.FC<ImageOptionalButtonsProps> = ({ element, editor, save = false }) => {
  return (
    <OptionalButtonsBox className={"bg-white pt-2 pb-2"}>
      <OptionalButton
        key={"rossCancel"}
        icon={"rossCancel"}
        title={imageOptionalButtonsTexts.moveUpTitle}
        onClick={() => deleteImage(element, editor, save)}
      />
    </OptionalButtonsBox>
  )
}

export default button
