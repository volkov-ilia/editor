import React from "react"
import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
import clsx from "clsx"
import ImageComponentProps from "../../../others/types/ImageComponentProps"
import { useEditorModeContext } from "../../EditorModeContext"
import { useAmp } from "next/amp"

export const NoAmpImageComponent: React.FC<
  Omit<ImageComponentProps, "ampStyleImg" | "ampWidth" | "ampHeight" | "responsive">
> = ({ src, classNameImage, className, alt, sources, width, height, sizes, easterEggs }) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableFalse = isEditable ? { contentEditable: false, suppressContentEditableWarning: true } : {}
  return (
    <div {...editableFalse} className={clsx("relative", className)}>
      {easterEggs && easterEggs}
      <picture className={"lazyload w-full"}>
        {sources}
        <img
          src={src}
          data-src={src}
          className={clsx(`lazyload`, classNameImage)}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
        />
        <style jsx>{`
          .cont {
            width: ${width}px;
            height: ${height}px;
          }
        `}</style>
      </picture>
    </div>
  )
}

const AmpImageComponent: React.FC<Omit<ImageComponentProps, "classNameImage" | "className" | "width" | "height">> = ({
  src,
  alt,
  ampHeight,
  ampWidth,
  ampStyleImg,
  layout,
}) => <amp-img src={src} width={ampWidth} height={ampHeight} alt={alt} style={ampStyleImg} layout={layout || "fixed"} />

export const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  classNameImage,
  className,
  alt,
  ampStyleImg,
  sources,
  width,
  height,
  ampWidth,
  ampHeight,
  sizes,
  layout,
  easterEggs,
}) => {
  const isAmp = useAmp()

  return isAmp ? (
    <AmpImageComponent
      src={src}
      alt={alt}
      ampWidth={ampWidth || width}
      ampHeight={ampHeight || height}
      ampStyleImg={ampStyleImg}
      layout={layout}
    />
  ) : (
    <NoAmpImageComponent
      src={src}
      classNameImage={classNameImage}
      className={className}
      alt={alt}
      sources={sources}
      width={width}
      height={height}
      sizes={sizes}
      easterEggs={easterEggs}
    />
  )
}
