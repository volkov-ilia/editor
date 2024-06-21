/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Test } from "@nestjs/testing"
import { ArticlesController } from "./articles.controller"
import { ArticlesService } from "./articles.service"
import { ArticlesRepository } from "./articles.repsitory"
import { getConnectionToken, getModelToken } from "@nestjs/mongoose"
import { CardsRepository } from "../cards/cards.repository"
import { Card } from "../cards/schemas/cards.schemas"
import { Article } from "./schemas/articles.schemas"
import { CardsService } from "../cards/cards.service"
import Content from "../../../common/types/Content"
import { HttpException, HttpStatus } from "@nestjs/common"
import { Request, Response } from "express"
import * as jsonwebtoken from "jsonwebtoken"

let articleRepository: ArticlesRepository
let articlesService: ArticlesService
let articlesController: ArticlesController
let cardRepository: CardsRepository
let cardsService: CardsService

const cardIdReq = "card_id"
const sourceReq = "vk"
const articleReq: Content.Article = {
  formDataSlateStructure: {
    contentfulFieldsType: "string",
    json: "string",
    form: {
      slug: "string",
      path: "string",
      title: "string",
      previewImage: "string",
      bgImage: "string",
      authors: "string",
      tags: "string",
      readingTime: "string",
      publicationDate: "string",
      arrowButtonLink: {
        href: "string",
        linkTitle: "string",
      },
      labelPrimaryText: "string",
      labelUsualText: "string",
    },
    path: "string",
    slug: "string",
  },
}

const body = {
  idCard: cardIdReq,
  source: sourceReq,
  article: articleReq,
}
const cookies = {
  internal_token: {
    name: "name",
  },
}
const request = {
  body: body,
  cookies: cookies,
}
const articleIdRes = "article_id"

const savedArticle = {
  _id: articleIdRes,
  formDataPageStructure: {
    contentfulFieldsType: "string",
    json: "string",
    locale: "string",
    path: "string",
    slug: "string",
    publicationDate: "string",
  },
  formDataSlateStructure: {
    contentfulFieldsType: "string",
    json: "string",
    form: {
      slug: "string",
      path: "string",
      title: "string",
      previewImage: "string",
      bgImage: "string",
      authors: "string",
      tags: "string",
      readingTime: "string",
      publicationDate: "string",
      arrowButtonLink: {
        href: "string",
        linkTitle: "string",
      },
      labelPrimaryText: "string",
      labelUsualText: "string",
    },
    path: "string",
    slug: "string",
  },
}
const currentCardWithoutResources = {
  _id: cardIdReq,
  title: "string",
  tags: ["front-end", "it", "rich_text_editor", "slate"],
  imgSrc: "string",
  description: "string",
  note: "",
  history: [],
  documentFormatVersion: "1",
  resources: [],
}
const currentCardWithResources = {
  _id: cardIdReq,
  title: "title",
  tags: ["tag1", "tag2"],
  imgSrc: "",
  description: "description",
  note: "",
  history: [
    {
      status: "created",
      version: "001",
      source: "vk",
      date: new Date(),
    },
  ],
  documentFormatVersion: "1",
  resources: [
    {
      source: "vk",
      version: "001",
      slug: "article._id",
    },
  ],
}

const getArticleReq = {
  idArticle: "someArticleId",
}
const getArticleRes = {
  article: "article",
}

// @ts-ignore
// eslint-disable-next-line
const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  startSession: () => {
    const session = {
      startTransaction() {
        return null
      },
      commitTransaction() {
        return null
      },
      abortTransaction() {
        return null
      },
      endSession() {
        return null
      },
    }
    return session
  },
}))

beforeEach(async () => {
  const ArticlesModuleRef = await Test.createTestingModule({
    controllers: [ArticlesController],
    providers: [
      ArticlesService,
      ArticlesRepository,
      CardsRepository,
      CardsService,
      {
        provide: getConnectionToken("Database"),
        useFactory: repositoryMockFactory,
      },
      {
        provide: getModelToken("Article"),
        useValue: Article,
      },
      {
        provide: getModelToken("Card"),
        useValue: Card,
      },
    ],
  }).compile()
  articleRepository = ArticlesModuleRef.get<ArticlesRepository>(ArticlesRepository)
  articlesService = ArticlesModuleRef.get<ArticlesService>(ArticlesService)
  articlesController = ArticlesModuleRef.get<ArticlesController>(ArticlesController)
  cardRepository = ArticlesModuleRef.get<CardsRepository>(CardsRepository)
  cardsService = ArticlesModuleRef.get<CardsService>(CardsService)
})

describe("ArticlesController methods should return correct value", () => {
  it("ArticlesController.createArticle should return object with slug and articleId", async () => {
    jest.spyOn(articlesService, "decodeJWTPayload").mockImplementation(async (token: string) => {
      expect(token).toEqual(cookies.internal_token)
      return cookies.internal_token
    })
    jest
      .spyOn(articlesService, "saveArticleAndUpdateCardInDatabase")
      .mockImplementation(async (cardId: string, source: string, article: Content.Article, name: string) => {
        expect(cardId).toEqual(cardIdReq)
        expect(source).toEqual(sourceReq)
        expect(article).toEqual(articleReq)
        expect(name).toEqual(cookies.internal_token.name)
        return articleIdRes
      })
    expect(await articlesController.createOrUpdateArticle(request as Request)).toBe(articleIdRes)
  })
  it("ArticlesController.getArticle should return article", async () => {
    // @ts-ignore
    jest.spyOn(articlesService, "getArticleById").mockImplementation(async (idArticle) => {
      expect(idArticle).toEqual(getArticleReq.idArticle)
      return getArticleRes
    })
    expect(await articlesController.getArticle(getArticleReq)).toBe(getArticleRes)
  })
  describe("articlesController.compareArticlesVersions", () => {
    const response: Partial<Response> = {
      status: jest.fn(),
      set: jest.fn(),
    }
    it("should return 304 'not modified' if versions are equal", async () => {
      const query = {
        idCard: currentCardWithResources._id,
        source: currentCardWithResources.resources[0].source,
      }
      response.status = jest.fn().mockImplementation((code: number) => {
        expect(code).toBe(HttpStatus.NOT_MODIFIED)
        return code
      })

      const request = {
        headers: {
          "if-none-match": "001",
        },
      }
      // @ts-ignore
      jest.spyOn(cardsService, "getCardById").mockImplementation(async (idCard) => {
        expect(idCard).toEqual(currentCardWithResources._id)
        return currentCardWithResources
      })
      await articlesController.compareArticlesVersions(query, response as Response, request as Request)
    })
    it("should return 304 'not modified' if article doesn't exist in db", async () => {
      const query = {
        idCard: currentCardWithResources._id,
        source: currentCardWithResources.resources[0].source,
      }
      response.status = jest.fn().mockImplementation((code: number) => {
        expect(code).toBe(HttpStatus.NOT_MODIFIED)
        return code
      })
      const request = {
        headers: {
          "if-none-match": "001",
        },
      }
      // @ts-ignore
      jest.spyOn(cardsService, "getCardById").mockImplementation(async (idCard) => {
        expect(idCard).toEqual(currentCardWithResources._id)
        const newCard = JSON.parse(JSON.stringify(currentCardWithResources))
        newCard.resources = []
        return newCard
      })
      await articlesController.compareArticlesVersions(query, response as Response, request as Request)
    })
    it("should return 200 if db has updated version of an article", async () => {
      const query = {
        idCard: currentCardWithResources._id,
        source: currentCardWithResources.resources[0].source,
      }
      response.status = jest.fn().mockImplementation((code: number) => {
        expect(code).toBe(HttpStatus.OK)
        return code
      })
      const request = {
        headers: {
          "if-none-match": "001",
        },
      }
      // @ts-ignore
      jest.spyOn(cardsService, "getCardById").mockImplementation(async (idCard) => {
        expect(idCard).toEqual(currentCardWithResources._id)
        const newCard = JSON.parse(JSON.stringify(currentCardWithResources))
        newCard.resources[0].version = "002"
        return newCard
      })
      await articlesController.compareArticlesVersions(query, response as Response, request as Request)
    })
  })
})

describe("ArticlesService methods should return correct value", () => {
  it("articlesService.getArticleByIdAndSourceArticle should return article", async () => {
    // @ts-ignore
    jest.spyOn(articleRepository, "getArticle").mockImplementation(async (idArticle) => {
      expect(idArticle).toEqual(getArticleReq.idArticle)
      return getArticleRes
    })
    expect(await articlesService.getArticleById(getArticleReq.idArticle)).toBe(getArticleRes)
  })
  describe("saveArticleAndUpdateCardInDatabase tests", () => {
    it("ArticlesService.saveArticleAndUpdateCardInDatabase methods should return articleId and create article", async () => {
      // @ts-ignore
      jest.spyOn(articleRepository, "createOrUpdateArticle").mockImplementation(async (article: Content.Article) => {
        expect(article).toEqual(articleReq)
        return [savedArticle]
      })
      // @ts-ignore
      jest.spyOn(cardRepository, "getCard").mockImplementation(async (cardId) => {
        expect(cardId).toEqual(cardIdReq)
        return [currentCardWithoutResources]
      })
      // @ts-ignore
      jest.spyOn(cardRepository, "updateCard").mockImplementation(async (cardId, card) => {
        expect(cardId).toEqual(cardIdReq)
        expect(card).toEqual(currentCardWithoutResources)
      })
      expect(
        await articlesService.saveArticleAndUpdateCardInDatabase(
          cardIdReq,
          sourceReq,
          articleReq,
          cookies.internal_token.name
        )
      ).toEqual(articleIdRes)
    })
    it("ArticlesService.saveArticleAndUpdateCardInDatabase methods should return articleId and update article", async () => {
      // @ts-ignore
      jest.spyOn(articleRepository, "createOrUpdateArticle").mockImplementation(async (article: Content.Article) => {
        expect(article).toEqual(articleReq)
        return [savedArticle]
      })
      // @ts-ignore
      jest.spyOn(cardRepository, "getCard").mockImplementation(async (cardId) => {
        expect(cardId).toEqual(cardIdReq)
        return [currentCardWithResources]
      })
      // @ts-ignore
      jest.spyOn(cardRepository, "updateCard").mockImplementation(async (cardId, card) => {
        expect(cardId).toEqual(cardIdReq)
        expect(card).toEqual(currentCardWithResources)
      })
      expect(
        await articlesService.saveArticleAndUpdateCardInDatabase(
          cardIdReq,
          sourceReq,
          articleReq,
          cookies.internal_token.name
        )
      ).toEqual(articleIdRes)
    })
    it("ArticlesService.saveArticleAndUpdateCardInDatabase should return error", () => {
      // @ts-ignore
      jest.spyOn(articleRepository, "createOrUpdateArticle").mockImplementation(async (article: Content.Article) => {
        expect(article).toEqual(articleReq)
        return new Error("Failed to save article")
      })
      return expect(
        articlesService.saveArticleAndUpdateCardInDatabase(
          cardIdReq,
          sourceReq,
          articleReq,
          cookies.internal_token.name
        )
      ).rejects.toBeInstanceOf(HttpException)
    })
  })
  describe("incrementArticleVersion tests", () => {
    it("should throw an error if input value is less than 0 and more than 999", () => {
      expect(articlesService.incrementArticleVersion.bind(undefined, "-1")).toThrow("version is invalid")
      expect(articlesService.incrementArticleVersion.bind(undefined, "1000")).toThrow("version is invalid")
    })
    it("should increment version correctly", () => {
      expect(articlesService.incrementArticleVersion("000")).toBe("001")
    })
    it("should throw an error if input value is not a number", () => {
      expect(articlesService.incrementArticleVersion.bind(undefined, "nan")).toThrow("version is not a number")
    })
  })
  it("decodeJWTPayload should return result of decode from jwtwebtoken", async () => {
    const token = "token"
    jest.spyOn(jsonwebtoken, "decode").mockImplementation((token_: string) => {
      expect(token_).toEqual(token)
      return cookies.internal_token
    })
    expect(await articlesService.decodeJWTPayload(token)).toEqual(cookies.internal_token)
  })
})

describe("ArticlesRepository methods should return correct value", () => {
  it("ArticlesRepository.getArticle should return error", () => {
    // @ts-ignore
    return expect(articleRepository.getArticle(articleReq)).rejects.toEqual(new Error("Failed to get article"))
  })
  it("ArticlesRepository.createOrUpdateArticle should return error", () => {
    // @ts-ignore
    return expect(articleRepository.createOrUpdateArticle(articleReq)).rejects.toEqual(
      new Error("Failed to save article")
    )
  })
})
