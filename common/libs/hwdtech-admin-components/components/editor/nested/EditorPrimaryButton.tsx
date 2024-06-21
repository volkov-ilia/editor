import clsx from "clsx"
import EditorPrimaryButtonProps from "../../../others/types/editor/nested/EditorPrimaryButtonProps"
import React from "react"

export const EditorPrimaryButton: React.FC<EditorPrimaryButtonProps> = ({ text, onClick, title, className }) => {
  const defaultColors = "border-green text-green"
  return (
    <button
      onClick={onClick}
      title={title}
      className={clsx(
        `border px-8 rounded-full text-2xl font-bold py-2 flex items-center justify-center`,
        defaultColors,
        className
      )}
    >
      {text}
    </button>
  )
}
