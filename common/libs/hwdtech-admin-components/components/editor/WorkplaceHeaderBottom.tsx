import React from "react"
import WorkplaceHeaderElementsProps from "../../others/types/editor/WorkplaceHeaderElementsProps"
import EDITOR_WIDTH from "../../others/constants/EDITOR_WIDTH"

export const WorkplaceHeaderBottom: React.FC<WorkplaceHeaderElementsProps> = ({ width, left, right, center }) => {
  return (
    <div className={"workplace-bottom h-full"}>
      <div className={"left-toolbar"}>{left}</div>
      <div className={"center-toolbar"}>{center}</div>
      <div className={"right-toolbar ml-4"}>{right}</div>
      <style jsx>{`
        .workplace-bottom {
          display: grid;
          grid-template-columns: 0.5fr ${width}rem 0.5fr;
          grid-template-areas: "l c r";
        }

        .left-toolbar {
          grid-area: l;
        }

        .right-toolbar {
          grid-area: r;
        }

        .center-toolbar {
          grid-area: c;
        }
      `}</style>
    </div>
  )
}

WorkplaceHeaderBottom.defaultProps = {
  width: EDITOR_WIDTH,
}
