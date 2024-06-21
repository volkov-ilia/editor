import { NodeHandler } from "../../../types/utils/jsonPageGenerator/NodeHandler"
import generateComponentID from "../generateComponentID"
import find from "lodash/find"
import SELECTOR from "../../slate/globalValues/article/nestedTypes/SELECTOR"
import { ValueMeta } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import componentJsonGenerator from "../componentJsonGenerator"
import LINK from "../../slate/globalValues/article/nestedTypes/LINK"
import TITLE from "../../slate/globalValues/article/nestedTypes/TITLE"
import HEIGHT from "../../slate/globalValues/article/nestedTypes/HEIGHT"
import getTextFromChild from "../getTextFromChild"

const codeSnippetHandler: NodeHandler = ({ component }) => {
  const type = "CodeSnippet"
  const componentName = generateComponentID(type)
  const fields: ValueMeta[] = [
    { name: "id", value: componentName, function: IDENTITY },
    {
      name: "src",
      value: getTextFromChild(find(component.children, { type: LINK })),
      function: IDENTITY,
    },
    {
      name: "resource",
      value: getTextFromChild(find(component.children, { type: SELECTOR })),
      function: IDENTITY,
    },
    {
      name: "title",
      value: getTextFromChild(find(component.children, { type: TITLE })),
      function: IDENTITY,
    },
    {
      name: "height",
      value: getTextFromChild(find(component.children, { type: HEIGHT })),
      function: IDENTITY,
    },
  ]

  return componentJsonGenerator(componentName, type, fields)
}

export default codeSnippetHandler
