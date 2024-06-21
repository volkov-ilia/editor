import React from "react"

export type ButtonProps = {
  content: string | JSX.Element
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  action: (...args: any[]) => any
}

export const Button: React.FC<ButtonProps> = ({ content, action }) => {
  return (
    <div className="UI-button">
      <button type="button" className="UI-button-content" onClick={action}>
        {content}
      </button>
      <style jsx>{`
        .UI-button-content {
          background-color: #fdfdfd;
          font-family: Montserrat;
          font-size: 1.5rem;
          font-style: normal;
          font-weight: 700;
          letter-spacing: 0;

          color: #12b698;

          border: 1px solid #12b698;
          border-radius: 2rem;

          width: 100%;
          padding: 1rem 0;
          transition: color 0.5s, border 0.5s, background-color 0.5s;
        }

        .UI-button-content:hover,
        .UI-button-content:focus {
          color: #fff;
          background-color: #12b698;

          outline: none;
        }
      `}</style>
    </div>
  )
}
