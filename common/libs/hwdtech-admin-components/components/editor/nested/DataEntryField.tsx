import React from "react"
import clsx from "clsx"
import DataEntryFieldProps from "../../../others/types/editor/nested/DataEntryFieldProps"

export const DataEntryField: React.FC<DataEntryFieldProps> = ({
  children,
  isEmpty,
  placeholderRight = false,
  placeholderCenter = false,
  placeholder,
  attributes,
}) => {
  return isEmpty ? (
    <span {...attributes} className={"relative w-full flex flex-grow"}>
      <span contentEditable={true} suppressContentEditableWarning={true} className={"z-5 w-full"}>
        {children}
      </span>
      <span
        className={clsx(
          "opacity-30 absolute top-0 w-full z-0",
          placeholderRight ? "text-right mr-2" : placeholderCenter ? "text-center" : "text-left ml-2"
        )}
        contentEditable={false}
        suppressContentEditableWarning={true}
      >
        {placeholder}
      </span>
    </span>
  ) : (
    <p contentEditable={true} suppressContentEditableWarning={true}>
      {children}
    </p>
  )
}
