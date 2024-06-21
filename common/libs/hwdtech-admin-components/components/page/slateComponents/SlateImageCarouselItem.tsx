import React from "react"
import SlateImageCarouselItemProps from "../../../others/types/nested/SlateImageCarouselItemProps"

export const SlateImageCarouselItem: React.FC<SlateImageCarouselItemProps> = ({
  description,
  position,
  alt,
  moveOnClick,
}) => {
  return (
    <div className={"flex flex-col"}>
      {description && description}
      {alt && alt}
      {position && (
        <div className={"flex justify-between items-center"}>
          {position}
          <button
            contentEditable={false}
            suppressContentEditableWarning={true}
            className={"w-32 p-1 rounded-full border border-green text-green text-lg"}
            onClick={moveOnClick}
          >
            move!
          </button>
        </div>
      )}
    </div>
  )
}
