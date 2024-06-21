/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require("mongoose")
const createCollection = require("./createCollection")

const database = process.env.API_DB_NAME
const user = process.env.API_DB_USER
const password = process.env.API_DB_PSWD

const statusConnected = 1

async function databaseShouldHaveCollection(collectionName, errorHandler) {
  const collectionsNames = []
  const databaseNames = []
  await mongoose.connect(`mongodb://${user}:${password}@localhost:27017/${database}`)
  const status = mongoose.connection.readyState
  if (status !== statusConnected) {
    throw new Error(`Connection status is ${status}. Expected status ${statusConnected}(connected)`)
  }
  mongoose.connection.on("error", (error) => {
    errorHandler(error.message)
  })
  const dbNames = await mongoose.connection.db.admin().listDatabases()
  dbNames.databases.forEach((dbName) => {
    databaseNames.push(dbName.name)
  })
  const names = await mongoose.connection.db.listCollections().toArray()
  names.forEach((col) => {
    collectionsNames.push(col.name)
  })
  if (!databaseNames.includes(database)) {
    throw new Error(`DBName: '${database}', ErrorMessage: Database '${database}' is not exist`)
  }
  if (!collectionsNames.includes(collectionName)) {
    throw new Error(`Collection with name '${collectionName}' doesnt exist`)
  }
}

async function getCreatedCollection(collectionName, schema, indexesOptions, logger) {
  try {
    await databaseShouldHaveCollection(collectionName, logger.error)
    logger.info(`Connected to database '${database}'`)
    const card = await createCollection(collectionName, schema, indexesOptions)
    logger.info(`Created index tags for collection ${collectionName}. By tags there is a search.`)
    return card
  } catch (error) {
    logger.error(error.message)
  }
}

module.exports = getCreatedCollection
