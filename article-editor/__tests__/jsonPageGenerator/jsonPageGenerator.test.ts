import { test } from "@jest/globals"
import jsonPageGenerator from "../../utils/jsonPageGenerator"
import handlers from "../../utils/jsonPageGenerator/handlers"
import { Descendant } from "slate"
import JsonPage, { ComponentJsonPage, LinkMetaJsonPage } from "../../types/utils/jsonPageBuilder/JsonPage"
import { PageFieldsTypes } from "../../types/Slate/Components/PageFieldsTypes"
import META from "../../types/utils/packageComponents/META"
import META_TWITTER from "../../types/utils/packageComponents/META_TWITTER"
import META_OPENGRAPH from "../../types/utils/packageComponents/META_OPENGRAPH"
import MICRO_META_ARTICLE from "../../types/utils/packageComponents/MICRO_META_ARTICLE"
import BGTitle from "../../types/utils/packageComponents/BGTitle"
import camelCase from "lodash/camelCase"
import camelcase from "camelcase"
import cloneDeep from "lodash/cloneDeep"
import replace from "lodash/replace"

const normalizeExpected = (expected: JsonPage, resultName: string, thisName: string, idx = 0) => {
  const newPrefixName = camelcase(`page${resultName}`)
  const newComponentName = `"${resultName}"`
  let temp = cloneDeep(expected)
  temp = JSON.parse(replace(JSON.stringify(temp), new RegExp(`"${thisName}"`, "g"), newComponentName))
  temp = JSON.parse(replace(JSON.stringify(temp), new RegExp(`page${thisName}`, "g"), newPrefixName))
  ;(temp[temp.components[idx]] as ComponentJsonPage).type = thisName

  return temp
}

test(`ArticleText jsonPageGenerator`, async () => {
  const slateValue: Descendant[] = [
    {
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
    },
  ]
  const { json: result }: { json: JsonPage } = jsonPageGenerator(slateValue, handlers)
  let expected: JsonPage = {
    components: ["ArticleText"],
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
          href: "https://myHappyLink",
          linkTitle: "my link title",
          text: "link",
          type: "link",
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

  expected = normalizeExpected(expected, result.components[0], expected.components[0])
  expect(result).toEqual(expected)
})

test(`ImageCarousel jsonPageGenerator`, async () => {
  const slateValue: Descendant[] = [
    {
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
    },
  ]
  const { json: result }: { json: JsonPage } = jsonPageGenerator(slateValue, handlers)
  let expected: JsonPage = {
    components: ["ImageCarousel"],
    pageImageCarouselId: "ImageCarousel",
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
  }

  expected = normalizeExpected(expected, result.components[0], expected.components[0])
  expect(result).toEqual(expected)
})

test(`ImageCarousel and ArticleText jsonPageGenerator`, async () => {
  const slateValue: Descendant[] = [
    {
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
    },
    {
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
          type: "addImage",
          children: [
            {
              text: "",
            },
          ],
          isVoid: true,
        },
      ],
    },
  ]
  const { json: result }: { json: JsonPage } = jsonPageGenerator(slateValue, handlers)
  let expected: JsonPage = {
    components: ["ArticleText", "ImageCarousel"],
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
          href: "https://myHappyLink",
          linkTitle: "my link title",
          text: "link",
          type: "link",
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
    pageImageCarouselId: "ImageCarousel",
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
  }

  expected = normalizeExpected(expected, result.components[0], expected.components[0])
  expected = normalizeExpected(expected, result.components[1], expected.components[1], 1)
  expect(result).toEqual(expected)
})

test(`MicroMetaArticle jsonPageGenerator`, async () => {
  const componentType = MICRO_META_ARTICLE
  const unprintableComponents = [componentType]
  const unprintableFields: PageFieldsTypes = {
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
  const slateValue: Descendant[] = []
  const { json: result }: { json: JsonPage } = jsonPageGenerator(
    slateValue,
    handlers,
    unprintableFields,
    unprintableComponents
  )
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
  let expected: JsonPage = {
    components: unprintableComponents,
    [pageFields.title]: unprintableFields.title,
    [pageFields.description]: unprintableFields.description as string,
    [pageFields.authors]: unprintableFields.authors as string,
    [pageFields.publicationDate]: unprintableFields.publicationDate as string,
    [pageFields.modifiedDate]: new Date().toDateString(),
    [pageFields.previewImage]: unprintableFields.previewImage as string,
    [pageFields.ratingValue]: unprintableFields.ratingValue as string,
    [pageFields.reviewCount]: unprintableFields.reviewCount as string,
    [pageFields.bestRating]: unprintableFields.bestRating as string,
    [pageFields.worstRating]: unprintableFields.worstRating as string,
    [pageFields.path]: unprintableFields.path as string,
    [pageFields.slug]: unprintableFields.slug as string,
    [componentType]: {
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
  }

  expected = normalizeExpected(expected, result.components[0], componentType)
  expect(result).toEqual(expected)
})

test(`Meta jsonPageGenerator`, async () => {
  const componentType = META
  const unprintableComponents = [componentType]
  const unprintableFields: PageFieldsTypes = {
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
  const slateValue: Descendant[] = []
  const { json: result }: { json: JsonPage } = jsonPageGenerator(
    slateValue,
    handlers,
    unprintableFields,
    unprintableComponents
  )
  const pageFields = {
    id: camelCase(`page${componentType} id`),
    description: camelCase(`page${componentType} description`),
    title: camelCase(`page${componentType} title`),
    keywords: camelCase(`page${componentType} keywords`),
  }
  let expected: JsonPage = {
    components: unprintableComponents,
    [pageFields.id]: componentType,
    [pageFields.description]: unprintableFields.description as string,
    [pageFields.title]: unprintableFields.title as string,
    [pageFields.keywords]: unprintableFields.keywords as string,
    [componentType]: {
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
          args: [pageFields.description],
        },
        {
          name: "keywords",
          function: "identity",
          args: [pageFields.keywords],
        },
      ],
    },
  }

  expected = normalizeExpected(expected, result.components[0], componentType)
  expect(result).toEqual(expected)
})

test(`MetaTwitter jsonPageGenerator`, async () => {
  const componentType = META_TWITTER
  const unprintableComponents = [componentType]
  const unprintableFields: PageFieldsTypes = {
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
  const slateValue: Descendant[] = []
  const { json: result }: { json: JsonPage } = jsonPageGenerator(
    slateValue,
    handlers,
    unprintableFields,
    unprintableComponents
  )
  const pageFields = {
    id: camelCase(`page${componentType} id`),
    description: camelCase(`page${componentType} description`),
    title: camelCase(`page${componentType} title`),
    imageUrl: camelCase(`page${componentType} imageUrl`),
  }
  let expected: JsonPage = {
    components: unprintableComponents,
    [pageFields.id]: componentType,
    [pageFields.description]: unprintableFields.description as string,
    [pageFields.title]: unprintableFields.title as string,
    [pageFields.imageUrl]: unprintableFields.previewImage as string,
    [componentType]: {
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
          args: [pageFields.description],
        },
        {
          name: "imageUrl",
          function: "identity",
          args: [pageFields.imageUrl],
        },
      ],
    },
  }

  expected = normalizeExpected(expected, result.components[0], componentType)
  expect(result).toEqual(expected)
})

test(`MetaOpenGraph jsonPageGenerator`, async () => {
  const componentType = META_OPENGRAPH
  const unprintableComponents = [componentType]
  const unprintableFields: PageFieldsTypes = {
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
  const slateValue: Descendant[] = []
  const { json: result }: { json: JsonPage } = jsonPageGenerator(
    slateValue,
    handlers,
    unprintableFields,
    unprintableComponents
  )
  const pageFields = {
    id: camelCase(`page${componentType} id`),
    description: camelCase(`page${componentType} description`),
    title: camelCase(`page${componentType} title`),
    imageUrl: camelCase(`page${componentType} imageUrl`),
  }
  let expected: JsonPage = {
    components: unprintableComponents,
    [pageFields.id]: componentType,
    [pageFields.description]: unprintableFields.description as string,
    [pageFields.title]: unprintableFields.title as string,
    [pageFields.imageUrl]: unprintableFields.previewImage as string,
    [componentType]: {
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
          args: [pageFields.description],
        },
        {
          name: "imageUrl",
          function: "identity",
          args: [pageFields.imageUrl],
        },
      ],
    },
  }

  expected = normalizeExpected(expected, result.components[0], componentType)
  expect(result).toEqual(expected)
})

test(`BGTitle jsonPageGenerator`, async () => {
  const componentType = BGTitle
  const unprintableComponents = [componentType]
  const unprintableFields: PageFieldsTypes = {
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
  const slateValue: Descendant[] = []
  const { json: result }: { json: JsonPage } = jsonPageGenerator(
    slateValue,
    handlers,
    unprintableFields,
    unprintableComponents
  )
  const pageFields = {
    id: camelCase(`page${componentType} id`),
    description: camelCase(`page${componentType} description`),
    title: camelCase(`page${componentType} title`),
    titleFirstLineCharNumber: camelCase(`page${componentType} titleFirstLineCharNumber`),
    titleSecondLineCharNumber: camelCase(`page${componentType} titleSecondLineCharNumber`),
    background: camelCase(`page${componentType} background`),
    primaryButton: camelCase(`page${componentType} primaryButton`),
    arrowButton: camelCase(`page${componentType} arrowButton`),
    label: camelCase(`page${componentType} label`),
  }
  let expected: JsonPage = {
    components: unprintableComponents,
    [pageFields.id]: componentType,
    [pageFields.description]: {
      text: [unprintableFields.description as string],
    },
    [pageFields.title]: unprintableFields.title as string,
    [pageFields.titleFirstLineCharNumber]: unprintableFields.firstLineLastSymbol as string,
    [pageFields.titleSecondLineCharNumber]: unprintableFields.secondLineLastSymbol as string,
    [pageFields.background]: unprintableFields.bgImage as string,
    [pageFields.primaryButton]: {
      text: unprintableFields.primaryButtonText as string,
      title: unprintableFields.primaryButtonTitle as string,
      linkMeta: unprintableFields.primaryButtonLink as LinkMetaJsonPage,
    },
    [pageFields.arrowButton]: {
      text: unprintableFields.arrowButtonText as string,
      linkMeta: unprintableFields.arrowButtonLink as LinkMetaJsonPage,
    },
    [pageFields.label]: {
      usualText: unprintableFields.labelUsualText as string,
      primaryText: unprintableFields.labelPrimaryText as string,
      primaryLinkMeta: unprintableFields.labelPrimaryLink as LinkMetaJsonPage,
      usualLinkMeta: unprintableFields.labelUsualLink as LinkMetaJsonPage,
    },
    [componentType]: {
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
          name: "titleFirstLineCharNumber",
          function: "identity",
          args: [pageFields.titleFirstLineCharNumber],
        },
        {
          name: "titleSecondLineCharNumber",
          function: "identity",
          args: [pageFields.titleSecondLineCharNumber],
        },
        {
          name: "description",
          function: "identity",
          args: [pageFields.description],
        },
        {
          name: "background",
          function: "identity",
          args: [pageFields.background],
        },
        {
          name: "primaryButton",
          function: "identity",
          args: [pageFields.primaryButton],
        },
        {
          name: "arrowButton",
          function: "identity",
          args: [pageFields.arrowButton],
        },
        {
          name: "label",
          function: "identity",
          args: [pageFields.label],
        },
      ],
    },
  }

  expected = normalizeExpected(expected, result.components[0], componentType)
  expect(result).toEqual(expected)
})

test(`Theme and effect jsonPageGenerator`, async () => {
  const unprintableFields: PageFieldsTypes = {
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
    theme: "newYear2022",
    effect: "snowflake",
  }
  const slateValue: Descendant[] = []
  const { json: result }: { json: JsonPage } = jsonPageGenerator(slateValue, handlers, unprintableFields)
  const expected: JsonPage = {
    components: [],
    theme: unprintableFields.theme as string,
    effect: {
      name: unprintableFields.effect as string,
      props: {
        src: "https://images.ctfassets.net/mue5t0ky2rh8/2lfcwiKDFQjUXCoOYmpNBS/d98eba696569de3fb1a9e759347bed1d/snow.png",
      },
    },
  }

  expect(result).toEqual(expected)
})
