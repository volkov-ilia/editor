import React from "react"
import { WrappedImageComponent } from "../slateComponents/WrappedImageComponent"
import ImageCarouselItemProps from "../../../others/types/ImageCarouselItemProps"
import { useAmp } from "next/amp"
import { Italic } from "./Italic"
import { useEditorModeContext } from "../../EditorModeContext"

const NoAmpImageCarouselItem: React.FC<ImageCarouselItemProps> = ({
  src,
  description,
  alt,
  width,
  height,
  buttons,
}) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableFalse = isEditable ? { contentEditable: false, suppressContentEditableWarning: true } : {}
  return (
    <div {...editableFalse} className="mb-6">
      <div className={"w-full flex justify-center"}>
        <WrappedImageComponent buttons={buttons} src={src} width={width} height={height} alt={alt} />
      </div>
      {description && (
        <div className="mt-4 flex justify-center">
          <i {...editableFalse} style={{ userSelect: "none" }}>
            {description}
          </i>
        </div>
      )}
    </div>
  )
}

const AmpImageCarouselItem: React.FC<Omit<ImageCarouselItemProps, "width" | "height" | "buttons">> = ({
  src,
  description,
  alt,
}) => (
  <>
    <div className="block">
      <div className="images-block">
        <div className="image">
          <div className="fixed-height-container">
            <amp-img className="contain" layout="fill" src={src} alt={alt} />
          </div>
        </div>
      </div>
      <div className="description-block">
        <Italic>{description}</Italic>
      </div>
    </div>
    <style global jsx>{`
      .contain img {
        object-fit: contain;
      }
      .fixed-height-container {
        position: relative;
        width: 170px;
        height: 225px;
      }
      @screen xxs {
        .fixed-height-container {
          width: 225px;
          height: 255px;
        }
      }
      @screen xs {
        .fixed-height-container {
          width: 275px;
          height: 275px;
        }
      }
    `}</style>
    <style jsx>{`
      .block {
        padding: 1rem 0.75rem 0;
      }

      .images-block {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        width: 100%;
      }

      .image {
        width: 275px;
        display: flex;
        justify-content: center;
      }

      .description-block {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </>
)

export const ImageCarouselItem: React.FC<ImageCarouselItemProps> = ({
  src,
  description,
  alt,
  width,
  height,
  buttons,
}) => {
  const isAmp = useAmp()
  return isAmp ? (
    <AmpImageCarouselItem src={src} description={description} alt={alt} />
  ) : (
    <NoAmpImageCarouselItem
      src={src}
      description={description}
      alt={alt}
      width={width}
      height={height}
      buttons={buttons}
    />
  )
}

ImageCarouselItem.defaultProps = {
  height: 368,
  width: 930,
}
