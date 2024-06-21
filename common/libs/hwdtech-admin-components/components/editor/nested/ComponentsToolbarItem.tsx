import { SymbolIcon } from "../../page/common/SymbolIcon"
import { icons } from "../../../others/editor/iconCodes"
import React from "react"
import ComponentsToolbarItemProps from "../../../others/types/editor/nested/ComponentsToolbarItemProps"
import EDITOR_ICON_SPACE from "../../../others/iconSpaces/EDITOR_ICON_SPACE"

export const ComponentsToolbarItem: React.FC<ComponentsToolbarItemProps> = ({
  preview,
  description,
  title,
  onClick,
  onMouseDown,
}) => {
  return (
    <span
      className={
        "cursor-pointer w-54 h-54 relative border border-green rounded-2xl bg-light p-2 flex flex-col items-center"
      }
      onClick={onClick}
      onMouseDown={onMouseDown}
    >
      <div className={"mb-3"}>{title}</div>
      <span className={"flex items-center"}>
        <button>
          <SymbolIcon icon={icons.magnifer} className={"text-3xl mr-2 text-gray"} space={EDITOR_ICON_SPACE} />
        </button>
        {preview}
        <button>
          <SymbolIcon icon={icons.delete} className={"text-3xl ml-2 text-gray"} space={EDITOR_ICON_SPACE} />
        </button>
      </span>
      <span className={"mt-2 text-gray text-sm editable"}>{description}</span>
      <SymbolIcon
        icon={icons.leftTriangle}
        className={"absolute bottom-0 leading-none left-0 -mb-px -ml-px text-xl text-green"}
        space={EDITOR_ICON_SPACE}
      />
    </span>
  )
}
