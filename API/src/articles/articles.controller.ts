import { Controller, Get, Head, HttpStatus, Post, Query, Req, Res, UseGuards } from "@nestjs/common"
import { ArticlesService } from "./articles.service"
import { Roles, RolesGuard } from "@hwdtech/roles-guard"
import { Role } from "../roles/rolesList"
import { AuthGuard } from "@nestjs/passport"
import { Request, Response } from "express"
import { CardsService } from "../cards/cards.service"
import { PayloadInternalTokenDto } from "../types/payload-internal-token.dto"

@Controller(`${process.env.API_VERSION}/${process.env.API_ARTICLES}`)
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService, private readonly cardsService: CardsService) {}

  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.ContentEditor)
  @Post("/save")
  async createOrUpdateArticle(@Req() request: Request) {
    const decodedPayload = (await this.articlesService.decodeJWTPayload(
      request.cookies.internal_token
    )) as PayloadInternalTokenDto
    return this.articlesService.saveArticleAndUpdateCardInDatabase(
      request.body.idCard,
      request.body.source,
      request.body.article,
      decodedPayload.name
    )
  }

  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.ContentEditor)
  @Head()
  async compareArticlesVersions(
    @Query() query,
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request
  ) {
    const card = await this.cardsService.getCardById(query.idCard)
    const resource = card.resources.find((item) => item.source === query.source)
    if (resource === undefined || request.headers["if-none-match"] === resource.version) {
      response.status(HttpStatus.NOT_MODIFIED)
    } else {
      response.status(HttpStatus.OK)
    }
    response.set({
      eTag: resource?.version,
    })
    return
  }

  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.ContentEditor)
  @Get()
  async getArticle(@Query() query) {
    return this.articlesService.getArticleById(query.idArticle)
  }
}
