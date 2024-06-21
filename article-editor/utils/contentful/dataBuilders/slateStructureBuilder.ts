import PageStructureBuilderProps from "../../../types/utils/contentful/PageStructureBuilderProps"

const slateStructureBuilder = ({ pageId, slug, path, json, form }: PageStructureBuilderProps) => ({
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
    form: {
      "en-US": form,
    },
  },
})

export default slateStructureBuilder
