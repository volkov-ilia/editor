import React from "react"
import { BaseSelection } from "slate"

type Props = {
  setContentFormType: React.Dispatch<React.SetStateAction<string>>
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>
  setSelection: React.Dispatch<React.SetStateAction<BaseSelection>>
}

export default Props
