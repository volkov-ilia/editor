import { test } from "@jest/globals"
import { act } from "react-dom/test-utils"
import ReactDom from "react-dom"

import { Comment } from "../components/Comment/Comment"

const comments = ["comment_1", "comment_2", "comment_3", "comment_4", "comment_5"]
let container: null | HTMLElement = null

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container as HTMLElement)
  container = null
})

test("Comment component should be render comment", () => {
  comments.forEach((comment) => {
    act(() => {
      ReactDom.render(<Comment comment={comment} />, container)
    })
    expect(container?.querySelector(".comments__block_text")?.textContent).toEqual(comment)
  })
})
