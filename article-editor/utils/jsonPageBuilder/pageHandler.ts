import isArray from "lodash/isArray"
import forEach from "lodash/forEach"
import getHandler from "./getHandler"
import { ReactElement } from "react"
import { ParsedPageComponentProps } from "../../types/utils/easterEggsConfig/ParsedPage"
import ListComponentsEasterEggs from "../../types/utils/jsonPageBuilder/ListComponentsEasterEggs"

const pageHandler = (
  componentsWithPropsList: ParsedPageComponentProps[],
  absoluteURL: string,
  isAmp?: boolean,
  isNoIndex?: boolean,
  listComponentsEasterEggs?: ListComponentsEasterEggs
) => {
  const pageComponents: ReactElement[] = []
  if (isArray(componentsWithPropsList)) {
    forEach(componentsWithPropsList, (component) => {
      try {
        const handler = getHandler(component.type)
        pageComponents.push(
          handler({
            component,
            absoluteURL,
            isAmp,
            isNoIndex,
            listComponentsEasterEggs,
          }) as ReactElement
        )
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    })
  }
  return pageComponents
}

export default pageHandler
