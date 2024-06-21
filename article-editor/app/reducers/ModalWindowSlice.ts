import { createSlice } from "@reduxjs/toolkit"

export interface ModalWindowState {
  status: string
}

const initialState: ModalWindowState = {
  status: "",
}

export const counterSlice = createSlice({
  name: "modalWindow",
  initialState,
  reducers: {
    saved: (state) => {
      state.status = "saved"
    },
    savedError: (state) => {
      state.status = "savedError"
    },
    updateArticle: (state) => {
      state.status = "updateArticle"
    },
    hide: (state) => {
      state.status = ""
    },
  },
})

export const { saved, savedError, updateArticle, hide } = counterSlice.actions
export default counterSlice.reducer
