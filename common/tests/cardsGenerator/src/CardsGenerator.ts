import uniqueId from "../utils/uniqueId"
import randomInt from "../utils/randomInt"
import pad from "../utils/pad"
import Content from "../../../types/Content"
import CardCreatingProps from "../types/CardCreatingProps"
import CardGeneratorProps from "../types/CardGeneratorProps"
import defaults from "./defaults"

/**
 * Cards testing data generator.
 */
class CardsGenerator {
  images: string[]
  slugs: string[]
  sources: string[]
  tags: string[]
  type: string

  /**
   * Defining generate cards data.
   * @param type - types for all cards
   * @param defaultData - data to generate cards
   * @param {string[]} [defaultData.types=[resume,document]] - To choose type from
   * @param {string[]} [defaultData.images=array_21_size] - To choose image from
   * @param {string[]} [defaultData.slugs=array_21_size] - To choose slugs from
   * @param {string[]} [defaultData.sources=array_21_size] - To choose sources from
   * @param {string[]} [defaultData.tags=array_21_size] - To choose tags from
   */
  constructor(type: string, defaultData: Partial<CardGeneratorProps> = defaults) {
    const data = defaultData || {}
    const { images, slugs, sources, tags } = { ...defaults, ...data }
    this.images = images
    this.slugs = slugs
    this.sources = sources
    this.tags = tags
    this.type = type
  }

  /**
   * Change cards type
   * @param {string} [type] - cards type
   */
  changeType(type: string) {
    this.type = type
  }

  /**
   * Used to change generation data in existing class object.
   * @param {CardGeneratorProps} [data] - data to generate cards. All props are optional
   * @param {string[]} data.types - To choose type from
   * @param {string[]} data.images - To choose image from
   * @param {string[]} data.slugs - To choose slugs from
   * @param {string[]} data.sources - To choose sources from
   * @param {string[]} data.tags - To choose tags from
   */
  changeData(data: Partial<CardGeneratorProps>) {
    type CardGeneratorPropsTypes = keyof CardGeneratorProps
    for (const prop in data) {
      const propName = prop as CardGeneratorPropsTypes
      if (data[propName]) {
        this[propName] = data[propName] as string[]
      }
    }
  }

  /**
   * Used to reset generation data in existing class object to default values.
   */
  resetData() {
    const { images, slugs, sources, tags } = defaults
    this.images = images
    this.slugs = slugs
    this.sources = sources
    this.tags = tags
  }

  /**
   * Generated history array.
   * @param {number} [size=1] - The size of history array
   * @return history array.
   */
  getHistory(size = 1) {
    const createdAt = new Date()
    const createItem: Content.HistoryItem = {
      status: "created",
      date: createdAt,
      source: "",
      version: "",
      name: "",
      slug: "",
    }
    const result = [createItem]
    const genNewItem = (idx: number) => {
      const newDate = new Date()
      newDate.setFullYear(createdAt.getFullYear(), createdAt.getMonth(), createdAt.getDay() + idx)
      return {
        status: "changed",
        date: newDate,
      } as Content.HistoryItem
    }
    for (let idx = 1; idx < size; ++idx) {
      result.push(genNewItem(idx))
    }
    return result
  }

  /**
   * @return {string} random image link
   */
  getImageUrl() {
    return this.images[randomInt(this.images.length)]
  }

  /**
   * @param {number} [length=90] - The note string length
   * @return {string} certain length note string
   */
  getText(length = 90) {
    return pad("", length)
  }

  /**
   * Generated resources array.
   * @param {number} [size=1] - The size of resources array
   * @return resources array.
   */
  getResources(size = 1) {
    const genNewItem = () => {
      return {
        source: this.sources[randomInt(this.sources.length)],
        slug: this.slugs[randomInt(this.slugs.length)],
      } as Content.SourceItem
    }
    const result: Content.SourceItem[] = []
    for (let idx = 0; idx < size; ++idx) {
      result.push(genNewItem())
    }
    return result
  }

  /**
   * Generates title with certain length
   * @param {string} id - The unique id of card
   * @param {number} [length=11] - The title string length
   * @return {string} certain length title string
   */
  getTitle(id: string, length = 11) {
    return pad(`Card_${id}`, length)
  }

  /**
   * Generated tags array.
   * First item is always type of card.
   * The type is random generated.
   * @param {number} [size=1] - The size of tags array
   * @return {string[]} tags array.
   */
  getTags(size = 1) {
    const result = [this.type]
    for (let idx = 1; idx < size; ++idx) {
      result.push(this.tags[randomInt(this.tags.length)])
    }
    return result
  }

  /**
   * @return {string} random version with format '0.0.0'
   */
  getDocumentFormatVersion() {
    return `${randomInt(10)}.${randomInt(10)}.${randomInt(10)}`
  }

  /**
   * Creates a card with random value.
   * @param {number} params - The arrays sizes settings
   * @param {number} [params.historySize=1] - The count of history changes
   * @param {number} [params.resourcesSize=1] - The count of resources
   * @param {number} [params.tagsSize=1] - The count of tags
   * @param {number} [params.titleLen=11] - The title length
   * @param {number} [params.descriptionLen=90] - The description length
   * @param {number} [params.noteLen=90] - The note length
   * @return created card
   */
  createCard(params: CardCreatingProps = {}) {
    const { historySize, resourcesSize, tagsSize, titleLen, descriptionLen, noteLen } = params
    const id = uniqueId()
    const history = this.getHistory(historySize)
    const imgSrc = this.getImageUrl()
    const note = this.getText(noteLen)
    const resources = this.getResources(resourcesSize)
    const title = this.getTitle(id, titleLen)
    const tags = this.getTags(tagsSize)
    const description = this.getText(descriptionLen)
    const documentFormatVersion = this.getDocumentFormatVersion()
    return {
      history,
      imgSrc,
      note,
      resources,
      tags,
      title,
      description,
      documentFormatVersion,
    } as Content.Card
  }

  /**
   * Generated cards array with certain size.
   * @param params - contains all properties for this.createCard method and the size prop to set the result array size.
   * @param {number} [params.size=10] - The count of result array cards
   * @param {number} [params.historySize=1] - The count of history changes
   * @param {number} [params.resourcesSize=1] - The count of resources
   * @param {number} [params.tagsSize=1] - The count of tags
   * @param {number} [params.titleLen=11] - The title length
   * @param {number} [params.descriptionLen=90] - The description length
   * @param {number} [params.noteLen=90] - The note length
   * @return {Content.Card[]} cards array
   */
  generate(params: { size?: number } & CardCreatingProps = {}) {
    const { size = 10, ...cardCreatingProps } = params
    const result: Content.Card[] = []
    for (let i = 0; i < size; ++i) {
      result.push(this.createCard(cardCreatingProps))
    }
    return result
  }
}

export default CardsGenerator
