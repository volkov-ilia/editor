import React from "react"
import { deleteAllNodes } from "../../utils/deleteAllNodes"
import { testDataEditor } from "./testDataEditor"
import initialValue from "../../utils/slate/globalValues/initialValue"
import { ReactEditor } from "slate-react"
import { Transforms } from "slate"

describe("Delete nodes tests", () => {
  it("deleteAllNodes method should delete all nodes and set focus to the created text node", () => {
    const setValue = jest.fn((value) => {
      testDataEditor.children = value
    })

    jest.spyOn(ReactEditor, "focus").mockImplementation((editor) => {
      expect(editor).toEqual(testDataEditor)
    })

    jest.spyOn(Transforms, "deselect").mockImplementation((editor) => {
      expect(editor).toEqual(testDataEditor)
    })
    expect(deleteAllNodes(testDataEditor, setValue).children).toEqual(initialValue)
    expect(ReactEditor.focus).toHaveBeenCalled()
    expect(Transforms.deselect).toHaveBeenCalled()
  })
})
