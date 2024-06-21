import React, { createRef, useState } from "react"
import pencil from "../../assets/green_pencil.svg"
import { Component } from "../../types"
import Image from "next/image"

export type InputProps = {
  placeholder?: string
}
/* istanbul ignore next */
export const Input: Component<InputProps> = ({ placeholder = "Название файла" }) => {
  const ref = createRef<HTMLInputElement>()
  const [focused, setFocused] = useState(false)

  const handleSetFocus = () => {
    ref.current?.focus()
    setFocused(true)
  }

  return (
    <div className="UI-input">
      <input
        type="text"
        className="UI-input-content"
        placeholder={placeholder}
        ref={ref}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
      />
      {focused ? null : (
        <button className="pencil" onClick={handleSetFocus} onKeyDown={handleSetFocus}>
          <Image src={pencil} alt="pencil" />
        </button>
      )}
      <style jsx>{`
        .UI-input-content {
          font-family: Montserrat, sans-serif;
          font-size: 2.25rem;
          font-style: normal;
          font-weight: 700;
          line-height: 4.18px;
          letter-spacing: 0;

          color: #8e8c8c;

          border: 1px solid #12b698;
          background-color: #fff;
          border-radius: 2rem;

          padding: 0 2rem;
          width: 100%;

          height: 100%;
        }

        .UI-input {
          position: relative;

          height: 4rem;
        }

        .pencil {
          position: absolute;
          top: 1rem;
          right: 2rem;
        }

        .pencil {
          border: none;
          background: transparent;
        }

        .UI-input-content:focus {
          outline: none;
        }
        .UI-input-content::placeholder {
          color: #d1d1d1;
          padding: 1rem 0;
        }
      `}</style>
    </div>
  )
}
