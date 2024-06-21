import React from "react"
import YouTubeProps from "../../../others/types/YouTubeProps"
import { useAmp } from "next/amp"
import { useEditorModeContext } from "../../EditorModeContext"

export const ArticleYoutube: React.FC<YouTubeProps> = ({ title, previewImage, videoId, id, children }) => {
  const isAmp = useAmp()
  return isAmp ? (
    <AmpYoutube previewImage={previewImage} videoId={videoId} id={id} />
  ) : (
    <NoAmpYoutube videoId={videoId} id={id} title={title}>
      {children}
    </NoAmpYoutube>
  )
}

const NoAmpYoutube: React.FC<YouTubeProps> = ({ title, videoId, children, id }) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableFalse = isEditable ? { contentEditable: false, suppressContentEditableWarning: true } : {}

  return (
    <section {...editableFalse} id={id}>
      {isEditable && <div className={"select-none"}>{children}</div>}
      {videoId && (
        <div className="w-full focus:outline-none">
          <iframe
            title={title}
            className={"video-sizes rounded"}
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width={"100%"}
          />
        </div>
      )}
      <style jsx>
        {`
          .video-sizes {
            height: 165px;
          }

          @screen xxs {
            .video-sizes {
              height: 195px;
            }
          }
          @screen xs {
            .video-sizes {
              height: 225px;
            }
          }
          @screen sm {
            .video-sizes {
              height: 350px;
            }
          }
          @screen md {
            .video-sizes {
              height: 675px;
            }
          }
        `}
      </style>
    </section>
  )
}

const AmpYoutube: React.FC<Omit<YouTubeProps, "children">> = ({ previewImage, videoId, id }) => {
  return (
    <section id={id}>
      <amp-youtube data-videoid={videoId} width="358" height="204" layout="responsive" className="preview">
        {previewImage}
      </amp-youtube>
      <style jsx>{`
        .preview {
          border-radius: 0.25rem;
        }
      `}</style>
    </section>
  )
}
