import React from "react"
import { render } from "@testing-library/react"
import Table from "../components/Table/Table"

describe("Table tests", () => {
  it("Table should render correct data", () => {
    const { getByText } = render(<Table headers={["header1"]} data={[{ header1: "row1" }, { header1: "row2" }]} />)
    getByText("header1")
    getByText("row1")
    getByText("row2")
  })
  it("Table should ignore data that doesn't contain in headers", () => {
    const { getByText } = render(<Table headers={["header1"]} data={[{ header2: "row1" }]} />)
    getByText("header1")
    expect(getByText.bind(this, "row1")).toThrowError()
  })
})
