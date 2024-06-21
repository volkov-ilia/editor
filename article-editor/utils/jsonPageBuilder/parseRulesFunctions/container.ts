import parseRule from "../parseRule"
import isEmpty from "lodash/isEmpty"
import forEach from "lodash/forEach"
import IStringJson from "../../../types/utils/contentful/IStringJson"
import { ContainerFunc } from "../../../types/utils/jsonPageBuilder/RulesFunctions"

const container: ContainerFunc = (json, cardsData, cardsPropsRules) => {
  let parsedRule = parseRule(json, cardsData)
  const parsedCardsData: IStringJson[] = parsedRule.value
  parsedRule = parseRule(json, cardsPropsRules)
  const parsedCardsPropsRules = parsedRule.value

  const cardsProps: IStringJson[] = []
  if (!isEmpty(parsedCardsData) && !isEmpty(parsedCardsPropsRules))
    forEach(parsedCardsData, (card, idx) => {
      cardsProps.push({})
      forEach(parsedCardsPropsRules, (cardRules) => {
        const parsedRule = parseRule(card, cardRules)
        if (parsedRule.value) cardsProps[idx][parsedRule.name] = parsedRule.value
      })
    })
  return cardsProps
}

export default container
