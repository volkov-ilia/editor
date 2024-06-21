import { MongooseModule } from "@nestjs/mongoose"
import { CardSchema } from "./cards/schemas/cards.schemas"
import { ArticleSchema } from "./articles/schemas/articles.schemas"

export const dbModule = MongooseModule

export const CardDBModule = dbModule.forFeature([
  {
    name: "Card",
    schema: CardSchema,
  },
])

export const ArticleDBModule = dbModule.forFeature([
  {
    name: "Article",
    schema: ArticleSchema,
  },
])
