import React from "react"

type toolProps = {
  imgSrc: string
  imgAlt: string
  onClick: () => void
}

export const Tool: React.FC<toolProps> = ({ imgSrc, imgAlt, onClick }) => {
  return (
    <span className="card__tools_edit">
      <img className="tool" src={imgSrc} alt={imgAlt} onClick={onClick} />
      <style jsx>
        {`
          .tool {
            cursor: pointer;
          }
        `}
      </style>
    </span>
  )
}
