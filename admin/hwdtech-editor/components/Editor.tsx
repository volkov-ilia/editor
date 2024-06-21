import React from "react"
import { Component } from "./types"
import { IoC } from "../IoC/IoC"

export type EditorProps = {
  entity: string
  content: JSX.Element | JSX.Element[]
}

export const Editor: Component<EditorProps> = ({ entity, content }) => {
  IoC.resolve("IoC.Register", "Editor.Type", () => entity)

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const Header = IoC.resolve<React.FC<any>>("IoC.Resolve", `Editor.${entity}.Header`)

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const LeftColumn = IoC.resolve<React.FC<any>>("IoC.Resolve", `Editor.${entity}.LeftSideColumn`)

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const RightColumn = IoC.resolve<React.FC<any>>("IoC.Resolve", `Editor.${entity}.RightSideColumn`)

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const Footer = IoC.resolve<React.FC<any>>("IoC.Resolve", `Editor.${entity}.Footer`)

  return (
    <div className="editor">
      <header className="editor__header">
        <Header />
      </header>
      <section className="editor__main-section">
        <aside className="editor__side-column">
          <LeftColumn />
        </aside>
        <main className="editor__main-content">{content}</main>
        {/*<aside className="editor__side-column">*/}
        {/*  <RightColumn />*/}
        {/*</aside>*/}
      </section>
      <footer className="editor__footer">
        <Footer />
      </footer>
      <style jsx>{`
        .editor {
          width: 100%;
          height: 100%;
          background: #efefef;
        }

        .editor__header,
        .editor__footer {
          width: 100%;
          height: 15vh;
        }

        .editor__footer {
          width: 100%;
          height: 10vh;
        }

        .editor__main-section {
          width: 100%;
          height: 75vh;
          display: flex;
          flex-direction: row;
        }

        .editor__side-column {
          width: 25%;
        }

        .editor__main-content {
          width: 75%;
        }

        @media print {
          .editor__header,
          .editor__footer,
          .editor__side-column {
            visibility: hidden;
            width: 0;
            height: 0;
          }
          .editor__main-section,
          .editor__main-content {
            width: 100%;
          }
        }
      `}</style>
      <style jsx global>{`
        *,
        ::after,
        ::before {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
