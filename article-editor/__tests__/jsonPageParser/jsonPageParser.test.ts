import { test } from "@jest/globals"
import jsonPageParser from "../../utils/jsonPageBuilder/jsonPageParser"
import JsonPage from "../../types/utils/jsonPageBuilder/JsonPage"

test(`jsonPageParser ArticleText`, async () => {
  const json: JsonPage = {
    components: ["ArticleText"],
    pageArticleTextId: "ArticleText",
    pageArticleTextText: "Monday - Friday",
    ArticleText: {
      type: "ArticleText",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageArticleTextId"],
        },
        {
          name: "text",
          function: "identity",
          args: ["pageArticleTextText"],
        },
      ],
    },
  }
  const result = jsonPageParser(json)
  const expected = [
    {
      type: "ArticleText",
      id: "ArticleText",
      text: "Monday - Friday",
    },
  ]
  expect(result.componentsProps).toEqual(expected)
})

test(`jsonPageParser styled ArticleText`, async () => {
  const json: JsonPage = {
    components: ["ArticleText"],
    pageArticleTextId: "ArticleText",
    pageArticleTextText: {
      text: [
        {
          type: "SecondHeader",
          text: "My SecondHeader",
        },
        {
          type: "ThirdHeader",
          text: "My ThirdHeader",
        },
        {
          text: "startup",
          color: "lightGreen",
          size: "xs",
        },
        {
          type: "icon",
          text: "startup",
          color: "lightGreen",
        },
        {
          type: "icon",
          text: "startup",
          size: "4xl",
        },
        {
          type: "styledText",
          styles: ["bold", "underline", "italic"],
          text: "Just because ",
        },
        {
          type: "link",
          href: "https://github.com/jacob-l/WopiHost",
          linkTitle: "Go to WOPI host repo on github",
          text: "source code",
        },
        " of our first implementation and ",
        {
          type: "points",
          text: [
            {
              type: "with links",
              text: [
                "open ",
                {
                  type: "link",
                  href: "https://github.com/jacob-l/WopiHost",
                  linkTitle: "Go to WOPI host repo on github",
                  text: "source code",
                },
                " see ",
                {
                  type: "link",
                  href: "https://habr.com/en/company/tiktokcoach/blog/223179/",
                  linkTitle: "Go to the article on habr",
                  text: "the article",
                },
                " about it.",
              ],
            },
            {
              type: "text",
              text: "Just some text",
            },
          ],
        },
        {
          type: "text",
          text: "Hello world! Technologies",
        },
        {
          type: "orderedList",
          text: [
            {
              type: "with links",
              text: [
                "open ",
                {
                  type: "link",
                  href: "https://github.com/jacob-l/WopiHost",
                  linkTitle: "Go to WOPI host repo on github",
                  text: "source code",
                },
                " about it.",
              ],
            },
            "number two",
          ],
        },
        {
          type: "unorderedList",
          text: [
            {
              type: "with links",
              text: [
                " see ",
                {
                  type: "link",
                  href: "https://habr.com/en/company/tiktokcoach/blog/223179/",
                  linkTitle: "Go to the article on habr",
                  text: "the article",
                },
                " about it.",
              ],
            },
            "number two",
          ],
        },
      ],
    },
    ArticleText: {
      type: "ArticleText",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageArticleTextId"],
        },
        {
          name: "text",
          function: "identity",
          args: ["pageArticleTextText"],
        },
      ],
    },
  }
  const result = jsonPageParser(json)
  const expected = [
    {
      type: "ArticleText",
      id: "ArticleText",
      text: {
        text: [
          {
            type: "SecondHeader",
            text: "My SecondHeader",
          },
          {
            type: "ThirdHeader",
            text: "My ThirdHeader",
          },
          {
            text: "startup",
            color: "lightGreen",
            size: "xs",
          },
          {
            type: "icon",
            text: "startup",
            color: "lightGreen",
          },
          {
            type: "icon",
            text: "startup",
            size: "4xl",
          },
          {
            type: "styledText",
            styles: ["bold", "underline", "italic"],
            text: "Just because ",
          },
          {
            type: "link",
            href: "https://github.com/jacob-l/WopiHost",
            linkTitle: "Go to WOPI host repo on github",
            text: "source code",
          },
          " of our first implementation and ",
          {
            type: "points",
            text: [
              {
                type: "with links",
                text: [
                  "open ",
                  {
                    type: "link",
                    href: "https://github.com/jacob-l/WopiHost",
                    linkTitle: "Go to WOPI host repo on github",
                    text: "source code",
                  },
                  " see ",
                  {
                    type: "link",
                    href: "https://habr.com/en/company/tiktokcoach/blog/223179/",
                    linkTitle: "Go to the article on habr",
                    text: "the article",
                  },
                  " about it.",
                ],
              },
              {
                type: "text",
                text: "Just some text",
              },
            ],
          },
          {
            type: "text",
            text: "Hello world! Technologies",
          },
          {
            type: "orderedList",
            text: [
              {
                type: "with links",
                text: [
                  "open ",
                  {
                    type: "link",
                    href: "https://github.com/jacob-l/WopiHost",
                    linkTitle: "Go to WOPI host repo on github",
                    text: "source code",
                  },
                  " about it.",
                ],
              },
              "number two",
            ],
          },
          {
            type: "unorderedList",
            text: [
              {
                type: "with links",
                text: [
                  " see ",
                  {
                    type: "link",
                    href: "https://habr.com/en/company/tiktokcoach/blog/223179/",
                    linkTitle: "Go to the article on habr",
                    text: "the article",
                  },
                  " about it.",
                ],
              },
              "number two",
            ],
          },
        ],
      },
    },
  ]
  expect(result.componentsProps).toEqual(expected)
})

test(`jsonPageParser ImageCarousel`, async () => {
  const json: JsonPage = {
    components: ["ImageCarousel"],
    pageImageCarouselId: "ImageCarousel",
    pageImageCarouselText: "Monday - Friday",
    ImageCarousel: {
      type: "ImageCarousel",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageImageCarouselId"],
        },
        {
          name: "text",
          function: "identity",
          args: ["pageImageCarouselText"],
        },
        {
          name: "images",
          function: "container",
          args: [
            {
              name: "cardsValues",
              function: "identity",
              args: ["pageImageCarouselImagesValues"],
            },
            {
              name: "cardsMeta",
              function: "identity",
              args: ["pageImageCarouselImagesMeta"],
            },
          ],
        },
      ],
    },
    pageImageCarouselImagesValues: [
      {
        src: "https://i.ibb.co/5Y8ZNmn/image20.png",
        alt: "button preview",
        width: 100,
        height: 100,
        description: "button",
      },
      {
        src: "https://i.ibb.co/sv4JjY0/text.png",
        alt: "text formatting preview",
        width: 100,
        height: 100,
      },
    ],
    pageImageCarouselImagesMeta: [
      {
        name: "src",
        function: "identity",
        args: ["src"],
      },
      {
        name: "alt",
        function: "identity",
        args: ["alt"],
      },
      {
        name: "width",
        function: "identity",
        args: ["width"],
      },
      {
        name: "height",
        function: "identity",
        args: ["height"],
      },
      {
        name: "description",
        function: "identity",
        args: ["description"],
      },
    ],
  }
  const result = jsonPageParser(json)
  const expected = [
    {
      type: "ImageCarousel",
      id: "ImageCarousel",
      text: "Monday - Friday",
      images: [
        {
          src: "https://i.ibb.co/5Y8ZNmn/image20.png",
          alt: "button preview",
          width: 100,
          height: 100,
          description: "button",
        },
        {
          src: "https://i.ibb.co/sv4JjY0/text.png",
          alt: "text formatting preview",
          width: 100,
          height: 100,
        },
      ],
    },
  ]
  expect(result.componentsProps).toEqual(expected)
})

test(`jsonPageParser ArticleYoutube`, async () => {
  const json: JsonPage = {
    components: ["ArticleYoutube"],
    idArticleYoutube: "idArticleYoutube",
    pageArticleYoutubePreviewImage: {
      src: "https://images.ctfassets.net/13g5no3omm60/4vYeusyxPkEqVSwc8WTZQP/496e75b5eabe51f7bb7ec0b40c31e22f/home-ArticleYoutube-preview.jpg",
      alt: "office tour video preview",
      width: 150,
      height: 120,
    },
    pageArticleYoutubeTitle: "HWDTech",
    pageArticleYoutubeVideoId: "dX2fKjXAF74",
    ArticleYoutube: {
      type: "ArticleYoutube",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["idArticleYoutube"],
        },
        {
          name: "title",
          function: "identity",
          args: ["pageArticleYoutubeTitle"],
        },
        {
          name: "previewImage",
          function: "identity",
          args: ["pageArticleYoutubePreviewImage"],
        },
        {
          name: "videoId",
          function: "identity",
          args: ["pageArticleYoutubeVideoId"],
        },
      ],
    },
  }
  const result = jsonPageParser(json)
  const expected = [
    {
      type: "ArticleYoutube",
      id: "idArticleYoutube",
      title: "HWDTech",
      previewImage: {
        src: "https://images.ctfassets.net/13g5no3omm60/4vYeusyxPkEqVSwc8WTZQP/496e75b5eabe51f7bb7ec0b40c31e22f/home-ArticleYoutube-preview.jpg",
        alt: "office tour video preview",
        width: 150,
        height: 120,
      },
      videoId: "dX2fKjXAF74",
    },
  ]
  expect(result.componentsProps).toEqual(expected)
})

test(`jsonPageParser CodeSnippet`, async () => {
  const json: JsonPage = {
    components: ["CodeSnippet"],
    pageCodeSnippetId: "CodeSnippet",
    pageCodeSnippetSrc: "https://codesandbox.io/embed/0qor7onxy0?fontsize=14&hidenavigation=1&theme=dark",
    pageCodeSnippetResource: "CodeSandbox",
    pageCodeSnippetTitle: "some title",
    pageCodeSnippetHeight: 600,
    CodeSnippet: {
      type: "CodeSnippet",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageCodeSnippetId"],
        },
        {
          name: "src",
          function: "identity",
          args: ["pageCodeSnippetSrc"],
        },
        {
          name: "resource",
          function: "identity",
          args: ["pageCodeSnippetResource"],
        },
        {
          name: "title",
          function: "identity",
          args: ["pageCodeSnippetTitle"],
        },
        {
          name: "height",
          function: "identity",
          args: ["pageCodeSnippetHeight"],
        },
      ],
    },
  }
  const result = jsonPageParser(json)
  const expected = [
    {
      type: "CodeSnippet",
      id: "CodeSnippet",
      src: "https://codesandbox.io/embed/0qor7onxy0?fontsize=14&hidenavigation=1&theme=dark",
      resource: "CodeSandbox",
      title: "some title",
      height: 600,
    },
  ]
  expect(result.componentsProps).toEqual(expected)
})

test(`jsonPageParser Code`, async () => {
  const json: JsonPage = {
    components: ["Code"],
    pageCodeId: "Code",
    pageCodeCode: "fun foo(a: string){\n}",
    pageCodeLanguage: "kotlin",
    Code: {
      type: "Code",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageCodeId"],
        },
        {
          name: "code",
          function: "identity",
          args: ["pageCodeCode"],
        },
        {
          name: "language",
          function: "identity",
          args: ["pageCodeLanguage"],
        },
      ],
    },
  }
  const result = jsonPageParser(json)
  const expected = [
    {
      type: "Code",
      id: "Code",
      code: "fun foo(a: string){\n}",
      language: "kotlin",
    },
  ]
  expect(result.componentsProps).toEqual(expected)
})

test(`jsonPageParser GrayBlockWithText`, async () => {
  const json: JsonPage = {
    components: ["GrayBlockWithText"],
    pageGrayBlockWithTextId: "GrayBlockWithText",
    pageGrayBlockWithTextBgColor: "#f4f4f4",
    pageGrayBlockWithTextText: "Monday - Friday",
    GrayBlockWithText: {
      type: "GrayBlockWithText",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageGrayBlockWithTextId"],
        },
        {
          name: "bgColor",
          function: "identity",
          args: ["pageGrayBlockWithTextBgColor"],
        },
        {
          name: "text",
          function: "identity",
          args: ["pageGrayBlockWithTextText"],
        },
      ],
    },
  }
  const result = jsonPageParser(json)
  const expected = [
    {
      type: "GrayBlockWithText",
      id: "GrayBlockWithText",
      bgColor: "#f4f4f4",
      text: "Monday - Friday",
    },
  ]
  expect(result.componentsProps).toEqual(expected)
})

test(`jsonPageParser ImageColumnWithText`, async () => {
  const json: JsonPage = {
    components: ["ImageColumnWithText"],
    pageImageColumnWithTextId: "ImageColumnWithText",
    pageImageColumnWithTextText: "Monday - Friday",
    pageImageColumnWithTextImage: {
      src: "https://i.ibb.co/5Y8ZNmn/image20.png",
      alt: "button preview",
      width: 100,
      height: 100,
      description: "button",
    },
    ImageColumnWithText: {
      type: "ImageColumnWithText",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageImageColumnWithTextId"],
        },
        {
          name: "text",
          function: "identity",
          args: ["pageImageColumnWithTextText"],
        },
        {
          name: "image",
          function: "identity",
          args: ["pageImageColumnWithTextImage"],
        },
      ],
    },
  }
  const result = jsonPageParser(json)
  const expected = [
    {
      type: "ImageColumnWithText",
      id: "ImageColumnWithText",
      text: "Monday - Friday",
      image: {
        src: "https://i.ibb.co/5Y8ZNmn/image20.png",
        alt: "button preview",
        width: 100,
        height: 100,
        description: "button",
      },
    },
  ]
  expect(result.componentsProps).toEqual(expected)
})

test(`jsonPageParser ImageWithSize`, async () => {
  const json: JsonPage = {
    components: ["ImageWithSize"],
    pageImageWithSizeId: "ImageWithSize",
    pageImageWithSizeImage: {
      src: "https://i.ibb.co/5Y8ZNmn/image20.png",
      alt: "button preview",
      width: 100,
      height: 100,
      description: "button",
    },
    ImageWithSize: {
      type: "ImageWithSize",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageImageWithSizeId"],
        },
        {
          name: "image",
          function: "identity",
          args: ["pageImageWithSizeImage"],
        },
      ],
    },
  }
  const result = jsonPageParser(json)
  const expected = [
    {
      type: "ImageWithSize",
      id: "ImageWithSize",
      image: {
        src: "https://i.ibb.co/5Y8ZNmn/image20.png",
        alt: "button preview",
        width: 100,
        height: 100,
        description: "button",
      },
    },
  ]
  expect(result.componentsProps).toEqual(expected)
})

test(`jsonPageParser Quote`, async () => {
  const json: JsonPage = {
    components: ["Quote"],
    pageQuoteId: "Quote",
    pageQuoteText: "some quote here",
    pageQuoteSignature: "John Doe",
    Quote: {
      type: "Quote",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageQuoteId"],
        },
        {
          name: "quote",
          function: "identity",
          args: ["pageQuoteText"],
        },
        {
          name: "signature",
          function: "identity",
          args: ["pageQuoteSignature"],
        },
      ],
    },
  }
  const result = jsonPageParser(json)
  const expected = [
    {
      type: "Quote",
      id: "Quote",
      quote: "some quote here",
      signature: "John Doe",
    },
  ]
  expect(result.componentsProps).toEqual(expected)
})

test(`jsonPageParser Separator`, async () => {
  const json: JsonPage = {
    components: ["Separator"],
    pageSeparatorId: "Separator",
    Separator: {
      type: "Separator",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageSeparatorId"],
        },
      ],
    },
  }
  const result = jsonPageParser(json)
  const expected = [
    {
      type: "Separator",
      id: "Separator",
    },
  ]
  expect(result.componentsProps).toEqual(expected)
})

test(`jsonPageParser TextWithGreenLine`, async () => {
  const json: JsonPage = {
    components: ["TextWithGreenLine"],
    pageTextWithGreenLineId: "TextWithGreenLine",
    pageTextWithGreenLineText: "Monday - Friday",
    TextWithGreenLine: {
      type: "TextWithGreenLine",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageTextWithGreenLineId"],
        },
        {
          name: "text",
          function: "identity",
          args: ["pageTextWithGreenLineText"],
        },
      ],
    },
  }
  const result = jsonPageParser(json)
  const expected = [
    {
      type: "TextWithGreenLine",
      id: "TextWithGreenLine",
      text: "Monday - Friday",
    },
  ]
  expect(result.componentsProps).toEqual(expected)
})

test(`jsonPageParser TwoImagesWithText`, async () => {
  const json: JsonPage = {
    components: ["TwoImagesWithText"],
    pageTwoImagesWithTextId: "TwoImagesWithText",
    pageTwoImagesWithTextText: "Monday - Friday",
    TwoImagesWithText: {
      type: "TwoImagesWithText",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageTwoImagesWithTextId"],
        },
        {
          name: "text",
          function: "identity",
          args: ["pageTwoImagesWithTextText"],
        },
        {
          name: "images",
          function: "container",
          args: [
            {
              name: "cardsValues",
              function: "identity",
              args: ["pageTwoImagesWithTextImagesValues"],
            },
            {
              name: "cardsMeta",
              function: "identity",
              args: ["pageTwoImagesWithTextImagesMeta"],
            },
          ],
        },
      ],
    },
    pageTwoImagesWithTextImagesValues: [
      {
        src: "https://i.ibb.co/5Y8ZNmn/image20.png",
        alt: "button preview",
        width: 100,
        height: 100,
        description: "button",
      },
      {
        src: "https://i.ibb.co/sv4JjY0/text.png",
        alt: "text formatting preview",
        width: 100,
        height: 100,
      },
    ],
    pageTwoImagesWithTextImagesMeta: [
      {
        name: "src",
        function: "identity",
        args: ["src"],
      },
      {
        name: "alt",
        function: "identity",
        args: ["alt"],
      },
      {
        name: "width",
        function: "identity",
        args: ["width"],
      },
      {
        name: "height",
        function: "identity",
        args: ["height"],
      },
      {
        name: "description",
        function: "identity",
        args: ["description"],
      },
    ],
  }
  const result = jsonPageParser(json)
  const expected = [
    {
      type: "TwoImagesWithText",
      id: "TwoImagesWithText",
      text: "Monday - Friday",
      images: [
        {
          src: "https://i.ibb.co/5Y8ZNmn/image20.png",
          alt: "button preview",
          width: 100,
          height: 100,
          description: "button",
        },
        {
          src: "https://i.ibb.co/sv4JjY0/text.png",
          alt: "text formatting preview",
          width: 100,
          height: 100,
        },
      ],
    },
  ]
  expect(result.componentsProps).toEqual(expected)
})
