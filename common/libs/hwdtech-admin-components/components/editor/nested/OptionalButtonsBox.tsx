import React from "react"
import clsx from "clsx"
import OptionalButtonsBoxProps from "../../../others/types/editor/nested/OptionalButtonsBoxProps"
import shortID from "../../../utils/shortID"

export const OptionalButtonsBox: React.FC<OptionalButtonsBoxProps> = ({ className, children }) => {
  return (
    <div
      contentEditable={false}
      suppressContentEditableWarning={true}
      className={clsx(
        "hidden absolute top-0 select-none w-full flex justify-end text-xl px-4 group-hover:flex pt-1",
        className
      )}
    >
      {React.Children.map(children, (child) => (
        <div key={shortID()} className={"optional flex justify-center items-center"}>
          {child}
        </div>
      ))}
      <style jsx>{`
        .optional:not(:last-child) {
          margin-right: 0.75rem;
        }
      `}</style>
    </div>
  )
}
