import "../styles/globals.css"
import "../styles/normalize.css"

import type { AppProps } from "next/app"
import React from "react"
import { Provider } from "react-redux"
import setupStore from "../app/store"

const store = setupStore()

function AdminApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default AdminApp
