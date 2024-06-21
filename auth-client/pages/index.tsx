import React from "react"
import AuthComponent from "../components/authComponents/AuthComponent"
import HTTPClient from "../../common/utils/APIRequests/src/HTTPClient"
import ScriptLoader from "next/script"

const AuthPage = () => {
  const [dataAboutUser, setDataAboutUser] = React.useState()
  React.useEffect(() => {
    HTTPClient.authGet(`${process.env.API_AUTH}/get-user`, {
      withCredentials: true,
    })
      .then((req) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setDataAboutUser(req.data)
      })
      .catch(() => {
        setDataAboutUser(undefined)
      })
  }, [])

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      <ScriptLoader
        src={`https://accounts.google.com/gsi/client`}
        async={false}
        defer={false}
        strategy="beforeInteractive"
      />
      <ScriptLoader
        src={`https://apis.google.com/js/api.js`}
        async={false}
        defer={false}
        strategy="beforeInteractive"
      />
      <AuthComponent user={dataAboutUser} />
    </>
  )
}

export default AuthPage
