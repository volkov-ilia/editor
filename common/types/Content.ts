// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Content {
  export type HistoryItem = {
    status: string
    source: string
    version: string
    date: Date
    name: string
    slug: string
  }

  export type SourceItem = {
    source: string
    slug: string
    version: string
  }

  export interface Card {
    idCard?: string
    documentFormatVersion: string
    title: string
    tags: string[]
    history: HistoryItem[]
    imgSrc?: string
    description?: string
    note?: string
    resources: SourceItem[]
  }

  export interface MongoCard {
    _id: string
    documentFormatVersion: string
    title: string
    tags: string[]
    history: HistoryItem[]
    imgSrc?: string
    description?: string
    note?: string
    resources: SourceItem[]
  }

  export interface Article {
    formDataSlateStructure: FormDataSlateStructureType
  }

  export interface FormDataSlateStructureType {
    contentfulFieldsType: string
    json: string
    form: PageFields
    path: string
    slug: string
  }

  export interface PageFields {
    slug: string
    path: string
    title: string
    description?: string
    keywords?: string
    previewImage: string
    bgImage: string
    authors: string
    firstLineLastSymbol?: string
    secondLineLastSymbol?: string
    tags: string
    readingTime: string
    publicationDate: string
    reviewCount?: string
    ratingValue?: string
    worstRating?: string
    bestRating?: string
    theme?: string
    effect?: string
    primaryButtonText?: string
    primaryButtonLink?: Link
    primaryButtonTitle?: string
    primaryButtonAction?: string
    primaryButtonActionArgs?: object
    arrowButtonText?: string
    arrowButtonLink: Link
    labelPrimaryText: string
    labelUsualText: string
    labelPrimaryLink?: Link
    labelUsualLink?: Link
  }

  export type Link = {
    href?: string
    linkTitle?: string
  }

  export interface LocalStorageCardType {
    ru?: LocalStorageArticleType
    en?: LocalStorageArticleType
    vk?: LocalStorageArticleType
    dz?: LocalStorageArticleType
  }

  export interface LocalStorageArticleType {
    formDataSlateStructure: FormDataSlateStructureType
    version: string
  }
}

export default Content
