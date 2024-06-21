import { Tag } from "../components/Tag/Tag"

import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

let container: null | HTMLElement = null
const tags = ["JAVA", "C#", "C++", "JS", "XML"]

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container as HTMLElement)
  container?.remove()
  container = null
})

test("Tag component should be render tags", () => {
  tags.map((tag) => {
    act(() => {
      render(<Tag tag={tag} />, container)
    })
    expect((container as HTMLElement).querySelector(".tag")?.textContent).toEqual(`#${tag}`)
  })
})
