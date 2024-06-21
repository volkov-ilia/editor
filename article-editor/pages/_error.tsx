import React from "react"
import { getPath } from "hwdtech-admin-components"
import { getAbsoluteUri } from "../utils/getAbsoluteUri"
import { PrimaryButton } from "hwdtech-admin-components"
import { Meta } from "hwdtech-admin-components"
import { MetaOpenGraph } from "hwdtech-admin-components"
import { MetaTwitter } from "hwdtech-admin-components"

const Error = ({
  errorTitle,
  errorDescription,
  errorCode,
}: {
  errorTitle?: string
  errorDescription?: string
  errorCode?: number
}) => {
  const pageReload = () => {
    window.location.reload()
  }

  const title = errorTitle || "Page not found!"
  const description = errorDescription || "Error page"
  const previewUrl = "https://mir-s3-cdn-cf.behance.net/projects/max_808/0bf4fa65983545.Y3JvcCw3OTUsNjIyLDI4OCw4MA.png"
  const siteName = errorTitle || "Page not found!"
  const uri = getAbsoluteUri(getPath())

  return (
    <>
      <Meta title={title} description={description} uri={uri} isNoIndex={true} />
      <MetaTwitter title={title} description={description} imageUrl={previewUrl} uri={uri} isNoIndex={true} />
      <MetaOpenGraph
        title={title}
        description={description}
        imageUrl={previewUrl}
        siteName={siteName}
        uri={uri}
        isNoIndex={true}
      />

      <div className="error-wrapper">
        <style jsx>{`
          .error-wrapper {
            padding: 40px 15px;
            height: 100vh;
            display: flex;
            align-items: center;
          }
          .error-content {
            width: 450px;
            max-width: 100%;
            margin: 0 auto;
          }
          @media (max-width: 1480px) {
            .image-wrapper {
              max-width: 80%;
              margin-left: auto;
              margin-right: auto;
            }
          }
          .error-title {
            margin-bottom: 25px;
            font-size: 38px;
          }
          .error-text {
            color: #343d48;
            margin-top: 30px;
            margin-bottom: 50px;
          }
          .error-button-wrapper {
            justify-content: center;
          }
          .error-button-wrapper > * {
            margin: 0 8px;
          }
        `}</style>
        <div className="error-content">
          <h2 className="error-title text-center">
            {errorCode && <p>{errorCode}</p>}
            <p>{title}</p>
          </h2>
          <h3 className="text-center">{errorDescription}</h3>
          <div className="error-button-wrapper flex px-1">
            <PrimaryButton isNotUpperCase text="Reload Page" action={pageReload} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Error
