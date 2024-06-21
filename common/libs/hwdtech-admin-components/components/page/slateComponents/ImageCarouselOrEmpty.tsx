import isEmpty from "lodash/isEmpty"
import { EmptyImage } from "./EmptyImage"
import React, { useState } from "react"
import get from "lodash/get"
import { AddImage } from "../../editor/AddImage"
import { Dialog } from "@reach/dialog"
import { SlateImageCarouselItem } from "./SlateImageCarouselItem"
import { Loading } from "../../editor/nested/Loading"
import { WrappedImageComponent } from "./WrappedImageComponent"
import ImageCarouselOrEmptyProps from "../../../others/types/ImageCarouselOrEmptyProps"

export const ImageCarouselOrEmpty: React.FC<ImageCarouselOrEmptyProps> = ({
  attributes,
  slates,
  node,
  saveImageHandler,
  moveOnClick,
  width,
  height,
  buttons,
}) => {
  const [openEditor, setOpenEditor] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const descSlate = get(slates, "description")
  const positionSlate = get(slates, "position")
  const altSlate = get(slates, "alt")

  const url = get(node, "url")
  const alt = get(node, "alt")

  return (
    <div {...attributes} className="item h-full">
      <div className={"my-8 w-full flex justify-center"}>
        {!isEmpty(url) ? (
          <div>
            <div
              contentEditable={false}
              suppressContentEditableWarning={true}
              className="mb-4 w-full flex flex-col justify-center items-center"
            >
              <div className={"cursor-pointer box flex-grow"} onClick={() => setOpenEditor(true)}>
                {isLoading ? (
                  <div className={"loading flex items-center justify-center text-green"}>
                    <Loading />
                  </div>
                ) : (
                  <WrappedImageComponent buttons={buttons} src={url} width={width} height={height} alt={alt} />
                )}
              </div>
            </div>
            <div className="italic">
              <SlateImageCarouselItem
                description={descSlate}
                position={positionSlate}
                alt={altSlate}
                moveOnClick={moveOnClick}
              />
            </div>
          </div>
        ) : (
          <div className={"relative cursor-pointer box flex-grow"} onClick={() => setOpenEditor(true)}>
            <EmptyImage height={height} isLoading={isLoading} />
          </div>
        )}
      </div>
      <Dialog isOpen={openEditor} aria-label={"image-adding-window"}>
        <AddImage
          isOpen={openEditor}
          setIsOpen={setOpenEditor}
          defaultImage={url}
          saveImageHandler={saveImageHandler}
          setIsLoading={setIsLoading}
        />
      </Dialog>
      <style jsx>{`
        .box {
          max-width: ${width * 0.75}px;
        }

        .loading {
          width: ${width * 0.75}px;
          height: ${height * 0.75}px;
        }

        .item {
          padding: 0 0.75rem;
        }

        @screen sm {
          .item {
            padding: 0 2rem;
          }
        }
      `}</style>
    </div>
  )
}

ImageCarouselOrEmpty.defaultProps = {
  width: 720,
  height: 620,
}
