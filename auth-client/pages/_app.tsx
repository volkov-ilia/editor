import "../styles/globals.css"
import "../styles/normalize.css"

import type { AppProps } from "next/app"
import React from "react"
import Head from "next/head"

function AdminApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MeanTy</title>
        <link rel="shortcut icon" href={"favicon.png"} />
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  )
}

export default AdminApp
