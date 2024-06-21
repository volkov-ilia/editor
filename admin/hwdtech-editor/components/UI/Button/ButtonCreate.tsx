import { Component } from "../../types"
import React from "react"
import { ButtonProps } from "./Button"
import create from "../../assets/create.svg"
import Image from "next/image"

export const ButtonCreate: Component<ButtonProps> = ({ content, action }) => {
  return (
    <div className="UI-button">
      <button type="button" className="UI-button-content" onClick={action}>
        {content}
        <span className="create_image">
          <Image src={create} alt="create" />
        </span>
      </button>
      <style jsx>{`
        .create_image {
          margin-left: 1.25rem;
          position: absolute;
        }
        .UI-button {
          position: relative;
        }
        .UI-button-content {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0;
          position: relative;
          color: #f2994a;

          position: relative;
          border: 1px solid #f2994a;
          border-radius: 2rem;

          width: 100%;
          padding: 1rem 0;
          transition: color 0.5s, border 0.5s, background-color 0.5s;
          margin-bottom: 2rem;
        }

        .UI-button-content:hover,
        .UI-button-content:focus {
          color: #fff;
          background-color: #f2994a;

          outline: none;
        }
      `}</style>
    </div>
  )
}
