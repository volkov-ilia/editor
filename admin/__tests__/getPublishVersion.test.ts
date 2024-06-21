import { getPublishVersion } from "../utils/getPublishVersion"

describe("test getPublishVersion", () => {
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
      status: "published",
      source: "vk",
      version: "002",
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
  const mockHistoryWithoutPublish = [
    {
      status: "created",
      source: "ru",
      version: "001",
      date: "2022-08-30T07:32:39.386Z",
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
  ]
  const result = new Map([
    [
      "vk",
      {
        status: "published",
        source: "vk",
        version: "002",
        date: "2022-08-30T07:32:48.213Z",
        name: "Михаил Макеев",
      },
    ],
  ])
  const resultWithoutPublish = new Map([
    ["ru", { version: 0 }],
    ["dz", { version: 0 }],
    ["vk", { version: 0 }],
  ])
  test("getPublishVersion should work correctly", () => {
    expect(getPublishVersion(mockHistory)).toEqual(result)
    expect(getPublishVersion(mockHistoryWithoutPublish)).toEqual(resultWithoutPublish)
  })
})
