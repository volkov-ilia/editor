import { AxiosResponse } from "axios"
import { SaveImageHandlerProps } from "../../../types/Slate/Utils/eventHandlers/ImageSaveHandlerFunc"
import imageLoader from "./imageLoader"
import sendFiletoHandler from "./sendFiletoHandler"

const saveImageHandler: (props: SaveImageHandlerProps) => Promise<void> = async ({
  event,
  file,
  setIsOpen,
  setIsLoading,
  editor,
  element,
  itemType,
}) => {
  const imageTypeHandler = async ({ type, file }: { type: string; file: Blob }) => {
    await imageLoader(editor, element, itemType, file, type)
  }
  await sendFiletoHandler({
    event,
    file,
    setIsOpen,
    setIsLoading,
    imageTypeHandler,
  })
}

export default saveImageHandler
