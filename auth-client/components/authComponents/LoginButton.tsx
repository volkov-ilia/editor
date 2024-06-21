import React, { useEffect } from "react"
import Image from "next/image"
import { logger } from "../../../common/logs/utils/logger"
import HTTPClient from "../../../common/utils/APIRequests/src/client"

declare const window: any

export function sendOneTimeCode(authResult: any) {
  if (authResult["code"]) {
    HTTPClient.authPost(process.env.API_AUTH!, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
      responseType: "json",
      code: authResult["code"],
    })
      .then(function (response) {
        //response представляет собой объект с полями name и email пользователя
        window.location.reload()
      })
      .catch(function (error) {
        logger.error("Авторизоваться не удалось")
      })
  } else {
    throw new Error("Одноразовый код отсутствует")
  }
}

const LoginButton: React.FC = () => {
  let client: any
  function getAuthCode() {
    client.requestCode()
  }

  useEffect(() => {
    client = window.google.accounts.oauth2.initCodeClient({
      client_id: process.env.CLIENT_ID,
      scope: `https://www.googleapis.com/auth/userinfo.email`,
      ux_mode: "popup",
      callback: (response: any) => {
        sendOneTimeCode(response)
      },
    })
  }, [])

  return (
    <div className={"wrapper"}>
      <div className={"welcomeText"}>
        <h4>Welcome to Mean Ty, dear user!</h4>
        <h4>To continue working with the app, log in using your corporate Google account.</h4>
      </div>
      <button className={"button"} onClick={getAuthCode}>
        <p>Login with Google</p>
        <div className={"imgWrapper"}>
          <Image src="/static/google_logo.png" alt="google logo" layout={"fill"} />
        </div>
      </button>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
        }

        .welcomeText {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h4 {
          text-align: center;
        }

        .imgWrapper {
          position: relative;
          width: 1.5rem;
          height: 1.5rem;
        }
      `}</style>
    </div>
  )
}
export default LoginButton
