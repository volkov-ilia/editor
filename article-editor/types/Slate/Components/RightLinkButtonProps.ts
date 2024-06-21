import React from "react"
import { BaseSelection } from "slate"

type Props = {
  setContentFormType: React.Dispatch<React.SetStateAction<string>>
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>
  setSelection: React.Dispatch<React.SetStateAction<BaseSelection | undefined>>
  icon: string
}

export default Props
