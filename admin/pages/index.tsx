import type { NextPage } from "next"
import { Editor } from "../hwdtech-editor/components"
import { CardList } from "../components/Card/CardList"
import React, { useMemo } from "react"
import CardsFetcher from "../utils/dataFetching/CardsFetcher"

import "../styles/Home.module.css"
import { Modal } from "../components/Modal/Modal"
import Head from "next/head"

const Home: NextPage = () => {
  const fetcher = useMemo(() => {
    return new CardsFetcher(1, 3)
  }, [])

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
      <Modal />
      <Editor content={<CardList fetcher={fetcher} />} entity={"Card"} />
    </>
  )
}

export default Home
