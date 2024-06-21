import { PublishService } from "../publish/publish.service"
import { PublishRepository } from "../publish/publish.repository"
import { Article } from "../publish/schemas/article.schema"
import { PublishController } from "../publish/publish.controller"
import { getModelToken } from "@nestjs/mongoose"
import { Test } from "@nestjs/testing"
import VkBuilder from "../builders/Vk/VkBuilder"

let publishRepository: PublishRepository
let publishService: PublishService
let publishController: PublishController

beforeEach(async () => {
  const moduleRef = await Test.createTestingModule({
    controllers: [PublishController],
    providers: [
      PublishRepository,
      PublishService,
      {
        provide: getModelToken("Article"),
        useValue: Article,
      },
    ],
  }).compile()
  publishRepository = moduleRef.get<PublishRepository>(PublishRepository)
  publishService = moduleRef.get<PublishService>(PublishService)
  publishController = moduleRef.get<PublishController>(PublishController)
})

describe("test VKConverter", () => {
  test("test ArticleTest", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockArticleTest)).toEqual({
      text: ["testArticleText"],
      docs: [],
      imgs: [],
    })
  })
  test("test elementWithoutType", () => {
    expect(publishService.convert(VkBuilder, articleMock.elementWithoutType)).toEqual({
      text: [],
      docs: [],
      imgs: [],
    })
  })
  test("test elementWithoutChildren", () => {
    expect(publishService.convert(VkBuilder, articleMock.elementWithoutChildren)).toEqual({
      text: [],
      docs: [],
      imgs: [],
    })
  })
  test("test CodeSnippetHandler", () => {
    expect(publishService.convert(VkBuilder, articleMock.CodeSnippet)).toEqual({
      text: [],
      docs: [],
      imgs: [],
    })
  })
  test("test ArticleTestWithoutChild", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockArticleTestWithoutChild)).toEqual({
      text: [],
      docs: [],
      imgs: [],
    })
  })
  test("test Quote", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockQuote)).toEqual({
      text: ["testQuote", "QouteSys"],
      docs: [],
      imgs: [],
    })
  })
  test("test QuoteWithoutQuoteText", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockQuoteWithoutQuoteText)).toEqual({
      text: ["QouteSys"],
      docs: [],
      imgs: [],
    })
  })
  test("test QuoteWithoutSignature", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockQuoteWithoutSignature)).toEqual({
      text: ["testQuote"],
      docs: [],
      imgs: [],
    })
  })
  test("test Code", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockCode)).toEqual({
      text: ["const a = () => {", "  return b", "}", "const b = 4321", "const c = a + b"],
      docs: [],
      imgs: [],
    })
  })
  test("test Code", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockCodeWithoutCodeItem)).toEqual({
      text: [],
      docs: [],
      imgs: [],
    })
  })
  test("test ArticleYoutube", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockArticleYoutube)).toEqual({
      text: ["https://www.youtube.com/embed/qXqeKDLYApU"],
      docs: [],
      imgs: [],
    })
  })
  test("test ArticleYoutubeWithoutLink", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockArticleYoutubeWithoutLink)).toEqual({
      text: [],
      docs: [],
      imgs: [],
    })
  })
  test("test TextWithGreenLine", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockTextWithGreenLine)).toEqual({
      text: ["testTextWithGreenLine"],
      docs: [],
      imgs: [],
    })
  })
  test("test GrayBlockWithText", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockGrayBlockWithText)).toEqual({
      text: ["textGrayBlock"],
      docs: [],
      imgs: [],
    })
  })
  test("test TextWithGreenLine", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockTextWithGreenLine)).toEqual({
      text: ["testTextWithGreenLine"],
      docs: [],
      imgs: [],
    })
  })
  test("test ImageWithSize", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockImageWithSize)).toEqual({ text: [], docs: [], imgs: [] })
  })
  test("test ImageColumnWithText", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockImageColumnWithText)).toEqual({
      text: [],
      docs: [],
      imgs: [],
    })
  })
  test("test TwoImageWithText", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockTwoImageWithText)).toEqual({
      text: [],
      docs: [],
      imgs: ["testUrl_1", "testUrl_2"],
    })
  })
  test("test ImageCarousel", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockImageCarousel)).toEqual({ text: [], docs: [], imgs: [] })
  })
  test("test SeparatorHandler", () => {
    expect(publishService.convert(VkBuilder, articleMock.mockSeparator)).toEqual({ text: [], docs: [], imgs: [] })
  })
})

const articleMock = {
  elementWithoutChildren: [
    {
      type: "ArticleText",
    },
  ],
  CodeSnippet: [
    {
      type: "CodeSnippet",
    },
  ],
  a: [
    {
      children: [
        {
          type: "does not exist",
          children: [
            {
              text: "testArticleText",
            },
          ],
        },
      ],
    },
  ],
  b: [
    {
      type: "ArticleText",
      children: [
        {
          children: [
            {
              text: "testArticleText",
            },
          ],
        },
      ],
    },
  ],
  c: [
    {
      type: "ArticleText",
      children: [],
    },
  ],
  elementWithoutType: [
    {
      type: "ArticleText",
      children: [
        {
          type: "does not exist",
          children: [
            {
              text: "testArticleText",
            },
          ],
        },
      ],
    },
  ],
  mockArticleTest: [
    {
      type: "ArticleText",
      children: [
        {
          children: [
            {
              text: "testArticleText",
            },
          ],
          type: "paragraph",
        },
      ],
    },
  ],
  mockArticleTestWithoutChild: [
    {
      type: "ArticleText",
      children: [
        {
          type: "paragraph",
        },
      ],
    },
  ],
  mockQuote: [
    {
      type: "Quote",
      children: [
        {
          type: "quoteText",
          children: [
            {
              text: "testQuote",
            },
          ],
          placeholder: "Type the quote",
        },
        {
          children: [
            {
              text: "QouteSys",
            },
          ],
          type: "signature",
          placeholder: "Type the author",
          placeholderRight: true,
        },
      ],
    },
    {
      type: "Quote",
      children: [
        {
          type: "quoteText",
          children: [],
          placeholder: "Type the quote",
        },
        {
          children: [],
          type: "signature",
          placeholder: "Type the author",
          placeholderRight: true,
        },
      ],
    },
  ],
  mockQuoteWithoutSignature: [
    {
      type: "Quote",
      children: [
        {
          type: "quoteText",
          children: [
            {
              text: "testQuote",
            },
          ],
          placeholder: "Type the quote",
        },
        {
          type: "signature",
          placeholder: "Type the author",
          placeholderRight: true,
        },
      ],
    },
    {
      type: "Quote",
      children: [
        {
          type: "quoteText",
          children: [],
          placeholder: "Type the quote",
        },
        {
          children: [],
          type: "signature",
          placeholder: "Type the author",
          placeholderRight: true,
        },
      ],
    },
  ],
  mockQuoteWithoutQuoteText: [
    {
      type: "Quote",
      children: [
        {
          type: "quoteText",
          placeholder: "Type the quote",
        },
        {
          children: [
            {
              text: "QouteSys",
            },
          ],
          type: "signature",
          placeholder: "Type the author",
          placeholderRight: true,
        },
      ],
    },
    {
      type: "Quote",
      children: [
        {
          type: "quoteText",
          children: [],
          placeholder: "Type the quote",
        },
        {
          children: [],
          type: "signature",
          placeholder: "Type the author",
          placeholderRight: true,
        },
      ],
    },
  ],
  mockCode: [
    {
      type: "Code",
      children: [
        {
          type: "codeItem",
          children: [
            {
              text: "const a = () => {",
            },
          ],
        },
        {
          type: "codeItem",
          children: [
            {
              text: "  return b",
            },
          ],
        },
        {
          type: "codeItem",
          children: [
            {
              text: "}",
            },
          ],
        },
        {
          type: "codeItem",
          children: [
            {
              text: "const b = 4321",
            },
          ],
        },
        {
          type: "codeItem",
          children: [
            {
              text: "const c = a + b",
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
    },
    {
      type: "Code",
      children: [
        {
          type: "codeItem",
          children: [],
        },
        {
          type: "codeItem",
          children: [],
        },
        {
          type: "codeItem",
          children: [],
        },
        {
          type: "codeItem",
          children: [],
        },
        {
          type: "codeItem",
          children: [],
        },
        {
          type: "selector",
          children: [],
          values: ["js", "kotlin", "cpp", "csharp", "json", "python", "java", "clike", "html", "xml"],
        },
      ],
    },
  ],
  mockCodeWithoutCodeItem: [
    {
      type: "Code",
      children: [
        {
          type: "codeItem",
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
    },
    {
      type: "Code",
      children: [
        {
          type: "codeItem",
          children: [],
        },
        {
          type: "codeItem",
          children: [],
        },
        {
          type: "codeItem",
          children: [],
        },
        {
          type: "codeItem",
          children: [],
        },
        {
          type: "codeItem",
          children: [],
        },
        {
          type: "selector",
          children: [],
          values: ["js", "kotlin", "cpp", "csharp", "json", "python", "java", "clike", "html", "xml"],
        },
      ],
    },
  ],
  mockArticleYoutube: [
    {
      type: "ArticleYoutube",
      children: [
        {
          type: "link",
          children: [
            {
              text: "qXqeKDLYApU",
            },
          ],
          placeholder: "Type the video id",
        },
        {
          type: "link",
          placeholder: "Type the video id",
          children: [
            {
              text: "",
            },
          ],
        },
      ],
    },
  ],
  mockArticleYoutubeWithoutLink: [
    {
      type: "ArticleYoutube",
      children: [
        {
          type: "link",
          placeholder: "Type the video id",
        },
      ],
    },
  ],
  mockGrayBlockWithText: [
    {
      type: "GrayBlockWithText",
      children: [
        {
          type: "description",
          children: [
            {
              text: "textGrayBlock",
            },
          ],
        },
      ],
    },
  ],
  mockTextWithGreenLine: [
    {
      type: "TextWithGreenLine",
      children: [
        {
          type: "description",
          children: [
            {
              text: "testTextWithGreenLine",
            },
          ],
        },
      ],
    },
  ],
  mockImageWithSize: [
    {
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
    },
  ],
  mockImageColumnWithText: [
    {
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
    },
  ],
  mockTwoImageWithText: [
    {
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
                  text: "testAlt_1",
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
          url: "testUrl_1",
        },
        {
          type: "image",
          children: [
            {
              type: "alt",
              children: [
                {
                  text: "testAlt_2",
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
          url: "testUrl_2",
        },
      ],
    },
  ],
  mockImageCarousel: [
    {
      type: "ImageCarousel",
      children: [
        {
          type: "addImage",
          children: [
            {
              text: "ImageCarousel",
            },
          ],
          isVoid: true,
        },
      ],
    },
  ],
  mockSeparator: [
    {
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
    },
  ],
}
