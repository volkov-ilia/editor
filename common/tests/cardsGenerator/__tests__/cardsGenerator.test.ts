import { describe, test } from "@jest/globals"
import CardsGenerator from "../src/CardsGenerator"
import defaults from "../src/defaults"
import pad from "../utils/pad"
import randomInt from "../utils/randomInt"
import uniqueId from "../utils/uniqueId"

/* eslint-disable  @typescript-eslint/no-explicit-any */
const checkNotEmptyString = (s: any) => {
  if (typeof s === "string") {
    return s.length !== 0
  }
  return false
}

const TYPE = "type1"

describe(`utils pad, randomInt, uniqueId`, () => {
  test(`pad. generate string with 100 len`, () => {
    const str = "str"
    const len = 100
    const result = pad(str, len)

    expect(checkNotEmptyString(result)).toBeTruthy()
    expect(result.length).toEqual(len)
  })
  test(`pad. with repeat pad string`, () => {
    const str = "str"
    const len = 10000
    const result = pad(str, len)

    expect(checkNotEmptyString(result)).toBeTruthy()
    expect(result.length).toEqual(len)
  })
  test(`pad. check correct start of string`, () => {
    const str = "str"
    const result = pad(str, 10) as string

    expect(checkNotEmptyString(result)).toBeTruthy()
    expect(result.indexOf(str) === 0).toBeTruthy()
  })

  test(`randomInt. 0 >= x > 2`, () => {
    const max = 1
    const result = randomInt(max)

    expect(result).toBeLessThan(max)
  })

  test(`uniqueId. Generate id with len 10`, () => {
    const len = 10
    const result = uniqueId(len)

    expect(checkNotEmptyString(result)).toBeTruthy()
    expect(result.length).toEqual(len)
  })

  test(`uniqueId. Generate id`, () => {
    const len = 6
    const result = uniqueId()

    expect(checkNotEmptyString(result)).toBeTruthy()
    expect(result.length).toEqual(len)
  })
})

describe(`get methods`, () => {
  const generator = new CardsGenerator(TYPE)
  test(`generate 1 valid item HISTORY (only item with status 'created')`, () => {
    const result = generator.getHistory()

    expect(result.length).toEqual(1)
    expect(result[0].status).toEqual("created")
    expect(result[0].date.getDay()).not.toBeNaN()
  })
  test(`generate 2 valid items HISTORY (first and only one item with status 'created' and others with 'changed')`, () => {
    const result = generator.getHistory(2)

    expect(result.length).toEqual(2)
    expect(result[0].status).toEqual("created")
    expect(result[0].date.getDay()).not.toBeNaN()
    expect(result[1].status).toEqual("changed")
    expect(result[1].date.getDay()).not.toBeNaN()
  })

  test(`generate IMAGE URL`, () => {
    const result = generator.getImageUrl()

    expect(checkNotEmptyString(result)).toBeTruthy()
  })

  test(`generate TEXT (lorem ipsum string with default len)`, () => {
    const defaultLen = 90
    const result = generator.getText()

    expect(checkNotEmptyString(result)).toBeTruthy()
    expect(result.length).toEqual(defaultLen)
  })
  test(`generate TEXT (lorem ipsum string with CUSTOM=1)`, () => {
    const defaultLen = 1
    const result = generator.getText(defaultLen)

    expect(checkNotEmptyString(result)).toBeTruthy()
    expect(result.length).toEqual(defaultLen)
  })
  test(`generate TEXT (lorem ipsum string with CUSTOM=45)`, () => {
    const defaultLen = 45
    const result = generator.getText(defaultLen)

    expect(checkNotEmptyString(result)).toBeTruthy()
    expect(result.length).toEqual(defaultLen)
  })
  test(`generate TEXT (lorem ipsum string with CUSTOM=135)`, () => {
    const defaultLen = 135
    const result = generator.getText(defaultLen)

    expect(checkNotEmptyString(result)).toBeTruthy()
    expect(result.length).toEqual(defaultLen)
  })

  test(`generate 1 valid item RESOURCES`, () => {
    const result = generator.getResources()

    expect(checkNotEmptyString(result[0].source)).toBeTruthy()
    expect(checkNotEmptyString(result[0].slug)).toBeTruthy()
  })
  test(`generate 2 valid items RESOURCES`, () => {
    const result = generator.getResources(2)

    expect(checkNotEmptyString(result[0].source)).toBeTruthy()
    expect(checkNotEmptyString(result[0].slug)).toBeTruthy()

    expect(checkNotEmptyString(result[1].source)).toBeTruthy()
    expect(checkNotEmptyString(result[1].slug)).toBeTruthy()
  })

  test(`generate 1 items TAGS (tags array contains type)`, () => {
    const result = generator.getTags()

    expect(result.indexOf(TYPE) !== -1).toBeTruthy()
  })
  test(`generate 2 items TAGS (first and only one item is a type and others are tags)`, () => {
    const len = 2
    const result = generator.getTags(len)

    expect(result.indexOf(TYPE) !== -1).toBeTruthy()
    expect(result.length).toEqual(len)
  })

  test(`generate VERSION`, () => {
    const result = generator.getDocumentFormatVersion()

    expect(checkNotEmptyString(result)).toBeTruthy()
    expect(result.match(/\d{1,2}\.\d{1,2}\.\d{1,2}/)).toBeTruthy()
  })

  test(`generate TITLE with default len`, () => {
    const id = "myId"
    const result = generator.getTitle(id)

    expect(checkNotEmptyString(result)).toBeTruthy()
    expect(result.length).toEqual(11)
  })
  test(`generate TITLE with custom len`, () => {
    const id = "myId"
    const len = 21
    const result = generator.getTitle(id, len)

    expect(checkNotEmptyString(result)).toBeTruthy()
    expect(result.length).toEqual(len)
  })
})

describe(`create card`, () => {
  const generator = new CardsGenerator(TYPE)
  test(`Check correct card structure with DEFAULT values`, () => {
    const result = generator.createCard()

    expect(result.history).toBeTruthy()
    expect(result.tags).toBeTruthy()
    expect(result.resources).toBeTruthy()
    expect(result.note).toBeTruthy()
    expect(result.imgSrc).toBeTruthy()
    expect(result.description).toBeTruthy()
    expect(result.documentFormatVersion).toBeTruthy()
    expect(result.title).toBeTruthy()
  })

  test(`Check correct card structure with CUSTOM values`, () => {
    const sizes = {
      historySize: 5,
      tagsSize: 3,
      titleLen: 21,
      resourcesSize: 2,
      descriptionLen: 50,
      noteLen: 120,
    }
    const result = generator.createCard(sizes)

    expect(result.history.length).toEqual(sizes.historySize)
    expect(result.tags.length).toEqual(sizes.tagsSize)
    expect(result.resources.length).toEqual(sizes.resourcesSize)
    expect(result.title.length).toEqual(sizes.titleLen)
    expect(result.description.length).toEqual(sizes.descriptionLen)
    expect(result.note.length).toEqual(sizes.noteLen)
  })
})

describe(`generate method`, () => {
  const generator = new CardsGenerator(TYPE)
  test(`Check DEFAULT cards array size`, () => {
    const defaultSize = 10
    const result = generator.generate()
    expect(result.length).toEqual(defaultSize)
  })

  test(`Check CUSTOM=1 cards array size`, () => {
    const sizes = { size: 1 }
    const result = generator.generate(sizes)

    expect(result.length).toEqual(sizes.size)
  })

  test(`Check CUSTOM=20 cards array size`, () => {
    const sizes = { size: 20 }
    const result = generator.generate(sizes)

    expect(result.length).toEqual(sizes.size)
  })
})

describe(`class CardsGenerator constructor`, () => {
  test(`Change slugs in constructor`, () => {
    const params = { slugs: ["slug1"] }
    const result = new CardsGenerator("type", params)

    expect(result.slugs).toEqual(params.slugs)
  })

  test(`Change type changeType`, () => {
    const type = "type2"
    const result = new CardsGenerator("type1")

    result.changeType(type)
    expect(result.type).toEqual(type)
  })

  test(`Change slugs changeData`, () => {
    const params = { slugs: ["slug1"] }
    const result = new CardsGenerator("type1")

    result.changeData(params)
    expect(result.slugs).toEqual(params.slugs)
    expect(result.tags).toEqual(defaults.tags)
    expect(result.images).toEqual(defaults.images)
    expect(result.sources).toEqual(defaults.sources)
  })

  test(`Reset data`, () => {
    const params = { slugs: ["slug1"] }
    const result = new CardsGenerator("type1", params)

    result.resetData()
    expect(result.slugs).toEqual(defaults.slugs)
  })
})
