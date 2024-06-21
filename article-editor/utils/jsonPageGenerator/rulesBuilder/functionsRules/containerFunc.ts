import { CommonMeta, ContainerMeta } from "../../../../types/utils/jsonPageGenerator/RulesTypes"
import map from "lodash/map"
import ruleBuilder from "../ruleBuilder"
import CONTAINER from "./functionsNames/CONTAINER"
import { ContainerArgs, ContainerRule } from "../../../../types/utils/jsonPageBuilder/JsonPage"

const func: (name: string, args: CommonMeta) => ContainerRule = (name, args) => {
  const containerArgs = map(args as ContainerMeta, (a) => ruleBuilder(a))
  return {
    name,
    function: CONTAINER,
    args: containerArgs as ContainerArgs,
  }
}

export default func
