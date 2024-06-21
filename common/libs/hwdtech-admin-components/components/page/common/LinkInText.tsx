import Link from "next/link"
import React from "react"
import clsx from "clsx"
import { useAmp } from "next/amp"
import LinkInTextProps from "../../../others/types/nested/LinkInTextProps"

export const LinkInText: React.FC<LinkInTextProps> = ({ href, title, children, withNoColor, linkTitle }) => {
  const isAmp = useAmp()

  return isAmp ? (
    <AmpLinkInText href={href} title={title || linkTitle} withNoColor={withNoColor}>
      {children}
    </AmpLinkInText>
  ) : (
    <NoAmpLinkInText href={href} title={title || linkTitle} withNoColor={withNoColor}>
      {children}
    </NoAmpLinkInText>
  )
}

const NoAmpLinkInText: React.FC<Omit<LinkInTextProps, "linkTitle">> = ({ href, title, children, withNoColor }) =>
  href ? (
    <Link href={href}>
      <a
        className={clsx("break-words", {
          "text-green": !withNoColor,
        })}
        title={title}
      >
        {children}
      </a>
    </Link>
  ) : (
    <span
      className={clsx("break-words", {
        "text-green": !withNoColor,
      })}
    >
      {children}
    </span>
  )

const AmpLinkInText: React.FC<Omit<LinkInTextProps, "linkTitle">> = ({ href, title, children, withNoColor }) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <a className={clsx("break-words", withNoColor ? "usualText" : "primaryText")} title={title}>
            {children}
          </a>
        </Link>
      ) : (
        <span className={clsx("break-words", withNoColor ? "usualText" : "primaryText")}>{children}</span>
      )}
      <style jsx>{`
        .break-words {
          overflow-wrap: break-word;
        }

        .primaryText {
          color: rgb(16, 172, 132);
        }

        .usualText {
          color: rgb(15, 33, 55);
        }
      `}</style>
    </>
  )
}
