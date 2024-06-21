import React, { useState } from "react"
import { Workplace } from "../../components/editor/Workplace"
import { Meta, Story } from "@storybook/react"
import WorkplaceProps from "../../others/types/editor/WorkplaceProps"
import { InputField } from "../../components/editor/nested/InputField"
import get from "lodash/get"
import { concat, includes, replace } from "lodash"
import { ThemeConfigImageLoader } from "../../components/editor/themeConfig/ThemeConfigImageLoader"
import { Title } from "../../components/editor/nested/Title"
import { EditorPrimaryButton } from "../../components/editor/nested/EditorPrimaryButton"
import { FewInlineInputsContainer } from "../../components/editor/nested/FewInlineInputsContainer"
import { ThemeConfigInputsContainer } from "../../components/editor/themeConfig/ThemeConfigInputsContainer"
import { FlexColumnCentered } from "../../components/editor/nested/FlexColumnCentered"
import { ThemeConfigDescriptionContainer } from "../../components/editor/themeConfig/ThemeConfigDescriptionContainer"

const def = {
  title: "ThemeConfigComponents",
} as Meta

export const Template: Story<WorkplaceProps> = () => {
  const [lastEasterEggsImage, setLastEasterEggsImage] = useState<string>()
  const [logo, setLogo] = useState<string>()
  const [filesSvg, setFilesSvg] = useState<string[]>([])
  const texts = {
    titleLoadLogoText: "Логотип темы",
    titleLoadEasterEggsImagesText: "Пасхалки *",
    buttonLoadLogoText: "Загрузить лого",
    buttonLoadEasterEggsImagesText: "Загрузить пасхалки",
    expiresAt: "Выключить. *",
    turnOnAt: "Включить. *",
    topLogoText: "Текст вместо HWDTECH! в лого",
    bottomLogoText: "Текст вместо TECHNOLOGIES в лого",
    pageMax: "Максимум пасхалок на странице *",
    ignoredPagesSlug: "Игнорировать слаги (перечислить через пробел)",
    iconColors: "hex цвета (перечислить через пробел)",
    genMax: "Генерировать максимум",
    smallestImageSize: "Минимальный размер пасхалки *",
    biggestImageSize: "Максимальный размер пасхалки *",
    easterEggsColors: "Перечислите цвета пасхалок *",
    generateConfig: "Сгенерировать!",
    generateConfigTitle: "Сгенерировать конфиг",
  }
  const docText = `На данной странице генерируется конфиг для размещения пасхалок на сайте.
Обязательные поля отмечены *.
В поле "${texts.ignoredPagesSlug}" при необходимости указываются слаги или пути страниц/разделов, которые не должны включаться в конфиг.
В полях "${texts.smallestImageSize}" и "${texts.biggestImageSize}" указывается лишь интервал. Генерация размеров случайна в указанном интервале. Размер указывается в rem.
В поле "${texts.genMax}" указать любое значение, если нужно сгенерировать максимально возможное количество пасхалок на каждой странице (это количество может быть меньше максимального).
Картинки пасхалок должны иметь формат svg. Пасхалки должны быть однотонными, иначе изменение цвета применится некорректно. Загружать можно несколько картинок сразу. Одинаковые картинки не загружаются.`

  const readEasterEggsImage = async (e: ProgressEvent<FileReader>) => {
    const text = get(e, "target.result")
    const color = "#8200FF"
    let correctSVG = replace(text, /width="\d+"/, 'width="7rem"')
    correctSVG = replace(correctSVG, /height="\d+"/, 'height="7rem"')
    correctSVG = replace(correctSVG, /(fill|stroke)="#\w+"/gm, (val) => {
      return val.replace(/#\w+/, color)
    })
    if (!includes(filesSvg, correctSVG)) {
      setLastEasterEggsImage(correctSVG)
      setFilesSvg(concat(filesSvg, correctSVG))
    }
  }

  const readLogoImage = async (e: ProgressEvent<FileReader>) => {
    const text = get(e, "target.result")
    setLogo(text)
  }

  const nextFile = async (e: ProgressEvent<FileReader>, files: File[], reader: FileReader) => {
    const file = files.shift()
    if (file) {
      reader.readAsText(file)
    }
  }

  const uploadEasterEggsImages = (
    event: React.ChangeEvent<HTMLInputElement>,
    inputRef: React.RefObject<HTMLInputElement>
  ) => {
    event.preventDefault()
    if (inputRef.current?.files) {
      const files = Array.from(inputRef.current.files)
      inputRef.current.files = null
      event.target.files = null
      const reader = new FileReader()
      reader.onload = readEasterEggsImage
      reader.onloadend = async (e) => {
        await nextFile(e, files, reader)
      }
      reader.readAsText(files[0])
    }
  }

  const uploadLogo = (event: React.ChangeEvent<HTMLInputElement>, inputRef: React.RefObject<HTMLInputElement>) => {
    event.preventDefault()
    if (inputRef.current?.files) {
      const file = get(inputRef, "current.files[0]")
      inputRef.current.files = null
      event.target.files = null
      const reader = new FileReader()
      reader.onload = readLogoImage
      reader.readAsText(file)
    }
  }

  const showImageMethodEaterEggs = (current: HTMLDivElement, lastImage: string, defaultText?: string) => {
    current.innerHTML = current.innerHTML !== defaultText ? `${current.innerHTML}${lastImage}` : `${lastImage}`
  }

  const showImageMethodLogo = (current: HTMLDivElement, lastImage?: string) => {
    current.innerHTML = `${lastImage}`
  }
  return (
    <div>
      <Workplace
        headerHeight={25}
        width={80}
        header={<ThemeConfigDescriptionContainer>{docText}</ThemeConfigDescriptionContainer>}
        left={
          <FlexColumnCentered>
            <Title>{texts.titleLoadEasterEggsImagesText}</Title>
            <ThemeConfigImageLoader
              idInput={"images"}
              loadButtonText={texts.buttonLoadEasterEggsImagesText}
              lastImage={lastEasterEggsImage}
              uploadImage={uploadEasterEggsImages}
              isMultiple={true}
              showImageMethod={showImageMethodEaterEggs}
            />
          </FlexColumnCentered>
        }
        right={
          <FlexColumnCentered>
            <Title>{texts.titleLoadLogoText}</Title>
            <ThemeConfigImageLoader
              idInput={"images"}
              loadButtonText={texts.buttonLoadLogoText}
              lastImage={logo}
              uploadImage={uploadLogo}
              showImageMethod={showImageMethodLogo}
              isMultiple={false}
            />
          </FlexColumnCentered>
        }
        center={
          <ThemeConfigInputsContainer>
            <FewInlineInputsContainer>
              <InputField type={"date"} setValue={() => {}} value={""} label={texts.turnOnAt} />
              <InputField type={"date"} setValue={() => {}} value={""} label={texts.expiresAt} />
            </FewInlineInputsContainer>
            <FewInlineInputsContainer>
              <InputField placeholder={texts.smallestImageSize} setValue={() => {}} value={""} />
              <InputField placeholder={texts.biggestImageSize} setValue={() => {}} value={""} />
            </FewInlineInputsContainer>
            <FewInlineInputsContainer>
              <InputField placeholder={texts.topLogoText} setValue={() => {}} value={""} />
              <InputField placeholder={texts.bottomLogoText} setValue={() => {}} value={""} />
            </FewInlineInputsContainer>
            <FewInlineInputsContainer>
              <InputField type={"number"} min={1} placeholder={texts.pageMax} setValue={() => {}} value={""} />
              <InputField
                placeholder={texts.genMax}
                setValue={() => {}}
                value={""}
                list={["true", "false"]}
                listId={"genMaxValues"}
              />
            </FewInlineInputsContainer>
            <InputField placeholder={texts.iconColors} setValue={() => {}} value={""} />
            <InputField placeholder={texts.ignoredPagesSlug} setValue={() => {}} value={""} />
            <FewInlineInputsContainer>
              <EditorPrimaryButton onClick={() => {}} text={texts.generateConfig} title={texts.generateConfigTitle} />
            </FewInlineInputsContainer>
          </ThemeConfigInputsContainer>
        }
      />
      <style jsx global>{`
        .input-field > input[type="date"]::-webkit-calendar-picker-indicator {
          display: none;
          -webkit-appearance: none;
        }
      `}</style>
    </div>
  )
}

export default def
