import { test } from "@jest/globals"
import SIMPLE_TEXT from "../../utils/jsonPageGenerator/handlers/nested/styledText/childrenTypes/SIMPLE_TEXT"
import checkSimpleText from "../../utils/jsonPageGenerator/handlers/nested/styledText/checkChildrenType/checkSimpleText"
import checkNewLineSymbol from "../../utils/jsonPageGenerator/handlers/nested/styledText/checkChildrenType/checkNewLineSymbol"
import NEW_LINE_SYMBOL from "../../utils/jsonPageGenerator/handlers/nested/styledText/childrenTypes/NEW_LINE_SYMBOL"
import checkStyledText from "../../utils/jsonPageGenerator/handlers/nested/styledText/checkChildrenType/checkStyledText"
import STYLED_TEXT from "../../utils/jsonPageGenerator/handlers/nested/styledText/childrenTypes/STYLED_TEXT"
import checkLink from "../../utils/jsonPageGenerator/handlers/nested/styledText/checkChildrenType/checkLink"
import LINK from "../../utils/jsonPageGenerator/handlers/nested/styledText/childrenTypes/LINK"
import { Descendant } from "slate"

describe(`text`, () => {
  test(`text`, async () => {
    const slateValue: Descendant = {
      text: "some code",
    }
    const result = checkSimpleText(slateValue)
    const expected = { type: SIMPLE_TEXT, isThisType: true }
    expect(result).toEqual(expected)
  })

  test(`empty paragraph to \\n not text`, async () => {
    const slateValue: Descendant = {
      text: "",
    }
    const result = checkSimpleText(slateValue)
    const expected = { type: SIMPLE_TEXT, isThisType: false }
    expect(result).toEqual(expected)
  })

  test(`italic not text`, async () => {
    const slateValue: Descendant = {
      text: "italic",
      italic: true,
    }
    const result = checkSimpleText(slateValue)
    const expected = { type: SIMPLE_TEXT, isThisType: false }
    expect(result).toEqual(expected)
  })

  test(`linkInText not text`, async () => {
    const slateValue: Descendant = {
      type: "linkInText",
      url: "https://myHappyLink",
      title: "my link title",
      children: [
        {
          text: "link",
        },
      ],
    }
    const result = checkSimpleText(slateValue)
    const expected = { type: SIMPLE_TEXT, isThisType: false }
    expect(result).toEqual(expected)
  })

  test(`nested text not text`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "some ",
        },
        {
          type: "linkInText",
          url: "https://myHappyLink",
          title: "my link title",
          children: [
            {
              text: "link",
            },
          ],
        },
        {
          text: " in text",
        },
      ],
    }
    const result = checkSimpleText(slateValue)
    const expected = { type: SIMPLE_TEXT, isThisType: false }
    expect(result).toEqual(expected)
  })
})

describe(`newline`, () => {
  test(`empty paragraph to \\n`, async () => {
    const slateValue: Descendant = {
      text: "",
    }
    const result = checkNewLineSymbol(slateValue)
    const expected = { type: NEW_LINE_SYMBOL, isThisType: true }
    expect(result).toEqual(expected)
  })

  test(`linkInText not newline`, async () => {
    const slateValue: Descendant = {
      type: "linkInText",
      url: "https://myHappyLink",
      title: "my link title",
      children: [
        {
          text: "link",
        },
      ],
    }
    const result = checkNewLineSymbol(slateValue)
    const expected = { type: NEW_LINE_SYMBOL, isThisType: false }
    expect(result).toEqual(expected)
  })

  test(`text not newline`, async () => {
    const slateValue: Descendant = {
      text: "some code",
    }
    const result = checkNewLineSymbol(slateValue)
    const expected = { type: NEW_LINE_SYMBOL, isThisType: false }
    expect(result).toEqual(expected)
  })

  test(`italic not newline`, async () => {
    const slateValue: Descendant = {
      text: "italic",
      italic: true,
    }
    const result = checkNewLineSymbol(slateValue)
    const expected = { type: NEW_LINE_SYMBOL, isThisType: false }
    expect(result).toEqual(expected)
  })

  test(`nested text not newline`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "some ",
        },
        {
          type: "linkInText",
          url: "https://myHappyLink",
          title: "my link title",
          children: [
            {
              text: "link",
            },
          ],
        },
        {
          text: " in text",
        },
      ],
    }
    const result = checkNewLineSymbol(slateValue)
    const expected = { type: NEW_LINE_SYMBOL, isThisType: false }
    expect(result).toEqual(expected)
  })
})

describe(`styled text`, () => {
  test(`italic`, async () => {
    const slateValue: Descendant = {
      text: "italic",
      italic: true,
    }
    const result = checkStyledText(slateValue)
    const expected = { type: STYLED_TEXT, isThisType: true }
    expect(result).toEqual(expected)
  })

  test(`bold italic underline strike`, async () => {
    const slateValue: Descendant = {
      text: "all",
      bold: true,
      italic: true,
      underline: true,
      strike: true,
    }
    const result = checkStyledText(slateValue)
    const expected = { type: STYLED_TEXT, isThisType: true }
    expect(result).toEqual(expected)
  })

  test(`text not styled text`, async () => {
    const slateValue: Descendant = {
      text: "some code",
    }
    const result = checkStyledText(slateValue)
    const expected = { type: STYLED_TEXT, isThisType: false }
    expect(result).toEqual(expected)
  })

  test(`empty paragraph to \\n not styled text`, async () => {
    const slateValue: Descendant = {
      text: "",
    }
    const result = checkStyledText(slateValue)
    const expected = { type: STYLED_TEXT, isThisType: false }
    expect(result).toEqual(expected)
  })

  test(`linkInText not  not styled text`, async () => {
    const slateValue: Descendant = {
      type: "linkInText",
      url: "https://myHappyLink",
      title: "my link title",
      children: [
        {
          text: "link",
        },
      ],
    }
    const result = checkStyledText(slateValue)
    const expected = { type: STYLED_TEXT, isThisType: false }
    expect(result).toEqual(expected)
  })

  test(`nested text not  styled text`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "some ",
        },
        {
          type: "linkInText",
          url: "https://myHappyLink",
          title: "my link title",
          children: [
            {
              text: "link",
            },
          ],
        },
        {
          text: " in text",
        },
      ],
    }
    const result = checkStyledText(slateValue)
    const expected = { type: STYLED_TEXT, isThisType: false }
    expect(result).toEqual(expected)
  })
})

describe(`link`, () => {
  test(`linkInText`, async () => {
    const slateValue: Descendant = {
      type: "linkInText",
      url: "https://myHappyLink",
      title: "my link title",
      children: [
        {
          text: "link",
        },
      ],
    }
    const result = checkLink(slateValue)
    const expected = { type: LINK, isThisType: true }
    expect(result).toEqual(expected)
  })

  test(`text not link`, async () => {
    const slateValue: Descendant = {
      text: "some code",
    }
    const result = checkLink(slateValue)
    const expected = { type: LINK, isThisType: false }
    expect(result).toEqual(expected)
  })

  test(`empty paragraph to \\n not link`, async () => {
    const slateValue: Descendant = {
      text: "",
    }
    const result = checkLink(slateValue)
    const expected = { type: LINK, isThisType: false }
    expect(result).toEqual(expected)
  })

  test(`italic not link`, async () => {
    const slateValue: Descendant = {
      text: "italic",
      italic: true,
    }
    const result = checkLink(slateValue)
    const expected = { type: LINK, isThisType: false }
    expect(result).toEqual(expected)
  })

  test(`nested text not link`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "some ",
        },
        {
          type: "linkInText",
          url: "https://myHappyLink",
          title: "my link title",
          children: [
            {
              text: "link",
            },
          ],
        },
        {
          text: " in text",
        },
      ],
    }
    const result = checkLink(slateValue)
    const expected = { type: LINK, isThisType: false }
    expect(result).toEqual(expected)
  })
})
