/* eslint-disable @typescript-eslint/no-explicit-any */
import RU_LOCALE from "./RU_LOCALE"
import EN_LOCALE from "./EN_LOCALE"

const locales = [RU_LOCALE, EN_LOCALE] as const

type Locale = typeof locales[number]

export const isLocale = (x: any): x is Locale => locales.includes(x)

export default Locale
