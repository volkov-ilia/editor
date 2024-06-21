import HeadInfoCardProps from "../../../others/types/editor/nested/HeadInfoCardProps"
import React from "react"

export const HeadInfoCard: React.FC<HeadInfoCardProps> = ({
  title,
  percentCircle,
  totalPublications,
  button,
  graph,
  list,
}) => (
  <div className={"flex flex-col items-center border-green border-2 box justify-between rounded-2xl py-4 px-10"}>
    {title}
    {graph}
    {percentCircle && totalPublications && (
      <div>
        {percentCircle}
        {totalPublications}
      </div>
    )}
    {list}
    {button}
    <style jsx>{`
      .box {
        width: 450px;
        height: 332px;
      }
    `}</style>
  </div>
)
