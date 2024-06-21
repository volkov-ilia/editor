import React from "react"
import { Tag } from "./Tag"

type TagProp = {
  tags: string[]
}

export const TagsList: React.FC<TagProp> = ({ tags }) => {
  return (
    <>
      <div className="tags__container">
        {tags.map((tag, index: number) => {
          return <Tag tag={tag} key={index + tag} />
        })}
      </div>

      <style jsx>{`
        .tags__container {
          display: flex;
          justify-content: flex-start;
          gap: var(--indent-1-5);
          flex-wrap: wrap;
        }
      `}</style>
    </>
  )
}
