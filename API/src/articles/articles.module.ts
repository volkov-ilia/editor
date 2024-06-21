import { Module } from "@nestjs/common"
import { ArticlesController } from "./articles.controller"
import { ArticlesService } from "./articles.service"
import { ArticlesRepository } from "./articles.repsitory"
import { CardsModule } from "../cards/cards.module"
import { ArticleDBModule, CardDBModule } from "../dbModules"

@Module({
  imports: [CardsModule, ArticlesModule, CardDBModule, ArticleDBModule],
  controllers: [ArticlesController],
  providers: [ArticlesService, ArticlesRepository],
})
export class ArticlesModule {}
