import React, { useState } from "react"
import clsx from "clsx"
import DropDownInputListProps from "../../../others/types/DropDownInputListProps"
import { SymbolIcon } from "../../page/common/SymbolIcon"
import { icons } from "../../../others/editor/iconCodes"
import EDITOR_ICON_SPACE from "../../../others/iconSpaces/EDITOR_ICON_SPACE"
import { Title } from "./Title"

export const DropDownInputList: React.FC<DropDownInputListProps> = (props) => {
  const { children, openText, closeText } = props

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={"text-center"}>
      {!isOpen && (
        <button className={"cursor-pointer"} onClick={() => setIsOpen(true)}>
          <Title>
            {openText}
            {<SymbolIcon icon={icons.down} space={EDITOR_ICON_SPACE} className={"ml-2"} />}
          </Title>
        </button>
      )}
      {isOpen && <div className={clsx("grid grid-cols-1 gap-y-4 my-4")}>{children}</div>}
      {isOpen && (
        <button className={"cursor-pointer"} onClick={() => setIsOpen(false)}>
          <Title>
            {closeText}
            {<SymbolIcon icon={icons.down} space={EDITOR_ICON_SPACE} className={"transform rotate-180 ml-2"} />}
          </Title>
        </button>
      )}
    </div>
  )
}
