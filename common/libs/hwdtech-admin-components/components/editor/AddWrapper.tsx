import React, { useState } from "react"
import clsx from "clsx"
import AddWrapperProps from "../../others/types/editor/AddWrapperProps"

export const AddWrapper: React.FC<AddWrapperProps> = ({
  children,
  plusButton,
  optionalButtons,
  contentEditable = true,
  attributes,
}) => {
  const [isOpen, setOpen] = useState(false)
  const plus = React.cloneElement(plusButton, { isOpen, setOpen })
  return (
    <>
      <div
        {...attributes}
        contentEditable={contentEditable}
        suppressContentEditableWarning={true}
        className={clsx(
          `wrapper group flex flex-col border-dashed border-b-2 w-full relative hover:border-green border-transparent mb-6`,
          isOpen ? "border-green" : "border-transparent",
          { "pt-7": React.isValidElement(optionalButtons) }
        )}
      >
        {React.isValidElement(optionalButtons) && optionalButtons}
        {children}
        {plus}
      </div>
    </>
  )
}
