import { Modal } from "../components/Modal/Modal"
import React from "react"
import { cleanup, render } from "@testing-library/react"
import { fireEvent } from "@testing-library/dom"
import { IoC } from "../hwdtech-IoC"
import { afterEach, beforeEach } from "jest-circus"

describe("Test modal window", () => {
  let IoCResolveMocked = jest.spyOn(IoC, "resolve").mockImplementation()
  afterEach(() => {
    cleanup()
    IoCResolveMocked.mockClear()
  })
  beforeEach(() => {
    IoCResolveMocked = jest.spyOn(IoC, "resolve").mockImplementation()
  })
  it("Modal should register ModalWindow:toggle in the IoC on render", () => {
    render(<Modal />)
    expect(IoCResolveMocked).toHaveBeenCalledWith("IoC.Register", "ModalWindow:toggle", expect.anything())
  })
  it("ModalWindow:toggle should toggle state", () => {
    const mockedSetState = jest.fn()
    jest.spyOn(React, "useState").mockImplementation(() => {
      return [false, mockedSetState]
    })
    IoCResolveMocked.mockImplementation((resolve, dep, func) => {
      if (dep === "ModalWindow:toggle") func()
    })
    render(<Modal />)
    expect(mockedSetState).toBeCalledTimes(1)
  })
  it("Modal should render elements from IoC ModalWindow:content", () => {
    IoCResolveMocked.mockImplementation((resolve, dep) => {
      if (dep === "ModalWindow:content") return <span>ModalWindow:content</span>
    })
    const { getByText } = render(<Modal />)
    expect(IoCResolveMocked).toHaveBeenCalledWith("IoC.Resolve", "ModalWindow:content")
    getByText("ModalWindow:content")
  })

  test("Modal should work onClick close on field or cross", () => {
    const mockedSetState = jest.fn((newState) => {
      expect(newState).toEqual(false)
    })
    jest.spyOn(React, "useState").mockImplementation(() => {
      return [false, mockedSetState]
    })
    const { getByTestId } = render(<Modal />)
    const field = getByTestId("field")
    const cross = getByTestId("close")
    expect(fireEvent.click(field)).toEqual(true)
    expect(fireEvent.click(cross)).toEqual(true)
    expect(mockedSetState).toBeCalledTimes(2)
  })

  test("Modal should work onClick open", () => {
    const mockedSetState = jest.fn((newState) => {
      newState = true
      expect(newState).toEqual(true)
    })
    jest.spyOn(React, "useState").mockImplementation(() => {
      return [true, mockedSetState]
    })
    const { getByTestId } = render(<Modal />)
    const field = getByTestId("field")
    const cross = getByTestId("close")
    expect(fireEvent.click(field)).toEqual(true)
    expect(fireEvent.click(cross)).toEqual(true)
    expect(mockedSetState).toBeCalledTimes(2)
  })
})
