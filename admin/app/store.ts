import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import cardReducer from "./reducers/CardSlice"

const rootReducer = combineReducers({
  cardReducer,
})

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  })

export default setupStore

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
