import { Injectable } from "@nestjs/common"
import { CardsRepository } from "./cards.repository"
import { getCardsQueryType } from "./cards.types"
import { Card } from "./schemas/cards.schemas"

@Injectable()
export class CardsService {
  constructor(private readonly cardRepository: CardsRepository) {}

  async getCards(contentType: string, query: getCardsQueryType): Promise<{ cards: Card[] }> {
    const cards = await this.cardRepository.getCards(contentType, query)
    const res = cards.cards.map((item) => {
      return {
        idCard: item._id,
        documentFormatVersion: item.documentFormatVersion,
        title: item.title,
        tags: item.tags,
        history: item.history,
        imgSrc: item.imgSrc,
        description: item.description,
        note: item.note,
        resources: item.resources,
      }
    })
    return { cards: res }
  }

  async getCardById(idCard: string) {
    return await this.cardRepository.getCardById(idCard)
  }

  async saveCard(card) {
    return this.cardRepository.saveCard(card)
  }

  async updateArticleStatusFromCard(idArticle: string, source: string, name: string, status: string) {
    return await this.cardRepository.updateArticleStatusFromCard(idArticle, source, name, status)
  }
}
