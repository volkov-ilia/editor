import clsx from "clsx"
import React from "react"
import { useAmp } from "next/amp"
import { PointProps } from "../../../others/types/nested/PointsProps"
import { themeColorsColors } from "../../../others/page/colors"

export const Point: React.FC<PointProps> = ({ className, children, icon, style, onRight }) => {
  const isAmp = useAmp()
  return isAmp ? (
    <AmpPoint className={className} icon={icon} style={style}>
      {children}
    </AmpPoint>
  ) : (
    <NoAmpPoint className={className} icon={icon} onRight={onRight}>
      {children}
    </NoAmpPoint>
  )
}

const NoAmpPoint: React.FC<Omit<PointProps, "style">> = ({ className, children, icon, onRight }) => {
  const paddingLeft = icon ? 0 : "1rem"
  const marginLeft = icon ? 0 : "2rem"
  return (
    <li>
      <div className={clsx("inline-flex items-start", { "flex-row-reverse": onRight }, className)}>
        {icon && (
          <div
            className={clsx({
              "mr-4": icon && !onRight,
              "ml-4": icon && onRight,
            })}
          >
            {icon}
          </div>
        )}
        {children}
      </div>
      <style jsx>
        {`
          li::marker {
            color: ${themeColorsColors.lightGreen};
          }

          li {
            padding-left: ${paddingLeft};
            margin-left: ${marginLeft};
            margin-right: ${marginLeft};
          }
        `}
      </style>
    </li>
  )
}

const AmpPoint: React.FC<Omit<PointProps, "onRight">> = ({ className, children, icon, style }) => {
  const isListNone = icon ? "none" : "decimal"
  const paddingLeft = icon ? 0 : "1rem"
  const marginLeft = icon ? 0 : "2rem"
  return (
    <li className={"list"}>
      <div className={clsx("box", className)} style={style}>
        {icon && icon}
        {children}
      </div>
      <style jsx>{`
        li::marker {
          color: ${themeColorsColors.lightGreen};
        }

        li {
          padding-left: ${paddingLeft};
          margin-left: ${marginLeft};
        }

        .list {
          list-style-type: ${isListNone};
        }

        .box {
          display: inline-flex;
          align-items: start;
        }
      `}</style>
    </li>
  )
}
