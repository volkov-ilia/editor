import clsx from "clsx"
import { SymbolIcon } from "../../page/common/SymbolIcon"
import React from "react"
import ToolbarItemProps from "../../../others/types/editor/nested/ToolbarItemProps"
import get from "lodash/get"
import EDITOR_ICON_SPACE from "../../../others/iconSpaces/EDITOR_ICON_SPACE"

export const ToolbarItem: React.FC<ToolbarItemProps> = ({
  size = "s",
  icon,
  onClick,
  className = "text-green",
  title,
  onMouseDown,
}) => {
  const sizesMap = {
    s: "h-16",
    m: "h-18",
    l: "h-21",
  }
  return (
    <button
      onClick={onClick}
      onMouseDown={onMouseDown}
      title={title}
      className={clsx(
        get(sizesMap, `${size}`),
        `toolbar-item w-14 rounded-b-full border border-green flex justify-center items-center text-4xl`
      )}
    >
      <SymbolIcon icon={icon} className={className} space={EDITOR_ICON_SPACE} />
      <style jsx>{`
        .toolbar-item:not(:last-child) {
          margin-right: 0.6875rem;
        }
      `}</style>
    </button>
  )
}
