import CONTENTFUL_EN from "./CONTENTFUL_EN"
import CONTENTFUL_RU from "./CONTENTFUL_RU"
import DZ from "./DZ"
import VK from "./VK"

export const platformConfig = [CONTENTFUL_RU, CONTENTFUL_EN, VK, DZ] as const
export type Platforms = typeof platformConfig[number]
