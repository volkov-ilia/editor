import { Input } from "../UI/Input/Input"
import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

let container: null | HTMLElement = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container as HTMLElement)
  container?.remove()
  container = null
})

test("Input correct set placeholder", () => {
  const inputText = "some test text"

  act(() => {
    render(<Input placeholder={inputText} />, container)
  })

  const input = container?.querySelector("input")

  expect(input?.placeholder).toBe(inputText)
})
