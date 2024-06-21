import { SymbolIcon } from "../../page/common/SymbolIcon"
import { icons } from "../../../others/editor/iconCodes"
import clsx from "clsx"
import HeadInfoCardListItemProps from "../../../others/types/editor/nested/HeadInfoCardListItemProps"
import React from "react"
import EDITOR_ICON_SPACE from "../../../others/iconSpaces/EDITOR_ICON_SPACE"

export const HeadInfoCardListItem: React.FC<HeadInfoCardListItemProps> = ({ time, text, likes, image }) => (
  <div className={"flex items-center w-full"}>
    <div className={"text-green mr-4 text-2xl"}>{time}</div>
    <div className={"text-gray text-xl w-full mr-4 truncate"}>{text}</div>
    <div className={clsx("flex flex-col w-16 items-center", { "mr-4": image })}>
      <SymbolIcon icon={icons.eye} className={"text-xl text-dark-green"} space={EDITOR_ICON_SPACE} />
      <div className={"text-dark-green text-xs"}>{likes}</div>
    </div>
    <div>{image}</div>
  </div>
)
