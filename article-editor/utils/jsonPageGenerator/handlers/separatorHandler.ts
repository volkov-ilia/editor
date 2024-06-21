import { NodeHandler } from "../../../types/utils/jsonPageGenerator/NodeHandler"
import generateComponentID from "../generateComponentID"
import { ValueMeta } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import componentJsonGenerator from "../componentJsonGenerator"

const separatorHandler: NodeHandler = () => {
  const type = "Separator"
  const componentName = generateComponentID(type)
  const fields: ValueMeta[] = [{ name: "id", value: componentName, function: IDENTITY }]

  return componentJsonGenerator(componentName, type, fields)
}

export default separatorHandler
