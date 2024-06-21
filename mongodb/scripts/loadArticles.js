// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs")
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { logger } = require("../dist/common/logs/utils/logger.js")
// eslint-disable-next-line @typescript-eslint/no-var-requires
const getCreatedCollection = require("./getCreatedCollection")
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cards = require("../dist/API/src/cards/schemas/cards.schemas.js")

const colName = "cards"
const colSchema = cards.CardSchema
const fPath = "./resultCards.json"
const options = "utf8"

createCardCollectionAndLoadData(colName, colSchema, fPath)

async function createCardCollectionAndLoadData(collectionName, collectionSchema, filePath) {
  try {
    let data = JSON.parse(readArticles(filePath))
    const card = await getCreatedCollection(collectionName, collectionSchema, { tags: 1 }, logger)
    await card.insertMany(data)
    logger.info(`Data has been inserted into the cards collection.`)
  } catch (error) {
    logger.error(error.message)
  }
}

function readArticles(path) {
  try {
    return fs.readFileSync(path, options)
  } catch (error) {
    logger.error(error)
  }
}
