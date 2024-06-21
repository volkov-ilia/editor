import { test } from "@jest/globals"
import { act } from "react-dom/test-utils"
import ReactDom from "react-dom"
import { CardPublication, handleChange, renderInput } from "../components/CardPublication/CardPublication"
import { render, screen } from "@testing-library/react"
import { formattingDate, formattingMonth } from "../components/Timeline/Timeline"

let container: null | HTMLElement = null

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container as HTMLElement)
  container = null
})

// jest.mock("react-datetime", () => () => Fragment)

const mockStyleInput = {
  color: "#696969",
  textDecoration: "underline",
  fontWeight: "400",
  borderRadius: "33px",
  cursor: "pointer",
  textAlign: "center",
  width: "7rem",
  border: 0,
}

const mockProps = {
  type: "text",
  className: "form-control",
  value: "12.09.2022 1:16",
}

const mockDate = 1662969807833

const mockHisItem = {
  status: "created",
  source: "ru",
  version: "001",
  date: "2022-08-30T07:32:39.386Z",
  name: "Михаил Макеев",
}
const mockHisItemScheduledForRemoval = {
  status: "created",
  source: "en",
  version: "001",
  date: "2022-08-30T07:32:39.386Z",
  name: "Михаил Макеев",
}
const mockHisItemAvailableForPublication = {
  status: "created",
  source: "vk",
  version: "001",
  date: "2022-08-30T07:32:39.386Z",
  name: "Михаил Макеев",
}
const mockHistory = [
  {
    status: "created",
    source: "ru",
    version: "001",
    date: "2022-08-30T07:32:39.386Z",
    name: "Михаил Макеев",
  },
  {
    status: "created",
    source: "en",
    version: "001",
    date: "2022-08-30T07:32:42.940Z",
    name: "Михаил Макеев",
  },
  {
    status: "updated",
    source: "ru",
    version: "002",
    date: "2022-08-30T07:32:42.960Z",
    name: "Михаил Макеев",
  },
  {
    status: "updated",
    source: "en",
    version: "002",
    date: "2022-08-30T07:32:45.078Z",
    name: "Михаил Макеев",
  },
  {
    status: "created",
    source: "dz",
    version: "001",
    date: "2022-08-30T07:32:48.180Z",
    name: "Михаил Макеев",
  },
  {
    status: "created",
    source: "vk",
    version: "001",
    date: "2022-08-30T07:32:48.213Z",
    name: "Михаил Макеев",
  },
  {
    status: "updated",
    source: "ru",
    version: "003",
    date: "2022-09-01T07:46:04.316Z",
    name: "Михаил Макеев",
  },
]
const mockScheduledForRemoval = [
  { status: "created", source: "en", version: "001", date: "2022-08-30T07:32:39.386Z", name: "Михаил Макеев" },
  {
    status: "created",
    source: "ru",
    version: "001",
    date: "2022-08-30T07:32:39.386Z",
    name: "Михаил Макеев",
  },
  {
    status: "scheduledForRemoval",
    source: "ru",
    version: 2,
    date: "2022-08-30T07:32:42.940Z",
    name: "Михаил Макеев",
  },
]
const mockHistoryAvailableForPublication = [
  {
    status: "created",
    source: "ru",
    version: "001",
    date: "2022-08-30T07:32:39.386Z",
    name: "Михаил Макеев",
  },
  {
    status: "availableForPublication",
    source: "ru",
    version: 2,
    date: "2022-08-30T07:32:42.940Z",
    name: "Михаил Макеев",
  },
]
const mockHistoryIsThereNewVersion = [
  {
    status: "created",
    source: "ru",
    version: "001",
    date: "2022-08-30T07:32:39.386Z",
    name: "Михаил Макеев",
  },
  {
    status: "published",
    source: "ru",
    version: "002",
    date: "2022-08-30T07:32:42.940Z",
    name: "Михаил Макеев",
  },
  {
    status: "updated",
    source: "ru",
    version: "003",
    date: "2022-08-30T07:32:42.940Z",
    name: "Михаил Макеев",
  },
]

const mockHistoryScheduledForPublication = [
  {
    status: "created",
    source: "ru",
    version: "001",
    date: "2022-08-30T07:32:39.386Z",
    name: "Михаил Макеев",
  },
  {
    status: "update",
    source: "ru",
    version: "002",
    date: "2022-08-30T07:32:42.940Z",
    name: "Михаил Макеев",
  },
  {
    status: "published",
    source: "ru",
    version: "003",
    date: "2022-08-30T07:32:42.940Z",
    name: "Михаил Макеев",
  },
]

const mockResources = [
  {
    source: "ru",
    slug: "6310633be557edcfc0f83fbc",
    version: "003",
  },
  {
    source: "en",
    slug: "630dbd1d9ee85fc6a2665b15",
    version: "002",
  },
  {
    source: "dz",
    slug: "630dbd209ee85fc6a2665b20",
    version: "001",
  },
  {
    source: "vk",
    slug: "630dbd209ee85fc6a2665b25",
    version: "001",
  },
]

describe("test CardPublication", () => {
  test("CardPublication should be render", () => {
    act(() => {
      ReactDom.render(
        <CardPublication
          hisItem={mockHisItem}
          history={mockHistory}
          resources={mockResources}
          revisionChangeDate={new Date()}
        />,
        container
      )
      expect(container.children[0].children[1].textContent).toContain("ревизия " + mockResources[0].version)
    })
  })
  test("CardPublication should be Scheduled For Publication", () => {
    act(() => {
      ReactDom.render(
        <CardPublication
          hisItem={mockHisItem}
          history={mockHistoryScheduledForPublication}
          resources={mockResources}
          revisionChangeDate={new Date()}
        />,
        container
      )
      expect(container.children[0].children[1].textContent).toContain("ревизия " + mockResources[0].version)
    })
  })

  test("CardPublication should be render available publication", () => {
    act(() => {
      ReactDom.render(
        <CardPublication
          hisItem={mockHisItem}
          history={mockHistoryAvailableForPublication}
          resources={mockResources}
          revisionChangeDate={new Date()}
        />,
        container
      )
      expect(container.children[0].children[0].children[1].textContent).toEqual(mockHisItem.source)
    })
  })
  test("CardPublication should be render scheduled publication", () => {
    act(() => {
      ReactDom.render(
        <CardPublication
          hisItem={mockHisItem}
          history={mockHistoryAvailableForPublication}
          resources={mockResources}
          revisionChangeDate={new Date()}
        />,
        container
      )
    })
    expect(container.children[0].children[0].textContent).toEqual(
      mockHisItem.source +
        "Создана" +
        `${formattingDate(new Date())}/${formattingMonth(new Date())}/${new Date().getFullYear()}`
    )
  })
  test("CardPublication should be render if there is new version", () => {
    render(
      <CardPublication
        hisItem={mockHisItem}
        history={mockHistoryIsThereNewVersion}
        resources={mockResources}
        revisionChangeDate={new Date()}
      />
    )
    expect(screen.getByTestId("fire").textContent).toEqual(mockHisItem.source)
  })

  test("test handleChange in CardPublication", () => {
    const setState = jest.fn()
    handleChange("mockDate", setState)
    expect(setState).toBeCalledTimes(1)
  })

  test("test renderInput in CardPublication", () => {
    const rInput = renderInput(mockProps, mockStyleInput)
    expect(rInput.props.children.type).toEqual("input")
  })
})
