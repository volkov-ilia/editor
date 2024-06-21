import get from "lodash/get"
import { ComponentTitle } from "hwdtech-admin-components"
import React from "react"
import { checkRequiredFields } from "../../../checkRequiredFields"
import { nestedFieldPathBuilder } from "../../messages"
import { titleFormatterToThreeParts } from "../../../titleFormatter"
import easterEggsListHandler from "../../../easterEggsListHandler"
import { NestedComponentHandlerFC } from "../../../../../types/utils/jsonPageBuilder/ComponentHandler"
import { NestedMap } from "../../../../../types/utils/jsonPageBuilder/ParsedPage"

const ComponentTitleHandler: NestedComponentHandlerFC = ({ component, parentComponentName }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "ComponentTitle")
  const fields = {
    title: get(component, "title"),
    titleFirstLineCharNumber: get(component, "titleFirstLineCharNumber"),
    titleSecondLineCharNumber: get(component, "titleSecondLineCharNumber"),
    easterEggs: easterEggsListHandler(get(component, "easterEggs") as NestedMap[], componentName),
    line1: undefined,
    line2: undefined,
    line3: undefined,
  }

  if (fields.title) {
    const arrTitle = titleFormatterToThreeParts(
      fields.title as string,
      parseInt(fields.titleFirstLineCharNumber as string),
      parseInt(fields.titleSecondLineCharNumber as string)
    )
    fields.line1 = get(arrTitle, "[0]")
    fields.line2 = get(arrTitle, "[1]")
    fields.line3 = get(arrTitle, "[2]")
  }

  const requiredFields = ["title"]

  checkRequiredFields(component, requiredFields, componentName)

  return <ComponentTitle {...fields} />
}

export default ComponentTitleHandler
