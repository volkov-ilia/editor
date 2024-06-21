import { formatResources } from "../utils/formatResources"

describe("test formatResources", () => {
  const mockRes = [
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
  const result = new Map([
    ["ru", { slug: "6310633be557edcfc0f83fbc", version: "003" }],
    ["en", { slug: "630dbd1d9ee85fc6a2665b15", version: "002" }],
    ["dz", { slug: "630dbd209ee85fc6a2665b20", version: "001" }],
    ["vk", { slug: "630dbd209ee85fc6a2665b25", version: "001" }],
  ])
  test("formatResources should format correctly", () => {
    expect(formatResources(mockRes)).toEqual(result)
  })
})
