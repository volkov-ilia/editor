import { MongooseModule } from "@nestjs/mongoose"
import { PublishHistorySchema } from "./publish/schemas/publish.schemas"

export const dbModule = MongooseModule

export const PublishDBModule = dbModule.forFeature([
  {
    name: "PublishHistory",
    schema: PublishHistorySchema,
  },
])
