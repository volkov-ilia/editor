import React from "react"
import LinkProps from "../../../others/types/LinkProps"
import { useEditorModeContext } from "../../EditorModeContext"

export const Link: React.FC<LinkProps> = ({ href, children, title, onDoubleClick }) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableFalse = isEditable ? { onDoubleClick } : {}
  return (
    <a className="link text-green border-b outline-none break-words" href={href} title={title} {...editableFalse}>
      {children}
    </a>
  )
}
