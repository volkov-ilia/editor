// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require("mongoose")

async function createCollection(collectionName, schema, indexesOptions) {
  const Collection = mongoose.model(collectionName, schema)
  await Collection.createIndexes(indexesOptions)
  return Collection
}
module.exports = createCollection
