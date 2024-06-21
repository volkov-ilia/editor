import { createSlice } from "@reduxjs/toolkit"
import Content from "../../../common/types/Content"

interface CardState {
  cards: Content.Card[]
}

const initialState: CardState = {
  cards: [],
}

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards = state.cards.concat(action.payload)
    },
    updateAll(state, action) {
      state.cards = action.payload
    },
  },
})

export default cardSlice.reducer
export const { addCard, updateAll } = cardSlice.actions
