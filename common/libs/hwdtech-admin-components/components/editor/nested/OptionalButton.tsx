import clsx from "clsx"
import { SymbolIcon } from "../../page/common/SymbolIcon"
import { icons } from "../../../others/editor/iconCodes"
import React from "react"
import { pageIcons } from "../../../others/page/iconCodes"
import get from "lodash/get"
import OptionalButtonProps from "../../../others/types/editor/nested/OptionalButtonProps"
import EDITOR_ICON_SPACE from "../../../others/iconSpaces/EDITOR_ICON_SPACE"
import MAIN_ICON_SPACE from "../../../others/iconSpaces/MAIN_ICON_SPACE"

export const OptionalButton: React.FC<OptionalButtonProps> = ({ onClick, title, icon, color = "green" }) => {
  const editorIcon = get(icons, icon)
  const iconComponent = (
    <SymbolIcon icon={editorIcon || get(pageIcons, icon)} space={editorIcon ? EDITOR_ICON_SPACE : MAIN_ICON_SPACE} />
  )
  return (
    <button
      contentEditable={false}
      suppressContentEditableWarning={true}
      onClick={onClick}
      title={title}
      className={clsx(`optional select-none text-${color} flex items-center justify-center cursor-pointer`)}
    >
      {iconComponent}
    </button>
  )
}
