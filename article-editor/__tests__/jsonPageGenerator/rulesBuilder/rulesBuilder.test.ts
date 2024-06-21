import { test } from "@jest/globals"
import ruleBuilder from "../../../utils/jsonPageGenerator/rulesBuilder/ruleBuilder"
import { RuleMeta } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../../../utils/jsonPageGenerator/rulesBuilder/functionsRules/functionsNames/IDENTITY"
import CONTAINER from "../../../utils/jsonPageGenerator/rulesBuilder/functionsRules/functionsNames/CONTAINER"

describe(`identity`, () => {
  test(`ruleBuilder identity`, async () => {
    const params: RuleMeta = {
      args: "pageImageCarouselImagesValues",
      componentVariableName: "imagesValues",
      function: IDENTITY,
    }
    const result = ruleBuilder(params)
    const expected = {
      name: "imagesValues",
      function: "identity",
      args: ["pageImageCarouselImagesValues"],
    }
    expect(result).toEqual(expected)
  })
})

describe(`container`, () => {
  test(`ruleBuilder container`, async () => {
    const params: RuleMeta = {
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
      componentVariableName: "images",
      function: CONTAINER,
    }
    const result = ruleBuilder(params)
    const expected = {
      name: "images",
      function: "container",
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
