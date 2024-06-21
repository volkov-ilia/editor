/* eslint-disable @typescript-eslint/no-explicit-any */
import forEach from "lodash/forEach"
import generateRandomPageConfig from "./generateRandomPageConfig"
import { PageEasterEggsConfig } from "../../types/utils/easterEggsConfig/PageEasterEggsConfig"
import EasterEggsConfigGeneratorProps from "../../types/utils/easterEggsConfig/EasterEggsConfigGeneratorProps"
import shortID from "./shortID"
import IStringJson from "../../types/utils/contentful/IStringJson"
import EasterEggImages from "../../types/utils/easterEggsConfig/EasterEggImages"

const generator = ({
  currentPages,
  expiresAt,
  turnOnAt,
  logo,
  companyName,
  themeColors,
  iconColors,
  icons,
  uncountedIcons,
  pageMax,
  easterEggsMap,
  genMax,
  sizeEasterEgg,
}: EasterEggsConfigGeneratorProps) => {
  let total = 0
  let totalUncounted = 0
  const pages: { [key: string]: PageEasterEggsConfig } = {}
  const config: { [key: string]: any } = {
    expiresAt,
    turnOnAt,
    logo,
    companyName,
    themeColors,
  }

  config.pagesNumber = 0

  const iconsMap: EasterEggImages = {}
  const contents: IStringJson = {}
  forEach(icons, (i) => {
    const key = shortID()
    iconsMap[key] = { isCounted: true, value: i, key: key }
    contents[key] = i
  })
  forEach(uncountedIcons, (i) => {
    const key = shortID()
    iconsMap[key] = { isCounted: false, value: i, key: key }
    contents[key] = i
  })
  forEach(currentPages, (page) => {
    const { pageTotal, pageEasterEggs, pageUncountedTotal } = generateRandomPageConfig({
      pageMax,
      pageComponents: page.componentsProps,
      easterEggsMap,
      icons: iconsMap,
      iconColors,
      genMax,
      sizeEasterEgg,
    })
    if (pageTotal > 0 || pageUncountedTotal > 0) {
      total += pageTotal
      totalUncounted += pageUncountedTotal
      const pageEasterEggsConfig = pageEasterEggs as PageEasterEggsConfig
      pageEasterEggsConfig.pageTotal = pageTotal
      pageEasterEggsConfig.pageUncountedTotal = pageUncountedTotal
      pages[`${page.slug}`] = pageEasterEggsConfig
      config.pagesNumber += 1
    }
  })

  config.total = total
  config.totalUncounted = totalUncounted
  config.pages = pages
  config.contents = contents
  if (config.pagesNumber > 0) {
    config.averageOnPage = config.total / config.pagesNumber
    config.averageUncountedOnPage = config.totalUncounted / config.pagesNumber
  }

  return config
}

export default generator
