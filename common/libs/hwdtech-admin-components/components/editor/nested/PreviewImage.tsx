import React from "react"
import ImageProps from "../../../others/types/ImageProps"

export const PreviewImage: React.FC<ImageProps> = ({ src, alt, width, height }) => (
  <div className={"image-container h-28 w-28 relative flex items-center justify-center"}>
    <div className={"rounded-full h-28 w-28 bg-editor-dark-gray absolute"} />
    <img src={src} alt={alt} width={width} height={height} className={"z-10 rounded-full"} />
  </div>
)

PreviewImage.defaultProps = {
  width: 92,
  height: 92,
}
