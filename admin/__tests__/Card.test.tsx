import { test } from "@jest/globals"
import { act } from "react-dom/test-utils"
import ReactDom from "react-dom"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import { Card, formattingTime } from "../components/Card/Card"
import get from "lodash/get"
import React from "react"
import { getByText, render } from "@testing-library/react"
import { fireEvent } from "@testing-library/dom"
import { IoC } from "../hwdtech-editor/IoC/IoC"
import { renderToStaticMarkup } from "react-dom/server"
import { formattingMonth } from "../components/Timeline/Timeline"

// eslint-disable-next-line react/display-name
jest.mock("../components/Table/Table", () => () => <div>TableComponent</div>)

let container: null | HTMLElement = null

const fullData = {
  idCard: "e32rf56",
  documentFormatVersion: "1",
  title: "Test_title",
  tags: ["react", "redux", "vue"],
  note: "lorem ipsum dolor sit amet, consectetur adipiscingHeadline: lorem ipsum dolorHeadline: lorem ipsum dolor sit amet, consectetur adipiscingHeadline: lorem ipsum dolorHeadline: lorem ipsum dolor sit amet, consectetur adipiscingHeadline: lorem ipsum dolorHeadline: lorem ipsum dolor sit amet, consectetur adipiscingHeadline: lorem ipsum dolorHeadline: lorem ipsum dolor sit amet, consectetur adipiscingHeadline: lorem ipsum dolor sit",
  imgSrc:
    "https://images.ctfassets.net/13g5no3omm60/2SboecBxVedEEWH4EfLJOq/f6c150580b5ee81ea43027231ec292ab/teamAndPlant.jpg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  history: [
    {
      status: "создан",
      date: new Date(2021, 1, 23),
    },
    {
      status: "изменен",
      date: new Date(2020, 2, 12),
    },
    {
      status: "изменен",
      date: new Date(2020, 3, 5),
    },
    {
      status: "изменен",
      date: new Date(2021, 4, 20),
    },
    {
      status: "изменен",
      date: new Date(2021, 5, 15),
    },
  ],
  resources: [],
}
const dataWithoutDescription = {
  idCard: "e32rf56",
  documentFormatVersion: "1",
  tags: ["react", "redux", "vue"],
  title: "Test_title3",
  note: "lorem ipsum dolor sit amet, consectetur adipiscingHeadline: lorem ipsum dolorHeadline: lorem ipsum dolor sit amet, consectetur adipiscingHeadline: lorem ipsum dolorHeadline: lorem ipsum dolor sit amet, consectetur adipiscingHeadline: lorem ipsum dolorHeadline: lorem ipsum dolor sit amet, consectetur adipiscingHeadline: lorem ipsum dolorHeadline: lorem ipsum dolor sit amet, consectetur adipiscingHeadline: lorem ipsum dolor sit",
  imgSrc:
    "https://images.ctfassets.net/13g5no3omm60/2SboecBxVedEEWH4EfLJOq/f6c150580b5ee81ea43027231ec292ab/teamAndPlant.jpg",
  history: [
    {
      status: "создан",
      date: new Date(2021, 1, 23),
    },
    {
      status: "изменен",
      date: new Date(2020, 2, 12),
    },
    {
      status: "изменен",
      date: new Date(2020, 3, 5),
    },
    {
      status: "изменен",
      date: new Date(2021, 4, 20),
    },
    {
      status: "изменен",
      date: new Date(2021, 5, 15),
    },
  ],
  resources: [],
}
const dataWithoutPicture = {
  idCard: "e32rf56",
  documentFormatVersion: "1",
  title: "Test_title5",
  tags: ["react", "redux", "vue"],
  mote: "test note",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  history: [
    {
      status: "создан",
      date: new Date(2021, 1, 23),
    },
    {
      status: "изменен",
      date: new Date(2020, 2, 12),
    },
    {
      status: "изменен",
      date: new Date(2020, 3, 5),
    },
    {
      status: "изменен",
      date: new Date(2021, 4, 20),
    },
    {
      status: "изменен",
      date: new Date(2021, 5, 15),
    },
  ],
  resources: [],
}

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container as HTMLElement)
  container = null
})

const checkForMissingTagsInDom = () => {
  const wt = renderer.create(<Card {...fullData} />)
  const expected = get(wt.toJSON(), "children[0].children[1].children.length")
  return expect(expected).toEqual(4)
}

describe("Card component should be render", () => {
  test("Checking for missing tags in DOM", () => {
    checkForMissingTagsInDom()
  })

  test("The Card Component should render a title", () => {
    act(() => {
      ReactDom.render(<Card {...fullData} />, container)
    })
    expect(container?.querySelector(".card__title_text")?.textContent).toEqual(fullData.title)
  })

  test("The Card Component should render a description", () => {
    act(() => {
      ReactDom.render(<Card {...fullData} />, container)
    })
    expect(container?.querySelector(".card__description")?.textContent).toEqual(fullData.description)
  })

  test("The Card component should render a long title by cutting an end of the description and showing the ellipsis.", () => {
    act(() => {
      ReactDom.render(<Card {...dataWithoutDescription} />, container)
    })
    expect(container?.querySelector(".card__description")?.textContent).toEqual("")
  })

  test("The Card component should render image.", () => {
    const wt = renderer.create(<Card {...dataWithoutPicture} />)
    const expected = get(wt.toJSON(), "children[0].children[0].children.length")
    expect(expected).toEqual(1)
  })

  test("The Card Component should render a img tools", () => {
    act(() => {
      ReactDom.render(<Card {...fullData} />, container)
    })
    expect(container?.querySelector(".tool")?.tagName).toEqual("IMG")
  })

  test("Click pencil redirects to the /article-editor/{id}", () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    jest.spyOn(require("next/router"), "useRouter").mockImplementation(() => ({
      push: mockPushRouter,
    }))
    const mockPushRouter = jest.fn()

    act(() => {
      ReactDOM.render(<Card {...fullData} />, container)
    })
    expect(container?.querySelector(".tool")).not.toBeNull()
    const button = container?.querySelector(".tool") as HTMLButtonElement
    button?.click()
    expect(mockPushRouter.mock.calls[0][0]).toBe("/article-editor/e32rf56")
  })

  test("Click publishButton should show publish window at the bottom of the card", () => {
    jest.spyOn(React, "useRef").mockImplementation(() => ({
      current: mockHidePublish,
    }))
    const mockHidePublish = jest.fn()

    act(() => {
      ReactDOM.render(<Card {...fullData} />, container)
    })
    const button = container?.querySelectorAll(".tool")[1] as HTMLButtonElement
    fireEvent.click(button)
    const publishBlock = container?.querySelector(".row")
    expect(publishBlock?.classList.contains("hide_publish")).toEqual(true)
  })

  test("Click historyButton should show ModalWindow with a table", () => {
    const IoCMock = jest.spyOn(IoC, "resolve").mockImplementation()
    const { getByTestId } = render(<Card {...fullData} />)
    const historyButton = getByTestId("historyButton")
    fireEvent.click(historyButton)
    expect(IoCMock).toHaveBeenCalledTimes(2)
    expect(IoCMock).toHaveBeenCalledWith("IoC.Register", "ModalWindow:content", expect.anything())
    expect(IoCMock).toHaveBeenCalledWith("IoC.Resolve", "ModalWindow:toggle")
  })

  test("Click historyButton should render Table component", () => {
    jest.spyOn(IoC, "resolve").mockImplementation((resolve, dep, func) => {
      if (dep === "ModalWindow:content") {
        const container = document.createElement("div")
        const element = func()
        const staticElement = renderToStaticMarkup(element)
        container.innerHTML = `<div>${staticElement}</div>`
        expect(getByText(container, "TableComponent")).toBeDefined()
      }
    })
    const { getByTestId } = render(<Card {...fullData} />)
    const historyButton = getByTestId("historyButton")
    fireEvent.click(historyButton)
    expect.assertions(1)
  })
})
describe("formatting time tests", () => {
  it("formatting time should return correct time", () => {
    const testData = ["00:00:00", "12:12:12"]
    testData.forEach((timeString) => {
      const date = new Date(Date.parse(`Thu, 01 Jan 1970 ${timeString}`))
      expect(formattingTime(date)).toEqual(timeString.split(":"))
    })
    expect.assertions(testData.length)
  })
})

test("formattingMonth should correctly format the month", () => {
  const dateLessThanTen = new Date("2022-09-04T18:28:10.315Z")
  const dateMoreThanTen = new Date("2022-11-04T18:28:10.315Z")
  expect(formattingMonth(dateLessThanTen)).toEqual("09")
  expect(formattingMonth(dateMoreThanTen)).toEqual("11")
})
