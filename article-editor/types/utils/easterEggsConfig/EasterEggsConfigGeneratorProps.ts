import { ParsedPage } from "./ParsedPage"
import IStringJson from "../contentful/IStringJson"
import SizeEasterEgg from "./SizeEasterEgg"

type EasterEggsConfigGeneratorProps = {
  currentPages: ParsedPage[]
  expiresAt: Date
  turnOnAt: Date
  logo?: string
  companyName?: { top: string; bottom: string }
  iconColors: string[]
  icons: string[]
  uncountedIcons?: string[]
  pageMax: number
  // eslint-disable-next-line @typescript-eslint/ban-types
  easterEggsMap: {}
  genMax: boolean
  themeColors?: IStringJson
  sizeEasterEgg: SizeEasterEgg
}

export default EasterEggsConfigGeneratorProps
