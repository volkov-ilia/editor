import React, { useState } from "react"
import { AddImage } from "../../editor/AddImage"
import { Dialog } from "@reach/dialog"
import { EmptyImage } from "./EmptyImage"
import SlateEmptyImageCarouselItemProps from "../../../others/types/nested/SlateEmptyImageCarouselItemProps"

export const SlateEmptyImageCarouselItem: React.FC<SlateEmptyImageCarouselItemProps> = ({
  attributes,
  children,
  saveImageHandler,
  width,
  height,
}) => {
  const [openEditor, setOpenEditor] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div
      {...attributes}
      className={"my-8 w-full flex justify-center select-none"}
      contentEditable={false}
      suppressContentEditableWarning={true}
    >
      {children}
      <div className={"relative cursor-pointer box flex-grow"} onClick={() => setOpenEditor(true)}>
        <EmptyImage height={height} isLoading={isLoading} />
      </div>
      <Dialog isOpen={openEditor} aria-label={"image-adding-window"}>
        <AddImage
          isOpen={openEditor}
          setIsOpen={setOpenEditor}
          saveImageHandler={saveImageHandler}
          setIsLoading={setIsLoading}
        />
      </Dialog>
      <style jsx>{`
        .box {
          max-width: ${width * 0.75}px;
        }
      `}</style>
    </div>
  )
}

SlateEmptyImageCarouselItem.defaultProps = {
  width: 720,
  height: 620,
}
