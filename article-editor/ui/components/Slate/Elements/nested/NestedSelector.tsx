import React from "react"
import get from "lodash/get"
import { Selector } from "hwdtech-admin-components"
import WrappedComponentsProps from "../../../../../types/Slate/Components/Elements/WrappedComponentsProps"
import includes from "lodash/includes"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, editor, element, children }) => {
  const values = get(element, "values")
  const onChange = get(element, "onChange")
  const selectedItem = get(children, "[0].props.text.text")
  const isSelectedInside = includes(values, selectedItem)
  return (
    <Selector
      attributes={attributes}
      onChange={(event: MouseEvent) => onChange({ event, editor, node: element })}
      values={values}
      selectedItem={isSelectedInside && selectedItem}
    >
      {children}
    </Selector>
  )
}

export default Wrapped
