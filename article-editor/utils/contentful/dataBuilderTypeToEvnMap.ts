import IStringJson from "../../types/utils/contentful/IStringJson"
import {
  DATA_BUILDER_PAGE_STRUCTURE,
  DATA_BUILDER_SLATE_STRUCTURE,
} from "../../types/utils/contentful/CRUDArticlesTypes"

const environmentType = process.env.NEXT_PUBLIC_CONTENTFUL_PAGE_STRUCTURE_TYPE_ID as string
const environmentSlateType = process.env.NEXT_PUBLIC_CONTENTFUL_SLATE_PAGE_STRUCTURE_TYPE_ID as string

const dataBuilderTypeToEvnMap: IStringJson = {
  [DATA_BUILDER_PAGE_STRUCTURE]: environmentType,
  [DATA_BUILDER_SLATE_STRUCTURE]: environmentSlateType,
}

export default dataBuilderTypeToEvnMap
