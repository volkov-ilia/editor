import { Component } from "../../types"
import React from "react"
import defaultLogo from "../../assets/logo_meanty.svg"
import Image from "next/image"

export type HeaderProps = {
  content?: JSX.Element
  logo?: string
  altLogo?: string
}

export const Header: Component<HeaderProps> = ({ content, logo = defaultLogo, altLogo = "logo" }) => {
  return (
    <div className="header">
      <div className="header__content">{content}</div>
      <div className="header__logo">
        <Image src={logo} alt={altLogo} />
      </div>
      <style jsx>{`
        .header {
          width: 100%;
          height: 100%;

          position: relative;

          background-color: #efefef;
        }

        .header__logo {
          position: absolute;

          top: 2.3rem;
          right: 4.875rem;
        }
      `}</style>
    </div>
  )
}
