import React from "react"
import Link from "next/link"
import { NextPageContext } from "next"

type ErrorProps = {
  statusCode: number
}

function Error({ statusCode }: ErrorProps) {
  return (
    <div className="error-container">
      <p>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}</p>
      <p style={{ color: "blue" }}>
        <Link href="/">Back to homepage</Link>
      </p>
      <style jsx>{`
        .error-container {
          text-align: center;
        }
      `}</style>
    </div>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
