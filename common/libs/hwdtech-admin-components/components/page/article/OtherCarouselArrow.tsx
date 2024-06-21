import React from "react"
import { themeColorsColors } from "../../../others/page/colors"
import { pageIcons } from "../../../others/page/iconCodes"
import OtherCarouselArrowProps from "../../../others/types/OtherCarouselArrowProps"
import { useEditorModeContext } from "../../EditorModeContext"
import { useAmp } from "next/amp"
import { SymbolIcon } from "../common/SymbolIcon"

const NoAmpOtherCarouselArrow: React.FC<OtherCarouselArrowProps & { symbol: string }> = ({
  onClick,
  isPrev,
  symbol,
}) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableFalse = isEditable ? { contentEditable: false, suppressContentEditableWarning: true } : {}
  return (
    <button
      {...editableFalse}
      aria-label={isPrev ? "Previous" : "Next"}
      onClick={onClick}
      className="select-none button rounded-full h-12 flex self-center"
    >
      <SymbolIcon
        icon={symbol}
        className={"transition-colors button-arrow duration-500 ease-in-out outline text-base p-4"}
      />
      <style global jsx>{`
        .button {
          border-color: ${themeColorsColors.primary};
          background: ${themeColorsColors.primary};
        }

        .button-arrow {
          color: white;
        }
      `}</style>
    </button>
  )
}

const AmpOtherCarouselArrow: React.FC<OtherCarouselArrowProps & { symbol: string }> = ({
  onClick,
  ampStyle,
  symbol,
  isPrev,
  on,
}) => (
  <button
    slot={isPrev ? "prev-arrow" : "next-arrow"}
    aria-label={isPrev ? "Previous" : "Next"}
    className="button"
    onClick={onClick}
    // @ts-ignore
    on={on}
    style={ampStyle}
  >
    <SymbolIcon icon={symbol} ampStyle={{ color: "white", padding: "1rem" }} />
    <style jsx>{`
      .button {
        border-radius: 9999px;
        border-color: ${themeColorsColors.primary};
        background: ${themeColorsColors.primary};
        display: flex;
        align-self: center;
        height: 3rem;
      }
    `}</style>
  </button>
)

export const OtherCarouselArrow: React.FC<OtherCarouselArrowProps> = ({ onClick, isPrev, on, ampStyle }) => {
  const isAmp = useAmp()
  const symbol = isPrev ? pageIcons.leftArrow : pageIcons.next
  return isAmp ? (
    <AmpOtherCarouselArrow onClick={onClick} ampStyle={ampStyle} symbol={symbol} isPrev={isPrev} on={on} />
  ) : (
    <NoAmpOtherCarouselArrow onClick={onClick} symbol={symbol} isPrev={isPrev} />
  )
}
