import IConverterBuilder from "../../types/IConverterBuilder"
import Contentful from "../../types/Contentful"
import { compact, filter, find, isEmpty, join, map, get } from "lodash"
import ComponentIdGenerator from "./dependencies/ComponentIdGenerator"
import ComponentJsonGenerator from "./dependencies/ComponentJsonGenerator"
import NestedMethods from "./dependencies/NestedMethods/index"
import { CONTAINER, IDENTITY } from "./dependencies/ComponentJsonGenerator/FieldsNames"
import {
  CODE_ITEM,
  DESCRIPTION,
  HEIGHT,
  IMAGE,
  IMAGE_CAROUSEL_ITEM,
  LINK,
  PARAGRAPH,
  QUOTE_TEXT,
  SELECTOR,
  SIGNATURE,
  TITLE,
} from "./dependencies/TypesVariables"
import { NodeHandler } from "src/types/NodeHandler"

class ContentfulBuilder implements IConverterBuilder {
  private _result: Contentful.ArticleConverted = {
    components: [],
  }

  ArticleTextHandler: NodeHandler = (arg) => {
    const type = "ArticleText"
    const componentName = ComponentIdGenerator.generateComponentID(type)
    const fields: Contentful.ValueMeta[] = [
      { name: "id", value: componentName, function: IDENTITY },
      {
        name: "text",
        value: NestedMethods.slateTextHandler(arg.children),
        function: IDENTITY,
      },
    ]

    const newComponent = ComponentJsonGenerator.generateJson(componentName, type, fields)
    this._result[newComponent.name] = newComponent.component
    Object.keys(newComponent.fields).forEach((field) => {
      this._result[field] = newComponent.fields[field]
    })
    this._result.components.push(newComponent.name)
  }

  GrayBlockWithTextHandler: NodeHandler = (arg) => {
    const type = "GrayBlockWithText"
    const componentName = ComponentIdGenerator.generateComponentID(type)
    const text = filter(arg.children, { type: DESCRIPTION })
    const fields: Contentful.ValueMeta[] = [
      { name: "id", value: componentName, function: IDENTITY },
      { name: "text", value: NestedMethods.slateTextHandler(text), function: IDENTITY },
    ]

    const newComponent = ComponentJsonGenerator.generateJson(componentName, type, fields)
    this._result[newComponent.name] = newComponent.component
    Object.keys(newComponent.fields).forEach((field) => {
      this._result[field] = newComponent.fields[field]
    })
    this._result.components.push(newComponent.name)
  }

  ImageCarouselHandler: NodeHandler = (arg) => {
    const type = "ImageCarousel"
    const componentName = ComponentIdGenerator.generateComponentID(type)
    const items = filter(arg.children, (o) => {
      return o.type === IMAGE_CAROUSEL_ITEM
    })
    const imagesFields: Contentful.ChildrenHandlerReturnType[] = compact(
      map(items, (image) => {
        const itemFields = NestedMethods.imageHandler(image as Contentful.NodeHandlerProps)
        if (!isEmpty(itemFields)) return itemFields
      })
    )

    const fields: Contentful.ValueMeta[] = [
      { name: "id", value: componentName, function: IDENTITY },
      {
        name: "images",
        value: {
          meta: [
            { name: "src", function: IDENTITY },
            { name: "alt", function: IDENTITY },
            { name: "width", function: IDENTITY },
            { name: "height", function: IDENTITY },
            { name: "description", function: IDENTITY },
          ],
          values: imagesFields,
        },
        function: CONTAINER,
      },
    ]

    const newComponent = ComponentJsonGenerator.generateJson(componentName, type, fields)
    this._result[newComponent.name] = newComponent.component
    Object.keys(newComponent.fields).forEach((field) => {
      this._result[field] = newComponent.fields[field]
    })
    this._result.components.push(newComponent.name)
  }

  TwoImagesWithTextHandler: NodeHandler = (arg) => {
    const type = "TwoImagesWithText"
    const componentName = ComponentIdGenerator.generateComponentID(type)
    const items = filter(arg.children, (o) => {
      return o.type === IMAGE
    })
    const imagesFields: Contentful.ChildrenHandlerReturnType[] = compact(
      map(items, (image) => {
        const itemFields = NestedMethods.imageHandler(image as Contentful.NodeHandlerProps)
        if (!isEmpty(itemFields)) return itemFields
      })
    )

    const fields: Contentful.ValueMeta[] = [
      { name: "id", value: componentName, function: IDENTITY },
      {
        name: "images",
        value: {
          meta: [
            { name: "src", function: IDENTITY },
            { name: "alt", function: IDENTITY },
            { name: "width", function: IDENTITY },
            { name: "height", function: IDENTITY },
            { name: "description", function: IDENTITY },
          ],
          values: imagesFields,
        },
        function: CONTAINER,
      },
      {
        name: "text",
        value: NestedMethods.slateTextHandler(filter(arg.children, { type: DESCRIPTION })),
        function: IDENTITY,
      },
    ]

    const newComponent = ComponentJsonGenerator.generateJson(componentName, type, fields)
    this._result[newComponent.name] = newComponent.component
    Object.keys(newComponent.fields).forEach((field) => {
      this._result[field] = newComponent.fields[field]
    })
    this._result.components.push(newComponent.name)
  }

  TextWithGreenLineHandler: NodeHandler = (arg) => {
    const type = "TextWithGreenLine"
    const componentName = ComponentIdGenerator.generateComponentID(type)
    const text = filter(arg.children, { type: DESCRIPTION })
    const fields: Contentful.ValueMeta[] = [
      { name: "id", value: componentName, function: IDENTITY },
      {
        name: "text",
        value: NestedMethods.slateTextHandler(text),
        function: IDENTITY,
      },
    ]

    const newComponent = ComponentJsonGenerator.generateJson(componentName, type, fields)
    this._result[newComponent.name] = newComponent.component
    Object.keys(newComponent.fields).forEach((field) => {
      this._result[field] = newComponent.fields[field]
    })
    this._result.components.push(newComponent.name)
  }

  SeparatorHandler: NodeHandler = () => {
    const type = "Separator"
    const componentName = ComponentIdGenerator.generateComponentID(type)
    const fields: Contentful.ValueMeta[] = [{ name: "id", value: componentName, function: IDENTITY }]
    const newComponent = ComponentJsonGenerator.generateJson(componentName, type, fields)
    this._result[newComponent.name] = newComponent.component
    Object.keys(newComponent.fields).forEach((field) => {
      this._result[field] = newComponent.fields[field]
    })
    this._result.components.push(newComponent.name)
  }

  ImageColumnWithTextHandler: NodeHandler = (arg) => {
    const type = "ImageColumnWithText"
    const componentName = ComponentIdGenerator.generateComponentID(type)
    const text = filter(arg.children, { type: PARAGRAPH })
    const fields: Contentful.ValueMeta[] = [
      { name: "id", value: componentName, function: IDENTITY },
      { name: "text", value: NestedMethods.slateTextHandler(text), function: IDENTITY },
      {
        name: "image",
        value: NestedMethods.imageHandler(find(arg.children, { type: IMAGE }) as Contentful.NodeHandlerProps),
        function: IDENTITY,
      },
    ]

    const newComponent = ComponentJsonGenerator.generateJson(componentName, type, fields)
    this._result[newComponent.name] = newComponent.component
    Object.keys(newComponent.fields).forEach((field) => {
      this._result[field] = newComponent.fields[field]
    })
    this._result.components.push(newComponent.name)
  }

  ArticleYoutubeHandler: NodeHandler = (arg) => {
    const type = "ArticleYoutube"
    const componentName = ComponentIdGenerator.generateComponentID(type)
    const fields: Contentful.ValueMeta[] = [
      { name: "id", value: componentName, function: IDENTITY },
      {
        name: "videoId",
        value: NestedMethods.getTextFromChild(find(arg.children, { type: LINK })),
        function: IDENTITY,
      },
    ]

    const newComponent = ComponentJsonGenerator.generateJson(componentName, type, fields)
    this._result[newComponent.name] = newComponent.component
    Object.keys(newComponent.fields).forEach((field) => {
      this._result[field] = newComponent.fields[field]
    })
    this._result.components.push(newComponent.name)
  }

  QuoteHandler: NodeHandler = (arg) => {
    const type = "Quote"
    const componentName = ComponentIdGenerator.generateComponentID(type)
    const quote = filter(arg.children, { type: QUOTE_TEXT })
    const fields: Contentful.ValueMeta[] = [
      { name: "id", value: componentName, function: IDENTITY },
      {
        name: "quote",
        value: NestedMethods.slateTextHandler(quote),
        function: IDENTITY,
      },
      {
        name: "signature",
        value: NestedMethods.getTextFromChild(find(arg.children, { type: SIGNATURE })),
        function: IDENTITY,
      },
    ]

    const newComponent = ComponentJsonGenerator.generateJson(componentName, type, fields)
    this._result[newComponent.name] = newComponent.component
    Object.keys(newComponent.fields).forEach((field) => {
      this._result[field] = newComponent.fields[field]
    })
    this._result.components.push(newComponent.name)
  }

  CodeSnippetHandler: NodeHandler = (arg) => {
    const type = "CodeSnippet"
    const componentName = ComponentIdGenerator.generateComponentID(type)
    const fields: Contentful.ValueMeta[] = [
      { name: "id", value: componentName, function: IDENTITY },
      {
        name: "src",
        value: NestedMethods.getTextFromChild(find(arg.children, { type: LINK })),
        function: IDENTITY,
      },
      {
        name: "resource",
        value: NestedMethods.getTextFromChild(find(arg.children, { type: SELECTOR })),
        function: IDENTITY,
      },
      {
        name: "title",
        value: NestedMethods.getTextFromChild(find(arg.children, { type: TITLE })),
        function: IDENTITY,
      },
      {
        name: "height",
        value: NestedMethods.getTextFromChild(find(arg.children, { type: HEIGHT })),
        function: IDENTITY,
      },
    ]

    const newComponent = ComponentJsonGenerator.generateJson(componentName, type, fields)
    this._result[newComponent.name] = newComponent.component
    Object.keys(newComponent.fields).forEach((field) => {
      this._result[field] = newComponent.fields[field]
    })
    this._result.components.push(newComponent.name)
  }

  ImageWithSizeHandler: NodeHandler = (arg) => {
    const type = "ImageWithSize"
    const componentName = ComponentIdGenerator.generateComponentID(type)
    const fields: Contentful.ValueMeta[] = [
      { name: "id", value: componentName, function: IDENTITY },
      {
        name: "image",
        value: NestedMethods.imageHandler(find(arg.children, { type: IMAGE }) as Contentful.NodeHandlerProps),
        function: IDENTITY,
      },
    ]

    const newComponent = ComponentJsonGenerator.generateJson(componentName, type, fields)
    this._result[newComponent.name] = newComponent.component
    Object.keys(newComponent.fields).forEach((field) => {
      this._result[field] = newComponent.fields[field]
    })
    this._result.components.push(newComponent.name)
  }

  CodeHandler: NodeHandler = (arg) => {
    const type = "Code"
    const componentName = ComponentIdGenerator.generateComponentID(type)
    const codeItemsChild = filter(arg.children, { type: CODE_ITEM })
    const code = join(
      map(codeItemsChild, (codeLine) => NestedMethods.getTextFromChild(codeLine)),
      "\n"
    )
    const fields: Contentful.ValueMeta[] = [
      { name: "id", value: componentName, function: IDENTITY },
      {
        name: "language",
        value: NestedMethods.getTextFromChild(find(arg.children, { type: SELECTOR })),
        function: IDENTITY,
      },
      { name: "code", value: code, function: IDENTITY },
    ]

    const newComponent = ComponentJsonGenerator.generateJson(componentName, type, fields)
    this._result[newComponent.name] = newComponent.component
    Object.keys(newComponent.fields).forEach((field) => {
      this._result[field] = newComponent.fields[field]
    })
    this._result.components.push(newComponent.name)
  }

  BGTitleHandler: NodeHandler = (arg, form) => {
    const type = "BgTitle"
    const componentName = ComponentIdGenerator.generateComponentID(type)
    const fields: Contentful.ValueMeta[] = [
      { name: "id", value: componentName, function: IDENTITY },
      {
        name: "title",
        value: get(form, "title"),
        function: IDENTITY,
      },
      {
        name: "titleFirstLineCharNumber",
        value: get(form, "firstLineLastSymbol"),
        function: IDENTITY,
      },
      {
        name: "titleSecondLineCharNumber",
        value: get(form, "secondLineLastSymbol"),
        function: IDENTITY,
      },
      {
        name: "description",
        value: NestedMethods.slateTextHandler([
          {
            type: PARAGRAPH,
            children: [{ text: get(form, "description") }],
          },
        ]),
        function: IDENTITY,
      },
      {
        name: "background",
        value: get(form, "bgImage"),
        function: IDENTITY,
      },
      {
        name: "primaryButton",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value: {
          text: get(form, "primaryButtonText"),
          title: get(form, "primaryButtonTitle"),
          action: !get(form, "primaryButtonLink") ? get(form, "primaryButtonTitle") || "scrollToAnchor" : undefined,
          actionArgs: !get(form, "primaryButtonLink")
            ? get(form, "primaryButtonActionArgs") || {
                anchor: "contact",
                offset: 0,
              }
            : undefined,
          linkMeta: get(form, "primaryButtonLink"),
        },
        function: IDENTITY,
      },
      {
        name: "arrowButton",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value: {
          text: get(form, "arrowButtonText"),
          linkMeta: get(form, "arrowButtonLink"),
        },
        function: IDENTITY,
      },
      {
        name: "label",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value: {
          usualText: get(form, "labelUsualText"),
          primaryText: get(form, "labelPrimaryText"),
          primaryLinkMeta: get(form, "labelPrimaryLink"),
          usualLinkMeta: get(form, "labelUsualLink"),
        },
        function: IDENTITY,
      },
    ]
    const required = ["title", "bgImage", "label"]
    const vitals = ["title"]
    NestedMethods.checkImportant(componentName, required, form)
    if (NestedMethods.containsVitals(componentName, vitals, form)) {
      const newComponent = ComponentJsonGenerator.generateJson(componentName, type, fields)
      this._result[newComponent.name] = newComponent.component
      Object.keys(newComponent.fields).forEach((field) => {
        this._result[field] = newComponent.fields[field]
      })
      this._result.components.push(newComponent.name)
    }
  }

  reset() {
    this._result = {
      components: [],
    }
  }

  get getResult(): Contentful.ArticleConverted {
    return this._result
  }
}

export default new ContentfulBuilder()
