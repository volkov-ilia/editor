import componentsMap from "../../../utils/slate/globalValues/componentsMap"
import insertComponentFromDropDown from "../../../utils/slate/insertComponentFromDropDown"
import { PlusButton } from "hwdtech-admin-components"
import React from "react"
import plusButtonTitle from "../../../utils/texts/plusButtonTitle"
import CompletedPlusButtonProps from "../../../types/Slate/Components/CompletedPlusButtonProps"

const button: React.FC<CompletedPlusButtonProps> = ({ element, editor, isOpen, setOpen }) => {
  return (
    <PlusButton
      componentsMap={componentsMap}
      title={plusButtonTitle}
      onClick={(event: MouseEvent, type: string) => {
        event.preventDefault()
        insertComponentFromDropDown({
          type,
          element,
          editor,
        })
      }}
      isOpen={isOpen}
      setOpen={setOpen}
    />
  )
}

export default button
