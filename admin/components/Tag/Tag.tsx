import React from "react"

type TagProps = {
  tag: string
}

export const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <>
      <div className="tag__wrapper">
        <div className="tag tag_font">#{tag}</div>
      </div>

      <style jsx>{`
        .tag__wrapper {
          width: max-content;
          align-items: center;
          padding: var(--indent-0);
          padding-right: var(--indent-4);
        }

        .tag {
          width: 100%;
          max-width: var(--max-tag-width);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tag_font {
          font-weight: var(--font-weight-bold);
          font-size: var(--font-size-p3);
          text-transform: uppercase;
          color: var(--main-primary-color);
        }
      `}</style>
    </>
  )
}
