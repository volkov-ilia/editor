import get from "lodash/get"
import childrenNormalizerMap from "./childrenNormalizerMap"
import { Descendant } from "slate"

const childrenNormalizer = (component: Descendant) => {
  const normalizer = get(childrenNormalizerMap, component.type as string, get(childrenNormalizerMap, "default"))
  return normalizer(component)
}

export default childrenNormalizer
