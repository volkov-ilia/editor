import { combineReducers, configureStore } from "@reduxjs/toolkit"
import modalWindowReducer from "./reducers/ModalWindowSlice"

const rootReducer = combineReducers({
  modalWindowReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
