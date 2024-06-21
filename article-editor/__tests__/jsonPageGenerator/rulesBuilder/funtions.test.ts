import { test } from "@jest/globals"
import identityFunc from "../../../utils/jsonPageGenerator/rulesBuilder/functionsRules/identityFunc"
import containerFunc from "../../../utils/jsonPageGenerator/rulesBuilder/functionsRules/containerFunc"
import { ContainerMeta, IdentityMeta } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../../../utils/jsonPageGenerator/rulesBuilder/functionsRules/functionsNames/IDENTITY"
import CONTAINER from "../../../utils/jsonPageGenerator/rulesBuilder/functionsRules/functionsNames/CONTAINER"

describe(`identity`, () => {
  test(`run identityFunc`, async () => {
    const params: { name: string; args: IdentityMeta } = {
      name: "id",
      args: "pageArticleTextId",
    }
    const result = identityFunc(params.name, params.args)
    const expected = {
      name: "id",
      function: IDENTITY,
      args: ["pageArticleTextId"],
    }
    expect(result).toEqual(expected)
  })
})

describe(`container`, () => {
  test(`run containerFunc`, async () => {
    const params: { name: string; args: ContainerMeta } = {
      name: "images",
      args: [
        {
          args: "pageImageCarouselImagesValues",
          componentVariableName: "imagesValues",
          function: IDENTITY,
        },
        {
          args: "pageImageCarouselImagesMeta",
          componentVariableName: "imagesMeta",
          function: IDENTITY,
        },
      ],
    }
    const result = containerFunc(params.name, params.args)
    const expected = {
      name: "images",
      function: CONTAINER,
      args: [
        {
          name: "imagesValues",
          function: "identity",
          args: ["pageImageCarouselImagesValues"],
        },
        {
          name: "imagesMeta",
          function: "identity",
          args: ["pageImageCarouselImagesMeta"],
        },
      ],
    }
    expect(result).toEqual(expected)
  })
})
