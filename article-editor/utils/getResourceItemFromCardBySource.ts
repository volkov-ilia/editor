import Content from "../../common/types/Content"

export function getResourceItemFromCardBySource(card: Content.Card, locale: string): Content.SourceItem | undefined {
  return card.resources.find((resource) => resource.source === locale)
}
