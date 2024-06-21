import "react-datetime/css/react-datetime.css"
import "moment/locale/ru"
import React, { useState } from "react"
import Image from "next/image"
import { formattingDate, formattingMonth } from "../Timeline/Timeline"
import Datetime from "react-datetime"
import Fire from "../../public/fire.svg"
import Clock from "../../public/clock.svg"
import Cross from "../../public/cross.svg"
import UnscheduledCross from "../../public/unscheduledCross.svg"
import s from "./modal.module.css"
import Content from "../../../common/types/Content"
import { getPublishVersion } from "../../utils/getPublishVersion"
import { getLastUpdateVersion } from "../../utils/getLastUpdateVersion"
import { formatResources } from "../../utils/formatResources"
import { sendArticleForPublish } from "../../utils/sendArticleForPublish"
import { Moment } from "moment"
import { IoC } from "../../hwdtech-editor/IoC/IoC"

export const CardPublication = ({
  hisItem,
  revisionChangeDate,
  history,
  resources,
}: {
  hisItem: Content.HistoryItem
  revisionChangeDate: any
  history: Content.HistoryItem[]
  resources: Content.SourceItem[]
}) => {
  const [date, setDate] = useState(new Date())
  const [availableDate, setAvailableDate] = useState(new Date())

  /* istanbul ignore next */
  const sendDateToPublish = () => {
    sendArticleForPublish(
      formatResources(resources).get(hisItem.source).slug,
      hisItem.source,
      availableDate,
      formatResources(resources).get(hisItem.source).version
    ).then(() => {
      IoC.resolve("IoC.Resolve", "CardList:updateAll")
    })
  }

  const styleInput = {
    color: "#696969",
    textDecoration: "underline",
    fontWeight: "400",
    borderRadius: "33px",
    cursor: "pointer",
    textAlign: "center",
    width: "7rem",
    border: 0,
  }

  const publishArticle = getPublishVersion(history).get(hisItem.source)
  const isThereNewVersion =
    getLastUpdateVersion(history, hisItem.source).version >
    (getPublishVersion(history).get(hisItem.source)?.version ?? 0)
  const LastVersion = getLastUpdateVersion(history, hisItem.source)
  return (
    <div key={hisItem.source} className={s.column}>
      <div className={s.publish_information}>
        {isThereNewVersion ? (
          <>
            <Image src={Fire.src} alt="fire" width={Fire.width} height={Clock.height} />
            <p data-testid="fire" className={s.publish_platform + " " + s.publish_platform_fire}>
              {hisItem.source}
            </p>
          </>
        ) : LastVersion.status === "availableForPublication" ? (
          <>
            <Image src={Clock.src} alt="clock" width={Clock.width} height={Clock.height} />
            <p className={s.publish_platform + " " + s.publish_platform_schedule}>{hisItem.source}</p>
          </>
        ) : (
          <p className={s.publish_platform + " " + s.publish_platform_schedule}>{hisItem.source}</p>
        )}
        <p className={s.publication_created}>Создана</p>
        <p className={s.publish_date}>
          {formattingDate(revisionChangeDate)}/{formattingMonth(revisionChangeDate)}/{revisionChangeDate.getFullYear()}
        </p>
      </div>
      <div className={s.information + " " + s.information_schedule}>
        {!!publishArticle?.version && (
          <>
            <div className={s.column_item}>
              <p className={s.publish_revision}> ревизия {publishArticle.version}</p>
              <p className={s.publish_revision_date}>
                от {formattingDate(new Date(publishArticle.date))}/{formattingMonth(new Date(publishArticle.date))}/
                {new Date(publishArticle.date).getFullYear()}
              </p>
              <p className={s.status + " " + s.publish_status}>Опубликована</p>
            </div>
            <div className={s.column_item}>
              <button className={s.publish_post + " " + s.publish_post_schedule} onClick={sendDateToPublish}>
                Снять с публикации
              </button>
              <Datetime
                locale="ru"
                /* istanbul ignore next */
                renderInput={(props) => renderInput(props, styleInput)}
                /* istanbul ignore next */
                onChange={(event) => handleChange(event, setDate)}
                value={date}
              />
            </div>
          </>
        )}
        {LastVersion.status === "availableForPublication" && (
          <>
            <div className={s.column_item}>
              <p data-testid="available-for-publication" className={s.available_publish_revision}>
                ревизия {getLastUpdateVersion(history, hisItem.source).version}
              </p>
              <p className={s.publish_revision_date}>
                от {formattingDate(new Date(getLastUpdateVersion(history, hisItem.source).date))}/
                {formattingMonth(new Date(getLastUpdateVersion(history, hisItem.source).date))}/
                {new Date(getLastUpdateVersion(history, hisItem.source).date).getFullYear()}
              </p>
              <p className={s.status + " " + s.scheduled_publish_status}>Запланирована к публикации</p>
            </div>
            <div className={s.column_item}>
              <p className={s.date_scheduled_for_publication}>
                {formattingDate(new Date(getLastUpdateVersion(history, hisItem.source).date))}/
                {formattingMonth(new Date(getLastUpdateVersion(history, hisItem.source).date))}/
                {new Date(getLastUpdateVersion(history, hisItem.source).date).getFullYear()}
              </p>
              <Image
                src={Cross.src}
                alt="cross"
                width={Cross.width}
                height={Cross.height}
                className={s.unscheduled_for_publication}
              />
            </div>
          </>
        )}
        {LastVersion.status === "scheduledForRemoval" && (
          <>
            <div className={s.column_item}>
              <p data-testid="scheduled-for-removal" className={s.available_publish_revision}>
                ревизия {getLastUpdateVersion(history, hisItem.source).version}
              </p>
              <p className={s.publish_revision_date}>
                от {formattingDate(new Date(getLastUpdateVersion(history, hisItem.source).date))}/
                {formattingMonth(new Date(getLastUpdateVersion(history, hisItem.source).date))}/
                {new Date(getLastUpdateVersion(history, hisItem.source).date).getFullYear()}
              </p>
              <p className={s.status + " " + s.scheduled_for_removal}>Запланирована к снятию</p>
            </div>
            <div className={s.column_item}>
              <p className={s.date_scheduled_for_removal}>
                {formattingDate(new Date(getLastUpdateVersion(history, hisItem.source).date))}/
                {formattingMonth(new Date(getLastUpdateVersion(history, hisItem.source).date))}/
                {new Date(getLastUpdateVersion(history, hisItem.source).date).getFullYear()}
              </p>
              <Image
                src={UnscheduledCross.src}
                alt="cross"
                width={Cross.width}
                height={Cross.height}
                className={s.unscheduled_for_publication}
              />
            </div>
          </>
        )}
        {isThereNewVersion && (
          <>
            <div className={s.column_item}>
              <p data-testid="clock" className={s.publish_revision}>
                ревизия {getLastUpdateVersion(history, hisItem.source).version}
              </p>
              <p className={s.publish_revision_date}>
                от {formattingDate(new Date(getLastUpdateVersion(history, hisItem.source).date))}/
                {formattingMonth(new Date(getLastUpdateVersion(history, hisItem.source).date))}/
                {new Date(getLastUpdateVersion(history, hisItem.source).date).getFullYear()}
              </p>
              <p className={s.status + " " + s.available_publish_status}>Доступна к публикации</p>
            </div>
            <div className={s.column_item}>
              <button className={s.publish_post + " " + s.publish_post_fire} onClick={sendDateToPublish}>
                Опубликовать
              </button>
              <Datetime
                locale="ru"
                renderInput={(props) => renderInput(props, styleInput)}
                onChange={(event) => {
                  /* istanbul ignore next */
                  handleChange(event, setAvailableDate)
                }}
                value={availableDate}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export const handleChange = (event: Moment | string, setState: any) => {
  setState(new Date(event.valueOf()))
}

export const renderInput = (
  props: any,
  styleInput: {
    cursor: string
    border: number
    color: string
    borderRadius: string
    textAlign: string
    width: string
    textDecoration: string
    fontWeight: string
  }
) => {
  return (
    <div>
      <input style={styleInput} {...props} />
    </div>
  )
}
