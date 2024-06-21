import imageDataBuilder from "./imageDataBuilder"
import IDataBuilderMap from "../../../types/utils/contentful/IDataBuilderMap"
import pageStructureBuilder from "./pageStructureBuilder"
import slateStructureBuilder from "./slateStructureBuilder"
import {
  DATA_BUILDER_IMAGE,
  DATA_BUILDER_PAGE_STRUCTURE,
  DATA_BUILDER_SLATE_STRUCTURE,
} from "../../../types/utils/contentful/CRUDArticlesTypes"

const map: IDataBuilderMap = {
  [DATA_BUILDER_IMAGE]: imageDataBuilder,
  [DATA_BUILDER_PAGE_STRUCTURE]: pageStructureBuilder,
  [DATA_BUILDER_SLATE_STRUCTURE]: slateStructureBuilder,
}

export default map
