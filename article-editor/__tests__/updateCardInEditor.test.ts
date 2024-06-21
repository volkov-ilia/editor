import Content from "../../common/types/Content"
import * as getCardAndArticle from "../utils/getCardAndArticle"
import { updateCardInEditor } from "../utils/updateCardInEditor"

const cardReq: Content.Card = {
  documentFormatVersion: "",
  title: "",
  tags: [],
  history: [],
  resources: [],
}
const idCardReq = "1"
describe("updateCard should return correct value", () => {
  jest.spyOn(getCardAndArticle, "getCard").mockImplementation((idCard) => {
    expect(idCard).toEqual(idCardReq)
    return Promise.resolve(cardReq)
  })
  const setCard = jest.fn((card) => {
    expect(card).toEqual(cardReq)
  })
  it("updateCard should call getCardAndArticle.getCard and setCard", async () => {
    await updateCardInEditor(idCardReq, setCard)
    expect(getCardAndArticle.getCard).toHaveBeenCalledTimes(1)
    expect(setCard.mock.calls.length).toBe(1)
  })
})
