import { icons } from "../../../others/editor/iconCodes"
import emptyImageText from "./texts/emptyImageText"
import { SymbolIcon } from "../common/SymbolIcon"
import { Loading } from "../../editor/nested/Loading"
import React from "react"
import clsx from "clsx"
import EmptyImageProps from "../../../others/types/nested/EmptyImageProps"
import EDITOR_ICON_SPACE from "../../../others/iconSpaces/EDITOR_ICON_SPACE"

export const EmptyImage: React.FC<EmptyImageProps> = ({ height, isLoading = false, text = emptyImageText }) => (
  <div
    contentEditable={false}
    suppressContentEditableWarning={true}
    className={clsx(
      "empty-image-container w-full border-2 border-dashed flex flex-col justify-center items-center",
      isLoading ? "text-green border-green" : "text-gray border-gray "
    )}
  >
    {isLoading ? <Loading /> : <SymbolIcon icon={icons.add} space={EDITOR_ICON_SPACE} />}
    <div className={"text-base"}>{isLoading ? text.loading : text.click}</div>
    <style jsx>{`
      .empty-image-container {
        height: ${height * 0.75}px;
        font-size: 5rem;
      }
    `}</style>
  </div>
)
