import { test } from "@jest/globals"
import { act } from "react-dom/test-utils"
import ReactDom from "react-dom"
import renderer, { ReactTestRendererJSON } from "react-test-renderer"

import { Timeline } from "../components/Timeline/Timeline"
import { setPositionForTheTimePoint, TimelineList } from "../components/Timeline/TimelineList"
import { Content } from "../../common/types/Content"

const history = [
  { status: "создан", date: new Date(2021, 1, 23), name: "name" },
  { status: "изменен", date: new Date(2020, 2, 12), name: "name" },
  { status: "изменен", date: new Date(2020, 3, 5), name: "name" },
  { status: "изменен", date: new Date(2021, 4, 20), name: "name" },
  { status: "изменен", date: new Date(2021, 5, 15), name: "name" },
]

const historyMoreFive = [
  { status: "создан", source: "testSourse", version: "1", date: new Date(2021, 1, 23), name: "name" },
  { status: "создан", source: "testSourse", version: "1", date: new Date(2022, 3, 14), name: "name" },
  { status: "изменен", source: "testSourse", version: "1", date: new Date(2020, 2, 12), name: "name" },
  { status: "изменен", source: "testSourse", version: "1", date: new Date(2020, 3, 5), name: "name" },
  { status: "изменен", source: "testSourse", version: "1", date: new Date(2021, 4, 20), name: "name" },
  { status: "изменен", source: "testSourse", version: "1", date: new Date(2021, 5, 15), name: "name" },
  { status: "изменен", source: "testSourse", version: "2", date: new Date(2041, 5, 15), name: "name" },
]

const historyLessFive = [
  { status: "создан", source: "testSourse", version: "1", date: new Date(2021, 1, 23), name: "name" },
  { status: "изменен", source: "testSourse", version: "1", date: new Date(2020, 2, 12), name: "name" },
  { status: "изменен", source: "testSourse", version: "1", date: new Date(2020, 3, 5), name: "name" },
]

const testData_2 = {
  status: "создан",
  date: new Date(2021, 21, 23),
  name: "name",
}

let container: null | HTMLElement = null

const dateFormatting = (date: Date) => {
  return (
    `${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}.` +
    `${date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}.` +
    `${date.getFullYear()}`
  )
}

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container as HTMLElement)
  container = null
})

describe("Checking the render of all timeline components", () => {
  history.map((s, index: number) => {
    const left = setPositionForTheTimePoint(index, history.length)
    test("Timeline component should be render status", () => {
      act(() => {
        ReactDom.render(
          <Timeline
            status={s.status}
            date={s.date}
            key={index + s.status + left}
            dotPositionLeft={left}
            name={s.name}
          />,
          container
        )
      })
      expect((container as HTMLElement).querySelector(".timeline__status")?.textContent).toEqual(s.status)
    })

    test("Timeline component should be render date", () => {
      act(() => {
        ReactDom.render(
          <Timeline
            status={s.status}
            date={s.date}
            key={index + s.status + left}
            dotPositionLeft={left}
            name={s.name}
          />,
          container
        )
      })
      expect(
        (container as HTMLElement).querySelector(".timeline__date")?.textContent?.split(".")[0].toString()
      ).toEqual(s.date.getDate() > 9 ? `${s.date.getDate()}` : `0${s.date.getDate()}`)
    })
    test("Timeline component should be render full date", () => {
      act(() => {
        ReactDom.render(
          <Timeline
            status={s.status}
            date={s.date}
            key={index + s.status + left}
            dotPositionLeft={left}
            name={s.name}
          />,
          container
        )
      })
      expect((container as HTMLElement).querySelector(".timeline__date")?.textContent).toEqual(dateFormatting(s.date))
    })
    test("Timeline component should be render point in right position", () => {
      const component = renderer.create(
        <Timeline status={s.status} date={s.date} key={index + s.status + left} dotPositionLeft={left} name={s.name} />
      )
      const tree = component.toJSON() as ReactTestRendererJSON[]
      expect(tree[0].props.style.left).toEqual(`${left}%`)
    })

    test("Timeline component should be render month", () => {
      act(() => {
        ReactDom.render(
          <Timeline
            status={s.status}
            date={s.date}
            key={index + s.status + left}
            dotPositionLeft={left}
            name={s.name}
          />,
          container
        )
      })
      expect((container as HTMLElement).querySelector(".timeline__month")?.textContent).toEqual(
        s.date.getMonth() + 1 > 9 ? `${s.date.getMonth() + 1}` : `0${s.date.getMonth() + 1}`
      )
    })
    it("Timeline component should render correct name", () => {
      act(() => {
        ReactDom.render(
          <Timeline
            status={s.status}
            date={s.date}
            key={index + s.status + left}
            dotPositionLeft={left}
            name={s.name}
          />,
          container
        )
      })
      expect((container as HTMLElement).querySelector(".timeline__author")?.textContent).toEqual(`by ${s.name}`)
    })
  })
  test("Timeline component should be render of two characters of the month", () => {
    const left = setPositionForTheTimePoint(0, 1)
    act(() => {
      ReactDom.render(
        <Timeline
          status={testData_2.status}
          date={testData_2.date}
          key={testData_2.status + left}
          dotPositionLeft={left}
          name={testData_2.name}
        />,
        container
      )
    })
    expect((container as HTMLElement).querySelector(".timeline__month")?.textContent).toEqual(
      testData_2.date.getMonth() + 1 > 9 ? `${testData_2.date.getMonth() + 1}` : `0${testData_2.date.getMonth() + 1}`
    )
  })

  test("TimelineList should render all history points if there are less than five", () => {
    const component = renderer.create(<TimelineList history={historyLessFive} />)
    const tree = component.toJSON() as ReactTestRendererJSON[]
    expect(
      tree.children.filter((elem) => {
        return elem.type === "div"
      }).length
    ).toEqual(historyLessFive.length)
  })

  test("TimelineList should render the last five history points if there are more than five", () => {
    const MAX_COUNT_TIME_POINT = 5
    const component = renderer.create(<TimelineList history={historyMoreFive} />)
    const tree = component.toJSON() as ReactTestRendererJSON[]
    expect(
      tree.children.filter((elem: Content.HistoryItem) => {
        return elem.type === "div"
      }).length
    ).toEqual(MAX_COUNT_TIME_POINT)
  })
})
