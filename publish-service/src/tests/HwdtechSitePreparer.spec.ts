import HwdtechSitePreparer from "src/preparers/HwdtechSitePreparer"

const componentsReq = {
    components: [],
  }
  const articleReq = {
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
  

  const formDataSlateStructure = {
    form: articleReq
  }
describe("HwdtechSitePreparer methods should return correct value", () => {
  test("HwdtechSitePreparer.addBGTitle should return correct object", () => {
    // @ts-ignore
    expect(HwdtechSitePreparer.postAnArticleOnHwdtechSite(formDataSlateStructure, components)).toEqual(expectValue)
  })
})
