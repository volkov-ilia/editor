import React from "react"
import clsx from "clsx"
import { useAmp } from "next/amp"
import BGTitleProps from "../../../others/types/BGTitleProps"

export const BGTitle: React.FC<BGTitleProps> = ({ id, img, label, title, description, primaryButton, arrowButton }) => {
  const isAmp = useAmp()

  return isAmp ? (
    <AmpBGTitle
      id={id}
      label={label}
      title={title}
      description={description}
      primaryButton={primaryButton}
      arrowButton={arrowButton}
    />
  ) : (
    <NoAmpBGTitle
      id={id}
      img={img}
      label={label}
      title={title}
      description={description}
      primaryButton={primaryButton}
      arrowButton={arrowButton}
    />
  )
}

const NoAmpBGTitle: React.FC<BGTitleProps> = ({ id, img, label, title, description, primaryButton, arrowButton }) => (
  <section id={id} className="pt-32 pb-40 sm:pt-36 xp:pb-0 bg-block-image relative">
    <div className="data-block-container bg-block lg-bg-block flex justify-center">
      <div className={clsx("data-block sm:px-auto", "relative", "text-current z-10 ")}>
        {label && label}
        {title && title}
        <p className={"description mt-6 mb-10 leading-loose text-light-gray theme-other-color-for-gray-text text-base"}>
          {description}
        </p>
        {(primaryButton || arrowButton) && (
          <div className={clsx("buttons flex flex-col mt-16 sm:flex-row items-start")}>
            {primaryButton && primaryButton}
            {arrowButton && arrowButton}
          </div>
        )}
      </div>
    </div>
    <style jsx>{`
      .leading-light-snug {
        line-height: 1.31;
      }

      @screen lg {
        .bg-block-image {
          z-index: 1;
          background-image: url(${img});
          background-size: contain;
          background-position: right top;
          background-repeat: no-repeat;
          height: 100%;
        }
      }

      .description {
        width: 70%;
      }

      .data-block-container {
        width: 85%;
      }

      .data-block {
        width: 50%;
      }

      @media (max-width: 1440px) {
        .bg-block-image {
          padding-bottom: 0;
        }
        .data-block {
          width: 70%;
        }
        .data-block-container {
          width: 60%;
        }
        .description {
          width: 100%;
        }
        .buttons {
          margin-top: 0;
        }
      }
      @media (max-width: 1024px) {
        .bg-block-image {
          padding-top: 6rem;
          padding-bottom: 2rem;
        }
        .data-block {
          width: 90%;
        }
        .data-block-container {
          width: 60%;
        }
        .description {
          width: 100%;
          margin-bottom: 1.25rem;
          margin-top: 0.75rem;
        }
      }
      @media (max-width: 768px) {
        .bg-block-image {
          padding-top: 7rem;
        }
        .data-block {
          width: 85%;
        }
        .data-block-container {
          width: 100%;
        }
        .description {
          width: 100%;
        }
      }
    `}</style>
  </section>
)

const AmpBGTitle: React.FC<Omit<BGTitleProps, "img">> = ({
  id,
  label,
  title,
  description,
  primaryButton,
  arrowButton,
}) => (
  <section id={id} className={clsx("container", "section main")}>
    <div className="box">
      {label && label}
      {title && title}
      <p className={"description"}>{description}</p>
      {(primaryButton || arrowButton) && (
        <div className={"buttons"}>
          {primaryButton && primaryButton}
          {arrowButton && arrowButton}
        </div>
      )}
    </div>
    <style jsx>{`
      .section {
        padding-top: 8rem;
        position: relative;
        color: rgb(15, 33, 55);
      }

      .main {
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 10;
      }

      .box {
        width: 100%;
      }

      .description {
        margin-top: 1.5rem;
        margin-bottom: 2.5rem;
        line-height: 2;
        font-size: 1rem;
        color: rgba(52, 61, 72, 0.8);
      }

      .buttons {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-top: 4rem;
      }
    `}</style>
  </section>
)
