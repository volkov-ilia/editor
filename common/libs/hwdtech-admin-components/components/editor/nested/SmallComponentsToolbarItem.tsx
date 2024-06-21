import { SymbolIcon } from "../../page/common/SymbolIcon"
import { icons } from "../../../others/editor/iconCodes"
import React from "react"
import get from "lodash/get"
import { pageIcons } from "../../../others/page/iconCodes"
import clsx from "clsx"
import SmallComponentsToolbarItemProps from "../../../others/types/editor/nested/SmallComponentsToolbarItemProps"
import EDITOR_ICON_SPACE from "../../../others/iconSpaces/EDITOR_ICON_SPACE"
import MAIN_ICON_SPACE from "../../../others/iconSpaces/MAIN_ICON_SPACE"

export const SmallComponentsToolbarItem: React.FC<SmallComponentsToolbarItemProps> = ({
  icon,
  onClick,
  title,
  disabled,
}) => {
  const editorIcon = get(icons, icon)
  const iconComponent = (
    <SymbolIcon icon={editorIcon || get(pageIcons, icon)} space={editorIcon ? EDITOR_ICON_SPACE : MAIN_ICON_SPACE} />
  )
  return (
    <button
      disabled={disabled}
      title={title}
      className={clsx(
        "xxxl:w-16 xxxl:h-16 xxl:w-12 xxl:h-12 xl:w-12 xl:h-12 w-12 h-12  relative border rounded-2xl bg-light p-2 flex justify-center items-center text-3xl",
        disabled ? "text-gray border-gray cursor-not-allowed" : "text-green border-green"
      )}
      onClick={onClick}
    >
      {iconComponent}
      <SymbolIcon
        icon={icons.leftTriangle}
        className={clsx(
          "absolute bottom-0 leading-none left-0 -mb-px -ml-px text-sm",
          disabled ? "text-gray" : "text-green "
        )}
        space={EDITOR_ICON_SPACE}
      />
    </button>
  )
}
