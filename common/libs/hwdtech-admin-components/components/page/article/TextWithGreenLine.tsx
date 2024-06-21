import React from "react"
import BaseProps from "../../../others/types/BaseProps"
import { useAmp } from "next/amp"
import { ArticleText } from "./ArticleText"

export const TextWithGreenLine: React.FC<BaseProps> = ({ id, children }) => {
  const isAmp = useAmp()
  return isAmp ? (
    <AmpTextWithGreenLine id={id}>{children}</AmpTextWithGreenLine>
  ) : (
    <NoAmpTextWithGreenLine id={id}>{children}</NoAmpTextWithGreenLine>
  )
}

const NoAmpTextWithGreenLine: React.FC<BaseProps> = ({ id, children }) => (
  <ArticleText id={id} className={"green-line"}>
    {children}
  </ArticleText>
)

const AmpTextWithGreenLine: React.FC<BaseProps> = ({ id, children }) => (
  <ArticleText id={id} className={"green-line"}>
    {children}
  </ArticleText>
)
