import clsx from "clsx"
import React, { ReactElement } from "react"
import { useAmp } from "next/amp"
import { Point } from "./Point"
import get from "lodash/get"
import map from "lodash/map"
import { SymbolIcon } from "./SymbolIcon"
import { pageIcons } from "../../../others/page/iconCodes"
import PointsProps, { ItemsTextWithHeader } from "../../../others/types/nested/PointsProps"
import { themeColorsColors } from "../../../others/page/colors"
import shortID from "../../../utils/shortID"

const withHeader = (items: ReactElement[] | ItemsTextWithHeader[]): items is ItemsTextWithHeader[] => {
  return (items as ItemsTextWithHeader[])[0].header !== undefined
}

export const Points: React.FC<PointsProps> = ({ items, icon, className, style, type, onRight, easterEggs }) => {
  const isAmp = useAmp()
  return isAmp ? (
    <AmpPoints items={items} icon={icon} style={style} type={type} />
  ) : (
    <NoAmpPoints
      items={items}
      icon={icon}
      className={className}
      type={type}
      onRight={onRight}
      easterEggs={easterEggs}
    />
  )
}

const NoAmpPoints: React.FC<Omit<PointsProps, "style">> = ({ items, icon, className, type, onRight, easterEggs }) => {
  const TypeList = type === "numbered" ? "ol" : "ul"
  const defaultIcon =
    type === "numbered" ? undefined : (
      <i className="text-primary">
        <SymbolIcon icon={pageIcons.next} />
      </i>
    )

  return (
    <TypeList
      className={clsx(className, "relative mt-4 xl:mt-8", {
        "list-decimal": type === "numbered",
      })}
    >
      {easterEggs && easterEggs}
      {withHeader(items)
        ? map(items as ItemsTextWithHeader[], (item, index) => (
            <Point
              key={get(item, "key") || shortID()}
              className={"mb-3"}
              icon={icon ? icon[index] : defaultIcon}
              onRight={onRight}
            >
              <div>
                <h3 className={clsx("leading-normal text-base", "text-editor-dark-gray font-medium")}>{item.header}</h3>
                <div className={clsx("text-light-gray text-base")}>{item.text}</div>
              </div>
            </Point>
          ))
        : map(items as ReactElement[], (item, index) => (
            <Point
              key={get(item, "key") || shortID()}
              className={"mb-3"}
              icon={icon ? icon[index] : defaultIcon}
              onRight={onRight}
            >
              <h3 className={clsx("leading-normal text-base", "text-light-gray")}>{item}</h3>
            </Point>
          ))}
    </TypeList>
  )
}

const AmpPoints: React.FC<Omit<PointsProps, "className" | "onRight" | "easterEggs" | "withHeader">> = ({
  items,
  icon,
  style,
  type,
}) => {
  const TypeList = type === "numbered" ? "ol" : "ul"
  const defaultIcon =
    type === "numbered" ? undefined : (
      <i className="text-primary mr-4">
        <SymbolIcon icon={pageIcons.next} />
        <style jsx>{`
          .text-primary {
            color: rgb(16, 172, 132);
            margin-right: 1rem;
          }
        `}</style>
      </i>
    )
  return (
    <TypeList className={clsx("mt-4")} style={style}>
      {withHeader(items)
        ? map(items as ItemsTextWithHeader[], (item, index) => (
            <Point key={shortID()} icon={icon[index] || defaultIcon} style={{ marginBottom: "0.75rem" }}>
              <div>
                <h3 className={clsx({ "w-2/3": icon }, "header")}>{item.header}</h3>
                <div className="normal-text">{item.text}</div>
              </div>
            </Point>
          ))
        : map(items as ReactElement[], (item, index) => (
            <Point key={shortID()} icon={icon[index] || defaultIcon} style={{ marginBottom: "0.75rem" }}>
              <h3 className={clsx("text", { "w2-3": icon })}>{item}</h3>
            </Point>
          ))}
      <style jsx>{`
        .normal-text {
          font-size: 1rem;
          line-height: 1.5rem;
          color: ${themeColorsColors.lightGray};
        }

        .header {
          font-weight: 500;
          font-size: 1rem;
          line-height: 1.5rem;
          margin: 0;
        }

        .mt-4 {
          margin: 1rem 0 0;
          padding: 0;
        }

        .w2-3 {
          width: 66.66%;
        }

        .text {
          color: rgb(52, 61, 72);
          line-height: 1.5;
          font-size: 1rem;
          font-weight: 400;
          margin: 0;
        }

        .mb-3 {
          margin-bottom: 0.75rem;
        }
      `}</style>
    </TypeList>
  )
}
