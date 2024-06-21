import React from "react"
import { Timeline } from "./Timeline"
import { TimelineListProps } from "../../types/TimelineListProps"
import Content from "../../../common/types/Content"

const MAX_COUNT_TIME_POINT = 5

export const TimelineList: React.FC<TimelineListProps> = ({ history }) => {
  return (
    <div className="timeline">
      {history.length > MAX_COUNT_TIME_POINT
        ? getHistoryPoint(history.slice(-MAX_COUNT_TIME_POINT))
        : getHistoryPoint(history)}
      <style jsx>
        {`
          .timeline {
            position: relative;
            width: 100%;
            background-color: var(--main-primary-color);
            border: var(--indent-px) solid var(--main-primary-color);
            border-left: var(--indent-0);
            border-right: var(--indent-0);
          }

          .timeline::after {
            content: "";
            position: absolute;
            top: -7px;
            right: -2px;
            width: var(--indent-0);
            height: var(--indent-0);
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            border-left: 10px solid var(--main-primary-color);
          }
        `}
      </style>
    </div>
  )
}

export const setPositionForTheTimePoint = (indexPosition: number, amountPoints: number) => {
  return indexPosition * (100 / amountPoints)
}

export const getHistoryPoint = (history: Array<Content.HistoryItem>) => {
  return history.map((status, index: number) => {
    const left = setPositionForTheTimePoint(index, history.length)
    return (
      <Timeline
        status={status.status}
        date={new Date(status.date)}
        key={index + status.status + left}
        dotPositionLeft={left}
        name={status.name}
      />
    )
  })
}
