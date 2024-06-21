import React, { createContext, useContext, useState } from "react"
import ChildrenProp from "../../types/AtomicProps/ChildrenProp"
import initialValue from "../../utils/slate/globalValues/initialValue"
import { Descendant } from "slate"
import { Platforms } from "../../types/platforms/platformConfig"
import CONTENTFUL_RU from "../../types/platforms/CONTENTFUL_RU"

type Value = Descendant[]
type ValueState = {
  value: Value
  setValue: (newValue: Value) => void
  isLoggedIn: boolean
  setIsLoggedIn: (newValue: boolean) => void
  locale: Platforms
  setLocale: (newValue: Platforms) => void
}

const initialState: ValueState = {
  value: initialValue,
  setValue: (_) => {
    return
  },
  setIsLoggedIn: (_) => {
    return
  },
  isLoggedIn: false,
  setLocale: (_) => {
    return
  },
  locale: CONTENTFUL_RU,
}

export const ApplicationContext = createContext(initialState)

export const ApplicationProvider: React.FC<ChildrenProp & { initialValue: Descendant[] }> = ({ children }) => {
  const [value, setValue] = useState(initialValue)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [locale, setLocale] = useState<Platforms>(CONTENTFUL_RU)
  return (
    <ApplicationContext.Provider value={{ value, setValue, isLoggedIn, setIsLoggedIn, locale, setLocale }}>
      {children}
    </ApplicationContext.Provider>
  )
}

export const useApplicationValueContext = () => useContext(ApplicationContext)
