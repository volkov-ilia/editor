import { Injectable } from "@nestjs/common"
import IConverterBuilder from "../types/IConverterBuilder"
import VkBuilder from "../builders/Vk/VkBuilder"
import Content from "../../../common/types/Content"
import Vk from "../types/Vk"
import { SlateComponent } from "../types/SlateComponent"
import ContentfulPreparer from "../preparers/ContentfulPreparer"
import ContentfulBuilder from "../builders/Contentful/ContentfulBuilder"
import { decode } from "jsonwebtoken"
import VKPreparer from "../preparers/VKPreparer"
import { PublishRepository } from "./publsih.repository"
import { client } from "@hwdtech/api-requests"
import HwdtechSitePreparer from "../preparers/HwdtechSitePreparer"
import axios from "axios"

@Injectable()
export class PublishService {
  constructor(private readonly publishRepository: PublishRepository) {
    this.createArticleOnContentful = this.createArticleOnContentful.bind(this)
    this.publishingOnVk = this.publishingOnVk.bind(this)
    this.createArticleOnHwdtechSite = this.createArticleOnHwdtechSite.bind(this)
  }

  private async getArticleFromDb(id: string, userToken: string) {
    return await client
      .sendReq("API", "articles", {
        reqType: "get",
        config: {
          params: {
            idArticle: id,
          },
          headers: {
            Cookie: `internal_token=${userToken};`,
          },
        },
      })
      .then((res) => {
        return res.data
      })
  }

  private async savePublishHistory(
    idArticle: string,
    source: string,
    name: string,
    publishTime: number,
    version: string,
    status: string
  ) {
    await this.publishRepository.savePublishHistory(idArticle, source, name, publishTime, version, status)
  }

  getPublishHistory(idArticles) {
    return this.publishRepository.getPublishHistory(idArticles)
  }

  async createArticleOnContentful(id: string, userToken: string, source: string, publishTime: number, version: string) {
    const articleFromDB: Content.Article = await this.getArticleFromDb(id, userToken)
    const convertedArticle = await this.articleToPageStructure(articleFromDB)
    const entryId = await ContentfulPreparer.postAnArticleOnContentful(
      articleFromDB.formDataSlateStructure,
      convertedArticle,
      source
    )
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const userName: string = decode(userToken).name
    if (publishTime > new Date().valueOf()) {
      await client.sendReq("schedule-service", "new", {
        reqType: "post",
        body: {
          time: publishTime,
          payload: {
            service: "publish-service",
            action: "publish/setPublishStatusOnContentful",
            data: {
              reqType: "post",
              body: {
                idArticle: id,
                source,
                entryId,
                publishTime,
                version,
                status: "published",
              },
            },
          },
        },
        config: {
          headers: {
            Cookie: `internal_token=${userToken};`,
          },
        },
      })
      await this.savePublishHistory(id, source, userName, publishTime, version, "availableForPublication")
    }
    if (publishTime <= new Date().valueOf()) {
      await this.publishingOnContentful(id, source, userName, publishTime, version, entryId)
    }
  }

  async publishingOnContentful(
    idArticle: string,
    source: string,
    userName: string,
    publishTime: number,
    version: string,
    entryId: string
  ) {
    ContentfulPreparer.contentfulConnect(source)
      .then((environment) => environment.getEntry(entryId))
      .then((entry) => entry.publish())
    await this.savePublishHistory(idArticle, source, userName, publishTime, version, "published")
  }

  async createArticleOnHwdtechSite(
    id: string,
    userToken: string,
    source: string,
    publishTime: number,
    version: string
  ) {
    const articleFromDB: Content.Article = await this.getArticleFromDb(id, userToken)
    const convertedArticle = await this.articleToPageStructure(articleFromDB)
    console.log("convertedArticle", convertedArticle)
    const articleForHwdtechSite = HwdtechSitePreparer.postAnArticleOnHwdtechSite(
      articleFromDB.formDataSlateStructure,
      convertedArticle
    )
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const userName: string = decode(userToken).name
    if (publishTime > new Date().valueOf()) {
      await client.sendReq("schedule-service", "new", {
        reqType: "post",
        body: {
          time: publishTime,
          payload: {
            service: "publish-service",
            action: "publish/publishOnHwdtechSite",
            data: {
              reqType: "post",
              body: {
                idArticle: id,
                source,
                articleForHwdtechSite,
                publishTime,
                version,
                status: "published",
              },
            },
          },
        },
        config: {
          headers: {
            Cookie: `internal_token=${userToken};`,
          },
        },
      })
      await this.savePublishHistory(id, source, userName, publishTime, version, "availableForPublication")
    }
    if (publishTime <= new Date().valueOf()) {
      await this.publishOnHwdtechSite(id, source, userName, publishTime, version, articleForHwdtechSite)
    }
  }

  async publishOnHwdtechSite(
    idArticle: string,
    source: string,
    userName: string,
    publishTime: number,
    version: string,
    articleForHwdtechSite
  ) {
    await axios.post("https://test1.hwdtech.ru/api/saveArticles", articleForHwdtechSite)
    await this.savePublishHistory(idArticle, source, userName, publishTime, version, "published")
  }

  async articleToPageStructure(articleFromDB: Content.Article) {
    const json = JSON.parse(articleFromDB.formDataSlateStructure.json)
    json.unshift({ type: "BGTitle" })
    articleFromDB.formDataSlateStructure.json = JSON.stringify(json)
    const jsonArticle: Content.FormDataSlateStructureType = articleFromDB.formDataSlateStructure
    return {
      ...this.convert(ContentfulBuilder, jsonArticle),
      articleData: articleFromDB.formDataSlateStructure.form,
    }
  }

  async publishingOnVk(id: string, userToken: string, source: string, publishTime: number, version: string) {
    try {
      const articleFromDB: Content.Article = await this.getArticleFromDb(id, userToken)
      const articleFromDBJson: Content.FormDataSlateStructureType = articleFromDB.formDataSlateStructure
      const convertedArticle: Vk.ArticleConverted = this.convert(VkBuilder, articleFromDBJson)
      const uploadServer = await VKPreparer.getWallUploadServer()
      const sendImgsToVKServerRes: Vk.SendImgToVKServerRes[] = await VKPreparer.sendImgsToVKServer(
        uploadServer,
        convertedArticle.imgs
      )
      const saveWallPhotosRes: Vk.SaveWallPhotoRes[] = await VKPreparer.saveWallPhotos(sendImgsToVKServerRes)
      await VKPreparer.wallPost(convertedArticle.text, saveWallPhotosRes, publishTime)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const userName: string = decode(userToken).name
      this.savePublishHistory(id, source, userName, publishTime, version, "availableForPublication")
    } catch {
      throw new Error("Failed to publish article")
    }
  }

  private convert(builder: IConverterBuilder, article: Content.FormDataSlateStructureType) {
    const componentsMap = {
      ArticleText: builder.ArticleTextHandler,
      GrayBlockWithText: builder.GrayBlockWithTextHandler,
      ImageCarousel: builder.ImageCarouselHandler,
      TwoImagesWithText: builder.TwoImagesWithTextHandler,
      TextWithGreenLine: builder.TextWithGreenLineHandler,
      Separator: builder.SeparatorHandler,
      ImageColumnWithText: builder.ImageColumnWithTextHandler,
      ArticleYoutube: builder.ArticleYoutubeHandler,
      Quote: builder.QuoteHandler,
      CodeSnippet: builder.CodeSnippetHandler,
      ImageWithSize: builder.ImageWithSizeHandler,
      Code: builder.CodeHandler,
      BGTitle: builder.BGTitleHandler,
    }
    builder.reset()
    JSON.parse(article.json).forEach((component) => {
      componentsMap[component.type](component, article.form)
    })
    return builder.getResult
  }
}
