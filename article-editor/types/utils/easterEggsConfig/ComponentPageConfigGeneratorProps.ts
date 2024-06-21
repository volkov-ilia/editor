import { PageEasterEggsConfig } from "./PageEasterEggsConfig"
import { EasterEggsMapItem } from "./ComponentEasterEggsMapSimple"
import { ParsedPageComponentProps } from "./ParsedPage"
import EasterEggImages from "./EasterEggImages"
import SizeEasterEgg from "./SizeEasterEgg"

type ComponentPageConfigGeneratorProps = {
  componentEasterEggsMap: EasterEggsMapItem
  component: ParsedPageComponentProps
  free: number
  pageEasterEggsConfig: PageEasterEggsConfig
  icons: EasterEggImages
  iconColors: string[]
  genMax: boolean
  sizeEasterEgg: SizeEasterEgg
  easterEggsConfigKeys: string[]
}

export default ComponentPageConfigGeneratorProps
