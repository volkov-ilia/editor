import includes from "lodash/includes"
import filter from "lodash/filter"
import get from "lodash/get"
import componentJsonFields from "./componentJsonFields"

const removeUnused = (configKeys: string[], componentKeys: string[], componentType: string) => {
  return filter(configKeys, (confKey) => {
    const originKey = get(componentJsonFields, `${componentType}.${confKey}`) as string
    if (includes(componentKeys, originKey)) return confKey
  }) as string[]
}

export default removeUnused
