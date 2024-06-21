import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common"
import { PublishService } from "./publish.service"
import { Roles, RolesGuard } from "@hwdtech/roles-guard"
import { Role } from "../roles/rolesList"
import { AuthGuard } from "@nestjs/passport"

@Controller(`${process.env.API_VERSION}/publish`)
export class PublishController {
  constructor(private readonly publishService: PublishService) {}

  private platformPublishers = {
    ru: this.publishService.createArticleOnHwdtechSite,
    en: this.publishService.createArticleOnContentful,
    vk: this.publishService.publishingOnVk,
  }

  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.ContentScheduler, Role.ContentEditor)
  @Post()
  publishArticle(
    @Body("idArticle") idArticle: string,
    @Body("source") source: string,
    @Body("publishTime") publishTime: number,
    @Body("version") version: string,
    @Req() request
  ) {
    return this.platformPublishers[source](idArticle, request.cookies["internal_token"], source, publishTime, version)
  }

  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.ContentScheduler, Role.ContentEditor)
  @Post("getPublishHistory")
  async getPublishHistory(@Body("idArticles") idArticles) {
    return await this.publishService.getPublishHistory(idArticles)
  }

  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.ContentScheduler, Role.ContentEditor)
  @Post("setPublishStatusOnContentful")
  setPublishStatusOnContentful(
    @Body("idArticle") idArticle: string,
    @Body("source") source: string,
    @Body("name") name: string,
    @Body("publishTime") publishTime: number,
    @Body("version") version: string,
    @Body("entryId") entryId: string
  ) {
    return this.publishService.publishingOnContentful(idArticle, source, name, publishTime, version, entryId)
  }

  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.ContentScheduler, Role.ContentEditor)
  @Post("publishOnHwdtechSite")
  publishOnHwdtechSite(
    @Body("idArticle") idArticle: string,
    @Body("source") source: string,
    @Body("name") name: string,
    @Body("publishTime") publishTime: number,
    @Body("version") version: string,
    @Body("articleForHwdtechSite") articleForHwdtechSite
  ) {
    return this.publishService.publishOnHwdtechSite(
      idArticle,
      source,
      name,
      publishTime,
      version,
      articleForHwdtechSite
    )
  }
}
