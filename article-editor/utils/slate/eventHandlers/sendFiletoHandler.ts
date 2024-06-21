import ImageSaveHandlerFunc from "../../../types/Slate/Utils/eventHandlers/ImageSaveHandlerFunc"

const sendFiletoHandler: ImageSaveHandlerFunc = async ({ event, file, setIsLoading, setIsOpen, imageTypeHandler }) => {
  if (file) {
    event.preventDefault()
    setIsLoading(true)
    const type = "image"
    setIsOpen(false)
    setIsLoading(false)
    await imageTypeHandler({ type, file })
  }
}

export default sendFiletoHandler
