import { saveImage } from "./saveImage"

const pageMainImageLoader = async (file: Blob) => {
  const resSaveImage = await saveImage(file)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return resSaveImage.data
}

export default pageMainImageLoader
