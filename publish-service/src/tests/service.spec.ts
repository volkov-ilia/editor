import { PublishService } from "../publish/publish.service"
import { Test } from "@nestjs/testing"
import { PublishController } from "../publish/publish.controller"
import { PublishRepository } from "../publish/publish.repository"
import { getModelToken } from "@nestjs/mongoose"
import { Article } from "../publish/schemas/article.schema"

let publishRepository: PublishRepository

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
})

describe("publish.service methods should return correct value", () => {
  const publishService = new PublishService(publishRepository)
  test("articleToPageStructure should return article in page structure", () => {
    expect(publishService.articleToPageStructure(mockArticle)).toEqual(expectValue)
  })
})
const components = {
  components: [],
}
const mockArticle = {
  formDataSlateStructure: {
    contentfulFieldsType: "",
    json: '[{"type":"ArticleText","children":[{"children":[{"text":""}],"type":"paragraph"}]}]',
    form: {
      slug: "",
      path: "",
      title: "334534",
      description: "",
      keywords: "",
      previewImage: "",
      bgImage: "",
      authors: "",
      firstLineLastSymbol: "",
      secondLineLastSymbol: "",
      tags: "",
      readingTime: "",
      publicationDate: "",
      reviewCount: "",
      ratingValue: "",
      worstRating: "",
      theme: "",
      effect: "",
      primaryButtonText: "",
      primaryButtonAction: "",
      arrowButtonText: "",
      arrowButtonLink: "",
      labelPrimaryText: "",
      labelUsualText: "",
      labelPrimaryLink: "",
      labelUsualLink: "",
      primaryButtonTitle: "",
      primaryButtonLink: "",
    },
    path: "",
    slug: "",
  },
}
const expectValue = {
  components: ["BGTitle"],
  BGTitle: {
    type: "BGTitle",
    rules: [
      { args: ["pageTitle"], name: "title", function: "identity" },
      {
        args: ["pageDescription"],
        name: "description",
        function: "identity",
      },
      { args: ["background"], name: "background", function: "identity" },
      {
        args: ["titleFirstLineCharNumber"],
        name: "titleFirstLineCharNumber",
        function: "identity",
      },
      {
        args: ["titleSecondLineCharNumber"],
        name: "titleSecondLineCharNumber",
        function: "identity",
      },
      { args: ["idBGTitle"], name: "id", function: "identity" },
      { args: ["pageBGTitleLabel"], name: "label", function: "identity" },
      {
        args: ["pageBGTitlePrimaryButton"],
        name: "primaryButton",
        function: "identity",
      },
      {
        args: ["pageBGTitleArrowButton"],
        name: "arrowButton",
        function: "identity",
      },
    ],
  },
  pageTitle: "334534",
  pageDescription: "",
  background: "",
  titleFirstLineCharNumber: "",
  titleSecondLineCharNumber: "",
  idBGTitle: "mainTitle",
  pageBGTitleLabel: {
    usualText: "",
    primaryText: "",
    primaryLinkMeta: { href: "", linkTitle: "" },
    usualLinkMeta: { href: "", linkTitle: "" },
  },
  pageBGTitlePrimaryButton: { text: "", title: "", action: "", actionArgs: "" },
  pageBGTitleArrowButton: { text: "", linkMeta: { href: "", linkTitle: "" } },
}
