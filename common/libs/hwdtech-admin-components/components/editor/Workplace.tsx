import React from "react"
import clsx from "clsx"
import WorkplaceProps from "../../others/types/editor/WorkplaceProps"
import EDITOR_WIDTH from "../../others/constants/EDITOR_WIDTH"
import HEADER_HEIGHT from "../../others/constants/HEADER_HEIGHT"

export const Workplace: React.FC<WorkplaceProps> = ({
  headerHeight,
  header,
  center,
  left,
  right,
  width,
  scrollBottomButton,
}) => {
  return (
    <div className={"workplace w-full"}>
      <div className={"header"}>{header}</div>
      <div className={"left-toolbar"}>{left}</div>
      <div className={"center"}>
        {center}
        {scrollBottomButton && (
          <div className={"h-24 button-down flex justify-center items-center flex-col fixed bottom-0"}>
            {scrollBottomButton}
          </div>
        )}
      </div>
      <div className={clsx("right-toolbar")}>{right}</div>
      <style jsx>{`
        .workplace {
          display: grid;
          grid-template-columns: 0.5fr ${width}rem 0.5fr;
          grid-template-areas:
            "h h h"
            "l c r";
        }

        .button-down {
          width: ${width}rem;
        }

        .header {
          grid-area: h;
        }

        .left-toolbar {
          grid-area: l;
        }

        .right-toolbar {
          grid-area: r;
        }

        .center {
          grid-area: c;
        }

        .header {
          min-height: ${headerHeight}rem;
        }
      `}</style>
    </div>
  )
}

Workplace.defaultProps = {
  width: EDITOR_WIDTH,
  headerHeight: HEADER_HEIGHT,
}
