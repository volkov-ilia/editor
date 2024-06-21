import ListEasterEggs from "../types/utils/easterEggsConfig/ListEasterEggs"

export const listComponentsEasterEggs: ListEasterEggs = {
  AboutHoursSection: {
    FCWithEasterEggs: ["titlePrimaryDescriptionBlock", "text"],
    nestedFC: ["titlePrimaryDescriptionBlock", "text"],
  },
  BadgesGridSection: {
    FCWithEasterEggs: ["titlePrimaryDescriptionBlock", "badgesCard"],
    nestedFC: ["titlePrimaryDescriptionBlock"],
    listsWithEasterEggs: [
      {
        key: "badgesCard",
        FCWithEasterEggs: ["imageComponent", "thirdLevelTitle", "text"],
        nestedFC: ["imageComponent", "thirdLevelTitle", "text"],
      },
    ],
  },
  BGTitle: {
    FCWithEasterEggs: ["labelBreadCrumbs", "componentTitle", "primaryButton", "buttonArrow"],
  },
  BigImageWithDescription: {
    FCWithEasterEggs: ["imageComponent", "primaryTitle", "titleDescriptionBlock", "primaryButton"],
    nestedFC: ["primaryTitle", "titleDescriptionBlock"],
  },
  BoxWithAppearedBlock: {
    FCWithEasterEggs: ["primaryButton", "componentAnimator", "reasonsWithTitle"],
    mapWithEasterEggs: [
      {
        key: "reasonsWithTitle",
        FCWithEasterEggs: ["titleDescriptionBlock", "reasons"],
        nestedFC: ["titleDescriptionBlock"],
        listsWithEasterEggs: [
          {
            key: "reasons",
          },
        ],
      },
      {
        key: "componentAnimator",
        FCWithEasterEggs: ["imageComponent"],
      },
    ],
  },
  CommentsCarousel: {
    FCWithEasterEggs: ["primaryTitle", "comments"],
    nestedFC: ["primaryTitle"],
    listsWithEasterEggs: [
      {
        key: "comments",
        FCWithEasterEggs: ["imageComponent", "quote", "signature"],
        nestedFC: ["imageComponent", "quote", "signature"],
      },
    ],
  },
  ComponentWithLists: {
    FCWithEasterEggs: ["title", "primaryButton", "buttonArrow", "componentList"],
    nestedFC: ["title", "primaryButton", "buttonArrow"],
    listsWithEasterEggs: [
      {
        key: "componentList",
      },
    ],
  },
  ContactForm: {
    FCWithEasterEggs: ["titlePrimaryDescriptionBlock", "primaryButton"],
    nestedFC: ["titlePrimaryDescriptionBlock", "primaryButton"],
  },
  ContactsSection: {
    FCWithEasterEggs: ["titlePrimaryDescriptionBlock", "contact"],
    nestedFC: ["titlePrimaryDescriptionBlock"],
    listsWithEasterEggs: [
      {
        key: "contact",
      },
    ],
  },
  ContentCarouselSection: {
    FCWithEasterEggs: ["titlePrimaryDescriptionBlock", "infoSiteWithMap"],
    nestedFC: ["titlePrimaryDescriptionBlock"],
    listsWithEasterEggs: [
      {
        key: "infoSiteWithMap",
        FCWithEasterEggs: ["imageComponent"],
      },
    ],
  },
  GridPlatesSection: {
    FCWithEasterEggs: ["titlePrimaryDescriptionBlock", "gridPlate"],
    nestedFC: ["titlePrimaryDescriptionBlock"],
    listsWithEasterEggs: [
      {
        key: "gridPlate",
        FCWithEasterEggs: ["thirdLevelTitle", "text"],
        nestedFC: ["thirdLevelTitle", "text"],
      },
    ],
  },
  ImageLinkWithTitle: {
    FCWithEasterEggs: ["titlePrimaryDescriptionBlock", "imageComponent"],
    nestedFC: ["titlePrimaryDescriptionBlock"],
  },
  InfoBlocksAndButton: {
    FCWithEasterEggs: ["primaryTitle", "titleDescriptionBlock", "infoBlocksAndButtons", "primaryButton"],
    nestedFC: ["primaryTitle", "titleDescriptionBlock"],
    listsWithEasterEggs: [
      {
        key: "infoBlocksAndButtons",
      },
    ],
  },
  InternshipSubscribeSection: {
    FCWithEasterEggs: ["titlePrimaryDescriptionBlock", "primaryButton"],
    nestedFC: ["titlePrimaryDescriptionBlock", "primaryButton"],
  },
  LetTheNumbersSpeak: {
    FCWithEasterEggs: [
      "titleDescriptionBlock",
      "letTheNumberSpeakCardsSpace",
      "letTheNumberSpeakCard",
      "letTheNumberSpeakDescBox",
    ],
    nestedFC: ["titleDescriptionBlock", "letTheNumberSpeakCardsSpace"],
    listsWithEasterEggs: [
      {
        key: "letTheNumberSpeakCard",
      },
      {
        key: "letTheNumberSpeakDescBox",
      },
    ],
  },
  ListImagesWithTitleSection: {
    FCWithEasterEggs: ["titlePrimaryDescriptionBlock"],
    nestedFC: ["titlePrimaryDescriptionBlock"],
  },
  NewCommentCarousel: {
    FCWithEasterEggs: ["primaryTitle", "imageComponent", "commentWithNoPhoto"],
    nestedFC: ["primaryTitle"],
    listsWithEasterEggs: [
      {
        key: "imageComponent",
      },
      {
        key: "commentWithNoPhoto",
      },
    ],
  },
  PeopleSection: {
    FCWithEasterEggs: ["titleDescriptionBlock", "primaryButton", "points", "componentAnimator"],
    nestedFC: ["titleDescriptionBlock"],
    listsWithEasterEggs: [
      {
        key: "componentAnimator",
        FCWithEasterEggs: ["imageComponent"],
      },
    ],
  },
  PortfolioCarousel: {
    FCWithEasterEggs: ["portfolioCarouselCard"],
    listsWithEasterEggs: [
      {
        key: "portfolioCarouselCard",
        FCWithEasterEggs: ["primaryTitle", "title", "text", "primaryButton", "buttonArrow"],
        nestedFC: ["primaryTitle", "title", "text"],
      },
    ],
  },
  PortfolioPlatesSection: {
    FCWithEasterEggs: ["titlePrimaryDescriptionBlock", "portfolioPlate"],
    nestedFC: ["titlePrimaryDescriptionBlock"],
    listsWithEasterEggs: [
      {
        key: "portfolioPlate",
      },
    ],
  },
  QuoteAboveImage: {
    FCWithEasterEggs: ["imageComponent", "titleDescriptionBlock", "quoteAboveImage", "points"],
    nestedFC: ["imageComponent", "titleDescriptionBlock", "quoteAboveImage"],
  },
  StatisticBox: {
    FCWithEasterEggs: ["statisticBlock"],
    listsWithEasterEggs: [
      {
        key: "statisticBlock",
      },
    ],
  },
  StepByStep: {
    FCWithEasterEggs: ["titlePrimaryDescriptionBlock", "imageComponent", "stepItem"],
    nestedFC: ["titlePrimaryDescriptionBlock", "imageComponent"],
    listsWithEasterEggs: [
      {
        key: "stepItem",
      },
    ],
  },
  SubscribeSection: {
    FCWithEasterEggs: ["titlePrimaryDescriptionBlock", "primaryButton"],
    nestedFC: ["titlePrimaryDescriptionBlock", "primaryButton"],
  },
  Technologies: {
    FCWithEasterEggs: ["titleDescriptionBlock", "primaryButton", "projectName"],
    nestedFC: ["titleDescriptionBlock", "projectName"],
  },
  Youtube: {
    FCWithEasterEggs: ["titlePrimaryDescriptionBlock"],
    nestedFC: ["titlePrimaryDescriptionBlock"],
  },
}
