import PointsHandler from "./componentsHandlers/common/PointsHandler"
import LinkInTextHandler from "./componentsHandlers/common/nestedComponents/LinkInTextHandler"
import SimpleTextHandler from "./componentsHandlers/common/SimpleTextHandler"
import StyledTextHandler from "./componentsHandlers/common/StyledTextHandler"
import IconHandler from "./componentsHandlers/common/SymbolIconHandler"
import get from "lodash/get"
import { NestedMap, ParsedPageComponentProps } from "../../types/utils/jsonPageBuilder/ParsedPage"
import OrderedListHandler from "./componentsHandlers/article/OrderedListHandler"
import UnorderedListHandler from "./componentsHandlers/article/UnorderedListHandler"
import SECOND_HEADER from "../slate/globalValues/article/nestedTypes/SECOND_HEADER"
import SecondHeaderHandler from "./componentsHandlers/common/SecondHeaderHandler"
import THIRD_HEADER from "../slate/globalValues/article/nestedTypes/THIRD_HEADER"
import ThirdHeaderHandler from "./componentsHandlers/common/ThirdHeaderHandler"

const textTypesHandlers = {
  points: (component: NestedMap, parentComponentName: string) => PointsHandler({ component, parentComponentName }),
  link: (component: NestedMap, parentComponentName: string) => LinkInTextHandler({ component, parentComponentName }),
  styledText: (component: NestedMap, parentComponentName: string) =>
    StyledTextHandler({ component, parentComponentName }),
  text: (component: ParsedPageComponentProps | string, _: string) => SimpleTextHandler({ component }),
  icon: (component: NestedMap, parentComponentName: string) =>
    IconHandler({
      component: {
        icon: get(component, "text"),
        color: get(component, "color"),
        size: get(component, "size"),
      },
      parentComponentName,
    }),
  orderedList: (component: NestedMap, parentComponentName: string) =>
    OrderedListHandler({ component, parentComponentName }),
  unorderedList: (component: NestedMap, parentComponentName: string) =>
    UnorderedListHandler({ component, parentComponentName }),
  [SECOND_HEADER]: (component: NestedMap, parentComponentName: string) =>
    SecondHeaderHandler({ component, parentComponentName }),
  [THIRD_HEADER]: (component: NestedMap, parentComponentName: string) =>
    ThirdHeaderHandler({ component, parentComponentName }),
}

export default textTypesHandlers
