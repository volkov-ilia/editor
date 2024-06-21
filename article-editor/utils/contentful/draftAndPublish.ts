import { editPageStructure } from "./editPageStructure"
import { createPageStructure } from "./createPageStructure"
import React from "react"
import jsonPageGenerator from "../jsonPageGenerator"
import handlers from "../jsonPageGenerator/handlers"
import isEmpty from "lodash/isEmpty"
import { Descendant } from "slate"
import { PageFieldsTypes } from "../../types/Slate/Components/PageFieldsTypes"
import UNPRINTED_COMPONENTS from "../UNPRINTED_COMPONENTS"

export const draftAndPublish = async (
  event: React.MouseEvent,
  setIsLoading: boolean,
  actionFlag: string,
  buttonType: string,
  value: Descendant[],
  pageFields: PageFieldsTypes,
  locale: string
) => {
  event.preventDefault()
  const { json, warnings: warningsGenerator } = jsonPageGenerator(value, handlers, pageFields, UNPRINTED_COMPONENTS)
  // eslint-disable-next-line no-console
  if (!isEmpty(warningsGenerator)) warningsGenerator.forEach((error) => console.warn(error))

  const savingFunction = actionFlag === "create" ? createPageStructure : editPageStructure
  await savingFunction(buttonType, json, JSON.stringify(value), pageFields, locale)
}
