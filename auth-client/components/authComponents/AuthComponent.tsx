import React, { PropsWithChildren } from "react"
import WelcomeComponent from "./WelcomeComponent"
import LoginButton from "./LoginButton"

export type User = {
  name?: string
  email: string
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
interface Props extends PropsWithChildren<any> {
  user?: User
}

const AuthComponent: React.FC<Props> = ({ user }) => {
  return (
    <div className={"authComponent"}>
      {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
      {user ? <WelcomeComponent {...user!} /> : <LoginButton />}
      <style jsx>{`
        :global(:root) {
          --font-weight-bold: 700;
          --font-size-h3: 1.5rem;
          --main-primary-color: #12b698;
        }

        :global(*) {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        * {
          color: var(--main-primary-color);
          font-family: Montserrat;
          font-size: var(--font-size-h3);
          font-weight: var(--font-weight-bold);
          line-height: 150%;
        }

        .authComponent {
          margin-top: 7.5rem;
        }

        :global(.button) {
          background: none;
          cursor: pointer;
          outline: inherit;

          padding: 0.5625rem 1.5rem;
          border: solid 1px var(--main-primary-color);
          border-radius: 2.0625rem;

          display: flex;
          align-items: center;
          gap: 1rem;

          font-size: inherit;
          font-weight: var(--);
          color: inherit;
          line-height: inherit;
          font-family: inherit;

          transition: box-shadow 50ms;
        }

        :global(.button:active) {
          box-shadow: 0 0 6px 0 rgba(34, 60, 80, 0.4) inset;
        }
      `}</style>
    </div>
  )
}

export default AuthComponent
