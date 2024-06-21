import get from "lodash/get"
import forEach from "lodash/forEach"
import { ParsedPageComponentProps } from "../../types/utils/easterEggsConfig/ParsedPage"
import { ComponentEasterEggsMapSimple } from "../../types/utils/easterEggsConfig/ComponentEasterEggsMapSimple"

const getComponentsWithEasterEggs = (
  components: ParsedPageComponentProps[],
  easterEggsMap: ComponentEasterEggsMapSimple
) => {
  const res: ParsedPageComponentProps[] = []
  forEach(components, (comp) => {
    const easterEggsConfig = easterEggsMap[get(comp, "type")]
    if (easterEggsConfig) {
      res.push(comp)
    }
  })
  return res
}

export default getComponentsWithEasterEggs
