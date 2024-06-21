import React from "react"
import { render } from "@testing-library/react"

import { LangBar } from "../../ui/components/LangBar"
import * as applicationDependencies from "../../ui/components/ApplicationContext"
import CONTENTFUL_RU from "../../types/platforms/CONTENTFUL_RU"

jest.mock("../../types/platforms/platformConfig", () => ({
  platformConfig: ["ru", "en"],
}))

describe("LangBar tests", () => {
  it("LangBar should render all switches from platform", () => {
    const { container } = render(<LangBar />)
    expect(container.querySelector(".switch-bar")).toBeDefined()
    expect(container.querySelector(".switch-label")).toBeDefined()
    expect(container.querySelectorAll(".switch-item").length).toBe(2)
  })
  it("First click on the switcher should change locale context", () => {
    const mockSetState = jest.fn()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    jest.spyOn(applicationDependencies, "useApplicationValueContext").mockImplementation(() => ({
      locale: CONTENTFUL_RU,
      setLocale: mockSetState,
    }))
    const { container } = render(<LangBar />)
    const switchers = container.querySelectorAll(".switch-item")
    expect(switchers.length).toBeGreaterThanOrEqual(2)
    const secondSwitcher = switchers[1] as HTMLElement
    secondSwitcher.click()
    expect(mockSetState.mock.calls.length).toBe(1)
  })
  it("Repeated click on the switcher should not change change locale context", () => {
    const mockSetState = jest.fn()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    jest.spyOn(applicationDependencies, "useApplicationValueContext").mockImplementation(() => ({
      locale: CONTENTFUL_RU,
      setLocale: mockSetState,
    }))
    const { container } = render(<LangBar />)
    const switcher = container.querySelector(".switch-item") as HTMLElement
    switcher.click()
    expect(mockSetState.mock.calls.length).toBe(0)
  })
})
