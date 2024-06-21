import React from "react"
import Slider from "react-slick"
import { OtherCarouselArrow } from "./OtherCarouselArrow"
import { themeColorsColors } from "../../../others/page/colors"
import ImageCarouselProps from "../../../others/types/ImageCarouselProps"
import { useAmp } from "next/amp"
import { useEditorModeContext } from "../../EditorModeContext"
import shortID from "../../../utils/shortID"

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ id, children, firstNode }) => {
  const isAmp = useAmp()
  return isAmp ? (
    <AmpImageCarousel id={id}>{children}</AmpImageCarousel>
  ) : (
    <NoAmpImageCarousel id={id} firstNode={firstNode}>
      {children}
    </NoAmpImageCarousel>
  )
}

const NoAmpImageCarousel: React.FC<ImageCarouselProps> = ({ id, children, firstNode }) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableFalse = isEditable ? { contentEditable: false, suppressContentEditableWarning: true } : {}
  return (
    <section id={id}>
      <Slider
        infinite={!isEditable}
        className={"images-slider select-none"}
        dots={true}
        slidesToScroll={1}
        slidesToShow={1}
        arrows={true}
        focusOnSelect
        appendDots={(dots) => (
          <ul {...editableFalse} className={"select-none"}>
            {dots}
          </ul>
        )}
        nextArrow={<OtherCarouselArrow />}
        prevArrow={<OtherCarouselArrow isPrev />}
      >
        {children}
        {isEditable && firstNode}
      </Slider>
      <style global jsx>{`
        .images-slider {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 2.5rem;
          padding-bottom: 1rem;
          user-select: none;
          user-focus: none;
          user-input: none;
          user-modify: none;
        }

        .images-slider .slick-dots {
          margin: 0;
          bottom: 0;
          user-select: none;
          user-focus: none;
          user-input: none;
          user-modify: none;
        }

        .images-slider .slick-dots li.slick-active > button:before {
          color: ${themeColorsColors.primary};
        }

        .images-slider .slick-list {
          width: 100%;
        }

        .images-slider .slick-list .slick-slide > div {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </section>
  )
}

const AmpImageCarousel: React.FC<Omit<ImageCarouselProps, "firstNode">> = ({ id, children }) => {
  const selectorId = `${id}Selector`
  return (
    <section>
      <amp-carousel
        id={id}
        width="450"
        height="300"
        layout="responsive"
        type="slides"
        role="region"
        aria-label="Carousel with slide previews"
        on={`slideChange:${selectorId}.toggle(index=event.index, value=true)`}
      >
        {children}
      </amp-carousel>
      <amp-selector
        id={selectorId}
        class="carousel-preview"
        on={`select:${id}.goToSlide(index=event.targetOption)`}
        layout="container"
      >
        {React.Children.map(children, (item, imageIndex) => (
          <button
            key={shortID()}
            className="preview-button"
            // @ts-ignore
            option={imageIndex}
          />
        ))}
      </amp-selector>
      <style global jsx>{`
        .amp-carousel-button {
          background-color: ${themeColorsColors.primary};
          border-radius: 9999px;
        }

        .amp-carousel-button-next {
          margin-right: 0;
        }

        .amp-carousel-button-prev {
          margin-left: 0;
        }
      `}</style>
      <style jsx>{`
        .amp-carousel {
          min-height: 500px;
        }

        .preview-button {
          padding: 2px;
          margin: 0.5rem;
          border-radius: 9999px;
          border: none;
          background: #d1d8e4;
        }

        amp-selector {
          display: flex;
          justify-content: center;
          margin-top: 0.5rem;
        }

        amp-selector [option][selected] {
          outline: none;
          background: ${themeColorsColors.primary};
        }

        .item {
          width: 100%;
          height: auto;
          padding: 0 3rem;
        }

        .button-box {
          display: flex;
          flex-wrap: nowrap;
          justify-content: flex-start;
          margin-top: 10px;
        }

        #${id} {
          min-height: 460px;
          position: relative;
          height: auto;
        }

        @screen xxs {
          #${id} {
            min-height: 510px;
            height: auto;
          }
        }
        @screen xs {
          .item {
            padding: 0 2rem;
          }
        }
      `}</style>
    </section>
  )
}
