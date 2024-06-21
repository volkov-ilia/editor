import React from "react"
import Image from "next/image"

type PictureProp = {
  srcImg: string
  imgAlt: string
}

export const Picture = ({ srcImg, imgAlt }: PictureProp) => {
  return (
    <>
      <Image className="card__img" src={srcImg} alt={imgAlt} layout="fill" />
      <style global jsx>
        {`
          .card__img {
            border-radius: var(--indent-2);
          }
        `}
      </style>
    </>
  )
}
