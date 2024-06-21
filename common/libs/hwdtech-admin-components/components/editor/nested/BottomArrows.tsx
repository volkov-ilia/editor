import { SymbolIcon } from "../../page/common/SymbolIcon"
import { icons } from "../../../others/editor/iconCodes"
import BottomArrowsProps from "../../../others/types/editor/nested/BottomArrowsProps"
import React from "react"
import EDITOR_ICON_SPACE from "../../../others/iconSpaces/EDITOR_ICON_SPACE"

export const BottomArrows: React.FC<BottomArrowsProps> = ({ onClick }) => (
  <button onClick={onClick} className={"flex justify-center items-center flex-col text-5xl"}>
    <SymbolIcon className={"text-light-gray-4 leading-4"} icon={icons.down} space={EDITOR_ICON_SPACE} />
    <SymbolIcon className={"text-light-gray-6 leading-4"} icon={icons.down} space={EDITOR_ICON_SPACE} />
    <SymbolIcon className={"text-light-gray-10 leading-4"} icon={icons.down} space={EDITOR_ICON_SPACE} />
  </button>
)
