import { test } from "@jest/globals"
import paragraphHandler from "../../utils/jsonPageGenerator/handlers/nested/styledText/paragraphHandler"
import listsHandler from "../../utils/jsonPageGenerator/handlers/nested/styledText/listsHandler"
import headersHandler from "../../utils/jsonPageGenerator/handlers/nested/styledText/headersHandler"
import { JsonStyledText } from "../../types/utils/jsonPageGenerator/StyledText"
import { Descendant } from "slate"

describe(`paragraph`, () => {
  test(`just text`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "some code",
        },
      ],
    }
    const result = paragraphHandler({ component: slateValue })
    const expected = "some code"
    expect(result).toEqual(expected)
  })

  test(`empty paragraph to \\n`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "",
        },
      ],
    }
    const result = paragraphHandler({ component: slateValue })
    const expected = "\n"
    expect(result).toEqual(expected)
  })

  test(`bold`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "bold",
          bold: true,
        },
      ],
    }
    const result = paragraphHandler({ component: slateValue })
    const expected = {
      type: "styledText",
      text: "bold",
      styles: ["bold"],
    }
    expect(result).toEqual(expected)
  })

  test(`underline`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "underline",
          underline: true,
        },
      ],
    }
    const result = paragraphHandler({ component: slateValue })
    const expected = {
      type: "styledText",
      text: "underline",
      styles: ["underline"],
    }
    expect(result).toEqual(expected)
  })

  test(`strike`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "strike",
          strike: true,
        },
      ],
    }
    const result = paragraphHandler({ component: slateValue })
    const expected = {
      type: "styledText",
      text: "strike",
      styles: ["strike"],
    }
    expect(result).toEqual(expected)
  })

  test(`italic`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "italic",
          italic: true,
        },
      ],
    }
    const result = paragraphHandler({ component: slateValue })
    const expected = {
      type: "styledText",
      text: "italic",
      styles: ["italic"],
    }
    expect(result).toEqual(expected)
  })

  test(`bold italic underline strike`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "all",
          bold: true,
          italic: true,
          underline: true,
          strike: true,
        },
      ],
    }
    const result = paragraphHandler({ component: slateValue })
    const expected = {
      type: "styledText",
      text: "all",
      styles: ["bold", "underline", "strike", "italic"],
    }
    expect((result as JsonStyledText).type).toEqual(expected.type)
    expect((result as JsonStyledText).text).toEqual(expected.text)
    expect((result as JsonStyledText).styles!.sort()).toEqual(expected.styles.sort())
  })

  test(`textCenter`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "center text",
          textCenter: true,
        },
      ],
    }
    const result = paragraphHandler({ component: slateValue })
    const expected = {
      type: "styledText",
      text: "center text",
      styles: ["textCenter"],
    }
    expect(result).toEqual(expected)
  })

  test(`textRight`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "right text",
          textRight: true,
        },
      ],
    }
    const result = paragraphHandler({ component: slateValue })
    const expected = {
      type: "styledText",
      text: "right text",
      styles: ["textRight"],
    }
    expect(result).toEqual(expected)
  })

  test(`linkInText`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
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
      ],
    }
    const result = paragraphHandler({ component: slateValue })
    const expected = {
      type: "link",
      href: "https://myHappyLink",
      linkTitle: "my link title",
      text: "link",
    }
    expect(result).toEqual(expected)
  })

  test(`nested text with text`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "some ",
        },
        {
          text: "",
        },
      ],
    }
    const result = paragraphHandler({ component: slateValue })
    const expected = {
      text: ["some ", "\n"],
    }
    expect(result).toEqual(expected)
  })

  test(`nested text with link`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
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
          text: "",
        },
      ],
    }
    const result = paragraphHandler({ component: slateValue })
    const expected = {
      text: [
        {
          type: "link",
          href: "https://myHappyLink",
          linkTitle: "my link title",
          text: "link",
        },
        "\n",
      ],
    }
    expect(result).toEqual(expected)
  })

  test(`nested text with styled text`, async () => {
    const slateValue: Descendant = {
      type: "paragraph",
      children: [
        {
          text: "all",
          bold: true,
          italic: true,
          underline: true,
          strike: true,
        },
        {
          text: "",
        },
      ],
    }
    const result = paragraphHandler({ component: slateValue })
    const expected = {
      text: [
        {
          type: "styledText",
          text: "all",
          styles: ["bold", "italic", "underline", "strike"],
        },
        "\n",
      ],
    }
    expect(result).toEqual(expected)
  })
})

describe(`headers`, () => {
  test(`SecondHeader`, async () => {
    const slateValue: Descendant = {
      type: "SecondHeader",
      children: [
        {
          text: "second",
        },
      ],
    }
    const result = headersHandler({ component: slateValue })
    const expected = {
      type: "secondHeader",
      text: "second",
    }
    expect(result).toEqual(expected)
  })

  test(`ThirdHeader`, async () => {
    const slateValue: Descendant = {
      type: "ThirdHeader",
      children: [
        {
          text: "third",
        },
      ],
    }
    const result = headersHandler({ component: slateValue })
    const expected = {
      type: "thirdHeader",
      text: "third",
    }
    expect(result).toEqual(expected)
  })
})

describe(`lists`, () => {
  test(`OrderedList`, async () => {
    const slateValue: Descendant = {
      type: "OrderedList",
      children: [
        {
          type: "listItem",
          children: [
            {
              text: "ordered",
            },
          ],
        },
        {
          type: "listItem",
          children: [
            {
              text: "list",
            },
          ],
        },
      ],
    }
    const result = listsHandler({ component: slateValue })
    const expected = {
      type: "orderedList",
      text: ["ordered", "list"],
    }
    expect(result).toEqual(expected)
  })

  test(`OrderedList styled items`, async () => {
    const slateValue: Descendant = {
      type: "OrderedList",
      children: [
        {
          type: "listItem",
          children: [
            {
              text: "ordered",
              bold: true,
            },
          ],
        },
        {
          type: "listItem",
          children: [
            {
              text: "list",
            },
          ],
        },
      ],
    }
    const result = listsHandler({ component: slateValue })
    const expected = {
      type: "orderedList",
      text: [{ type: "styledText", text: "ordered", styles: ["bold"] }, "list"],
    }
    expect(result).toEqual(expected)
  })

  test(`unorderedList`, async () => {
    const slateValue: Descendant = {
      type: "UnorderedList",
      children: [
        {
          type: "unorderedListItem",
          children: [
            {
              text: "unordered",
            },
          ],
        },
        {
          type: "unorderedListItem",
          children: [
            {
              text: "list",
            },
          ],
        },
      ],
    }
    const result = listsHandler({ component: slateValue })
    const expected = {
      type: "unorderedList",
      text: ["unordered", "list"],
    }
    expect(result).toEqual(expected)
  })

  test(`unorderedList link item`, async () => {
    const slateValue: Descendant = {
      type: "UnorderedList",
      children: [
        {
          type: "unorderedListItem",
          children: [
            {
              type: "linkInText",
              url: "https://myHappyLink",
              title: "my link title",
              children: [
                {
                  text: "unordered",
                },
              ],
            },
          ],
        },
        {
          type: "unorderedListItem",
          children: [
            {
              text: "list",
            },
          ],
        },
      ],
    }
    const result = listsHandler({ component: slateValue })
    const expected = {
      type: "unorderedList",
      text: [
        {
          type: "link",
          href: "https://myHappyLink",
          linkTitle: "my link title",
          text: "unordered",
        },
        "list",
      ],
    }
    expect(result).toEqual(expected)
  })
})
