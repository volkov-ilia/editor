import React, { useRef } from "react"
import { TagsList } from "../Tag/TagsList"
import { Picture } from "../Picture/Picture"
import { Comment } from "../Comment/Comment"
import { TimelineList } from "../Timeline/TimelineList"

import Content from "../../../common/types/Content"
import { Tool } from "../Tool/Tool"
import Edit from "../../public/tools/edit.svg"
import Publish from "../../public/tools/publish.svg"
import { useRouter } from "next/router"
import { IoC } from "../../hwdtech-editor/IoC/IoC"
import Table from "../Table/Table"
import { formattingDate, formattingMonth } from "../Timeline/Timeline"
import { CardPublication } from "../CardPublication/CardPublication"
import { formatHistory } from "../../utils/formatHistory"

export const Card: React.FC<Content.Card> = ({
  idCard,
  documentFormatVersion,
  title,
  tags,
  history,
  imgSrc,
  description,
  note,
  resources,
}) => {
  const router = useRouter()
  const routEditArticle = () => {
    router.push(`/article-editor/${idCard}`)
  }
  const ref = useRef(null)
  const hidePublish = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ref.current.classList.toggle("hide_publish")
  }
  return (
    <div className="card__container">
      <div className="card__container-content">
        <div className="first">
          {imgSrc ? (
            <div className="card__picture_wrap">
              <Picture srcImg={imgSrc} imgAlt={title} />
            </div>
          ) : (
            <></>
          )}
          <Comment comment={note ?? ""} />
        </div>
        <div className="second">
          <div className="card__title">
            <p className="card__title_text">{title}</p>
          </div>
          <TagsList tags={tags} />
          <div className="card__description">
            <p className="card__description_text">{description ? description : ""}</p>
          </div>
          <div className="card__timeline">
            <TimelineList history={history} />
          </div>
        </div>
        <div className="third">
          <Tool imgSrc={Edit.src} imgAlt="tool-edit" onClick={routEditArticle} />
          <Tool imgSrc={Publish.src} imgAlt="tool-publish" onClick={hidePublish} />
          <button
            data-testid="historyButton"
            onClick={() => {
              IoC.resolve("IoC.Register", "ModalWindow:content", () => {
                return (
                  <div>
                    <Table<{
                      source: string
                      status: string
                      time: string
                      date: string
                      author: string
                    }>
                      headers={["source", "status", "time", "date", "author"]}
                      data={(() =>
                        history.map((historyItem) => {
                          const date = new Date(historyItem.date)
                          const time = formattingTime(date)
                          return {
                            source: historyItem.source,
                            status: historyItem.status,
                            time: `${time[0]}:${time[1]}:${time[2]}`,
                            date: `${formattingDate(date)}-${formattingMonth(date)}-${date.getFullYear()}`,
                            author: historyItem.name,
                          }
                        }))()}
                    />
                  </div>
                )
              })
              IoC.resolve("IoC.Resolve", "ModalWindow:toggle")
            }}
          >
            <span>history</span>
          </button>
        </div>
      </div>
      <div ref={ref} className="row" data-testid="publishItems">
        <h2 className="publish_title">Публикация</h2>
        {formatHistory(history).map((hisItem) => {
          const date = new Date(hisItem.date)
          return (
            <CardPublication
              history={history}
              hisItem={hisItem}
              revisionChangeDate={date}
              key={hisItem.source}
              resources={resources}
            />
          )
        })}
      </div>
      <style jsx>
        {`
          .availableForPublication {
            border: solid 1px #0f957c;
          }
          .hide_publish {
            display: none;
          }

          .row:after {
            content: "";
            display: table;
            clear: both;
          }

          .publish_information {
            display: flex;
            text-transform: uppercase;
            font-size: var(--font-size-p3);
            font-weight: var(--font-weight-bold);
          }

          .publication_created {
            color: var(--text-grey-color);
            margin-right: var(--indent-1-5);
          }

          .publish_date {
            color: var(--text-grey-color);
            font-weight: var(--font-weight-regular);
          }

          .publish_platform-fire {
            color: var(--icon-purple);
            margin-right: var(--indent-4);
            margin-left: var(--indent-0-5);
          }

          .publish_title {
            color: var(--main-primary-color);
            font-size: var(--font-size-h3);
            font-weight: var(--font-weight-medium);
            margin-bottom: var(--indent-8);
          }

          .publish_status {
            color: var(--main-primary-color);
            margin-right: var(--indent-2);
          }

          .publish_revision {
            color: var(--text-dark-color);
            margin-right: var(--indent-2);
          }

          .publish_revision_date {
            color: var(--text-grey-color);
            font-weight: var(--font-weight-regular);
            text-transform: lowercase;
            margin-right: var(--indent-2);
          }

          .current_status {
            color: var(--icon-purple);
            margin-right: var(--indent-2);
          }

          .current_revision {
            color: var(--text-grey-color);
            margin-right: var(--indent-2);
          }

          .delete_post {
            color: var(--main-primary-color);
            font-weight: var(--font-weight-regular);
            border-radius: 33px;
            border: 1px var(--main-primary-color) solid;
            cursor: pointer;
          }

          .publish_post {
            color: var(--icon-purple);
            font-weight: var(--font-weight-regular);
            border-radius: 33px;
            border: 1px var(--icon-purple) solid;
            cursor: pointer;
          }

          .previous_versions {
            color: var(--main-primary-color);
            margin-right: var(--indent-2);
          }

          .column {
            display: flex;
            flex-direction: column;
            float: left;
            width: 49%;
            margin-bottom: var(--indent-4);
          }

          .information {
            display: flex;
            flex-direction: column;
            gap: var(--indent-1-5);
            padding: var(--indent-3-5);
            background-color: var(--light-white-gray);
            border-radius: 11px;
          }

          .information:nth-child(2n) {
            margin-right: var(--indent-2);
          }

          .column_item {
            display: flex;
            font-size: var(--font-size-p3);
            text-transform: uppercase;
            font-weight: var(--font-weight-bold);
          }

          .see_previous_versions {
            cursor: pointer;
            width: max-content;
          }

          .card__title_text {
            word-wrap: break-word;
            font-size: var(--font-size-h2);
            font-weight: var(--font-weight-medium);
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .card__container-content {
            display: flex;
            margin-bottom: var(--indent-12);
          }

          .card__container {
            padding: var(--indent-9);
            width: 100%;
            border: var(--indent-px) solid var(--main-primary-color);
            border-radius: var(--indent-4);
            background: var(--main-bg-color);
            margin-bottom: var(--indent-8);
          }

          .first {
            width: 24%;
            margin-right: var(--indent-5);
          }

          .card__picture_wrap {
            margin-bottom: var(--indent-3-5);
          }

          .card__picture_wrap {
            position: relative;
            width: 100%;
            height: var(--indent-36);
          }

          @media screen and (max-width: 1650px) {
            .card__picture_wrap {
              height: var(--indent-32);
            }
          }

          @media screen and (max-width: 1480px) {
            .card__picture_wrap {
              height: var(--indent-28);
            }
          }

          .card__description {
            margin-bottom: var(--indent-12);
            word-wrap: break-word;
          }

          .card__description_text {
            font-size: var(--font-size-p2);
            font-weight: var(--font-weight-regular);
            color: var(--text-grey-color);
            overflow: hidden;
            word-wrap: break-word;
            text-overflow: ellipsis;
          }

          .second {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 58%;
          }

          .card__title {
            font-weight: var(--font-weight-medium);
            font-size: var(--font-size-title);
            color: var(--main-primary-color);
            margin-bottom: var(--indent-6);
            text-overflow: ellipsis;
          }

          .third {
            width: 16%;
          }

          .card__tools {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-end;
          }

          .card__timeline {
            padding-bottom: var(--indent-16);
          }

          .third {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-end;
          }
        `}
      </style>
    </div>
  )
}

export function formattingTime(time: Date) {
  return ["0" + time.getHours(), "0" + time.getMinutes(), "0" + time.getSeconds()].map((item) => item.slice(-2))
}
