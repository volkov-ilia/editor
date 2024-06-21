import React from "react"
import { TimelineProps } from "../../types/TimelineProps"

export const Timeline: React.FC<TimelineProps> = ({ dotPositionLeft, status, date, name }) => {
  return (
    <>
      <span style={{ left: `${dotPositionLeft}%` }} className="card__timeline_item" />
      <div style={{ left: `${dotPositionLeft}%` }} className="card__timeline_status">
        <h2 className="timeline__status">{status}</h2>
        <h2 className="timeline__date">
          {formattingDate(date)}.<span className="timeline__month">{formattingMonth(date)}</span>.{date.getFullYear()}
        </h2>
        <h2 className="timeline__author">{`by ${name}`}</h2>
      </div>
      <style jsx>{`
        .card__timeline_item {
          display: block;
          position: absolute;
          top: -0.3rem;
          width: var(--indent-2-5);
          height: var(--indent-2-5);
          border-radius: 50%;
          background-color: var(--main-primary-color);
        }

        .card__timeline_status {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: var(--indent-2);
        }

        .timeline__status {
          font-weight: var(--font-weight-bold);
          font-size: var(--font-size-p3);
          text-transform: uppercase;
          color: var(--main-primary-color);
        }

        .timeline__date,
        .timeline__author {
          font-size: var(--font-size-p3);
          font-weight: var(--font-weight-regular);
          color: var(--text-dark-color);
        }
      `}</style>
    </>
  )
}

export const formattingDate = (date: Date) => {
  return date.getDate() > 9 ? `${date.getDate()}` : `0${date.getDate()}`
}

export const formattingMonth = (date: Date) => {
  return date.getMonth() + 1 > 9 ? `${date.getMonth() + 1}` : `0${date.getMonth() + 1}`
}
