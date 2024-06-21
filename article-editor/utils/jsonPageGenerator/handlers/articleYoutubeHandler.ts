import { NodeHandler } from "../../../types/utils/jsonPageGenerator/NodeHandler"
import generateComponentID from "../generateComponentID"
import find from "lodash/find"
import LINK from "../../slate/globalValues/article/nestedTypes/LINK"
import { ValueMeta } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import componentJsonGenerator from "../componentJsonGenerator"
import getTextFromChild from "../getTextFromChild"

const articleYoutubeHandler: NodeHandler = ({ component }) => {
  const type = "ArticleYoutube"
  const componentName = generateComponentID(type)
  const fields: ValueMeta[] = [
    { name: "id", value: componentName, function: IDENTITY },
    {
      name: "videoId",
      value: getTextFromChild(find(component.children, { type: LINK })),
      function: IDENTITY,
    },
  ]

  return componentJsonGenerator(componentName, type, fields)
}

export default articleYoutubeHandler
