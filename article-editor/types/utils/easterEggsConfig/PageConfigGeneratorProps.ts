import { ComponentEasterEggsMapSimple } from "./ComponentEasterEggsMapSimple"
import EasterEggImages from "./EasterEggImages"
import { ParsedPageComponentProps } from "./ParsedPage"
import SizeEasterEgg from "./SizeEasterEgg"

type PageConfigGeneratorProps = {
  pageMax: number
  genMax: boolean
  easterEggsMap: ComponentEasterEggsMapSimple
  icons: EasterEggImages
  iconColors: string[]
  pageComponents: ParsedPageComponentProps[]
  sizeEasterEgg: SizeEasterEgg
}

export default PageConfigGeneratorProps
