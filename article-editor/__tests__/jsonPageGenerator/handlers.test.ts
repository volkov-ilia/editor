import { test } from "@jest/globals"
import { Descendant } from "slate"
import articleTextHandler from "../../utils/jsonPageGenerator/handlers/articleTextHandler"
import { ComponentHandlerResult } from "../../types/utils/jsonPageGenerator/NodeHandler"
import replace from "lodash/replace"
import camelcase from "camelcase"
import imageCarouselHandler from "../../utils/jsonPageGenerator/handlers/imageCarouselHandler"
import articleYoutubeHandler from "../../utils/jsonPageGenerator/handlers/articleYoutubeHandler"
import codeSnippetHandler from "../../utils/jsonPageGenerator/handlers/codeSnippetHandler"
import codeHandler from "../../utils/jsonPageGenerator/handlers/codeHandler"
import grayBlockWithTextHandler from "../../utils/jsonPageGenerator/handlers/grayBlockWithTextHandler"
import imageColumnWithTextHandler from "../../utils/jsonPageGenerator/handlers/imageColumnWithTextHandler"
import cloneDeep from "lodash/cloneDeep"
import imageWithSizeHandler from "../../utils/jsonPageGenerator/handlers/imageWithSizeHandler"
import quoteHandler from "../../utils/jsonPageGenerator/handlers/quoteHandler"
import separatorHandler from "../../utils/jsonPageGenerator/handlers/separatorHandler"
import textWithGreenLineHandler from "../../utils/jsonPageGenerator/handlers/textWithGreenLineHandler"
import twoImagesWithTextHandler from "../../utils/jsonPageGenerator/handlers/twoImagesWithTextHandler"
import { PageFieldsTypes } from "../../types/Slate/Components/PageFieldsTypes"
import bgTitleHandler from "../../utils/jsonPageGenerator/handlers/common/bgTitleHandler"
import IStringJson from "../../types/utils/contentful/IStringJson"
import metaHandler from "../../utils/jsonPageGenerator/handlers/unprinted/metaHandler"
import metaOpenGraphHandler from "../../utils/jsonPageGenerator/handlers/unprinted/metaOpenGraphHandler"
import META_OPENGRAPH from "../../types/utils/packageComponents/META_OPENGRAPH"
import META_TWITTER from "../../types/utils/packageComponents/META_TWITTER"
import metaTwitterHandler from "../../utils/jsonPageGenerator/handlers/unprinted/metaTwitterHandler"
import MICRO_META_ARTICLE from "../../types/utils/packageComponents/MICRO_META_ARTICLE"
import microMetaArticleHandler from "../../utils/jsonPageGenerator/handlers/unprinted/microMetaArticleHandler"
import camelCase from "lodash/camelCase"

const normalizeExpected = (expected: ComponentHandlerResult, resultName: string, thisName: string) => {
  const newPrefixName = camelcase(`page${resultName}`)
  const newComponentName = `"${resultName}"`
  let temp = cloneDeep(expected)
  temp = JSON.parse(replace(JSON.stringify(temp), new RegExp(`"${thisName}"`, "g"), newComponentName))
  temp = JSON.parse(replace(JSON.stringify(temp), new RegExp(`page${thisName}`, "g"), newPrefixName))
  temp.name = resultName
  temp.component.type = thisName

  return temp
}

test(`ArticleText handler`, async () => {
  const componentType = "ArticleText"
  const slateValue: Descendant = {
    type: "ArticleText",
    children: [
      {
        type: "paragraph",
        children: [
          {
            text: "some code",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "bold",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "underline",
            underline: true,
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "strike",
            strike: true,
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "italic",
            italic: true,
          },
        ],
      },
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
      {
        type: "SecondHeader",
        children: [
          {
            text: "second",
          },
        ],
      },
      {
        type: "ThirdHeader",
        children: [
          {
            text: "third",
          },
        ],
      },
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
        type: "textCenter",
        children: [
          {
            text: "center text",
          },
        ],
      },
      {
        type: "textRight",
        children: [
          {
            text: "right text",
          },
        ],
      },
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
      {
        type: "paragraph",
        children: [
          {
            text: "",
          },
        ],
      },
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
      {
        type: "paragraph",
        children: [
          {
            text: "",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "end",
          },
        ],
      },
    ],
  }
  const result: ComponentHandlerResult = articleTextHandler({
    component: slateValue,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "ArticleText",
    component: {
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
    fields: {
      pageArticleTextId: "ArticleText",
      pageArticleTextText: {
        text: [
          "some code",
          "\n",
          {
            type: "styledText",
            text: "bold",
            styles: ["bold"],
          },
          "\n",
          {
            type: "styledText",
            text: "underline",
            styles: ["underline"],
          },
          "\n",
          {
            type: "styledText",
            text: "strike",
            styles: ["strike"],
          },
          "\n",
          {
            type: "styledText",
            text: "italic",
            styles: ["italic"],
          },
          "\n",
          {
            type: "styledText",
            text: "all",
            styles: ["bold", "italic", "underline", "strike"],
          },
          "\n",
          {
            type: "secondHeader",
            text: "second",
          },
          "\n",
          {
            type: "thirdHeader",
            text: "third",
          },
          "\n",
          "some ",
          {
            type: "link",
            text: "link",
            href: "https://myHappyLink",
            linkTitle: "my link title",
          },
          " in text",
          "\n",
          {
            type: "styledText",
            text: "center text",
            styles: ["textCenter"],
          },
          "\n",
          {
            type: "styledText",
            text: "right text",
            styles: ["textRight"],
          },
          "\n",
          {
            type: "orderedList",
            text: ["ordered", "list"],
          },
          "\n",
          "\n",
          {
            type: "unorderedList",
            text: ["unordered", "list"],
          },
          "\n",
          "\n",
          "end",
        ],
      },
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`ImageCarousel handler`, async () => {
  const componentType = "ImageCarousel"
  const slateValue: Descendant = {
    type: "ImageCarousel",
    children: [
      {
        type: "ImageCarouselItem",
        children: [
          {
            type: "alt",
            children: [
              {
                text: "button preview",
              },
            ],
            placeholder: "Type image alt",
          },
          {
            type: "description",
            children: [
              {
                text: "button",
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
            placeholder: "Type image description",
          },
          {
            type: "position",
            children: [
              {
                text: "",
              },
            ],
            placeholder: "Type the position",
          },
        ],
        url: "https://images.ctfassets.net/13g5no3omm60/1fVM1nL5FYDUq4HMeHtX1a/151a1b10d3e15e4e53e743a2d0105143/000image_16.jpg",
        position: 0,
      },
      {
        type: "ImageCarouselItem",
        children: [
          {
            type: "alt",
            children: [
              {
                text: "text formatting preview",
              },
            ],
            placeholder: "Type image alt",
          },
          {
            type: "description",
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
            placeholder: "Type image description",
          },
          {
            type: "position",
            children: [
              {
                text: "",
              },
            ],
            placeholder: "Type the position",
          },
        ],
        url: "https://images.ctfassets.net/13g5no3omm60/1GgSiv5GitHf6MlemugODb/8b830c9ff519bf891c77bee89d5e7d6a/add.svg",
        position: 1,
      },
      {
        type: "ImageCarouselItem",
        children: [
          {
            type: "alt",
            children: [
              {
                text: "",
              },
            ],
            placeholder: "Type image alt",
          },
          {
            type: "description",
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
            placeholder: "Type image description",
          },
          {
            type: "position",
            children: [
              {
                text: "",
              },
            ],
            placeholder: "Type the position",
          },
        ],
        url: "",
        position: 2,
      },
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
  const result: ComponentHandlerResult = imageCarouselHandler({
    component: slateValue,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "ImageCarousel",
    component: {
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
    fields: {
      pageImageCarouselId: "ImageCarousel",
      pageImageCarouselImagesValues: [
        {
          src: "https://images.ctfassets.net/13g5no3omm60/1fVM1nL5FYDUq4HMeHtX1a/151a1b10d3e15e4e53e743a2d0105143/000image_16.jpg",
          alt: "button preview",
          description: "button",
        },
        {
          src: "https://images.ctfassets.net/13g5no3omm60/1GgSiv5GitHf6MlemugODb/8b830c9ff519bf891c77bee89d5e7d6a/add.svg",
          alt: "text formatting preview",
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
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`ArticleYoutube handler`, async () => {
  const componentType = "ArticleYoutube"
  const slateValue: Descendant = {
    type: "ArticleYoutube",
    children: [
      {
        type: "link",
        children: [{ text: "dX2fKjXAF74" }],
        placeholder: "Type the url",
      },
    ],
  }
  const result: ComponentHandlerResult = articleYoutubeHandler({
    component: slateValue,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "ArticleYoutube",
    component: {
      type: "ArticleYoutube",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageArticleYoutubeId"],
        },
        {
          name: "videoId",
          function: "identity",
          args: ["pageArticleYoutubeVideoId"],
        },
      ],
    },
    fields: {
      pageArticleYoutubeId: "ArticleYoutube",
      pageArticleYoutubeVideoId: "dX2fKjXAF74",
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`Code handler`, async () => {
  const componentType = "Code"
  const slateValue: Descendant = {
    type: "Code",
    children: [
      { type: "codeItem", children: [{ text: 'const str = "str"' }] },
      {
        type: "codeItem",
        children: [{ text: 'let a = ["a"]' }],
      },
      {
        type: "selector",
        children: [{ text: "js" }],
        values: ["js", "kotlin", "cpp", "csharp", "json", "python", "java", "clike", "html", "xml"],
      },
    ],
  }
  const result: ComponentHandlerResult = codeHandler({
    component: slateValue,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "Code",
    component: {
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
        {
          name: "code",
          function: "identity",
          args: ["pageCodeCode"],
        },
      ],
    },
    fields: {
      pageCodeId: "Code",
      pageCodeLanguage: "js",
      pageCodeCode: 'const str = "str"\nlet a = ["a"]',
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`CodeSnippet gitlab handler`, async () => {
  const componentType = "CodeSnippet"
  const slateValue: Descendant = {
    type: "CodeSnippet",
    children: [
      {
        type: "link",
        children: [{ text: "https://gitlab.com/-/snippets/2095295.js" }],
        placeholder: "Type the url",
      },
      {
        type: "selector",
        children: [{ text: "GitLab" }],
        values: ["CodeSandBox", "GitHub", "GitLab"],
      },
      {
        type: "title",
        children: [{ text: "title" }],
        placeholder: "Type the title",
      },
      {
        type: "height",
        children: [{ text: "450" }],
        placeholder: "Type iframe height",
      },
    ],
  }
  const result: ComponentHandlerResult = codeSnippetHandler({
    component: slateValue,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "CodeSnippet",
    component: {
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
    fields: {
      pageCodeSnippetId: "CodeSnippet",
      pageCodeSnippetSrc: "https://gitlab.com/-/snippets/2095295.js",
      pageCodeSnippetResource: "GitLab",
      pageCodeSnippetTitle: "title",
      pageCodeSnippetHeight: "450",
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`CodeSnippet github handler`, async () => {
  const componentType = "CodeSnippet"
  const slateValue: Descendant = {
    type: "CodeSnippet",
    children: [
      {
        type: "link",
        children: [
          {
            text: "https://gist.github.com/hieptl/c6f210ce1c4a3bfb13130ca6a7b8fba6.js",
          },
        ],
        placeholder: "Type the url",
      },
      {
        type: "selector",
        children: [{ text: "GitHub" }],
        values: ["CodeSandBox", "GitHub", "GitLab"],
      },
      {
        type: "title",
        children: [{ text: "title" }],
        placeholder: "Type the title",
      },
      {
        type: "height",
        children: [{ text: "500" }],
        placeholder: "Type iframe height",
      },
    ],
  }
  const result: ComponentHandlerResult = codeSnippetHandler({
    component: slateValue,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "CodeSnippet",
    component: {
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
    fields: {
      pageCodeSnippetId: "CodeSnippet",
      pageCodeSnippetSrc: "https://gist.github.com/hieptl/c6f210ce1c4a3bfb13130ca6a7b8fba6.js",
      pageCodeSnippetResource: "GitHub",
      pageCodeSnippetTitle: "title",
      pageCodeSnippetHeight: "500",
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`CodeSnippet sandbox handler`, async () => {
  const componentType = "CodeSnippet"
  const slateValue: Descendant = {
    type: "CodeSnippet",
    children: [
      {
        type: "link",
        children: [{ text: "https://codesandbox.io/embed/0qor7onxy0?fontsize=14" }],
        placeholder: "Type the url",
      },
      {
        type: "selector",
        children: [{ text: "CodeSandBox" }],
        values: ["CodeSandBox", "GitHub", "GitLab"],
      },
      {
        type: "title",
        children: [{ text: "sandbox" }],
        placeholder: "Type the title",
      },
      {
        type: "height",
        children: [{ text: "700" }],
        placeholder: "Type iframe height",
      },
    ],
  }
  const result: ComponentHandlerResult = codeSnippetHandler({
    component: slateValue,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "CodeSnippet",
    component: {
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
    fields: {
      pageCodeSnippetId: "CodeSnippet",
      pageCodeSnippetSrc: "https://codesandbox.io/embed/0qor7onxy0?fontsize=14",
      pageCodeSnippetResource: "CodeSandBox",
      pageCodeSnippetTitle: "sandbox",
      pageCodeSnippetHeight: "700",
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`GrayBlockWithText handler`, async () => {
  const componentType = "GrayBlockWithText"
  const slateValue: Descendant = {
    type: "GrayBlockWithText",
    children: [
      {
        type: "description",
        children: [
          { text: "my", italic: true },
          { text: " " },
          { text: "styled", bold: true },
          { text: " " },
          { text: "text", underline: true },
        ],
      },
      { type: "description", children: [{ text: "no style" }] },
    ],
  }
  const result: ComponentHandlerResult = grayBlockWithTextHandler({
    component: slateValue,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "GrayBlockWithText",
    component: {
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
    fields: {
      pageGrayBlockWithTextId: "GrayBlockWithText",
      pageGrayBlockWithTextText: {
        text: [
          {
            styles: ["italic"],
            text: "my",
            type: "styledText",
          },
          " ",
          {
            styles: ["bold"],
            text: "styled",
            type: "styledText",
          },
          " ",
          {
            styles: ["underline"],
            text: "text",
            type: "styledText",
          },
          "\n",
          "no style",
        ],
      },
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`ImageColumnWithText handler`, async () => {
  const componentType = "ImageColumnWithText"
  const slateValue: Descendant = {
    type: "ImageColumnWithText",
    children: [
      {
        type: "image",
        children: [
          {
            type: "alt",
            children: [{ text: "button preview" }],
            placeholder: "Type image alt",
          },
          {
            type: "ImageDescription",
            children: [{ text: "desc" }],
            placeholder: "Type image description",
          },
        ],
        position: 0,
        url: "https://images.ctfassets.net/13g5no3omm60/1fVM1nL5FYDUq4HMeHtX1a/151a1b10d3e15e4e53e743a2d0105143/000image_16.jpg",
      },
      {
        children: [{ text: "styled", bold: true }, { text: " " }, { text: "text", italic: true }],
        type: "paragraph",
      },
      {
        type: "paragraph",
        children: [{ text: "new text " }, { text: "line", strike: true }],
      },
      { type: "paragraph", children: [{ text: "" }] },
    ],
  }
  const result: ComponentHandlerResult = imageColumnWithTextHandler({
    component: slateValue,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "ImageColumnWithText",
    component: {
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
    fields: {
      pageImageColumnWithTextId: "ImageColumnWithText",
      pageImageColumnWithTextText: {
        text: [
          {
            type: "styledText",
            text: "styled",
            styles: ["bold"],
          },
          " ",
          {
            type: "styledText",
            text: "text",
            styles: ["italic"],
          },
          "\n",
          "new text ",
          {
            type: "styledText",
            text: "line",
            styles: ["strike"],
          },
          "\n",
          "\n",
        ],
      },
      pageImageColumnWithTextImage: {
        src: "https://images.ctfassets.net/13g5no3omm60/1fVM1nL5FYDUq4HMeHtX1a/151a1b10d3e15e4e53e743a2d0105143/000image_16.jpg",
        alt: "button preview",
        description: "desc",
      },
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`ImageWithSize handler`, async () => {
  const componentType = "ImageWithSize"
  const slateValue: Descendant = {
    type: "ImageWithSize",
    children: [
      {
        type: "image",
        children: [
          {
            type: "alt",
            children: [{ text: "image alt" }],
            placeholder: "Type image alt",
          },
          {
            type: "ImageDescription",
            children: [{ text: "image descr" }],
            placeholder: "Type image description",
          },
        ],
        position: 0,
        url: "https://images.ctfassets.net/13g5no3omm60/1fVM1nL5FYDUq4HMeHtX1a/151a1b10d3e15e4e53e743a2d0105143/000image_16.jpg",
      },
    ],
  }
  const result: ComponentHandlerResult = imageWithSizeHandler({
    component: slateValue,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "ImageWithSize",
    component: {
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
    fields: {
      pageImageWithSizeId: "ImageWithSize",
      pageImageWithSizeImage: {
        src: "https://images.ctfassets.net/13g5no3omm60/1fVM1nL5FYDUq4HMeHtX1a/151a1b10d3e15e4e53e743a2d0105143/000image_16.jpg",
        alt: "image alt",
        description: "image descr",
      },
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`Quote handler`, async () => {
  const componentType = "Quote"
  const slateValue: Descendant = {
    type: "Quote",
    children: [
      {
        type: "quoteText",
        children: [
          { text: "some", underline: true },
          { text: " " },
          {
            text: "quote",
            italic: true,
          },
          { text: " " },
          { text: "here", bold: true },
        ],
        placeholder: "Type the quote",
      },
      {
        children: [{ text: "John Doe" }],
        type: "signature",
        placeholder: "Type the author",
        placeholderRight: true,
      },
    ],
  }
  const result: ComponentHandlerResult = quoteHandler({
    component: slateValue,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "Quote",
    component: {
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
        {
          name: "signature",
          function: "identity",
          args: ["pageQuoteSignature"],
        },
      ],
    },
    fields: {
      pageQuoteId: "Quote",
      pageQuoteQuote: {
        text: [
          {
            type: "styledText",
            text: "some",
            styles: ["underline"],
          },
          " ",
          {
            type: "styledText",
            text: "quote",
            styles: ["italic"],
          },
          " ",
          {
            type: "styledText",
            text: "here",
            styles: ["bold"],
          },
        ],
      },
      pageQuoteSignature: "John Doe",
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`Separator handler`, async () => {
  const componentType = "Separator"
  const slateValue: Descendant = {}
  const result: ComponentHandlerResult = separatorHandler({
    component: slateValue,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "Separator",
    component: {
      type: "Separator",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageSeparatorId"],
        },
      ],
    },
    fields: {
      pageSeparatorId: "Separator",
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`TextWithGreenLine handler`, async () => {
  const componentType = "TextWithGreenLine"
  const slateValue: Descendant = {
    type: "TextWithGreenLine",
    children: [
      {
        type: "description",
        children: [
          { text: "my", italic: true },
          { text: " " },
          { text: "styled", bold: true },
          { text: " " },
          { text: "text", underline: true },
        ],
      },
      { type: "description", children: [{ text: "no style" }] },
    ],
  }
  const result: ComponentHandlerResult = textWithGreenLineHandler({
    component: slateValue,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "TextWithGreenLine",
    component: {
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
    fields: {
      pageTextWithGreenLineId: "TextWithGreenLine",
      pageTextWithGreenLineText: {
        text: [
          {
            styles: ["italic"],
            text: "my",
            type: "styledText",
          },
          " ",
          {
            styles: ["bold"],
            text: "styled",
            type: "styledText",
          },
          " ",
          {
            styles: ["underline"],
            text: "text",
            type: "styledText",
          },
          "\n",
          "no style",
        ],
      },
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`TwoImagesWithText handler`, async () => {
  const componentType = "TwoImagesWithText"
  const slateValue: Descendant = {
    type: "TwoImagesWithText",
    children: [
      {
        type: "image",
        children: [
          {
            type: "alt",
            children: [
              {
                text: "button preview",
              },
            ],
            placeholder: "Type image alt",
          },
          {
            type: "description",
            children: [
              {
                text: "button",
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
            placeholder: "Type image description",
          },
          {
            type: "position",
            children: [
              {
                text: "",
              },
            ],
            placeholder: "Type the position",
          },
        ],
        url: "https://images.ctfassets.net/13g5no3omm60/1fVM1nL5FYDUq4HMeHtX1a/151a1b10d3e15e4e53e743a2d0105143/000image_16.jpg",
        position: 0,
      },
      {
        type: "image",
        children: [
          {
            type: "alt",
            children: [
              {
                text: "text formatting preview",
              },
            ],
            placeholder: "Type image alt",
          },
          {
            type: "description",
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
            placeholder: "Type image description",
          },
          {
            type: "position",
            children: [
              {
                text: "",
              },
            ],
            placeholder: "Type the position",
          },
        ],
        url: "https://images.ctfassets.net/13g5no3omm60/1GgSiv5GitHf6MlemugODb/8b830c9ff519bf891c77bee89d5e7d6a/add.svg",
        position: 1,
      },
      {
        type: "description",
        children: [
          {
            text: "italic",
            italic: true,
          },
        ],
      },
    ],
  }
  const result: ComponentHandlerResult = twoImagesWithTextHandler({
    component: slateValue,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "TwoImagesWithText",
    component: {
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
    fields: {
      pageTwoImagesWithTextId: "TwoImagesWithText",
      pageTwoImagesWithTextImagesValues: [
        {
          src: "https://images.ctfassets.net/13g5no3omm60/1fVM1nL5FYDUq4HMeHtX1a/151a1b10d3e15e4e53e743a2d0105143/000image_16.jpg",
          alt: "button preview",
          description: "button",
        },
        {
          src: "https://images.ctfassets.net/13g5no3omm60/1GgSiv5GitHf6MlemugODb/8b830c9ff519bf891c77bee89d5e7d6a/add.svg",
          alt: "text formatting preview",
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
      pageTwoImagesWithTextText: {
        text: [
          {
            type: "styledText",
            text: "italic",
            styles: ["italic"],
          },
        ],
      },
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`BGTitle handler`, async () => {
  const componentType = "BGTitle"
  const metaData: PageFieldsTypes = {
    slug: "slug",
    path: "path",
    title: "title",
    description: "description",
    keywords: "k,ey,wo,rd,s",
    previewImage:
      "https://images.ctfassets.net/mue5t0ky2rh8/6S0E5vON4AlNiv8Lgeqy0v/a90bf9691cffef0d09fe28643ec38db8/practice-2021-06.jpg",
    bgImage:
      "https://images.ctfassets.net/mue5t0ky2rh8/S5OHBaLI86k6e3htvHG3I/5107cab5ce2a8132abe7aed58adaa0ef/2021-07_Head_background.jpg",
    authors: "O J, P M, A.S., Oops",
    firstLineLastSymbol: "12",
    secondLineLastSymbol: "19",
    tags: "tag1, tag2, camelCaseTag3",
    readingTime: "5",
    publicationDate: "Tue Dec 28 2021",
    reviewCount: "12",
    ratingValue: "5",
    worstRating: "5",
    bestRating: "5",
    theme: "newYear2022",
    effect: "snowflake",
    primaryButtonText: "primaryButtonText",
    primaryButtonLink: { href: "https://mylink", linkTitle: "mylink title" },
    primaryButtonAction: "scrollToAnchor",
    primaryButtonActionArgs: {
      anchor: "contact",
      offset: "0",
    },
    arrowButtonText: "arrowButtonText",
    arrowButtonLink: {
      href: "https://mylinkarrow",
      linkTitle: "arrow link title",
    },
    labelUsualText: "usual text",
    labelPrimaryText: "primary",
    primaryButtonTitle: "",
    labelPrimaryLink: {},
    labelUsualLink: {},
  }
  const result: ComponentHandlerResult = bgTitleHandler({
    component: metaData,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "BGTitle",
    component: {
      type: "BGTitle",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageBGTitleId"],
        },
        {
          name: "title",
          function: "identity",
          args: ["pageBGTitleTitle"],
        },
        {
          name: "titleFirstLineCharNumber",
          function: "identity",
          args: ["pageBGTitleTitleFirstLineCharNumber"],
        },
        {
          name: "titleSecondLineCharNumber",
          function: "identity",
          args: ["pageBGTitleTitleSecondLineCharNumber"],
        },
        {
          name: "description",
          function: "identity",
          args: ["pageBGTitleDescription"],
        },
        {
          name: "background",
          function: "identity",
          args: ["pageBGTitleBackground"],
        },
        {
          name: "primaryButton",
          function: "identity",
          args: ["pageBGTitlePrimaryButton"],
        },
        {
          name: "arrowButton",
          function: "identity",
          args: ["pageBGTitleArrowButton"],
        },
        {
          name: "label",
          function: "identity",
          args: ["pageBGTitleLabel"],
        },
      ],
    },
    fields: {
      pageBGTitleId: componentType,
      pageBGTitleTitle: metaData.title,
      pageBGTitleTitleFirstLineCharNumber: metaData.firstLineLastSymbol as string,
      pageBGTitleTitleSecondLineCharNumber: metaData.secondLineLastSymbol as string,
      pageBGTitleDescription: {
        text: [metaData.description as string],
      },
      pageBGTitleBackground: metaData.bgImage,
      pageBGTitlePrimaryButton: {
        text: metaData.primaryButtonText,
        title: metaData.primaryButtonTitle,
        linkMeta: metaData.primaryButtonLink,
      },
      pageBGTitleArrowButton: {
        text: metaData.arrowButtonText,
        linkMeta: metaData.arrowButtonLink as IStringJson,
      },
      pageBGTitleLabel: {
        usualText: metaData.labelUsualText,
        primaryText: metaData.labelPrimaryText,
        primaryLinkMeta: metaData.labelPrimaryLink as IStringJson,
        usualLinkMeta: metaData.labelUsualLink as IStringJson,
      },
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`Meta handler`, async () => {
  const componentType = "Meta"
  const metaData: PageFieldsTypes = {
    slug: "slug",
    path: "path",
    title: "title",
    description: "description",
    keywords: "k,ey,wo,rd,s",
    previewImage:
      "https://images.ctfassets.net/mue5t0ky2rh8/6S0E5vON4AlNiv8Lgeqy0v/a90bf9691cffef0d09fe28643ec38db8/practice-2021-06.jpg",
    bgImage:
      "https://images.ctfassets.net/mue5t0ky2rh8/S5OHBaLI86k6e3htvHG3I/5107cab5ce2a8132abe7aed58adaa0ef/2021-07_Head_background.jpg",
    authors: "O J, P M, A.S., Oops",
    firstLineLastSymbol: "12",
    secondLineLastSymbol: "19",
    tags: "tag1, tag2, camelCaseTag3",
    readingTime: "5",
    publicationDate: "Tue Dec 28 2021",
    reviewCount: "12",
    ratingValue: "5",
    worstRating: "5",
    bestRating: "5",
    theme: "newYear2022",
    effect: "snowflake",
    primaryButtonText: "primaryButtonText",
    primaryButtonLink: { href: "https://mylink", linkTitle: "mylink title" },
    primaryButtonAction: "scrollToAnchor",
    primaryButtonActionArgs: {
      anchor: "contact",
      offset: "0",
    },
    arrowButtonText: "arrowButtonText",
    arrowButtonLink: {
      href: "https://mylinkarrow",
      linkTitle: "arrow link title",
    },
    labelUsualText: "usual text",
    labelPrimaryText: "primary",
    primaryButtonTitle: "",
    labelPrimaryLink: {},
    labelUsualLink: {},
  }
  const result: ComponentHandlerResult = metaHandler({
    component: metaData,
  }) as ComponentHandlerResult
  let expected: ComponentHandlerResult = {
    name: "Meta",
    component: {
      type: "Meta",
      rules: [
        {
          name: "id",
          function: "identity",
          args: ["pageMetaId"],
        },
        {
          name: "title",
          function: "identity",
          args: ["pageMetaTitle"],
        },
        {
          name: "description",
          function: "identity",
          args: ["pageMetaDescription"],
        },
        {
          name: "keywords",
          function: "identity",
          args: ["pageMetaKeywords"],
        },
      ],
    },
    fields: {
      pageMetaId: componentType,
      pageMetaTitle: metaData.title,
      pageMetaDescription: metaData.description as string,
      pageMetaKeywords: metaData.keywords as string,
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`MetaOpenGraph handler`, async () => {
  const componentType = META_OPENGRAPH
  const metaData: PageFieldsTypes = {
    slug: "slug",
    path: "path",
    title: "title",
    description: "description",
    keywords: "k,ey,wo,rd,s",
    previewImage:
      "https://images.ctfassets.net/mue5t0ky2rh8/6S0E5vON4AlNiv8Lgeqy0v/a90bf9691cffef0d09fe28643ec38db8/practice-2021-06.jpg",
    bgImage:
      "https://images.ctfassets.net/mue5t0ky2rh8/S5OHBaLI86k6e3htvHG3I/5107cab5ce2a8132abe7aed58adaa0ef/2021-07_Head_background.jpg",
    authors: "O J, P M, A.S., Oops",
    firstLineLastSymbol: "12",
    secondLineLastSymbol: "19",
    tags: "tag1, tag2, camelCaseTag3",
    readingTime: "5",
    publicationDate: "Tue Dec 28 2021",
    reviewCount: "12",
    ratingValue: "5",
    worstRating: "5",
    bestRating: "5",
    theme: "newYear2022",
    effect: "snowflake",
    primaryButtonText: "primaryButtonText",
    primaryButtonLink: { href: "https://mylink", linkTitle: "mylink title" },
    primaryButtonAction: "scrollToAnchor",
    primaryButtonActionArgs: {
      anchor: "contact",
      offset: "0",
    },
    arrowButtonText: "arrowButtonText",
    arrowButtonLink: {
      href: "https://mylinkarrow",
      linkTitle: "arrow link title",
    },
    labelUsualText: "usual text",
    labelPrimaryText: "primary",
    primaryButtonTitle: "",
    labelPrimaryLink: {},
    labelUsualLink: {},
  }
  const result: ComponentHandlerResult = metaOpenGraphHandler({
    component: metaData,
  }) as ComponentHandlerResult
  const pageFields = {
    id: `page${componentType}Id`,
    title: `page${componentType}Title`,
    desc: `page${componentType}Description`,
    image: `page${componentType}ImageUrl`,
  }
  let expected: ComponentHandlerResult = {
    name: componentType,
    component: {
      type: componentType,
      rules: [
        {
          name: "id",
          function: "identity",
          args: [pageFields.id],
        },
        {
          name: "title",
          function: "identity",
          args: [pageFields.title],
        },
        {
          name: "description",
          function: "identity",
          args: [pageFields.desc],
        },
        {
          name: "imageUrl",
          function: "identity",
          args: [pageFields.image],
        },
      ],
    },
    fields: {
      [pageFields.id]: componentType,
      [pageFields.title]: metaData.title,
      [pageFields.desc]: metaData.description as string,
      [pageFields.image]: metaData.previewImage as string,
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`MetaTwitter handler`, async () => {
  const componentType = META_TWITTER
  const metaData: PageFieldsTypes = {
    slug: "slug",
    path: "path",
    title: "title",
    description: "description",
    keywords: "k,ey,wo,rd,s",
    previewImage:
      "https://images.ctfassets.net/mue5t0ky2rh8/6S0E5vON4AlNiv8Lgeqy0v/a90bf9691cffef0d09fe28643ec38db8/practice-2021-06.jpg",
    bgImage:
      "https://images.ctfassets.net/mue5t0ky2rh8/S5OHBaLI86k6e3htvHG3I/5107cab5ce2a8132abe7aed58adaa0ef/2021-07_Head_background.jpg",
    authors: "O J, P M, A.S., Oops",
    firstLineLastSymbol: "12",
    secondLineLastSymbol: "19",
    tags: "tag1, tag2, camelCaseTag3",
    readingTime: "5",
    publicationDate: "Tue Dec 28 2021",
    reviewCount: "12",
    ratingValue: "5",
    worstRating: "5",
    bestRating: "5",
    theme: "newYear2022",
    effect: "snowflake",
    primaryButtonText: "primaryButtonText",
    primaryButtonLink: { href: "https://mylink", linkTitle: "mylink title" },
    primaryButtonAction: "scrollToAnchor",
    primaryButtonActionArgs: {
      anchor: "contact",
      offset: "0",
    },
    arrowButtonText: "arrowButtonText",
    arrowButtonLink: {
      href: "https://mylinkarrow",
      linkTitle: "arrow link title",
    },
    labelUsualText: "usual text",
    labelPrimaryText: "primary",
    primaryButtonTitle: "",
    labelPrimaryLink: {},
    labelUsualLink: {},
  }
  const result: ComponentHandlerResult = metaTwitterHandler({
    component: metaData,
  }) as ComponentHandlerResult
  const pageFields = {
    id: `page${componentType}Id`,
    title: `page${componentType}Title`,
    desc: `page${componentType}Description`,
    image: `page${componentType}ImageUrl`,
  }
  let expected: ComponentHandlerResult = {
    name: componentType,
    component: {
      type: componentType,
      rules: [
        {
          name: "id",
          function: "identity",
          args: [pageFields.id],
        },
        {
          name: "title",
          function: "identity",
          args: [pageFields.title],
        },
        {
          name: "description",
          function: "identity",
          args: [pageFields.desc],
        },
        {
          name: "imageUrl",
          function: "identity",
          args: [pageFields.image],
        },
      ],
    },
    fields: {
      [pageFields.id]: componentType,
      [pageFields.title]: metaData.title,
      [pageFields.desc]: metaData.description as string,
      [pageFields.image]: metaData.previewImage as string,
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})

test(`MicroMetaArticle handler`, async () => {
  const componentType = MICRO_META_ARTICLE
  const metaData: PageFieldsTypes = {
    slug: "slug",
    path: "path",
    title: "title",
    description: "description",
    keywords: "k,ey,wo,rd,s",
    previewImage:
      "https://images.ctfassets.net/mue5t0ky2rh8/6S0E5vON4AlNiv8Lgeqy0v/a90bf9691cffef0d09fe28643ec38db8/practice-2021-06.jpg",
    bgImage:
      "https://images.ctfassets.net/mue5t0ky2rh8/S5OHBaLI86k6e3htvHG3I/5107cab5ce2a8132abe7aed58adaa0ef/2021-07_Head_background.jpg",
    authors: "O J, P M, A.S., Oops",
    firstLineLastSymbol: "12",
    secondLineLastSymbol: "19",
    tags: "tag1, tag2, camelCaseTag3",
    readingTime: "5",
    publicationDate: "Tue Dec 28 2021",
    reviewCount: "12",
    ratingValue: "5",
    worstRating: "5",
    bestRating: "5",
    theme: "newYear2022",
    effect: "snowflake",
    primaryButtonText: "primaryButtonText",
    primaryButtonLink: { href: "https://mylink", linkTitle: "mylink title" },
    primaryButtonAction: "scrollToAnchor",
    primaryButtonActionArgs: {
      anchor: "contact",
      offset: "0",
    },
    arrowButtonText: "arrowButtonText",
    arrowButtonLink: {
      href: "https://mylinkarrow",
      linkTitle: "arrow link title",
    },
    labelUsualText: "usual text",
    labelPrimaryText: "primary",
    primaryButtonTitle: "",
    labelPrimaryLink: {},
    labelUsualLink: {},
  }
  const result: ComponentHandlerResult = microMetaArticleHandler({
    component: metaData,
  }) as ComponentHandlerResult
  const pageFields = {
    title: camelCase(`page${componentType} title`),
    description: camelCase(`page${componentType} description`),
    authors: camelCase(`page${componentType} authors`),
    publicationDate: camelCase(`page${componentType} publicationDate`),
    modifiedDate: camelCase(`page${componentType} modifiedDate`),
    previewImage: camelCase(`page${componentType} previewImage`),
    ratingValue: camelCase(`page${componentType} ratingValue`),
    reviewCount: camelCase(`page${componentType} reviewCount`),
    bestRating: camelCase(`page${componentType} bestRating`),
    worstRating: camelCase(`page${componentType} worstRating`),
    path: camelCase(`page${componentType} path`),
    slug: camelCase(`page${componentType} slug`),
  }
  let expected: ComponentHandlerResult = {
    name: componentType,
    component: {
      type: componentType,
      rules: [
        {
          name: "title",
          function: "identity",
          args: [pageFields.title],
        },
        {
          name: "description",
          function: "identity",
          args: [pageFields.description],
        },
        {
          name: "authors",
          function: "identity",
          args: [pageFields.authors],
        },
        {
          name: "publicationDate",
          function: "identity",
          args: [pageFields.publicationDate],
        },
        {
          name: "modifiedDate",
          function: "identity",
          args: [pageFields.modifiedDate],
        },
        {
          name: "previewImage",
          function: "identity",
          args: [pageFields.previewImage],
        },
        {
          name: "ratingValue",
          function: "identity",
          args: [pageFields.ratingValue],
        },
        {
          name: "reviewCount",
          function: "identity",
          args: [pageFields.reviewCount],
        },
        {
          name: "bestRating",
          function: "identity",
          args: [pageFields.bestRating],
        },
        {
          name: "worstRating",
          function: "identity",
          args: [pageFields.worstRating],
        },
        {
          name: "path",
          function: "identity",
          args: [pageFields.path],
        },
        {
          name: "slug",
          function: "identity",
          args: [pageFields.slug],
        },
      ],
    },
    fields: {
      [pageFields.title]: metaData.title,
      [pageFields.description]: metaData.description,
      [pageFields.authors]: metaData.authors as string,
      [pageFields.publicationDate]: metaData.publicationDate as string,
      [pageFields.modifiedDate]: new Date().toDateString(),
      [pageFields.previewImage]: metaData.previewImage as string,
      [pageFields.ratingValue]: metaData.ratingValue as string,
      [pageFields.reviewCount]: metaData.reviewCount as string,
      [pageFields.bestRating]: metaData.bestRating as string,
      [pageFields.worstRating]: metaData.worstRating as string,
      [pageFields.path]: metaData.path as string,
      [pageFields.slug]: metaData.slug as string,
    },
  }

  expected = normalizeExpected(expected, result.name, componentType)

  expect(result).toEqual(expected)
})
