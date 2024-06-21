import get from "lodash/get"
import CONT_EN from "./constants/locales/CONT_EN"
import CONT_RU from "./constants/locales/CONT_RU"
import ContClientArgs from "../../types/utils/contentful/ContClientArgs"

const mapArgs: Record<string, ContClientArgs> = {
  [CONT_RU]: {
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID_RU || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_RU || "",
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIROMENT_ID || "",
  },
  [CONT_EN]: {
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID_EN || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_EN || "",
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIROMENT_ID || "",
  },
}

const getArgs: (locale: string) => ContClientArgs | undefined = (locale) => {
  return get(mapArgs, locale)
}

export default getArgs
