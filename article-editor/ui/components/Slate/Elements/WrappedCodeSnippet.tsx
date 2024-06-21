import { CodeSnippet } from "hwdtech-admin-components"
import React from "react"
import CompletedWrapper from "../CompoletedWrapper"
import get from "lodash/get"
import getElements from "../../../../utils/slate/childrenParser/getElements"
import SELECTOR from "../../../../utils/slate/globalValues/article/nestedTypes/SELECTOR"
import getNodes from "../../../../utils/slate/childrenParser/getNodes"
import LINK from "../../../../utils/slate/globalValues/article/nestedTypes/LINK"
import TITLE from "../../../../utils/slate/globalValues/article/nestedTypes/TITLE"
import HEIGHT from "../../../../utils/slate/globalValues/article/nestedTypes/HEIGHT"
import WrappedComponentsProps from "../../../../types/Slate/Components/Elements/WrappedComponentsProps"
import { Descendant } from "slate"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, element, editor, children }) => {
  const selector = {
    slate: getElements(children, SELECTOR),
    value: get(getNodes(element.children as Descendant[] & { type: string }, SELECTOR), "[0].children[0].text"),
  }
  const link = {
    slate: getElements(children, LINK),
    value: get(getNodes(element.children as Descendant[] & { type: string }, LINK), "[0].children[0].text"),
  }
  const title = {
    slate: getElements(children, TITLE),
    value: get(getNodes(element.children as Descendant[] & { type: string }, TITLE), "[0].children[0].text"),
  }
  const height = {
    slate: getElements(children, HEIGHT),
    value: get(getNodes(element.children as Descendant[] & { type: string }, HEIGHT), "[0].children[0].text"),
  }

  return (
    <CompletedWrapper element={element} editor={editor} attributes={attributes}>
      <CodeSnippet selector={selector} link={link} title={title} height={height} />
    </CompletedWrapper>
  )
}

export default Wrapped
