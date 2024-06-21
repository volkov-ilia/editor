import React from "react"
import { ArticleText } from "./ArticleText"
import GrayBlockWithTextProps from "../../../others/types/GrayBlockWithTextProps"

export const GrayBlockWithText: React.FC<GrayBlockWithTextProps> = ({ id, children, backgroundColor }) => (
  <ArticleText id={id} backgroundColor={backgroundColor}>
    {children}
  </ArticleText>
)

GrayBlockWithText.defaultProps = {
  backgroundColor: "rgb(217, 220, 233)",
}
