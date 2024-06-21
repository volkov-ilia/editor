import React from "react"
import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
import { ImageComponent } from "../common/ImageComponent"
import WrappedImageComponentProps from "../../../others/types/WrappedImageComponentProps"
import { useEditorModeContext } from "../../EditorModeContext"

export const WrappedImageComponent: React.FC<WrappedImageComponentProps> = ({
  src,
  classNameImage,
  className,
  alt,
  sources,
  width,
  height,
  sizes,
  buttons,
}) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  return (
    <div className={"w-full relative"}>
      {isEditable && React.isValidElement(buttons) && buttons}
      <ImageComponent
        src={src}
        classNameImage={classNameImage}
        className={className}
        alt={alt}
        sources={sources}
        width={width}
        height={height}
        sizes={sizes}
      />
    </div>
  )
}
