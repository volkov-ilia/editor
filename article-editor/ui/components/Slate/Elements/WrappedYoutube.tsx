import { ArticleYoutube } from "hwdtech-admin-components"
import React from "react"
import CompletedWrapper from "../CompoletedWrapper"
import get from "lodash/get"
import LINK from "../../../../utils/slate/globalValues/article/nestedTypes/LINK"
import getNodes from "../../../../utils/slate/childrenParser/getNodes"
import WrappedComponentsProps from "../../../../types/Slate/Components/Elements/WrappedComponentsProps"
import { Descendant } from "slate"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, element, editor, children }) => {
  const videoId = get(getNodes(element.children as Descendant[] & { type: string }, LINK), "[0].children[0].text")
  return (
    <CompletedWrapper attributes={attributes} element={element} editor={editor}>
      <ArticleYoutube videoId={videoId}>{children}</ArticleYoutube>
    </CompletedWrapper>
  )
}

export default Wrapped
