import PageStructureBuilderProps from "../../../types/utils/contentful/PageStructureBuilderProps"

const pageStructureBuilder = ({ pageId, slug, path, json, publicationDate }: PageStructureBuilderProps) => ({
  fields: {
    pageId: {
      "en-US": pageId,
    },
    slug: {
      "en-US": slug,
    },
    path: {
      "en-US": path,
    },
    json: {
      "en-US": json,
    },
    publicationDate: {
      "en-US": publicationDate,
    },
  },
})

export default pageStructureBuilder
