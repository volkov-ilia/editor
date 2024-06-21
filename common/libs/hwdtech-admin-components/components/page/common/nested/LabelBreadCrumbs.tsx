import clsx from "clsx"
import React from "react"
import { useAmp } from "next/amp"
import LabelBreadCrumbsProps from "../../../../others/types/nested/LabelBreadCrumbsProps"
import { LinkInText } from "../LinkInText"

export const LabelBreadCrumbs: React.FC<LabelBreadCrumbsProps> = ({
  primaryText,
  usualText,
  primaryLinkMeta,
  usualLinkMeta,
  easterEggs,
}) => {
  const isAmp = useAmp()

  return isAmp ? (
    <AmpLabelBreadCrumbs
      primaryText={primaryText}
      primaryLinkMeta={primaryLinkMeta}
      usualText={usualText}
      usualLinkMeta={usualLinkMeta}
    />
  ) : (
    <NoAmpLabelBreadCrumbs
      primaryText={primaryText}
      primaryLinkMeta={primaryLinkMeta}
      usualText={usualText}
      usualLinkMeta={usualLinkMeta}
      easterEggs={easterEggs}
    />
  )
}

const NoAmpLabelBreadCrumbs: React.FC<LabelBreadCrumbsProps> = ({
  primaryText,
  primaryLinkMeta,
  usualText,
  usualLinkMeta,
  easterEggs,
}) => (
  <span className={clsx("relative text-sm rounded-full shadowed bg-transparent py-2 px-6")}>
    {easterEggs && easterEggs}
    <LinkInText title={primaryLinkMeta.linkTitle} href={primaryLinkMeta.href}>
      {primaryText}
    </LinkInText>
    {primaryLinkMeta.href || usualLinkMeta.href ? " / " : " "}
    <LinkInText title={usualLinkMeta.linkTitle} href={usualLinkMeta.href} withNoColor>
      {usualText}
    </LinkInText>
    {(primaryLinkMeta.href || usualLinkMeta.href) && " / "}
    <style jsx>{`
      .shadowed {
        box-shadow: rgba(22, 53, 76, 0.08) 0 4px 50px 0;
      }
    `}</style>
  </span>
)

const AmpLabelBreadCrumbs: React.FC<Omit<LabelBreadCrumbsProps, "easterEggs">> = ({
  primaryText,
  primaryLinkMeta,
  usualText,
  usualLinkMeta,
}) => (
  <span className={clsx("label")}>
    <LinkInText title={primaryLinkMeta.linkTitle} href={primaryLinkMeta.href}>
      {primaryText}
    </LinkInText>
    {primaryLinkMeta.href || usualLinkMeta.href ? " / " : " "}
    <LinkInText title={usualLinkMeta.linkTitle} href={usualLinkMeta.href} withNoColor>
      {usualText}
    </LinkInText>
    {(primaryLinkMeta.href || usualLinkMeta.href) && " / "}
    <style jsx>{`
      .label {
        font-size: 0.875rem;
        line-height: 1.25rem;
        border-radius: 9999px;
        background-color: rgba(255, 255, 255);
        box-shadow: rgba(22, 53, 76, 0.08) 0 4px 50px 0;
        padding: 0.5rem 1.5rem;
      }
    `}</style>
  </span>
)
