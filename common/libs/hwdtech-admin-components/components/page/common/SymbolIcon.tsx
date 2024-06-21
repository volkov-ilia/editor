import React from "react"
import clsx from "clsx"
import SymbolIconProps from "../../../others/types/SymbolIconProps"
import { useAmp } from "next/amp"
import { useEditorModeContext } from "../../EditorModeContext"
import MAIN_ICON_SPACE from "../../../others/iconSpaces/MAIN_ICON_SPACE"

const AmpSymbolIcon: React.FC<
  Omit<SymbolIconProps, "icon"> & {
    content: string
    ampStyle?: { [key: string]: string }
  }
> = ({ space, ampStyle, color, content }) => {
  return (
    <span aria-hidden className={clsx("icon", { color: color })} style={ampStyle}>
      <style jsx>{`
        .icon::before {
          content: "${content}";
        }
      `}</style>
      <style jsx>{`
        .icon {
          font-family: ${space}, monospace;
          speak: none;
          font-style: normal;
          font-weight: normal;
          font-variant: normal;
          text-transform: none;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .color {
          color: ${color};
        }
      `}</style>
    </span>
  )
}

const NoAmpSymbolIcon: React.FC<Omit<SymbolIconProps, "icon"> & { content: string }> = ({
  space,
  className,
  color,
  content,
}) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableFalse = isEditable ? { contentEditable: false, suppressContentEditableWarning: true } : {}
  const setLeading = `${className}`.indexOf("leading") === -1
  return (
    <div
      {...editableFalse}
      aria-hidden
      className={clsx(`icon`, { color: color, "line-height": setLeading }, className)}
    >
      <style jsx>{`
        .icon {
          font-family: ${space}, monospace;
        }

        .color {
          color: ${color};
        }

        .icon::before {
          content: "${content}";
        }
        .line-height {
          line-height: inherit;
        }
      `}</style>
    </div>
  )
}

export const SymbolIcon: React.FC<SymbolIconProps & { ampStyle?: { [key: string]: string } }> = ({
  space,
  icon,
  ampStyle,
  className,
  color,
}) => {
  const content = icon ? `\\${icon}` : ""
  const isAmp = useAmp()
  const defaultSpace = space || MAIN_ICON_SPACE

  return isAmp ? (
    <AmpSymbolIcon ampStyle={ampStyle} color={color} content={content} space={defaultSpace} />
  ) : (
    <NoAmpSymbolIcon className={className} color={color} content={content} space={defaultSpace} />
  )
}
