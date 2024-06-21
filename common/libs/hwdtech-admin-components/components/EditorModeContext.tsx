import React, { createContext, useContext, useState } from "react"
import ChildrenProp from "../others/types/AtomicProps/ChildrenProp"

type Mode = "editor" | "site"
type ModeState = { mode: Mode; setMode: (newMode: Mode) => void }

const initialState: ModeState = {
  mode: "site",
  setMode: (_) => {
    return
  },
}

const EditorModeContext = createContext(initialState)

export const EditorModeProvider: React.FC<ChildrenProp & { initialMode: Mode }> = ({ children, initialMode }) => {
  const [mode, setNewMode] = useState(initialMode)

  const setMode = (newMode: Mode) => {
    setNewMode(newMode)
  }

  return <EditorModeContext.Provider value={{ mode, setMode }}>{children}</EditorModeContext.Provider>
}

export const useEditorModeContext = () => useContext(EditorModeContext)
