import { OptionalButton } from "hwdtech-admin-components"
import commonOptionalButtonsTexts from "../../../../utils/texts/commonOptionalButtonsTexts"
import moveComponent from "../../../../utils/slate/eventHandlers/moveComponent"
import deleteComponent from "../../../../utils/slate/eventHandlers/deleteComponent"
import React, { ReactElement } from "react"
import CommonProps from "../../../../types/Slate/Components/ElementsOptionalButtons/CommonProps"
import { useApplicationValueContext } from "../../ApplicationContext"

const Buttons: ({ element, editor }: CommonProps) => ReactElement[] = ({ element, editor }) => {
  const { value, setValue } = useApplicationValueContext()
  return [
    <OptionalButton
      key={"arrowUp"}
      icon={"arrowUp"}
      title={commonOptionalButtonsTexts.moveUpTitle}
      onClick={() => moveComponent(element, editor, "up")}
    />,
    <OptionalButton
      key={"arrowDown"}
      icon={"arrowDown"}
      title={commonOptionalButtonsTexts.moveDownTitle}
      onClick={() => moveComponent(element, editor, "down")}
    />,
    <OptionalButton
      key={"rossCancel"}
      icon={"rossCancel"}
      title={commonOptionalButtonsTexts.deleteTitle}
      onClick={() => deleteComponent(element, editor, setValue, value)}
    />,
  ]
}

export default Buttons
