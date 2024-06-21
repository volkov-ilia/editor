import { test } from "@jest/globals"
import renderer, { ReactTestRendererJSON } from "react-test-renderer"

import { Picture } from "../components/Picture/Picture"

import tetImg from "../public/testImg/teamAndPlant.jpg"

let container: null | HTMLElement = null

const imgSrc = tetImg
const testAlt = "TestAlt"

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container as HTMLElement)
  container = null
})

describe("test Pictures", () => {
  test("The Picture Component should render a img", () => {
    const component = renderer.create(<Picture srcImg={imgSrc.toString()} imgAlt={testAlt} />)
    const tree = component.toJSON()
    expect((tree as ReactTestRendererJSON).type).toEqual("img")
    expect((tree as ReactTestRendererJSON).props.src).toEqual(imgSrc)
    expect((tree as ReactTestRendererJSON).props.alt).toEqual(testAlt)
  })
})
