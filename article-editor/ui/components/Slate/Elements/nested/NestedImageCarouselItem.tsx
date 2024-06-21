import React from "react"
import { Descendant, Node } from "slate"
import getElements from "../../../../../utils/slate/childrenParser/getElements"
import POSITION from "../../../../../utils/slate/globalValues/article/nestedTypes/POSITION"
import ALT from "../../../../../utils/slate/globalValues/article/nestedTypes/ALT"
import { ImageCarouselOrEmpty } from "hwdtech-admin-components"
import moveImageCarouselItemTo from "../../../../../utils/slate/eventHandlers/moveImageCarouselItemTo"
import getNodes from "../../../../../utils/slate/childrenParser/getNodes"
import get from "lodash/get"
import { ReactEditor } from "slate-react"
import IMAGE_CAROUSEL_ITEM from "../../../../../utils/slate/globalValues/article/nestedTypes/IMAGE_CAROUSEL_ITEM"
import IMAGE_DESCRIPTION from "../../../../../utils/slate/globalValues/article/nestedTypes/IMAGE_DESCRIPTION"
import ImageOptionalButtons from "../../ImageOptionalButtons"
import WrappedComponentsProps from "../../../../../types/Slate/Components/Elements/WrappedComponentsProps"
import saveImageHandler from "../../../../../utils/slate/eventHandlers/saveImageHandler"
import { ImageSaveHandlerProps } from "../../../../../types/Slate/Utils/eventHandlers/ImageSaveHandlerFunc"
import { useApplicationValueContext } from "../../../ApplicationContext"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, editor, element, children }) => {
  const { locale } = useApplicationValueContext()
  const descSlate = getElements(children, IMAGE_DESCRIPTION)
  const positionSlate = getElements(children, POSITION)
  const altSlate = getElements(children, ALT)
  const positionText = Node.string(get(getNodes(element.children as Descendant[] & { type: string }, POSITION), "[0]"))
  const slates = {
    description: descSlate,
    position: positionSlate,
    alt: altSlate,
  }
  const node = {
    url: get(element, "url"),
    alt: Node.string(
      get(getNodes(get(element, "children") as Descendant[] & { type: string }, ALT), "[0]", { children: [] })
    ),
    position: get(ReactEditor.findPath(editor as ReactEditor, element), [1]),
  }
  return (
    <ImageCarouselOrEmpty
      attributes={attributes}
      slates={slates}
      node={node}
      moveOnClick={() => moveImageCarouselItemTo(editor, element, positionText)}
      saveImageHandler={async (props: Omit<ImageSaveHandlerProps, "imageTypeHandler">) => {
        const itemType = IMAGE_CAROUSEL_ITEM
        const { event, file, setIsLoading, setIsOpen } = props
        await saveImageHandler({
          element,
          editor,
          itemType,
          event,
          file,
          setIsLoading,
          setIsOpen,
        })
      }}
      buttons={<ImageOptionalButtons editor={editor} element={element} />}
    />
  )
}

export default Wrapped
