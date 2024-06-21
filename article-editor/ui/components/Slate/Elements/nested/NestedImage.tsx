import React from "react"
import getElements from "../../../../../utils/slate/childrenParser/getElements"
import ALT from "../../../../../utils/slate/globalValues/article/nestedTypes/ALT"
import { ImageOrEmpty } from "hwdtech-admin-components"
import get from "lodash/get"
import { Descendant, Node } from "slate"
import getNodes from "../../../../../utils/slate/childrenParser/getNodes"
import IMAGE from "../../../../../utils/slate/globalValues/article/nestedTypes/IMAGE"
import ImageOptionalButtons from "../../ImageOptionalButtons"
import IMAGE_DESCRIPTION from "../../../../../utils/slate/globalValues/article/nestedTypes/IMAGE_DESCRIPTION"
import WrappedComponentsProps from "../../../../../types/Slate/Components/Elements/WrappedComponentsProps"
import saveImageHandler from "../../../../../utils/slate/eventHandlers/saveImageHandler"
import { SaveImageHandlerProps } from "../../../../../types/Slate/Utils/eventHandlers/ImageSaveHandlerFunc"
import { useApplicationValueContext } from "../../../ApplicationContext"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, editor, element, children }) => {
  const { locale } = useApplicationValueContext()
  const altSlate = getElements(children, ALT)
  const imageDescriptionSlate = getElements(children, IMAGE_DESCRIPTION)
  const slates = {
    alt: altSlate,
    imageDescription: imageDescriptionSlate,
  }
  const node = {
    url: get(element, "url"),
    alt: Node.string(
      get(getNodes(get(element, "children") as Descendant[] & { type: string }, ALT), "[0]", { children: [] })
    ),
  }
  return (
    <ImageOrEmpty
      attributes={attributes}
      node={node}
      saveImageHandler={async (props: Omit<SaveImageHandlerProps, "imageTypeHandler">) => {
        const itemType = IMAGE
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
      buttons={<ImageOptionalButtons editor={editor} element={element} save={true} />}
    >
      {slates}
    </ImageOrEmpty>
  )
}

export default Wrapped
