import { test } from "@jest/globals"
import { Descendant } from "slate"
import slateTextHandler from "../../utils/jsonPageGenerator/handlers/nested/slateTextHandler"
import { JsonStyledText } from "../../types/utils/jsonPageGenerator/StyledText"
import ChildrenHandlerReturnType from "../../types/utils/jsonPageGenerator/ChildrenHandlerReturnType"

test(`bold ArticleText `, async () => {
  const slateValue: Descendant[] = [
    {
      type: "paragraph",
      children: [
        {
          text: "bold",
          bold: true,
        },
      ],
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: [
      {
        styles: ["bold"],
        text: "bold",
        type: "styledText",
      },
    ],
  }
  expect(result).toEqual(expected)
})

test(`underline ArticleText`, async () => {
  const slateValue: Descendant[] = [
    {
      type: "paragraph",
      children: [
        {
          text: "underline",
          underline: true,
        },
      ],
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: [
      {
        styles: ["underline"],
        text: "underline",
        type: "styledText",
      },
    ],
  }
  expect(result).toEqual(expected)
})

test(`strike ArticleText`, async () => {
  const slateValue: Descendant[] = [
    {
      type: "paragraph",
      children: [
        {
          text: "strike",
          strike: true,
        },
      ],
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: [
      {
        type: "styledText",
        text: "strike",
        styles: ["strike"],
      },
    ],
  }
  expect(result).toEqual(expected)
})

test(`italic ArticleText`, async () => {
  const slateValue: Descendant[] = [
    {
      type: "paragraph",
      children: [
        {
          text: "italic",
          italic: true,
        },
      ],
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: [
      {
        type: "styledText",
        text: "italic",
        styles: ["italic"],
      },
    ],
  }
  expect(result).toEqual(expected)
})

test(`main styles ArticleText`, async () => {
  const slateValue: Descendant[] = [
    {
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
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: [
      {
        type: "styledText",
        text: "all",
        styles: ["bold", "underline", "strike", "italic"],
      },
    ],
  }
  expect(((result as { text: ChildrenHandlerReturnType[] }).text[0] as JsonStyledText).type).toEqual(
    expected.text[0].type
  )
  expect(((result as { text: ChildrenHandlerReturnType[] }).text[0] as JsonStyledText).text).toEqual(
    expected.text[0].text
  )
  expect(((result as { text: ChildrenHandlerReturnType[] }).text[0] as JsonStyledText).styles!.sort()).toEqual(
    expected.text[0].styles.sort()
  )
})

test(`link text ArticleText`, async () => {
  const slateValue: Descendant[] = [
    {
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
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: [
      "some ",
      {
        type: "link",
        href: "https://myHappyLink",
        linkTitle: "my link title",
        text: "link",
      },
      " in text",
    ],
  }
  expect(result).toEqual(expected)
})

test(`few children ArticleText`, async () => {
  const slateValue: Descendant[] = [
    {
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
    },
    {
      type: "paragraph",
      children: [
        {
          text: "1 ",
        },
        {
          text: " 2",
        },
      ],
    },
    {
      type: "SecondHeader",
      children: [
        {
          text: "second",
        },
      ],
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: [
      "some ",
      {
        type: "link",
        href: "https://myHappyLink",
        linkTitle: "my link title",
        text: "link",
      },
      " in text",
      "\n",
      "1 ",
      " 2",
      "\n",
      {
        type: "secondHeader",
        text: "second",
      },
    ],
  }
  expect(result).toEqual(expected)
})

test(`SecondHeader ArticleText`, async () => {
  const slateValue: Descendant[] = [
    {
      type: "SecondHeader",
      children: [
        {
          text: "second",
        },
      ],
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: [
      {
        type: "secondHeader",
        text: "second",
      },
    ],
  }
  expect(result).toEqual(expected)
})

test(`ThirdHeader ArticleText`, async () => {
  const slateValue: Descendant[] = [
    {
      type: "ThirdHeader",
      children: [
        {
          text: "third",
        },
      ],
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: [
      {
        type: "thirdHeader",
        text: "third",
      },
    ],
  }
  expect(result).toEqual(expected)
})

test(`textCenter ArticleText`, async () => {
  const slateValue: Descendant[] = [
    {
      type: "textCenter",
      children: [
        {
          text: "center text",
        },
      ],
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: [
      {
        type: "styledText",
        text: "center text",
        styles: ["textCenter"],
      },
    ],
  }
  expect(result).toEqual(expected)
})

test(`textRight ArticleText`, async () => {
  const slateValue: Descendant[] = [
    {
      type: "textRight",
      children: [
        {
          text: "right text",
        },
      ],
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: [
      {
        type: "styledText",
        text: "right text",
        styles: ["textRight"],
      },
    ],
  }
  expect(result).toEqual(expected)
})

test(`OrderedList ArticleText`, async () => {
  const slateValue: Descendant[] = [
    {
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
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: [
      {
        type: "orderedList",
        text: ["ordered", "list"],
      },
    ],
  }
  expect(result).toEqual(expected)
})

test(`UnorderedList ArticleText`, async () => {
  const slateValue: Descendant[] = [
    {
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
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: [
      {
        type: "unorderedList",
        text: ["unordered", "list"],
      },
    ],
  }
  expect(result).toEqual(expected)
})

test(`newLine ArticleText`, async () => {
  const slateValue: Descendant[] = [
    {
      type: "paragraph",
      children: [
        {
          text: "",
        },
      ],
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: ["\n"],
  }
  expect(result).toEqual(expected)
})

test(`text ArticleText`, async () => {
  const slateValue: Descendant[] = [
    {
      type: "paragraph",
      children: [
        {
          text: "end",
        },
      ],
    },
  ]
  const result = slateTextHandler(slateValue)
  const expected = {
    text: ["end"],
  }
  expect(result).toEqual(expected)
})
