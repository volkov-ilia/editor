import Content from "../../../common/types/Content"

interface ICardListDataFetcher {
  fetch: (apiURL: string, tags?: string[]) => Promise<Content.Card[] | undefined> | Content.Card[] | undefined
  updateAll: (apiURL: string, tags?: string[]) => Promise<Content.Card[] | undefined>
  getCount: () => number
}

export default ICardListDataFetcher
