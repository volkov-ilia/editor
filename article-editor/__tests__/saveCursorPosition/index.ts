import { saveCursorPosition } from "../../utils/saveCursorPosition"

const expectData = {
  ru: {
    anchor: {
      path: [0, 0, 0],
      offset: 13,
    },
    focus: {
      path: [0, 0, 0],
      offset: 13,
    },
  },
}

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}))

const LOCALE = "ru"

const setState = jest.fn()

const mockPrevData = {
  ru: {
    anchor: {
      path: [0, 0, 0],
      offset: 45,
    },
    focus: {
      path: [0, 0, 0],
      offset: 45,
    },
  },
}

const mockData = {
  anchor: {
    path: [0, 0, 0],
    offset: 13,
  },
  focus: {
    path: [0, 0, 0],
    offset: 13,
  },
}

it("saveCursorPosition should change the cursor position state", () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  saveCursorPosition(setState, mockPrevData, mockData, LOCALE)
  expect(setState).toHaveBeenCalledTimes(1)
  expect(saveCursorPosition(setState, mockPrevData, mockData, LOCALE)).toEqual(expectData)
})
