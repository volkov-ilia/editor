import { useSlate } from "slate-react"
import React from "react"
import get from "lodash/get"
import elements from "./Elements"
import ElementProps from "../../../types/Slate/Components/ElementProps"

const Element: React.FC<ElementProps> = React.memo(({ attributes, children, element }) => {
  const editor = useSlate()
  const Elem = get(elements, element.type as string, get(elements, "default"))
  return (
    <Elem attributes={attributes} editor={editor} element={element}>
      {children}
    </Elem>
  )
})

Element.displayName = "Element"

export default Element
