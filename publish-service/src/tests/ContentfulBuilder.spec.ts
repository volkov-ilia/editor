import ContentfulBuilder from "../builders/Contentful/ContentfulBuilder"
import { NodeHandlerProps } from "../types/NodeHandler"
import Contentful from "../types/Contentful"
import ComponentIdGenerator from "../builders/Contentful/dependencies/ComponentIdGenerator"

beforeEach(() => {
  const mockStaticMethod: () => string = jest.fn(() => {
    return ""
  })
  ComponentIdGenerator.shortId = mockStaticMethod
})

describe("ContentfulBuilder tests", () => {
  test("ArticleTextHandler should save to _result correct value", () => {
    const slateComponentMock: NodeHandlerProps = {
      type: "ArticleText",
      children: [
        {
          children: [
            {
              text: "",
            },
          ],
          type: "paragraph",
        },
      ],
    }
    const correctValueMock: Contentful.ArticleConverted = {
      components: ["ArticleText"],
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
      pageArticleTextId: "ArticleText",
      pageArticleTextText: {
        text: ["\n"],
      },
    }
    ContentfulBuilder.ArticleTextHandler(slateComponentMock)
    expect(ContentfulBuilder.getResult).toEqual(correctValueMock)
    ContentfulBuilder.reset()
  })
  test("GrayBlockWithTextHandler should save to _result correct value", () => {
    const slateComponentMock: NodeHandlerProps = {
      type: "GrayBlockWithText",
      children: [
        {
          type: "description",
          children: [
            {
              text: "",
            },
          ],
        },
      ],
    }
    const correctValueMock: Contentful.ArticleConverted = {
      components: ["GrayBlockWithText"],
      GrayBlockWithText: {
        type: "GrayBlockWithText",
        rules: [
          {
            name: "id",
            function: "identity",
            args: ["pageGrayBlockWithTextId"],
          },
          {
            name: "text",
            function: "identity",
            args: ["pageGrayBlockWithTextText"],
          },
        ],
      },
      pageGrayBlockWithTextId: "GrayBlockWithText",
      pageGrayBlockWithTextText: {
        text: ["\n"],
      },
    }
    ContentfulBuilder.GrayBlockWithTextHandler(slateComponentMock)
    expect(ContentfulBuilder.getResult).toEqual(correctValueMock)
    ContentfulBuilder.reset()
  })
  test("ImageCarouselHandler should save to _result correct value", () => {
    const slateComponentMock: NodeHandlerProps = {
      type: "ImageCarousel",
      children: [
        {
          type: "addImage",
          children: [
            {
              text: "",
            },
          ],
          isVoid: true,
        },
      ],
    }
    const correctValueMock: Contentful.ArticleConverted = {
      components: ["ImageCarousel"],
      ImageCarousel: {
        type: "ImageCarousel",
        rules: [
          {
            name: "id",
            function: "identity",
            args: ["pageImageCarouselId"],
          },
          {
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
          },
        ],
      },
      pageImageCarouselId: "ImageCarousel",
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
    ContentfulBuilder.ImageCarouselHandler(slateComponentMock)
    expect(ContentfulBuilder.getResult).toEqual(correctValueMock)
    ContentfulBuilder.reset()
  })
  test("TwoImagesWithTextHandler should save to _result correct value", () => {
    const slateComponentMock: NodeHandlerProps = {
      type: "TwoImagesWithText",
      children: [
        {
          type: "description",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "image",
          children: [
            {
              type: "alt",
              children: [
                {
                  text: "",
                },
              ],
            },
            {
              type: "ImageDescription",
              children: [
                {
                  text: "",
                },
              ],
            },
          ],
          position: 0,
          url: "",
        },
        {
          type: "image",
          children: [
            {
              type: "alt",
              children: [
                {
                  text: "",
                },
              ],
            },
            {
              type: "ImageDescription",
              children: [
                {
                  text: "",
                },
              ],
            },
          ],
          position: 0,
          url: "",
        },
      ],
    }
    const correctValueMock: Contentful.ArticleConverted = {
      components: ["TwoImagesWithText"],
      TwoImagesWithText: {
        type: "TwoImagesWithText",
        rules: [
          {
            name: "id",
            function: "identity",
            args: ["pageTwoImagesWithTextId"],
          },
          {
            name: "images",
            function: "container",
            args: [
              {
                name: "imagesValues",
                function: "identity",
                args: ["pageTwoImagesWithTextImagesValues"],
              },
              {
                name: "imagesMeta",
                function: "identity",
                args: ["pageTwoImagesWithTextImagesMeta"],
              },
            ],
          },
          {
            name: "text",
            function: "identity",
            args: ["pageTwoImagesWithTextText"],
          },
        ],
      },
      pageTwoImagesWithTextId: "TwoImagesWithText",
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
      pageTwoImagesWithTextText: {
        text: ["\n"],
      },
    }
    ContentfulBuilder.TwoImagesWithTextHandler(slateComponentMock)
    expect(ContentfulBuilder.getResult).toEqual(correctValueMock)
    ContentfulBuilder.reset()
  })
  test("TextWithGreenLineHandler should save to _result correct value", () => {
    const slateComponentMock: NodeHandlerProps = {
      type: "TextWithGreenLine",
      children: [
        {
          type: "description",
          children: [
            {
              text: "",
            },
          ],
        },
      ],
    }
    const correctValueMock: Contentful.ArticleConverted = {
      components: ["TextWithGreenLine"],
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
      pageTextWithGreenLineId: "TextWithGreenLine",
      pageTextWithGreenLineText: {
        text: ["\n"],
      },
    }
    ContentfulBuilder.TextWithGreenLineHandler(slateComponentMock)
    expect(ContentfulBuilder.getResult).toEqual(correctValueMock)
    ContentfulBuilder.reset()
  })
  test("SeparatorHandler should save to _result correct value", () => {
    const slateComponentMock: NodeHandlerProps = {
      type: "Separator",
      children: [
        {
          children: [
            {
              text: "",
              type: "void",
            },
          ],
        },
      ],
    }
    const correctValueMock: Contentful.ArticleConverted = {
      components: ["Separator"],
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
      pageSeparatorId: "Separator",
    }
    ContentfulBuilder.SeparatorHandler(slateComponentMock)
    expect(ContentfulBuilder.getResult).toEqual(correctValueMock)
    ContentfulBuilder.reset()
  })
  test("ImageColumnWithTextHandler should save to _result correct value", () => {
    const slateComponentMock: NodeHandlerProps = {
      type: "ImageColumnWithText",
      children: [
        {
          type: "image",
          children: [
            {
              type: "alt",
              children: [
                {
                  text: "",
                },
              ],
            },
            {
              type: "ImageDescription",
              children: [
                {
                  text: "",
                },
              ],
            },
          ],
          position: 0,
          url: "",
        },
        {
          children: [
            {
              text: "",
            },
          ],
          type: "paragraph",
        },
      ],
    }
    const correctValueMock: Contentful.ArticleConverted = {
      components: ["ImageColumnWithText"],
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
      pageImageColumnWithTextId: "ImageColumnWithText",
      pageImageColumnWithTextText: {
        text: ["\n"],
      },
    }
    ContentfulBuilder.ImageColumnWithTextHandler(slateComponentMock)
    expect(ContentfulBuilder.getResult).toEqual(correctValueMock)
    ContentfulBuilder.reset()
  })
  test("ArticleYoutubeHandler should save to _result correct value", () => {
    const slateComponentMock: NodeHandlerProps = {
      type: "ArticleYoutube",
      children: [
        {
          type: "link",
          children: [
            {
              text: "",
            },
          ],
          placeholder: "Type the video id",
        },
      ],
    }
    const correctValueMock: Contentful.ArticleConverted = {
      components: ["ArticleYoutube"],
      ArticleYoutube: {
        type: "ArticleYoutube",
        rules: [
          {
            name: "id",
            function: "identity",
            args: ["pageArticleYoutubeId"],
          },
        ],
      },
      pageArticleYoutubeId: "ArticleYoutube",
    }
    ContentfulBuilder.ArticleYoutubeHandler(slateComponentMock)
    expect(ContentfulBuilder.getResult).toEqual(correctValueMock)
    ContentfulBuilder.reset()
  })
  test("QuoteHandler should save to _result correct value", () => {
    const slateComponentMock: NodeHandlerProps = {
      type: "Quote",
      children: [
        {
          type: "quoteText",
          children: [
            {
              text: "",
            },
          ],
          placeholder: "Type the quote",
        },
        {
          children: [
            {
              text: "",
            },
          ],
          type: "signature",
          placeholder: "Type the author",
          placeholderRight: true,
        },
      ],
    }
    const correctValueMock: Contentful.ArticleConverted = {
      components: ["Quote"],
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
            args: ["pageQuoteQuote"],
          },
        ],
      },
      pageQuoteId: "Quote",
      pageQuoteQuote: {
        text: ["\n"],
      },
    }
    ContentfulBuilder.QuoteHandler(slateComponentMock)
    expect(ContentfulBuilder.getResult).toEqual(correctValueMock)
    ContentfulBuilder.reset()
  })
  test("CodeSnippetHandler should save to _result correct value", () => {
    const slateComponentMock: NodeHandlerProps = {
      type: "CodeSnippet",
      children: [
        {
          type: "link",
          children: [
            {
              text: "",
            },
          ],
          placeholder: "Type the url",
        },
        {
          type: "selector",
          children: [
            {
              text: "CodeSandBox",
            },
          ],
          values: ["CodeSandBox", "GitHub", "GitLab"],
        },
        {
          type: "title",
          children: [
            {
              text: "",
            },
          ],
          placeholder: "Type the title",
        },
        {
          type: "height",
          children: [
            {
              text: "",
            },
          ],
          placeholder: "Type iframe height",
        },
      ],
    }
    const correctValueMock: Contentful.ArticleConverted = {
      components: ["CodeSnippet"],
      CodeSnippet: {
        type: "CodeSnippet",
        rules: [
          {
            name: "id",
            function: "identity",
            args: ["pageCodeSnippetId"],
          },
          {
            name: "resource",
            function: "identity",
            args: ["pageCodeSnippetResource"],
          },
        ],
      },
      pageCodeSnippetId: "CodeSnippet",
      pageCodeSnippetResource: "CodeSandBox",
    }
    ContentfulBuilder.CodeSnippetHandler(slateComponentMock)
    expect(ContentfulBuilder.getResult).toEqual(correctValueMock)
    ContentfulBuilder.reset()
  })
  test("ImageWithSizeHandler should save to _result correct value", () => {
    const slateComponentMock: NodeHandlerProps = {
      type: "ImageWithSize",
      children: [
        {
          type: "image",
          children: [
            {
              type: "alt",
              children: [
                {
                  text: "",
                },
              ],
            },
            {
              type: "ImageDescription",
              children: [
                {
                  text: "",
                },
              ],
            },
          ],
          position: 0,
          url: "",
        },
      ],
    }
    const correctValueMock: Contentful.ArticleConverted = {
      components: ["ImageWithSize"],
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
      pageImageWithSizeId: "ImageWithSize",
    }
    ContentfulBuilder.ImageWithSizeHandler(slateComponentMock)
    expect(ContentfulBuilder.getResult).toEqual(correctValueMock)
    ContentfulBuilder.reset()
  })
  test("CodeHandler should save to _result correct value", () => {
    const slateComponentMock: NodeHandlerProps = {
      type: "Code",
      children: [
        {
          type: "codeItem",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "selector",
          children: [
            {
              text: "js",
            },
          ],
          values: ["js", "kotlin", "cpp", "csharp", "json", "python", "java", "clike", "html", "xml"],
        },
      ],
    }
    const correctValueMock: Contentful.ArticleConverted = {
      components: ["Code"],
      Code: {
        type: "Code",
        rules: [
          {
            name: "id",
            function: "identity",
            args: ["pageCodeId"],
          },
          {
            name: "language",
            function: "identity",
            args: ["pageCodeLanguage"],
          },
        ],
      },
      pageCodeId: "Code",
      pageCodeLanguage: "js",
    }
    ContentfulBuilder.CodeHandler(slateComponentMock)
    expect(ContentfulBuilder.getResult).toEqual(correctValueMock)
    ContentfulBuilder.reset()
  })
})
