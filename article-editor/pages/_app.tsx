import "../ui/main.css"
import "../ui/global.css"
import { SetupEditorIconFont } from "../ui/components/SetupEditorIconFont"
import { SetupRobotoFont } from "../ui/components/SetupRobotoFont"
import { SetupIconFont } from "../ui/components/SetupIconFont"
import { EditorModeProvider } from "hwdtech-admin-components"
import React from "react"
import { AppProps } from "next/app"
import { ApplicationProvider } from "../ui/components/ApplicationContext"
import get from "lodash/get"
import Error from "./_error"
import Head from "next/head"
import { store } from "../app/store"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }: AppProps) {
  const initialValue = get(pageProps, "map.value")
  const errorCode = get(pageProps, "errorCode")
  const errorTitle = get(pageProps, "errorTitle")
  const errorDescription = get(pageProps, "errorDescription")

  return errorCode ? (
    <Error errorCode={errorCode} errorTitle={errorTitle} errorDescription={errorDescription} />
  ) : (
    <>
      <Head>
        <title>MeanTy</title>
        <link rel="shortcut icon" href={"favicon.png"} />
      </Head>
      <ApplicationProvider initialValue={initialValue}>
        <Provider store={store}>
          <EditorModeProvider initialMode={"editor"}>
            <SetupEditorIconFont />
            <SetupIconFont />
            <SetupRobotoFont />
            <Component {...pageProps} />
          </EditorModeProvider>
        </Provider>
      </ApplicationProvider>
      <style global jsx>{`
        html {
          font-size: 16px;
          line-height: 1.5;
          background-color: #e5e5e5;
        }

        html::-webkit-scrollbar-track {
          border-radius: 0.75rem;
          border: 2px solid #d1d1d1;
          background-color: rgba(253, 253, 253, 1);
        }

        html::-webkit-scrollbar {
          margin-right: 1rem;
          width: 1rem;
          background-color: transparent;
        }

        html::-webkit-scrollbar-thumb {
          border-radius: 0.75rem;
          border: 0.125rem solid rgba(18, 182, 152, 1);
        }
      `}</style>
    </>
  )
}

export default MyApp
