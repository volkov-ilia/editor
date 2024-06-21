import React from "react"
import clsx from "clsx"
import { useAmp } from "next/amp"
import { pageIcons } from "../../../../others/page/iconCodes"
import { SymbolIcon } from "../SymbolIcon"
import ButtonArrowProps from "../../../../others/types/nested/ButtonArrowProps"

export const ButtonArrow: React.FC<ButtonArrowProps> = ({
  text,
  isNotUpperCase,
  icon = pageIcons.next,
  href,
  linkTitle,
  className,
  ampStyle,
  easterEggs,
}) => {
  const isAmp = useAmp()

  return isAmp ? (
    <AmpButtonArrow
      text={text}
      href={href}
      icon={icon}
      linkTitle={linkTitle}
      isNotUpperCase={isNotUpperCase}
      ampStyle={ampStyle}
    />
  ) : (
    <NoAmpButtonArrow
      text={text}
      className={className}
      href={href}
      icon={icon}
      linkTitle={linkTitle}
      isNotUpperCase={isNotUpperCase}
      easterEggs={easterEggs}
    />
  )
}

const NoAmpButtonArrow: React.FC<Omit<ButtonArrowProps, "ampStyle">> = ({
  text,
  isNotUpperCase,
  icon,
  href,
  linkTitle,
  className,
  easterEggs,
}) => (
  <a
    className={clsx(
      className,
      "relative font-bold sm:p-0 sm:my-auto sm:ml-4 p-4 uppercase text-sm text-left md:text-center",
      { uppercase: !isNotUpperCase }
    )}
    href={href}
    title={linkTitle}
  >
    {easterEggs && easterEggs}
    {text}
    <SymbolIcon icon={icon} className="ml-2" />
    <style jsx>
      {`
        button {
          font-size: 14px;
          height: 45px;
          outline: none;
          line-height: normal;
        }
      `}
    </style>
  </a>
)

const AmpButtonArrow: React.FC<Omit<ButtonArrowProps, "className" | "easterEggs">> = ({
  text,
  icon,
  href,
  linkTitle,
  isNotUpperCase,
  ampStyle,
}) => (
  <a className={clsx("main", { uppercase: !isNotUpperCase })} href={href} title={linkTitle} style={ampStyle}>
    {text}
    <SymbolIcon icon={icon} ampStyle={{ marginLeft: "0.5rem" }} />
    <style jsx>{`
      button {
        font-size: 14px;
        height: 45px;
        outline: none;
        line-height: normal;
      }
      .main {
        font-weight: 700;
        padding: 1rem;
        text-decoration: none;
        color: rgb(15, 33, 55);
        font-size: 0.875rem;
        line-height: 1.25rem;
        text-align: left;
      }
      .uppercase {
        text-transform: uppercase;
      }
    `}</style>
  </a>
)
