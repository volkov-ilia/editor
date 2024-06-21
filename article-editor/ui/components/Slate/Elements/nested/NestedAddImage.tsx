import React from "react"
import { SlateEmptyImageCarouselItem } from "hwdtech-admin-components"
import imageCarouselLoader from "../../../../../utils/slate/eventHandlers/imageCarouselLoader"
import WrappedComponentsProps from "../../../../../types/Slate/Components/Elements/WrappedComponentsProps"
import { AxiosResponse } from "axios"
import { SaveImageHandlerProps } from "../../../../../types/Slate/Utils/eventHandlers/ImageSaveHandlerFunc"
import sendFiletoHandler from "../../../../../utils/slate/eventHandlers/sendFiletoHandler"
import { useApplicationValueContext } from "../../../ApplicationContext"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, editor, element, children }) => {
  const { locale } = useApplicationValueContext()
  return (
    <SlateEmptyImageCarouselItem
      attributes={attributes}
      saveImageHandler={async (props: Omit<SaveImageHandlerProps, "imageTypeHandler">) => {
        const imageTypeHandler = async ({ type, file }: { type: string; file: Blob }) => {
          await imageCarouselLoader(editor, element, type, file)
        }
        const { event, file, setIsLoading, setIsOpen } = props
        await sendFiletoHandler({
          event,
          file,
          setIsOpen,
          setIsLoading,
          imageTypeHandler,
        })
      }}
      imageSpan={children}
    />
  )
}

export default Wrapped
