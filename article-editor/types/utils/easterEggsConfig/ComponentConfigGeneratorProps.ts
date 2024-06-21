import { EasterEggsConfigSimpleItem } from "./EasterEggsConfigItem"
import { ComponentEasterEggsSimple } from "./DataHandlerProps"
import SizeEasterEgg from "./SizeEasterEgg"
import EasterEggImages from "./EasterEggImages"

type ComponentConfigGeneratorProps = {
  item: EasterEggsConfigSimpleItem
  parentJson: ComponentEasterEggsSimple
  parentJsonKey: string
  icons: EasterEggImages
  iconColors: string[]
  sizeEasterEgg: SizeEasterEgg
}

export default ComponentConfigGeneratorProps
