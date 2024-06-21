import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query, UseGuards } from "@nestjs/common"
import { Card } from "./schemas/cards.schemas"
import { routes } from "./cards.routes"
import { AuthGuard } from "@nestjs/passport"
import { Role } from "../roles/rolesList"
import { Roles, RolesGuard } from "@hwdtech/roles-guard"
import { getCardsQueryType } from "./cards.types"
import { CardsService } from "./cards.service"
import { ReqParams } from "../utils/ReqParams"

@Controller(`${process.env.API_VERSION}/${routes.cardsRoute}`)
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.ContentViewer)
  @Get(":contentType/")
  async getCards(
    @Param("contentType") contentType: string,
    @Query() query: getCardsQueryType
  ): Promise<{ cards: Card[] }> {
    if (!query.page) {
      query.page = 1
    }
    if (!query.count) {
      query.count = 10
    }
    try {
      ReqParams.pageShouldBeANumberAndGreatThanZero(query.page)
      ReqParams.countShouldBeANumberAndBetweenZeroAnd100(query.count)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
    return this.cardsService.getCards(contentType, query)
  }

  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.ContentEditor)
  @Post("/new")
  async saveCard(@Body() body) {
    return this.cardsService.saveCard(body.params)
  }

  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.ContentEditor)
  @Get()
  async getCard(@Query() query) {
    return this.cardsService.getCardById(query.idCard)
  }

  @Post()
  async updateArticleStatusFromCard(@Body() body) {
    return this.cardsService.updateArticleStatusFromCard(body.idArticle, body.source, body.name, body.status)
  }
}
