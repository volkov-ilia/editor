/* eslint-disable @typescript-eslint/ban-ts-comment  */
/* eslint-disable @typescript-eslint/no-explicit-any  */
import { getModelToken } from "@nestjs/mongoose"
import { CardsController } from "./cards.controller"
import { CardsRepository } from "./cards.repository"
import { CardsService } from "./cards.service"
import { Card } from "./schemas/cards.schemas"
import { Test } from "@nestjs/testing"
import Content from "../../../common/types/Content"

let cardsController: CardsController
let cardsService: CardsService
let cardsRepository: CardsRepository
const result = {
  cards: [new Card()],
}
const contentTypeReq = "document"
const queryReq = { tags: "tag1", page: 1, count: 10 }
const card: Content.Card = {
  idCard: "idCard",
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
      name: "name",
      slug: "",
    },
  ],
  documentFormatVersion: "1",
  resources: [
    {
      source: "mongodb",
      version: "001",
      slug: "article._id",
    },
  ],
}
const cardId = "some_card_id"

const cardToSave = {
  title: "title",
  description: "description",
  tags: "tag1 tag2",
}

const req = {
  params: cardToSave,
}

const resultSaveCard = "resultSaveCard"

beforeEach(async () => {
  const moduleRef = await Test.createTestingModule({
    controllers: [CardsController],
    providers: [
      CardsRepository,
      CardsService,
      {
        provide: getModelToken("Card"),
        useValue: Card,
      },
    ],
  }).compile()
  cardsRepository = moduleRef.get<CardsRepository>(CardsRepository)
  cardsService = moduleRef.get<CardsService>(CardsService)
  cardsController = moduleRef.get<CardsController>(CardsController)
})

describe("CardsController methods should return correct value", () => {
  it("cardsController.saveCard should return result of save card", async () => {
    // @ts-ignore
    jest.spyOn(cardsService, "saveCard").mockImplementation(async (card) => {
      expect(card).toEqual(cardToSave)
      return resultSaveCard
    })
    expect(await cardsController.saveCard(req)).toBe(resultSaveCard)
  })

  it("cardsController.getCards should return an array of Cards", async () => {
    // @ts-ignore
    jest.spyOn(cardsRepository, "getCards").mockImplementation(async (contentType, query) => {
      expect(contentType).toEqual(contentTypeReq)
      expect(query).toEqual(queryReq)
      return result
    })
    // @ts-ignore
    jest.spyOn(cardsService, "getCards").mockImplementation(async (contentType, query) => {
      expect(contentType).toEqual(contentTypeReq)
      expect(query).toEqual(queryReq)
      return cardsRepository.getCards(contentType, query)
    })
    expect(await cardsController.getCards(contentTypeReq, queryReq)).toBe(result)
  })

  it("cardsController.getCards should throw exception if page isn't greater than 0", async () => {
    const queryReq = { tags: "tag1", page: -1, count: 10 }
    try {
      await cardsController.getCards(contentTypeReq, queryReq)
    } catch (error) {
      expect(error.status).toEqual(400)
      expect(error).toEqual(
        new Error(
          `Page parameter in the query string has an invalid value. Page must be an number greater than 0, but got ${queryReq.page}`
        )
      )
    }
  })

  it("cardsController.getCards should throw exception if count isn't greater than 0", async () => {
    const queryReq = { tags: "tag1", page: 1, count: -1 }
    try {
      await cardsController.getCards(contentTypeReq, queryReq)
    } catch (error) {
      expect(error.status).toEqual(400)
      expect(error).toEqual(
        new Error(
          `Count parameter in the query string has an invalid value. Count must be an number between 0 and 100, but got ${queryReq.count}`
        )
      )
    }
  })

  it("cardsController.getCards should throw exception if count is greater than 100", async () => {
    const queryReq = { tags: "tag1", page: 1, count: 101 }
    try {
      await cardsController.getCards(contentTypeReq, queryReq)
    } catch (error) {
      expect(error.status).toEqual(400)
      expect(error).toEqual(
        new Error(
          `Count parameter in the query string has an invalid value. Count must be an number between 0 and 100, but got ${queryReq.count}`
        )
      )
    }
  })
})

describe("CardsService methods should return correct value", () => {
  it("CardsService.getCards should return an array of Cards", async () => {
    // @ts-ignore
    jest.spyOn(cardsRepository, "getCards").mockImplementation(async (contentType, query) => {
      expect(contentType).toEqual(contentTypeReq)
      expect(query).toEqual(queryReq)
      return result
    })
    expect(await cardsService.getCards(contentTypeReq, queryReq)).toEqual(result)
  })
  it("CardsService.getCardById should return a card", async () => {
    // @ts-ignore
    jest.spyOn(cardsRepository, "getCardById").mockImplementation(async (idCard) => {
      expect(idCard).toEqual(card.idCard)
      return card
    })
    expect(await cardsService.getCardById(card.idCard)).toBe(card)
  })
  it("CardsService.saveCard should return result of save card", async () => {
    // @ts-ignore
    jest.spyOn(cardsRepository, "saveCard").mockImplementation(async (card) => {
      expect(card).toEqual(cardToSave)
      return resultSaveCard
    })
    expect(await cardsService.saveCard(cardToSave)).toBe(resultSaveCard)
  })
})

describe("CardsRepository methods should return correct value", () => {
  it("CardsRepository.getCards should return an array of Cards", async () => {
    jest
      .spyOn(CardsRepository.prototype as any, "loadCards")
      .mockImplementation((tags: string[], page: number, count: number) => {
        expect(tags.includes(contentTypeReq)).toEqual(true)
        expect(page).toEqual(queryReq.page)
        expect(count).toEqual(queryReq.count)
        return Promise.resolve(result)
      })
    expect(await cardsRepository.getCards(contentTypeReq, queryReq)).toBe(result)
  })

  it("CardsRepository.saveCardInDB should return error", () => {
    // @ts-ignore
    return expect(cardsRepository.saveCardInDB(cardToSave)).rejects.toEqual(new Error("Failed to save card"))
  })
  it("CardsRepository.cardToDBForm should return card", () => {
    const cardToDBFormResult = {
      description: "description",
      documentFormatVersion: "1",
      history: [],
      resources: [],
      tags: ["tag1", "tag2"],
      title: "title",
    }
    return expect(cardsRepository.cardToDBForm(cardToSave)).toEqual(cardToDBFormResult)
  })
  it("CardsRepository.saveCard should return result of save card", async () => {
    jest.spyOn(CardsRepository.prototype as any, "cardToDBForm").mockImplementation((card) => {
      expect(card).toEqual(cardToSave)
      return cardToSave
    })
    jest.spyOn(CardsRepository.prototype as any, "saveCardInDB").mockImplementation((card) => {
      expect(card).toEqual(cardToSave)
      return Promise.resolve(resultSaveCard)
    })
    expect(await cardsRepository.saveCard(cardToSave)).toBe(resultSaveCard)
  })

  it(`CardsRepository.getCards should throw exception if page isn't greater than zero`, async () => {
    const queryReq = { tags: "tag1", page: -1, count: 10 }
    try {
      await cardsRepository.getCards(contentTypeReq, queryReq)
    } catch (error) {
      expect(error).toEqual(
        new Error(
          `Page parameter in the query string has an invalid value. Page must be an number greater than 0, but got ${queryReq.page}`
        )
      )
    }
  })
  it(`CardsRepository.getCards should throw exception if count isn't greater than 0`, async () => {
    const queryReq = { tags: "tag1", page: 1, count: -1 }
    try {
      await cardsRepository.getCards(contentTypeReq, queryReq)
    } catch (error) {
      expect(error).toEqual(
        new Error(
          `Count parameter in the query string has an invalid value. Count must be an number between 0 and 100, but got ${queryReq.count}`
        )
      )
    }
  })
  it(`CardsRepository.getCards should throw exception if count greater than 100`, async () => {
    const queryReq = { tags: "tag1", page: 1, count: 101 }
    try {
      await cardsRepository.getCards(contentTypeReq, queryReq)
    } catch (error) {
      expect(error).toEqual(
        new Error(
          `Count parameter in the query string has an invalid value. Count must be an number between 0 and 100, but got ${queryReq.count}`
        )
      )
    }
  })
  it("CardsRepository.createCard should return error", () => {
    return expect(cardsRepository.createCard(card)).rejects.toEqual(new Error("Failed to create card"))
  })
  it("CardsRepository.updateCard should return error", () => {
    return expect(cardsRepository.updateCard(cardId, card)).rejects.toEqual(new Error("Failed to update card"))
  })
  it("CardsRepository.getCardById should return error", () => {
    return expect(cardsRepository.getCardById(card.idCard)).rejects.toEqual(new Error("Failed to get card"))
  })
})
