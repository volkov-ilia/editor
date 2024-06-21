import { Code } from "hwdtech-admin-components"
import React from "react"
import getElements from "../../../../utils/slate/childrenParser/getElements"
import CODE_ITEM from "../../../../utils/slate/globalValues/article/nestedTypes/CODE_ITEM"
import getNodes from "../../../../utils/slate/childrenParser/getNodes"
import get from "lodash/get"
import CompletedWrapper from "../CompoletedWrapper"
import SELECTOR from "../../../../utils/slate/globalValues/article/nestedTypes/SELECTOR"
import WrappedComponentsProps from "../../../../types/Slate/Components/Elements/WrappedComponentsProps"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, element, editor, children }) => {
  const code = getElements(children, CODE_ITEM)
  const selector = getElements(children, SELECTOR)
  const languageText = get(getNodes(element.children, SELECTOR), "[0].children[0].text")

  return (
    <CompletedWrapper attributes={attributes} element={element} editor={editor}>
      <Code language={languageText} selector={selector}>
        {code}
      </Code>
    </CompletedWrapper>
  )
}

export default Wrapped
