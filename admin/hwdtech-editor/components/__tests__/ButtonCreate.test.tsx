import { ButtonCreate } from "../UI/Button/ButtonCreate"
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

test("ButtonCreate should render content", () => {
  const action = jest.fn()

  act(() => {
    render(<ButtonCreate content={"some text"} action={action} />, container)
  })

  expect(container?.querySelector("button")?.textContent).toBe("some text")
})

test("ButtonCreate correct ation on click", () => {
  const action = jest.fn()

  act(() => {
    render(<ButtonCreate content={"some text"} action={action} />, container)
  })

  const button = container?.querySelector("button")

  act(() => {
    button?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
  })

  expect(action).toHaveBeenCalledTimes(1)
})
