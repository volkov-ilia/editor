import React from "react"
import { useEditorModeContext } from "../../EditorModeContext"
import SeparatorProps from "../../../others/types/SeparatorProps"
import { useAmp } from "next/amp"

const NoAmpSeparator: React.FC<SeparatorProps> = ({ children }) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableFalse = isEditable ? { contentEditable: false, suppressContentEditableWarning: true } : {}
  return (
    <div {...editableFalse} className={"flex flex-col justify-center items-center select-none"}>
      <hr className="w-full border-b border-green my-4" />
      {isEditable && <div className={"select-none"}>{children}</div>}
    </div>
  )
}

const AmpSeparator: React.FC<SeparatorProps> = () => {
  return (
    <>
      <hr className="separator" />
      <style jsx>{`
        .separator {
          border-top-style: initial;
          border-right-style: initial;
          border-left-style: initial;
          border-top-color: initial;
          border-right-color: initial;
          border-left-color: initial;
          border-width: 0 0 1px;
          border-image: initial;
          border-bottom: 1px solid rgb(0, 0, 0);
          margin-bottom: 2rem;
        }
      `}</style>
    </>
  )
}

export const Separator: React.FC<SeparatorProps> = ({ children }) => {
  const isAmp = useAmp()

  return isAmp ? <AmpSeparator /> : <NoAmpSeparator>{children}</NoAmpSeparator>
}
