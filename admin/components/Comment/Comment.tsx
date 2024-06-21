import React from "react"
import COMMENT_LOCALIZATION from "./commentConstant.json"

type Comment = {
  comment: string
}

export const Comment: React.FC<Comment> = ({ comment }) => {
  return (
    <div className="comments__wrapper">
      <div className="comments__block">
        <h2 className="comments__block_title">{COMMENT_LOCALIZATION.RU}</h2>
        <p className="comments__block_text">{comment}</p>
      </div>

      <style jsx>
        {`
          ::-webkit-scrollbar {
            width: var(--indent-4);
          }

          ::-webkit-scrollbar-track {
            border: var(--indent-0-5) solid var(--light-gray-color);
            border-radius: var(--indent-4);
            background: var(--main-bg-color);
          }

          ::-webkit-scrollbar-thumb {
            border: var(--indent-0-5) solid var(--main-primary-color);
            border-radius: var(--indent-4);
          }

          .comments__wrapper {
            position: relative;
            height: var(--indent-56);
            padding: var(--indent-4) var(--indent-2-5);
            border: var(--indent-px) solid var(--main-primary-color);
            border-radius: var(--indent-4) var(--indent-4) var(--indent-4) var(--indent-0);
          }

          .comments__wrapper::after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: -1px;
            border-width: var(--indent-4);
            border-style: solid;
            border-color: transparent transparent var(--main-primary-color) var(--main-primary-color);
            border-image: initial;
          }

          .comments__block {
            padding: var(--indent-0) var(--indent-4);
            width: 100%;
            height: 100%;
            overflow-y: auto;
          }

          .comments__block_title {
            font-weight: var(--font-weight-bold);
            font-size: var(--font-size-base);
            text-align: center;
            color: var(--text-dark-color);
            margin-bottom: var(--indent-2);
          }

          .comments__block_text {
            font-size: var(--font-size-p3);
            font-weight: var(--font-weight-regular);
            color: var(--text-dark-color);
          }
        `}
      </style>
    </div>
  )
}
