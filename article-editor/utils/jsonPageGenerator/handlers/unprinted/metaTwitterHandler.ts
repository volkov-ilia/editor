import { NodeHandler } from "../../../../types/utils/jsonPageGenerator/NodeHandler"
import generateComponentID from "../../generateComponentID"
import { ValueMeta } from "../../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import componentJsonGenerator from "../../componentJsonGenerator"
import get from "lodash/get"
import META_TWITTER from "../../../../types/utils/packageComponents/META_TWITTER"
import checkImportant from "../../checkImportant"
import containsVitals from "../../containsVitals"

const imageWithSizeHandler: NodeHandler = ({ component }) => {
  const type = META_TWITTER
  const componentName = generateComponentID(type)
  const fields: ValueMeta[] = [
    { name: "id", value: componentName, function: IDENTITY },
    { name: "title", value: get(component, "title"), function: IDENTITY },
    {
      name: "description",
      value: get(component, "description"),
      function: IDENTITY,
    },
    {
      name: "imageUrl",
      value: get(component, "previewImage"),
      function: IDENTITY,
    },
  ]

  const res = componentJsonGenerator(componentName, type, fields)
  const vitals = ["title", "description", "previewImage"]
  checkImportant(componentName, vitals, component)
  const hasVitals = containsVitals(componentName, vitals, component)
  if (hasVitals) {
    return res
  }
}

export default imageWithSizeHandler
