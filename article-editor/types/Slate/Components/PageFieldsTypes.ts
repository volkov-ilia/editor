export type PageFieldsTypes = {
  slug: LocalStringType
  path: LocalStringType
  title: LocalStringType
  description?: LocalStringType
  keywords?: LocalStringType
  previewImage: LocalStringType
  bgImage: LocalStringType
  authors: LocalStringType
  firstLineLastSymbol?: LocalStringType
  secondLineLastSymbol?: LocalStringType
  tags: LocalStringType
  readingTime: LocalStringType
  publicationDate: LocalStringType
  reviewCount?: LocalStringType
  ratingValue?: LocalStringType
  worstRating?: LocalStringType
  bestRating?: LocalStringType
  theme?: LocalStringType
  effect?: LocalStringType
  primaryButtonText?: LocalStringType
  primaryButtonLink?: LocalLinkType
  primaryButtonTitle?: LocalStringType
  primaryButtonAction?: LocalStringType
  primaryButtonActionArgs?: LocalRecordType
  arrowButtonText?: LocalStringType
  arrowButtonLink: LocalLinkType
  labelPrimaryText: LocalStringType
  labelUsualText: LocalStringType
  labelPrimaryLink?: LocalLinkType
  labelUsualLink?: LocalLinkType
}

export type LocalStringType = string
type LocalRecordType = Record<string, string>
type LocalLinkType = {
  href?: string
  linkTitle?: string
}

export type PageFields = keyof PageFieldsTypes
export type PageFieldsNestedTypes = LocalStringType | LocalRecordType | LocalLinkType
