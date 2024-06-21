import Content from "../../common/types/Content"

export const formatResources = (resources: Content.SourceItem[]) => {
  const formatResources = new Map()
  resources.map((source) => {
    formatResources.set(source.source, { slug: source.slug, version: source.version })
  })
  return formatResources
}
