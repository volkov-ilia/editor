import React from "react"
import WorkplaceHeaderProps from "../../others/types/editor/WorkplaceHeaderProps"
import HEADER_HEIGHT from "../../others/constants/HEADER_HEIGHT"

export const WorkplaceHeader: React.FC<WorkplaceHeaderProps> = ({ topElements, bottomElements }) => {
  return (
    <div className={"min-h-full"}>
      <div className={"top w-full"}>{topElements}</div>
      <div className={"bottom w-full"}>{bottomElements}</div>
      <style jsx>{`
        .top {
          min-height: ${HEADER_HEIGHT * 0.5581}rem;
        }

        .bottom {
          min-height: ${HEADER_HEIGHT * 0.4419}rem;
        }
      `}</style>
    </div>
  )
}
