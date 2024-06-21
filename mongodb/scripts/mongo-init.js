print("Start #################################################################")

db = db.getSiblingDB(process.env.MONGO_ROOT_DATABASE)
db.createUser({
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
  roles: [{ role: "userAdminAnyDatabase", db: process.env.MONGO_ROOT_DATABASE }],
})

db = db.getSiblingDB(process.env.API_DB_NAME)
db.createUser({
  user: process.env.API_DB_USER,
  pwd: process.env.API_DB_PSWD,
  roles: [{ role: "readWrite", db: process.env.API_DB_NAME }],
})
db.createCollection("cards")
db.createCollection("articles")

db = db.getSiblingDB(process.env.PUBLISH_DB_NAME)
db.createUser({
  user: process.env.PUBLISH_DB_USER,
  pwd: process.env.PUBLISH_DB_PSWD,
  roles: [{ role: "readWrite", db: process.env.PUBLISH_DB_NAME }],
})
db.createCollection("statuses")

db = db.getSiblingDB(process.env.SCHEDULE_DB_NAME)
db.createUser({
  user: process.env.SCHEDULE_DB_USER,
  pwd: process.env.SCHEDULE_DB_PSWD,
  roles: [{ role: "readWrite", db: process.env.SCHEDULE_DB_NAME }],
})
db.createCollection("tasks")

print("END #################################################################")
