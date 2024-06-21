import React, { FormEvent, useState } from "react"
import { useApplicationValueContext } from "./ApplicationContext"
import { EditorPrimaryButton, InputField } from "hwdtech-admin-components"

const Authorization = () => {
  const { setIsLoggedIn } = useApplicationValueContext()
  const [login, setLogin] = useState("")
  const [pass, setPass] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const getAuth = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoggedIn(true)
    // try {
    //   const resp = await axios.post("/api/login", { login, pass })
    //   if (resp.status === 200) {
    //     setIsLoggedIn(true)
    //   }
    // } catch (e) {
    //   setErrorMessage("Wrong login or password!")
    // }
  }

  return (
    <div className={"form"}>
      <form className={"fields"} onSubmit={getAuth}>
        {errorMessage && <div className={"error"}>{errorMessage}</div>}
        <InputField value={login} setValue={(value: string) => setLogin(value)} placeholder={"Login"} />
        <InputField
          type={"password"}
          value={pass}
          setValue={(value: string) => setPass(value)}
          placeholder={"Password"}
        />
        <EditorPrimaryButton type={"submit"} text={"Log in!"} />
      </form>
      <style jsx>{`
        .form {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .fields {
          display: grid;
          row-gap: 1rem;
          width: 50%;
        }

        .error {
          color: #a73737;
        }
      `}</style>
    </div>
  )
}

export default Authorization
