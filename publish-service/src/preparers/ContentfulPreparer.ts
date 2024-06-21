import Contentful from "../types/Contentful"
import Content from "../../../common/types/Content"
import * as ContentfulApi from "contentful-management"
import { HttpException, HttpStatus } from "@nestjs/common"

class ContentfulPreparer {
  public static async postAnArticleOnContentful(
    formDataSlateStructure: Content.FormDataSlateStructureType,
    convertedArticle: Contentful.ArticleConverted,
    source: string
  ) {

    const contentful = await this.contentfulConnect(source)
    if (!contentful) {
      throw new HttpException(`Не получилось получить окружение Contentful :(`, HttpStatus.INTERNAL_SERVER_ERROR)
    }

    const createArticleOnContentful = await contentful.createEntry(process.env.CONTENTFUL_PAGE_STRUCTURE_TYPE_ID, {
      fields: {
        pageId: {
          "en-US": formDataSlateStructure.form.title,
        },
        slug: {
          "en-US": formDataSlateStructure.slug,
        },
        id: {
          "en-US": formDataSlateStructure.slug,
        },
        path: {
          "en-US": formDataSlateStructure.form.path,
        },
        json: {
          "en-US": convertedArticle,
        },
      },
    })

    if (!createArticleOnContentful) {
      throw new HttpException(`Не получилось создать статью на контентфуле :(`, HttpStatus.INTERNAL_SERVER_ERROR)
    }

    return createArticleOnContentful.sys.id
  }

  public static async contentfulConnect(source) {
    const env = {
      ru: [process.env.CONTENTFUL_ACCESS_TOKEN_RU, process.env.CONTENTFUL_SPACE_ID_RU],
      en: [process.env.CONTENTFUL_ACCESS_TOKEN_EN, process.env.CONTENTFUL_SPACE_ID_EN],
    }
    const space = await ContentfulApi.createClient({
      accessToken: env[source][0],
    }).getSpace(env[source][1])

    if (!space) {
      throw new HttpException(`Не удалось получить доступ до contentful :(`, HttpStatus.INTERNAL_SERVER_ERROR)
    }

    return await space.getEnvironment(process.env.CONTENTFUL_ENVIROMENT_ID)
  }
}

export default ContentfulPreparer
