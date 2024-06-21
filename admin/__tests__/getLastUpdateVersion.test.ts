import { getLastUpdateVersion } from "../utils/getLastUpdateVersion"

describe("test getLastUpdateVersion", () => {
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

  const resultEn = {
    status: "updated",
    source: "en",
    version: "002",
    date: "2022-08-30T07:32:45.078Z",
    name: "Михаил Макеев",
  }
  const resultRu = {
    status: "updated",
    source: "ru",
    version: "003",
    date: "2022-09-01T07:46:04.316Z",
    name: "Михаил Макеев",
  }
  const resultDz = {
    status: "created",
    source: "dz",
    version: "001",
    date: "2022-08-30T07:32:48.180Z",
    name: "Михаил Макеев",
  }
  const resultVk = {
    status: "created",
    source: "vk",
    version: "001",
    date: "2022-08-30T07:32:48.213Z",
    name: "Михаил Макеев",
  }
  test("getLastUpdateVersion should work correctly", () => {
    expect(getLastUpdateVersion(mockHistory, "en")).toEqual(resultEn)
    expect(getLastUpdateVersion(mockHistory, "ru")).toEqual(resultRu)
    expect(getLastUpdateVersion(mockHistory, "dz")).toEqual(resultDz)
    expect(getLastUpdateVersion(mockHistory, "vk")).toEqual(resultVk)
  })
})
