import { NodeHandler } from "../../../../types/utils/jsonPageGenerator/NodeHandler"
import generateComponentID from "../../generateComponentID"
import { ValueMeta } from "../../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import componentJsonGenerator from "../../componentJsonGenerator"
import get from "lodash/get"
import slateTextHandler from "../nested/slateTextHandler"
import PARAGRAPH from "../../../slate/globalValues/article/nestedTypes/PARAGRAPH"
import SCROLL_TO_ANCHOR_BUTTON_ACTION from "../../../buttonsData/actions/SCROLL_TO_ANCHOR_BUTTON_ACTION"
import BGTitle from "../../../../types/utils/packageComponents/BGTitle"
import containsVitials from "../../containsVitals"
import checkImportant from "../../checkImportant"

const bgTitleHandler: NodeHandler = ({ component }) => {
  const type = BGTitle
  const componentName = generateComponentID(type)
  const fields: ValueMeta[] = [
    { name: "id", value: componentName, function: IDENTITY },
    {
      name: "title",
      value: get(component, "title"),
      function: IDENTITY,
    },
    {
      name: "titleFirstLineCharNumber",
      value: get(component, "firstLineLastSymbol"),
      function: IDENTITY,
    },
    {
      name: "titleSecondLineCharNumber",
      value: get(component, "secondLineLastSymbol"),
      function: IDENTITY,
    },
    //TODO: убрать заглушку, т.к. бгтайтл должен задаваться через слэйт
    {
      name: "description",
      value: slateTextHandler([
        {
          type: PARAGRAPH,
          children: [{ text: get(component, "description") }],
        },
      ]),
      function: IDENTITY,
    },
    {
      name: "background",
      value: get(component, "bgImage"),
      function: IDENTITY,
    },
    {
      name: "primaryButton",
      value: {
        text: get(component, "primaryButtonText"),
        title: get(component, "primaryButtonTitle"),
        action: !get(component, "primaryButtonLink")
          ? get(component, "primaryButtonTitle") || SCROLL_TO_ANCHOR_BUTTON_ACTION
          : undefined,
        actionArgs: !get(component, "primaryButtonLink")
          ? get(component, "primaryButtonActionArgs") || {
              anchor: "contact",
              offset: 0,
            }
          : undefined,
        linkMeta: get(component, "primaryButtonLink"),
      },
      function: IDENTITY,
    },
    {
      name: "arrowButton",
      value: {
        text: get(component, "arrowButtonText"),
        linkMeta: get(component, "arrowButtonLink"),
      },
      function: IDENTITY,
    },
    {
      name: "label",
      value: {
        usualText: get(component, "labelUsualText"),
        primaryText: get(component, "labelPrimaryText"),
        primaryLinkMeta: get(component, "labelPrimaryLink"),
        usualLinkMeta: get(component, "labelUsualLink"),
      },
      function: IDENTITY,
    },
  ]

  const res = componentJsonGenerator(componentName, type, fields)
  const required = ["title", "bgImage", "label"]
  const vitals = ["title"]
  checkImportant(componentName, required, component)
  if (containsVitials(componentName, vitals, component)) {
    return res
  }
}

export default bgTitleHandler
