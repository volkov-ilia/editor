import React from "react"
import HeadInfoCardViewProps from "../../../others/types/editor/nested/HeadInfoCardViewProps"

export const HeadInfoCardView: React.FC<HeadInfoCardViewProps> = ({ x, y }) => (
  <div>
    {x}
    {y}
  </div>
)
