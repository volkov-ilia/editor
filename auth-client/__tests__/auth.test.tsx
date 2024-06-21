import React from "react"
import { act } from "react-dom/test-utils"
import ReactDOM from "react-dom"
import AuthPage from "../pages/auth"
import AuthComponent, { User } from "../components/authComponents/AuthComponent"
import LoginButton, { sendOneTimeCode } from "../components/authComponents/LoginButton"
import HTTPClient from "../../common/utils/APIRequests/src/client"
import { logger } from "../../common/logs/utils/logger"

describe("AuthComponent's tests", () => {
  let container: null | HTMLElement = null

  const loggedUser: User = {
    name: "John",
    email: "John@.net",
  }

  beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window["gapi"] = {
      load: jest.fn(),
    }
  })

  afterEach(() => {
    document.body.removeChild(container as HTMLElement)
    container = null
  })

  test("The AuthComponent should render LoginButton for an unauthorized user", () => {
    act(() => {
      ReactDOM.render(<AuthComponent />, container)
    })
    expect(container?.querySelector(".button")).not.toBeNull()
  })
  test("The AuthComponent should render WelcomeComponent with all user data for an authorized user", () => {
    act(() => {
      ReactDOM.render(<AuthComponent user={loggedUser} />, container)
    })
    expect(container?.querySelector(".name")?.textContent).toBe(`${loggedUser.name}`)
    expect(container?.querySelector(".email")?.textContent).toBe(`${loggedUser.email}`)
  })
  test('Click "Go to the App" button redirects to the main page', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    jest.spyOn(require("next/router"), "useRouter").mockImplementation(() => ({
      push: mockPushRouter,
    }))
    const mockPushRouter = jest.fn()

    act(() => {
      ReactDOM.render(<AuthComponent user={loggedUser} />, container)
    })
    expect(container?.querySelector(".button")).not.toBeNull()
    const button = container?.querySelector(".button") as HTMLButtonElement
    button?.click()
    expect(mockPushRouter.mock.calls[0][0]).toBe("/content")
  })
  test("The LoginButton gets token on render", () => {
    const gapiLoadMock = jest.fn()
    const gapiInitMock = jest.fn()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window["gapi"] = {
      load: gapiLoadMock,
      auth2: {
        init: gapiInitMock,
      },
    }
    act(() => {
      ReactDOM.render(<LoginButton />, container)
    })
    expect(gapiLoadMock.mock.calls.length).toBe(1)
    expect(gapiLoadMock.mock.calls[0][0]).toBe("auth2")
    expect(gapiLoadMock.mock.calls[0][1]).toBeInstanceOf(Function)
    const auth2Func = gapiLoadMock.mock.calls[0][1]
    auth2Func.call()
    expect(gapiInitMock.mock.calls.length).toBe(1)
  })
  test("Click the LoginButton creates google window for auth", () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const gapiMock = jest.fn(() => new Promise(() => {}))
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window["gapi"] = {
      load: jest.fn(),
      auth2: {
        getAuthInstance: () => ({
          grantOfflineAccess: gapiMock,
        }),
      },
    }
    act(() => {
      ReactDOM.render(<LoginButton />, container)
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    container?.querySelector(".button")?.click()
    expect(gapiMock.mock.calls.length).toBe(1)
  })
  test("sendOneTimeCode refreshes page when data fetched", async () => {
    const code = { code: "123" }
    jest.spyOn(HTTPClient, "authPost").mockImplementation(
      () =>
        new Promise((resolve) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          resolve()
        })
    )
    const originalLocation = { ...window.location }
    const reloadMock = jest.fn()
    jest.spyOn(window, "location", "get").mockImplementation(() => ({
      ...originalLocation,
      reload: reloadMock,
    }))
    await sendOneTimeCode(code)
    expect(reloadMock.mock.calls.length).toBe(1)
  })
  test("sendOneTimeCode throws an error without oneTimeCode", async () => {
    const dataWithoutCode = {}
    try {
      sendOneTimeCode(dataWithoutCode)
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(e.message).toBe("Одноразовый код отсутствует")
    }
    expect.assertions(1)
  })
  test("sendOneTimeCode throws an error if fetch fails", async () => {
    const code = { code: "123" }
    jest.spyOn(HTTPClient, "authPost").mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          reject()
        })
    )
    const logErrorMock = jest.fn((errMessage) => {
      expect(errMessage).toBe("Авторизоваться не удалось")
    })
    jest.spyOn(logger, "error").mockImplementation(logErrorMock)
    sendOneTimeCode(code)
    expect.assertions(1)
  })
  test("The Auth page should render AuthComponent", () => {
    act(() => {
      ReactDOM.render(<AuthPage />, container)
    })
    expect(container?.querySelector(".authComponent")).not.toBeNull()
  })
  test("The Auth page sets fetched user data on render", () => {
    const mockedHttpRes = {
      data: {},
    }
    jest.spyOn(HTTPClient, "authGet").mockImplementation(
      () =>
        new Promise((resolve) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          resolve(mockedHttpRes)
        })
    )
    const stateChangerMock = jest.fn((data) => {
      expect(data).toBe(mockedHttpRes.data)
    })
    jest.spyOn(React, "useState").mockImplementation(() => [undefined, stateChangerMock])
    act(() => {
      ReactDOM.render(<AuthPage />, container)
    })
    expect.assertions(1)
  })
  test("The Auth page sets user 'undefined' if user data didn't fetch on render", () => {
    jest.spyOn(HTTPClient, "authGet").mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          reject()
        })
    )
    const stateChangerMock = jest.fn((data) => {
      expect(data).toBe(undefined)
    })
    jest.spyOn(React, "useState").mockImplementation(() => [undefined, stateChangerMock])
    act(() => {
      ReactDOM.render(<AuthPage />, container)
    })
    expect.assertions(1)
  })
})
