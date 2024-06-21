import React from "react"
import { SymbolIcon } from "../common/SymbolIcon"
import { pageIcons } from "../../../others/page/iconCodes"
import UnorderedListItemProps from "../../../others/types/nested/UnorderedListItemProps"
import { useEditorModeContext } from "../../EditorModeContext"

export const UnorderedListItem: React.FC<UnorderedListItemProps> = ({ attributes, children }) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableTrue = isEditable ? { contentEditable: true, suppressContentEditableWarning: true } : {}
  return (
    <li {...attributes} className="flex">
      <SymbolIcon icon={pageIcons.next} className="text-green" />
      <div {...editableTrue} className="text focus:outline-none">
        {children}
      </div>
      <style jsx>{`
        .text {
          margin-left: 1rem;
          font-weight: 300;
          line-height: 2;
          font-size: 20px;
        }
      `}</style>
    </li>
  )
}
