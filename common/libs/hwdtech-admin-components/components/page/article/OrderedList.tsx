import React from "react"
import BaseProps from "../../../others/types/BaseProps"
import { useEditorModeContext } from "../../EditorModeContext"

export const OrderedList: React.FC<BaseProps> = ({ children }) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableTrue = isEditable ? { contentEditable: true, suppressContentEditableWarning: true } : {}
  return (
    <>
      <ol {...editableTrue} className="ordered-list">
        {children}
      </ol>
      <style jsx>{`
        .ordered-list {
          list-style-type: decimal;
          padding-left: 1rem;
        }

        .ordered-list:focus {
          outline: none;
        }
      `}</style>
    </>
  )
}
