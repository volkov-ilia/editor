import React from "react"
import { OptionalButtonsBox } from "hwdtech-admin-components"
import elementsOptionalButtons from "./ElementsOptionalButtons"
import get from "lodash/get"
import CompletedOptionalButtonsProps from "../../../types/Slate/Components/CompletedOptionalButtonsProps"
import { CustomElement } from "../../../custom-types"

const button: React.FC<CompletedOptionalButtonsProps> = ({ element, editor }) => {
  const elem = element as CustomElement
  const defaultButtons = get(elementsOptionalButtons, "default")({ element: elem, editor })
  const elementButtons = get(elementsOptionalButtons, `${elem.type}`)
  const buttons = elementButtons ? [...defaultButtons, ...elementButtons({ elem, editor })] : defaultButtons

  return <OptionalButtonsBox>{buttons}</OptionalButtonsBox>
}

export default button
