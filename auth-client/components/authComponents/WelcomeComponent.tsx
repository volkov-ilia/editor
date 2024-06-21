import React from "react"
import Image from "next/image"
import { User } from "./AuthComponent"
import { useRouter } from "next/router"

const WelcomeComponent: React.FC<User> = (user) => {
  const router = useRouter()
  const goToTheMainPage = () => {
    router.push("/content")
  }
  return (
    <>
      <div className={"wrapper"}>
        <h4>You are using the Mean Ty app,</h4>
        <div className={"profileWrapper"}>
          {user.name && <h4 className={"name"}>{user.name}</h4>}
          <h4 className={"email"}>{user.email}</h4>
        </div>
        <div>
          <h4>You are on the login page. You are already logged in.</h4>
          <h4>Want to return to the app?</h4>
        </div>
      </div>
      <button className={"button"} onClick={goToTheMainPage}>
        <div className={"imgWrapper"}>
          <Image src="/static/left_arrow.png" alt="arrow" layout={"fill"} />
        </div>
        <p>Go to the App</p>
      </button>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5.125rem;
        }

        .button {
          margin: 2.5rem auto 0;
        }

        .profileWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.125rem;
        }

        h4:not(.profileWrapper h4) {
          text-align: center;
        }

        .profileWrapper h4 {
          color: #8e8c8c;
        }

        .imgWrapper {
          position: relative;
          width: 2.625rem;
          height: 0.9375rem;
        }
      `}</style>
    </>
  )
}

export default WelcomeComponent
