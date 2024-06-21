import React, { useEffect, useState } from "react"
import {
  Editor,
  EditorPrimaryButton,
  FewInlineInputsContainer,
  FlexColumnCentered,
  InputField,
  ThemeConfigDescriptionContainer,
  ThemeConfigImageLoader,
  ThemeConfigInputsContainer,
  Title,
  Workplace,
} from "hwdtech-admin-components"
import get from "lodash/get"
import includes from "lodash/includes"
import merge from "lodash/merge"
import split from "lodash/split"
import min from "lodash/min"
import max from "lodash/max"
import configGenerator from "../../utils/easterEggsConfig/easterEggsConfigGenerator"
import EasterEggsConfigGeneratorProps from "../../types/utils/easterEggsConfig/EasterEggsConfigGeneratorProps"
import axios from "axios"
import getPagesSelection from "../../utils/easterEggsConfig/getPagesSelection"
import componentEasterEggsMapGenerator from "../../utils/easterEggsConfig/componentEasterEggsMapGenerator"
import { listComponentsEasterEggs } from "../../utils/listComponentsEasterEggs"
import changeSize from "../../utils/processSVG/changeSize"
import calculateSizeProportions from "../../utils/processSVG/calculateSizeProportions"
import ceil from "lodash/ceil"
import changeColors from "../../utils/processSVG/changeColors"
import { useApplicationValueContext } from "./ApplicationContext"
import RU_LOCALE from "../../types/locale/RU_LOCALE"

const ThemeConfigPage: React.FC<{
  texts: {
    titleCopy: string
    buttonCopy: string
    configName: string
    iconColors: string
    biggestImageSize: string
    smallestImageSize: string
    bottomLogoText: string
    buttonLoadEasterEggsImagesText: string
    buttonUncountedImages: string
    titleUncountedImages: string
    expiresAt: string
    loadLogo: string
    uncountedImages: string
    pageMax: string
    generateConfigTitle: string
    buttonLoadLogoText: string
    topLogoText: string
    genMax: string
    turnOnAt: string
    titleLoadLogoText: string
    easterEggsColors: string
    titleLoadEasterEggsImagesText: string
    loadImages: string
    generateConfig: string
    ignoredPagesSlug: string
  }
  docText: string
}> = ({ texts, docText }) => {
  const { locale, setLocale } = useApplicationValueContext()
  const [lastEasterEggsImage, setLastEasterEggsImage] = useState("")
  const [lastUncountedEasterEggsImage, setUncountedLastEasterEggsImage] = useState("")
  const [logo, setLogo] = useState<string>()
  const [easterEggsImages, setEasterEggsImages] = useState<string[]>([])
  const [uncountedEasterEggsImages, setUncountedEasterEggsImages] = useState<string[]>([])
  const [fields, setFields] = useState({
    configName: "",
    expiresAt: "",
    turnOnAt: "",
    logo: "",
    smallestImageSize: "",
    biggestImageSize: "",
    topLogoText: "",
    bottomLogoText: "",
    pageMax: "",
    genMax: "",
    iconColors: [""],
    icons: [""],
    ignoredPagesSlug: [""],
    themeColors: "",
  })
  const [config, setConfig] = useState<string>()

  const readEasterEggsImage = async (
    e: ProgressEvent<FileReader>,
    setLast: React.Dispatch<React.SetStateAction<string>>,
    storage: string[]
  ) => {
    const text = get(e, "target.result")
    const proportions = calculateSizeProportions(text)
    const height = 7
    let correctSVG = changeSize(text, height * proportions, height)
    const color = "#12B698"
    correctSVG = changeColors(correctSVG, color)
    if (!includes(storage, correctSVG)) {
      setLast(correctSVG)
      storage.push(correctSVG)
    }
  }

  useEffect(() => {
    if (locale !== RU_LOCALE) setLocale(RU_LOCALE)
  }, [locale, setLocale])

  const readLogoImage = async (e: ProgressEvent<FileReader>) => {
    const text = get(e, "target.result")
    const proportions = calculateSizeProportions(text)
    const height = 9
    const correctSVG = changeSize(text, height * proportions, height)
    setLogo(correctSVG)
    fields.logo = correctSVG
  }

  const nextFile = async (
    e: ProgressEvent<FileReader>,
    files: File[],
    reader: FileReader,
    storage: string[],
    setStorage: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const file = files.shift()
    if (file) {
      reader.readAsText(file)
    } else {
      setStorage(storage)
    }
  }

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(text)
    } else {
      document.execCommand("copy", true, text)
    }
  }

  const uploadEasterEggsImagesCommon = (
    event: React.ChangeEvent<HTMLInputElement>,
    inputRef: React.RefObject<HTMLInputElement>,
    setLast: React.Dispatch<React.SetStateAction<string>>,
    setStorage: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    event.preventDefault()
    if (inputRef.current?.files) {
      const files = Array.from(inputRef.current.files)
      inputRef.current.files = null
      event.target.files = null
      const reader = new FileReader()
      const storage: string[] = []
      reader.onload = (e) => readEasterEggsImage(e, setLast, storage)
      reader.onloadend = async (e) => {
        await nextFile(e, files, reader, storage, setStorage)
      }
      reader.readAsText(files[0])
    }
  }

  const uploadEasterEggsImages = (
    event: React.ChangeEvent<HTMLInputElement>,
    inputRef: React.RefObject<HTMLInputElement>
  ) => uploadEasterEggsImagesCommon(event, inputRef, setLastEasterEggsImage, setEasterEggsImages)

  const uploadEasterEggsUncountedImages = (
    event: React.ChangeEvent<HTMLInputElement>,
    inputRef: React.RefObject<HTMLInputElement>
  ) => uploadEasterEggsImagesCommon(event, inputRef, setUncountedLastEasterEggsImage, setUncountedEasterEggsImages)

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

  const setOneField = (value: string | string[], key: string) => {
    setFields(merge(fields, { [key]: value }))
  }

  const generateConfig = async () => {
    const allPages = await axios.get(
      `/api/getEntries?locale=${locale}&type=${process.env.NEXT_PUBLIC_CONTENTFUL_PAGE_STRUCTURE_TYPE_ID}`
    )
    const pages = await getPagesSelection({
      ignoredPagesSlug: fields.ignoredPagesSlug,
      contData: allPages.data,
    })
    const easterEggsMap = componentEasterEggsMapGenerator(listComponentsEasterEggs)
    const smallest = parseInt(fields.smallestImageSize)
    const biggest = parseInt(fields.biggestImageSize)
    let smallLogo
    if (logo) {
      const proportions = calculateSizeProportions(logo)
      const height = ceil(40 / 16, 3)
      const width = ceil(height * proportions, 3)
      smallLogo = changeSize(logo, width, height)
    }
    const params: EasterEggsConfigGeneratorProps = {
      currentPages: pages,
      expiresAt: new Date(fields.expiresAt),
      turnOnAt: new Date(fields.turnOnAt),
      logo: smallLogo,
      companyName: { top: fields.topLogoText, bottom: fields.bottomLogoText },
      iconColors: fields.iconColors,
      icons: easterEggsImages,
      uncountedIcons: uncountedEasterEggsImages,
      pageMax: parseInt(fields.pageMax),
      genMax: fields.genMax === "true",
      sizeEasterEgg: {
        minWidth: min([smallest, biggest]) as number,
        maxWidth: max([smallest, biggest]) as number,
      },
      easterEggsMap,
    }
    const generatedConfig = configGenerator(params)
    setConfig(JSON.stringify(generatedConfig, null, 2))
  }
  return (
    <div>
      <Workplace
        headerHeight={25}
        width={80}
        header={<ThemeConfigDescriptionContainer>{docText}</ThemeConfigDescriptionContainer>}
        left={
          <ThemeConfigInputsContainer>
            <FlexColumnCentered>
              <Title>{texts.titleLoadEasterEggsImagesText}</Title>
              <ThemeConfigImageLoader
                initialText={texts.loadImages}
                idInput={"images"}
                loadButtonText={texts.buttonLoadEasterEggsImagesText}
                lastImage={lastEasterEggsImage}
                uploadImage={uploadEasterEggsImages}
                isMultiple={true}
                showImageMethod={showImageMethodEaterEggs}
              />
            </FlexColumnCentered>
            <FlexColumnCentered>
              <Title>{texts.titleUncountedImages}</Title>
              <ThemeConfigImageLoader
                initialText={texts.uncountedImages}
                idInput={"images"}
                loadButtonText={texts.buttonUncountedImages}
                lastImage={lastUncountedEasterEggsImage}
                uploadImage={uploadEasterEggsUncountedImages}
                isMultiple={true}
                showImageMethod={showImageMethodEaterEggs}
              />
            </FlexColumnCentered>
          </ThemeConfigInputsContainer>
        }
        right={
          <FlexColumnCentered>
            <Title>{texts.titleLoadLogoText}</Title>
            <ThemeConfigImageLoader
              initialText={texts.loadLogo}
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
              <InputField
                setValue={(value: string) => setOneField(value, "configName")}
                value={fields.configName}
                placeholder={texts.configName}
              />
            </FewInlineInputsContainer>
            <FewInlineInputsContainer>
              <InputField
                type={"date"}
                setValue={(value: string) => setOneField(value, "turnOnAt")}
                value={fields.turnOnAt}
                label={texts.turnOnAt}
              />
              <InputField
                type={"date"}
                setValue={(value: string) => setOneField(value, "expiresAt")}
                value={fields.expiresAt}
                label={texts.expiresAt}
              />
            </FewInlineInputsContainer>
            <FewInlineInputsContainer>
              <InputField
                placeholder={texts.smallestImageSize}
                type={"number"}
                step={"0.01"}
                setValue={(value: string) => setOneField(value, "smallestImageSize")}
                value={fields.smallestImageSize}
              />
              <InputField
                type={"number"}
                step={"0.01"}
                placeholder={texts.biggestImageSize}
                setValue={(value: string) => setOneField(value, "biggestImageSize")}
                value={fields.biggestImageSize}
              />
            </FewInlineInputsContainer>
            <FewInlineInputsContainer>
              <InputField
                placeholder={texts.topLogoText}
                setValue={(value: string) => setOneField(value, "topLogoText")}
                value={fields.topLogoText}
              />
              <InputField
                placeholder={texts.bottomLogoText}
                setValue={(value: string) => setOneField(value, "bottomLogoText")}
                value={fields.bottomLogoText}
              />
            </FewInlineInputsContainer>
            <FewInlineInputsContainer>
              <InputField
                type={"number"}
                min={1}
                placeholder={texts.pageMax}
                setValue={(value: string) => setOneField(value, "pageMax")}
                value={fields.pageMax}
              />
              <InputField
                placeholder={texts.genMax}
                setValue={(value: string) => setOneField(value, "genMax")}
                value={fields.genMax}
                list={["true", "false"]}
                listId={"genMaxValues"}
              />
            </FewInlineInputsContainer>
            <InputField
              placeholder={texts.iconColors}
              setValue={(value: string) => setOneField(split(value, " "), "iconColors")}
              value={fields.iconColors}
            />
            <InputField
              placeholder={texts.ignoredPagesSlug}
              setValue={(value: string) => setOneField(split(value, " "), "ignoredPagesSlug")}
              value={fields.ignoredPagesSlug}
            />
            <FewInlineInputsContainer>
              <EditorPrimaryButton
                onClick={generateConfig}
                text={texts.generateConfig}
                title={texts.generateConfigTitle}
              />
            </FewInlineInputsContainer>
            {config && (
              <Editor>
                <EditorPrimaryButton
                  onClick={() => copyTextToClipboard(config)}
                  text={texts.buttonCopy}
                  title={texts.titleCopy}
                />
                <div className={"whitespace-pre-wrap"}>{config}</div>
              </Editor>
            )}
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

export default ThemeConfigPage
