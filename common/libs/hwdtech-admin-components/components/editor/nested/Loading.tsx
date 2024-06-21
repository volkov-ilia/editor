import { SymbolIcon } from "../../page/common/SymbolIcon"
import { icons } from "../../../others/editor/iconCodes"
import React from "react"
import LoadingProps from "../../../others/types/LoadingProps"
import EDITOR_ICON_SPACE from "../../../others/iconSpaces/EDITOR_ICON_SPACE"

export const Loading: React.FC<LoadingProps> = ({ icon = icons.clock }) => {
  return (
    <div className={"rotate-center flex items-center justify-center w-16 h-16 text-6xl"}>
      <SymbolIcon icon={icon} space={EDITOR_ICON_SPACE} />
    </div>
  )
}
