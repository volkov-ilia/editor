/* eslint-disable @typescript-eslint/no-explicit-any */
import generator from "../../utils/easterEggsConfig/easterEggsConfigGenerator"
import { test } from "@jest/globals"
import size from "lodash/size"
import reduce from "lodash/reduce"
import isArray from "lodash/isArray"
import isObject from "lodash/isObject"
import get from "lodash/get"
import { ParsedPage } from "../../types/utils/easterEggsConfig/ParsedPage"

const countChildren: (obj: any) => number = (obj) => {
  const countArray = (array: any) => size(array)

  return reduce(
    obj,
    (sum, child) => {
      if (isArray(child)) {
        const nestedCount = countArray(child)
        return sum + nestedCount
      }
      if (isObject(child)) {
        const nestedCount = countChildren(child)
        return sum + nestedCount
      }
      return sum
    },
    0
  )
}

describe(`generator handlers test`, () => {
  const mainEasterEggsConfig = {
    AboutHoursSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      text: {
        dataType: "simpleItem",
        key: "text",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
        ],
      },
    },
    BadgesGridSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      badgesCard: {
        dataType: "peerChildrenMap",
        jsonChildrenKey: ["children"],
        key: "badgesCard",
        nested: {
          imageComponent: {
            dataType: "simpleItem",
            key: "imageComponent",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "0",
                },
                posY: {
                  base: "0",
                },
              },
              {
                posX: {
                  base: "80%",
                },
                posY: {
                  base: "80%",
                },
              },
            ],
          },
          thirdLevelTitle: {
            dataType: "simpleItem",
            key: "thirdLevelTitle",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "-2rem",
                },
                posY: {
                  base: "-1rem",
                },
              },
              {
                posX: {
                  base: "90%",
                },
                posY: {
                  base: "-15%",
                },
              },
            ],
          },
          text: {
            dataType: "simpleItem",
            key: "text",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "90%",
                },
                posY: {
                  base: "-1.5rem",
                },
              },
              {
                posX: {
                  base: "15%",
                },
                posY: {
                  base: "95%",
                },
              },
            ],
          },
        },
        max: 6,
      },
    },
    BGTitle: {
      labelBreadCrumbs: {
        dataType: "simpleItem",
        key: "labelBreadCrumbs",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "-1rem",
            },
            posY: {
              base: "-25%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-100%",
            },
          },
        ],
      },
      componentTitle: {
        dataType: "simpleItem",
        key: "componentTitle",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "-1rem",
            },
            posY: {
              base: "-1rem",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-15%",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
      buttonArrow: {
        dataType: "simpleItem",
        key: "buttonArrow",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "100%",
            },
            posY: {
              base: "-0.75rem",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "-150%",
            },
            hover: true,
          },
        ],
      },
    },
    BigImageWithDescription: {
      imageComponent: {
        dataType: "simpleItem",
        key: "imageComponent",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "0",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "80%",
            },
          },
        ],
      },
      primaryTitle: {
        dataType: "simpleItem",
        key: "primaryTitle",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "7%",
            },
            posY: {
              base: "-2rem",
            },
          },
          {
            posX: {
              base: "-2rem",
            },
            posY: {
              base: "0",
            },
          },
        ],
      },
      titleDescriptionBlock: {
        dataType: "simpleItem",
        key: "titleDescriptionBlock",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "35%",
            },
            posY: {
              base: "-1.8rem",
              sm: "-2.5rem",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "1.5rem",
              sm: "2rem",
              lg: "2.5rem",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
    },
    BoxWithAppearedBlock: {
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
      componentAnimator: {
        dataType: "simpleMap",
        key: "componentAnimator",
        nested: {
          imageComponent: {
            dataType: "simpleItem",
            key: "imageComponent",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "0",
                },
                posY: {
                  base: "0",
                },
              },
              {
                posX: {
                  base: "80%",
                },
                posY: {
                  base: "80%",
                },
              },
            ],
          },
        },
        max: 2,
      },
      reasonsWithTitle: {
        dataType: "simpleMap",
        key: "reasonsWithTitle",
        nested: {
          titleDescriptionBlock: {
            dataType: "simpleItem",
            key: "titleDescriptionBlock",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "35%",
                },
                posY: {
                  base: "-1.8rem",
                  sm: "-2.5rem",
                },
              },
              {
                posX: {
                  base: "5%",
                },
                posY: {
                  base: "1.5rem",
                  sm: "2rem",
                  lg: "2.5rem",
                },
              },
            ],
          },
          reasons: {
            dataType: "peerChildrenList",
            jsonChildrenKey: ["reasons"],
            key: "reasons",
            max: 4,
            easterEggs: [
              {
                posX: {
                  base: "14%",
                },
                posY: {
                  base: "5rem",
                },
              },
              {
                posX: {
                  base: "75%",
                },
                posY: {
                  base: "88%",
                },
              },
              {
                posX: {
                  base: "65%",
                },
                posY: {
                  base: "-6%",
                },
              },
              {
                posX: {
                  base: "25%",
                },
                posY: {
                  base: "-6%",
                },
              },
            ],
          },
        },
        max: 6,
      },
    },
    CommentsCarousel: {
      primaryTitle: {
        dataType: "simpleItem",
        key: "primaryTitle",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "7%",
            },
            posY: {
              base: "-2rem",
            },
          },
          {
            posX: {
              base: "-2rem",
            },
            posY: {
              base: "0",
            },
          },
        ],
      },
      comments: {
        dataType: "peerChildrenMap",
        jsonChildrenKey: ["comments"],
        key: "comments",
        nested: {
          imageComponent: {
            dataType: "simpleItem",
            key: "imageComponent",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "0",
                },
                posY: {
                  base: "0",
                },
              },
              {
                posX: {
                  base: "80%",
                },
                posY: {
                  base: "80%",
                },
              },
            ],
          },
          quote: {
            dataType: "simpleItem",
            key: "quote",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "15%",
                },
                posY: {
                  base: "5.5rem",
                },
              },
              {
                posX: {
                  base: "75%",
                },
                posY: {
                  base: "90%",
                },
              },
            ],
          },
          signature: {
            dataType: "simpleItem",
            key: "signature",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "10%",
                },
                posY: {
                  base: "-2rem",
                },
              },
              {
                posX: {
                  base: "100%",
                },
                posY: {
                  base: "1%",
                },
              },
            ],
          },
        },
        max: 6,
      },
    },
    ComponentWithLists: {
      title: {
        dataType: "simpleItem",
        key: "title",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "35%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "10%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
      buttonArrow: {
        dataType: "simpleItem",
        key: "buttonArrow",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "100%",
            },
            posY: {
              base: "-0.75rem",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "-150%",
            },
            hover: true,
          },
        ],
      },
      componentList: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["text"],
        key: "componentList",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "10%",
            },
            posY: {
              base: "-2rem",
            },
          },
          {
            posX: {
              base: "100%",
            },
            posY: {
              base: "1%",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "20%",
            },
          },
        ],
      },
    },
    ContactForm: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
    },
    ContactsSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      contact: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["items"],
        key: "contact",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "4%",
            },
            posY: {
              base: "-3rem",
            },
          },
          {
            posX: {
              base: "100%",
            },
            posY: {
              base: "65%",
            },
          },
        ],
      },
    },
    ContentCarouselSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      infoSiteWithMap: {
        dataType: "peerChildrenMap",
        jsonChildrenKey: ["items"],
        key: "infoSiteWithMap",
        nested: {
          imageComponent: {
            dataType: "simpleItem",
            key: "imageComponent",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "0",
                },
                posY: {
                  base: "0",
                },
              },
              {
                posX: {
                  base: "80%",
                },
                posY: {
                  base: "80%",
                },
              },
            ],
          },
        },
        max: 2,
      },
    },
    GridPlatesSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      gridPlate: {
        dataType: "peerChildrenMap",
        jsonChildrenKey: ["cards"],
        key: "gridPlate",
        nested: {
          thirdLevelTitle: {
            dataType: "simpleItem",
            key: "thirdLevelTitle",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "-2rem",
                },
                posY: {
                  base: "-1rem",
                },
              },
              {
                posX: {
                  base: "90%",
                },
                posY: {
                  base: "-15%",
                },
              },
            ],
          },
          text: {
            dataType: "simpleItem",
            key: "text",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "90%",
                },
                posY: {
                  base: "-1.5rem",
                },
              },
              {
                posX: {
                  base: "15%",
                },
                posY: {
                  base: "95%",
                },
              },
            ],
          },
        },
        max: 4,
      },
    },
    ImageLinkWithTitle: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      imageComponent: {
        dataType: "simpleItem",
        key: "imageComponent",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "0",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "80%",
            },
          },
        ],
      },
    },
    InfoBlocksAndButton: {
      primaryTitle: {
        dataType: "simpleItem",
        key: "primaryTitle",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "7%",
            },
            posY: {
              base: "-2rem",
            },
          },
          {
            posX: {
              base: "-2rem",
            },
            posY: {
              base: "0",
            },
          },
        ],
      },
      titleDescriptionBlock: {
        dataType: "simpleItem",
        key: "titleDescriptionBlock",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "35%",
            },
            posY: {
              base: "-1.8rem",
              sm: "-2.5rem",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "1.5rem",
              sm: "2rem",
              lg: "2.5rem",
            },
          },
        ],
      },
      infoBlocksAndButtons: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["items"],
        key: "infoBlocksAndButtons",
        max: 1,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "0",
            },
            bg: true,
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
    },
    InternshipSubscribeSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
    },
    LetTheNumbersSpeak: {
      titleDescriptionBlock: {
        dataType: "simpleItem",
        key: "titleDescriptionBlock",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "35%",
            },
            posY: {
              base: "-1.8rem",
              sm: "-2.5rem",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "1.5rem",
              sm: "2rem",
              lg: "2.5rem",
            },
          },
        ],
      },
      letTheNumberSpeakCardsSpace: {
        dataType: "simpleItem",
        key: "letTheNumberSpeakCardsSpace",
        max: 1,
        easterEggs: [
          {
            posX: {
              base: "40%",
              sm: "43%",
            },
            posY: {
              base: "40%",
              sm: "41%",
            },
          },
        ],
      },
      letTheNumberSpeakCard: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["cards"],
        key: "letTheNumberSpeakCard",
        max: 4,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "-2.5rem",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "90%",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "90%",
            },
          },
        ],
      },
      letTheNumberSpeakDescBox: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["descBox"],
        key: "letTheNumberSpeakDescBox",
        max: 4,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "-2.5rem",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "90%",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "90%",
            },
          },
        ],
      },
    },
    ListImagesWithTitleSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
    },
    NewCommentCarousel: {
      primaryTitle: {
        dataType: "simpleItem",
        key: "primaryTitle",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "7%",
            },
            posY: {
              base: "-2rem",
            },
          },
          {
            posX: {
              base: "-2rem",
            },
            posY: {
              base: "0",
            },
          },
        ],
      },
      imageComponent: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["photos"],
        key: "imageComponent",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "0",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "80%",
            },
          },
        ],
      },
      commentWithNoPhoto: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["comments"],
        key: "commentWithNoPhoto",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "78%",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "50%",
            },
          },
          {
            posX: {
              base: "40%",
            },
            posY: {
              base: "1rem",
              lg: "2rem",
            },
          },
        ],
      },
    },
    PeopleSection: {
      titleDescriptionBlock: {
        dataType: "simpleItem",
        key: "titleDescriptionBlock",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "35%",
            },
            posY: {
              base: "-1.8rem",
              sm: "-2.5rem",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "1.5rem",
              sm: "2rem",
              lg: "2.5rem",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
      points: {
        dataType: "simpleItem",
        key: "points",
        max: 1,
        easterEggs: [
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "-2rem",
            },
          },
        ],
      },
      componentAnimator: {
        dataType: "peerChildrenMap",
        jsonChildrenKey: ["images"],
        key: "componentAnimator",
        nested: {
          imageComponent: {
            dataType: "simpleItem",
            key: "imageComponent",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "0",
                },
                posY: {
                  base: "0",
                },
              },
              {
                posX: {
                  base: "80%",
                },
                posY: {
                  base: "80%",
                },
              },
            ],
          },
        },
        max: 2,
      },
    },
    PortfolioCarousel: {
      portfolioCarouselCard: {
        dataType: "peerChildrenMap",
        jsonChildrenKey: ["children"],
        key: "portfolioCarouselCard",
        nested: {
          primaryTitle: {
            dataType: "simpleItem",
            key: "primaryTitle",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "7%",
                },
                posY: {
                  base: "-2rem",
                },
              },
              {
                posX: {
                  base: "-2rem",
                },
                posY: {
                  base: "0",
                },
              },
            ],
          },
          title: {
            dataType: "simpleItem",
            key: "title",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "35%",
                },
                posY: {
                  base: "-2.3rem",
                },
              },
              {
                posX: {
                  base: "10%",
                },
                posY: {
                  base: "-1.5rem",
                },
              },
            ],
          },
          text: {
            dataType: "simpleItem",
            key: "text",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "90%",
                },
                posY: {
                  base: "-1.5rem",
                },
              },
              {
                posX: {
                  base: "15%",
                },
                posY: {
                  base: "95%",
                },
              },
            ],
          },
          primaryButton: {
            dataType: "simpleItem",
            key: "primaryButton",
            max: 3,
            easterEggs: [
              {
                posX: {
                  base: "80%",
                },
                posY: {
                  base: "-1.5rem",
                },
              },
              {
                posX: {
                  base: "15%",
                },
                posY: {
                  base: "95%",
                },
              },
              {
                posX: {
                  base: "80%",
                },
                posY: {
                  base: "-50%",
                },
                hover: true,
              },
            ],
          },
          buttonArrow: {
            dataType: "simpleItem",
            key: "buttonArrow",
            max: 3,
            easterEggs: [
              {
                posX: {
                  base: "100%",
                },
                posY: {
                  base: "-0.75rem",
                },
              },
              {
                posX: {
                  base: "50%",
                },
                posY: {
                  base: "95%",
                },
              },
              {
                posX: {
                  base: "5%",
                },
                posY: {
                  base: "-150%",
                },
                hover: true,
              },
            ],
          },
        },
        max: 12,
      },
    },
    PortfolioPlatesSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      portfolioPlate: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["cards"],
        key: "portfolioPlate",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "40%",
            },
            posY: {
              base: "20%",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "-0.75rem",
            },
          },
          {
            posX: {
              base: "-5%",
            },
            posY: {
              base: "70%",
            },
          },
        ],
      },
    },
    QuoteAboveImage: {
      imageComponent: {
        dataType: "simpleItem",
        key: "imageComponent",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "0",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "80%",
            },
          },
        ],
      },
      titleDescriptionBlock: {
        dataType: "simpleItem",
        key: "titleDescriptionBlock",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "35%",
            },
            posY: {
              base: "-1.8rem",
              sm: "-2.5rem",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "1.5rem",
              sm: "2rem",
              lg: "2.5rem",
            },
          },
        ],
      },
      quoteAboveImage: {
        dataType: "simpleItem",
        key: "quoteAboveImage",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "10%",
            },
            posY: {
              base: "-0.6rem",
            },
          },
          {
            posX: {
              base: "45%",
            },
            posY: {
              base: "91%",
            },
          },
        ],
      },
      points: {
        dataType: "simpleItem",
        key: "points",
        max: 1,
        easterEggs: [
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "-2rem",
            },
          },
        ],
      },
    },
    StatisticBox: {
      statisticBlock: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["items"],
        key: "statisticBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "10%",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "50%",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "45%",
            },
          },
        ],
      },
    },
    StepByStep: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      imageComponent: {
        dataType: "simpleItem",
        key: "imageComponent",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "0",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "80%",
            },
          },
        ],
      },
      stepItem: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["items"],
        key: "stepItem",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "-2.5rem",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "50%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "90%",
            },
          },
        ],
      },
    },
    SubscribeSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
    },
    Technologies: {
      titleDescriptionBlock: {
        dataType: "simpleItem",
        key: "titleDescriptionBlock",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "35%",
            },
            posY: {
              base: "-1.8rem",
              sm: "-2.5rem",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "1.5rem",
              sm: "2rem",
              lg: "2.5rem",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
      projectName: {
        dataType: "simpleItem",
        key: "projectName",
        max: 1,
        easterEggs: [
          {
            posX: {
              base: "20%",
              lg: "20%",
            },
            posY: {
              base: "5%",
              lg: "15%",
            },
          },
        ],
      },
    },
    Youtube: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
    },
  }

  const logo =
    "https://images.ctfassets.net/mue5t0ky2rh8/MrW07PciC8cSlOSa3Whhv/ae98405eb550191e093e027d6a560196/Group.svg"

  const iconColors = ["hwPurple", "hwOrange", "hwBlue", "hwBrown"]

  const icons = [
    `<svg width="718" height="867" viewBox="0 0 718 867" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M622.5 404.5L613 391.5" stroke="#005321" stroke-width="15"/>
<path d="M654.5 388L645 375" stroke="#005321" stroke-width="15"/>
<path d="M666.5 471L657 458" stroke="#005321" stroke-width="15"/>
<path d="M697.5 450L688 437" stroke="#005321" stroke-width="15"/>
<path d="M324.951 539.176L305.326 560.059L335.958 627.131L362.623 621.304L324.951 539.176Z" stroke="#005321" stroke-width="15"/>
<path d="M611 422.5L607 417.5L678.5 379.5L707.5 422.5L634.5 471L631.5 465.5" stroke="#005321" stroke-width="15"/>
<path d="M476 508.5L609 427.5L628.5 462.5L486 534" stroke="#005321" stroke-width="15"/>
<path d="M514.5 488C495.667 449.667 449.2 396 414 488C411.333 496.167 400.2 508.9 377 494.5C333.167 472.667 231 462.5 272.5 602.5" stroke="#005321" stroke-width="18"/>
<path d="M528.516 516.174C544.897 555.618 554.568 625.943 462.209 591.696C454.313 588.312 437.399 588.277 432.913 615.211C432.913 667 326 742 272.5 601.5" stroke="#005321" stroke-width="18"/>
<path d="M185 446.5C167.833 454 122.7 470.1 79.5001 474.5C75.5001 474.667 67.9 476.4 69.5 482C69.3334 487.5 73 497.8 89 495C71.3334 507 36.8 532.4 58 542C63.1666 545.089 96.7594 516.09 115 504.5C127.86 496.328 133.5 491.52 151 485C176.5 475.5 201 474.5 230 474.5" stroke="#005321" stroke-width="18"/>
<path d="M285.5 757.5C292.833 765.167 302.2 791.1 281 833.5C276.667 845.833 276.6 867.1 311 853.5C319 847.667 333 837 338.5 826C343 817 346.5 802.3 338.5 789.5C332.833 782 319.4 763.6 311 750" stroke="#005321" stroke-width="18"/>
<path d="M475.15 718.615C475.929 729.195 485.776 747.041 531.457 759.709C543.517 764.754 559.35 778.953 526.206 795.38C516.516 797.411 493.839 802.303 477.5 792.5C465.761 785.457 461.8 777.46 455.15 765.494C444.812 746.891 447.8 727.641 443.331 712.294" stroke="#005321" stroke-width="18"/>
<path d="M466.5 437.5C470.833 435.667 507.5 423.5 507.5 392.5C493.333 397.333 450.3 420.564 411.5 378.964C407.833 373.631 403.2 363.564 414 365.964C434.167 375.964 470.3 379.7 507.5 334.5C471.5 322.5 410.3 272.9 453.5 170.5C421.833 212.833 331 265 266 220.5C262.5 251.5 248 299 290.5 329C299 335 301.7 343.2 294.5 352C279.667 371.667 229.6 402.4 156 406C166 427.167 196.8 470.9 240 476.5C246.167 476.167 256.5 477.5 250 491.5C240.669 511.597 201.5 582 113.5 594.5C122.167 614.5 157 650.4 227 634C234 632.167 242.5 632 234.5 643C215.5 667 161.1 731.4 85.5 743C130.5 767.667 247.5 798.2 355.5 723C367.667 716.667 407.9 706.5 471.5 716.5C523 724.333 632.7 718.2 659.5 631C633.333 646.833 568 668.5 513.5 603" stroke="#005321" stroke-width="18"/>
<path d="M327.5 365.5C342 348 345 318.5 366.5 327C378.678 331.815 381 372 357 389C346.015 396.781 318.911 375.866 327.5 365.5Z" stroke="#005321" stroke-width="18"/>
<circle cx="451.5" cy="533.5" r="31" stroke="#005321" stroke-width="15"/>
<path d="M338.07 250C337.237 264.333 343.47 291.2 375.07 284" stroke="#005321" stroke-width="11"/>
<path d="M338.129 259.048C336.126 264.213 328.251 271.495 312.783 259.299" stroke="#005321" stroke-width="11"/>
<path d="M342.4 273C342.233 278.538 337.237 288.028 318.587 281.688" stroke="#005321" stroke-width="11"/>
<path d="M353.641 285C355.127 290.337 353.174 300.883 333.483 300.368" stroke="#005321" stroke-width="11"/>
<path d="M438.246 290.146C428.296 300.497 404.349 314.18 388.159 286.103" stroke="#005321" stroke-width="11"/>
<path d="M431.567 296.251C429.139 301.231 429.148 311.956 448.606 315.017" stroke="#005321" stroke-width="11"/>
<path d="M418.429 302.598C414.48 306.483 410.912 316.598 428.236 325.972" stroke="#005321" stroke-width="11"/>
<path d="M401.987 302.505C397.062 305.042 390.651 313.64 404.409 327.736" stroke="#005321" stroke-width="11"/>
<path d="M192.491 0.0554977L192.5 0C192.5 48.4 211 57 248.5 61.5C204.645 66.2156 188.512 98.9492 187.937 125.308C187.979 126.834 188 128.397 188 130C187.924 128.464 187.902 126.897 187.937 125.308C186.566 75.4113 162.961 65.8665 129 61.5C182.972 61.5 186.996 35.5271 192.491 0.0554977Z" fill="#C4C4C4"/>
<path d="M192.491 0.0554977L192.5 0C192.5 48.4 211 57 248.5 61.5C204.645 66.2156 188.512 98.9492 187.937 125.308C187.979 126.834 188 128.397 188 130C187.924 128.464 187.902 126.897 187.937 125.308C186.566 75.4113 162.961 65.8665 129 61.5C182.972 61.5 186.996 35.5271 192.491 0.0554977Z" fill="#005321"/>
<path d="M144.491 229.055L144.5 229C144.5 277.4 163 286 200.5 290.5C156.645 295.216 140.512 327.949 139.937 354.308C139.979 355.834 140 357.397 140 359C139.924 357.464 139.902 355.897 139.937 354.308C138.566 304.411 114.961 294.866 81 290.5C134.972 290.5 138.996 264.527 144.491 229.055Z" fill="#C4C4C4"/>
<path d="M144.491 229.055L144.5 229C144.5 277.4 163 286 200.5 290.5C156.645 295.216 140.512 327.949 139.937 354.308C139.979 355.834 140 357.397 140 359C139.924 357.464 139.902 355.897 139.937 354.308C138.566 304.411 114.961 294.866 81 290.5C134.972 290.5 138.996 264.527 144.491 229.055Z" fill="#005321"/>
<path d="M365.286 81.0414L365.293 81C365.293 117.114 379.071 123.531 407 126.888C374.338 130.407 362.323 154.831 361.894 174.499C361.926 175.637 361.941 176.804 361.941 178C361.885 176.854 361.869 175.685 361.894 174.499C360.873 137.268 343.293 130.147 318 126.888C358.197 126.888 361.194 107.509 365.286 81.0414Z" fill="#C4C4C4"/>
<path d="M365.286 81.0414L365.293 81C365.293 117.114 379.071 123.531 407 126.888C374.338 130.407 362.323 154.831 361.894 174.499C361.926 175.637 361.941 176.804 361.941 178C361.885 176.854 361.869 175.685 361.894 174.499C360.873 137.268 343.293 130.147 318 126.888C358.197 126.888 361.194 107.509 365.286 81.0414Z" fill="#005321"/>
<path d="M43.036 608.038L43.0418 608C43.0418 641.135 55.5816 647.023 81 650.104C51.2742 653.332 40.3387 675.742 39.9489 693.788C39.9773 694.832 39.9916 695.903 39.9916 697C39.9402 695.948 39.9254 694.876 39.9489 693.788C39.0195 659.628 23.0198 653.093 0 650.104C36.5834 650.104 39.311 632.322 43.036 608.038Z" fill="#C4C4C4"/>
<path d="M43.036 608.038L43.0418 608C43.0418 641.135 55.5816 647.023 81 650.104C51.2742 653.332 40.3387 675.742 39.9489 693.788C39.9773 694.832 39.9916 695.903 39.9916 697C39.9402 695.948 39.9254 694.876 39.9489 693.788C39.0195 659.628 23.0198 653.093 0 650.104C36.5834 650.104 39.311 632.322 43.036 608.038Z" fill="#005321"/>
</svg>
`,
    `<svg width="746" height="792" viewBox="0 0 746 792" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M110.491 148.055L110.5 148C110.5 196.4 129 205 166.5 209.5C122.645 214.216 106.512 246.949 105.937 273.308C105.979 274.834 106 276.397 106 278C105.924 276.464 105.902 274.897 105.937 273.308C104.566 223.411 80.9613 213.866 47 209.5C100.972 209.5 104.996 183.527 110.491 148.055Z" fill="#C4C4C4"/>
<path d="M110.491 148.055L110.5 148C110.5 196.4 129 205 166.5 209.5C122.645 214.216 106.512 246.949 105.937 273.308C105.979 274.834 106 276.397 106 278C105.924 276.464 105.902 274.897 105.937 273.308C104.566 223.411 80.9613 213.866 47 209.5C100.972 209.5 104.996 183.527 110.491 148.055Z" fill="#B40E0E"/>
<path d="M160.818 0.0414173L160.824 0C160.824 36.1138 174.757 42.5308 203 45.8885C169.971 49.407 157.821 73.8314 157.388 93.4987C157.419 94.6374 157.435 95.8043 157.435 97C157.378 95.854 157.362 94.685 157.388 93.4987C156.355 56.2684 138.578 49.1465 113 45.8885C153.648 45.8885 156.679 26.5087 160.818 0.0414173Z" fill="#C4C4C4"/>
<path d="M160.818 0.0414173L160.824 0C160.824 36.1138 174.757 42.5308 203 45.8885C169.971 49.407 157.821 73.8314 157.388 93.4987C157.419 94.6374 157.435 95.8043 157.435 97C157.378 95.854 157.362 94.685 157.388 93.4987C156.355 56.2684 138.578 49.1465 113 45.8885C153.648 45.8885 156.679 26.5087 160.818 0.0414173Z" fill="#B40E0E"/>
<path d="M668.723 613.033L668.728 613C668.728 641.668 679.72 646.762 702 649.427C675.944 652.22 666.359 671.608 666.017 687.221C666.042 688.125 666.054 689.051 666.054 690C666.009 689.09 665.996 688.162 666.017 687.221C665.202 657.667 651.178 652.013 631 649.427C663.067 649.427 665.458 634.043 668.723 613.033Z" fill="#C4C4C4"/>
<path d="M668.723 613.033L668.728 613C668.728 641.668 679.72 646.762 702 649.427C675.944 652.22 666.359 671.608 666.017 687.221C666.042 688.125 666.054 689.051 666.054 690C666.009 689.09 665.996 688.162 666.017 687.221C665.202 657.667 651.178 652.013 631 649.427C663.067 649.427 665.458 634.043 668.723 613.033Z" fill="#B40E0E"/>
<path d="M251.723 699.033L251.728 699C251.728 727.668 262.72 732.762 285 735.427C258.944 738.22 249.359 757.608 249.017 773.221C249.042 774.125 249.054 775.051 249.054 776C249.009 775.09 248.996 774.162 249.017 773.221C248.202 743.667 234.178 738.013 214 735.427C246.067 735.427 248.458 720.043 251.723 699.033Z" fill="#C4C4C4"/>
<path d="M251.723 699.033L251.728 699C251.728 727.668 262.72 732.762 285 735.427C258.944 738.22 249.359 757.608 249.017 773.221C249.042 774.125 249.054 775.051 249.054 776C249.009 775.09 248.996 774.162 249.017 773.221C248.202 743.667 234.178 738.013 214 735.427C246.067 735.427 248.458 720.043 251.723 699.033Z" fill="#B40E0E"/>
<path d="M703.723 268.033L703.728 268C703.728 296.668 714.72 301.762 737 304.427C710.944 307.22 701.359 326.608 701.017 342.221C701.042 343.125 701.054 344.051 701.054 345C701.009 344.09 700.996 343.162 701.017 342.221C700.202 312.667 686.178 307.013 666 304.427C698.067 304.427 700.458 289.043 703.723 268.033Z" fill="#C4C4C4"/>
<path d="M703.723 268.033L703.728 268C703.728 296.668 714.72 301.762 737 304.427C710.944 307.22 701.359 326.608 701.017 342.221C701.042 343.125 701.054 344.051 701.054 345C701.009 344.09 700.996 343.162 701.017 342.221C700.202 312.667 686.178 307.013 666 304.427C698.067 304.427 700.458 289.043 703.723 268.033Z" fill="#B40E0E"/>
<path d="M401.537 24.0453L401.544 24C401.544 63.4646 416.561 70.4769 447 74.1462C411.402 77.9912 398.307 104.682 397.84 126.174C397.874 127.418 397.891 128.693 397.891 130C397.83 128.748 397.812 127.47 397.84 126.174C396.727 85.4892 377.567 77.7065 350 74.1462C393.81 74.1462 397.076 52.9682 401.537 24.0453Z" fill="#C4C4C4"/>
<path d="M401.537 24.0453L401.544 24C401.544 63.4646 416.561 70.4769 447 74.1462C411.402 77.9912 398.307 104.682 397.84 126.174C397.874 127.418 397.891 128.693 397.891 130C397.83 128.748 397.812 127.47 397.84 126.174C396.727 85.4892 377.567 77.7065 350 74.1462C393.81 74.1462 397.076 52.9682 401.537 24.0453Z" fill="#B40E0E"/>
<path d="M266.081 262.492C278.701 269.338 305.669 275.115 312.583 243.451" stroke="#B40E0E" stroke-width="11"/>
<path d="M274.296 266.284C278.12 270.293 281.364 280.516 263.75 289.333" stroke="#B40E0E" stroke-width="11"/>
<path d="M288.74 268.348C293.682 270.853 300.149 279.409 286.483 293.595" stroke="#B40E0E" stroke-width="11"/>
<path d="M304.38 263.273C309.843 264.197 318.559 270.446 309.723 288.051" stroke="#B40E0E" stroke-width="11"/>
<path d="M363.123 206.085C363.923 220.421 357.628 247.273 326.044 240" stroke="#B40E0E" stroke-width="11"/>
<path d="M363.043 215.133C365.035 220.303 372.892 227.603 388.388 215.442" stroke="#B40E0E" stroke-width="11"/>
<path d="M358.74 229.075C358.894 234.613 363.869 244.115 382.532 237.818" stroke="#B40E0E" stroke-width="11"/>
<path d="M347.471 241.049C345.974 246.383 347.901 256.934 367.593 256.463" stroke="#B40E0E" stroke-width="11"/>
<circle cx="121.342" cy="564.517" r="91.5" transform="rotate(24.6731 121.342 564.517)" stroke="#B40E0E" stroke-width="18"/>
<path d="M147.282 476.291L163.649 440.661L177.705 447.118L161.337 482.748" stroke="#B40E0E" stroke-width="18"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M79.4942 556.428C73.8214 562.101 73.8214 571.299 79.4942 576.971L115.668 613.145L122.813 606L88.2027 571.389C85.6129 568.799 85.6129 564.6 88.2027 562.011C90.7924 559.421 94.9914 559.421 97.5812 562.011L132.192 596.622L139.337 589.476L103.163 553.302C97.4906 547.629 88.2933 547.629 82.6202 553.302L79.4942 556.428Z" fill="#B40E0E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M112.542 523.381C106.869 529.054 106.869 538.251 112.542 543.924L138.444 569.826C144.117 575.499 153.314 575.499 158.987 569.826L162.113 566.7C167.786 561.027 167.786 551.83 162.113 546.157L136.211 520.255C130.538 514.582 121.341 514.582 115.668 520.255L112.542 523.381ZM121.25 528.963C118.661 531.553 118.661 535.752 121.25 538.341L144.026 561.118C146.616 563.707 150.815 563.707 153.405 561.118C155.994 558.528 155.994 554.329 153.405 551.739L130.629 528.963C128.039 526.373 123.84 526.373 121.25 528.963Z" fill="#B40E0E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M96.018 539.905C90.3453 545.577 90.3453 554.775 96.018 560.448L101.154 565.584L108.299 558.438L104.726 554.865C102.137 552.276 102.137 548.077 104.726 545.487C107.316 542.897 111.515 542.897 114.105 545.487L117.678 549.06L124.823 541.914L119.687 536.778C114.014 531.106 104.817 531.106 99.144 536.778L96.018 539.905Z" fill="#B40E0E"/>
<path d="M53.1454 536.332L46 543.477L115.668 613.145L122.813 606L53.1454 536.332Z" fill="#B40E0E"/>
<path d="M137.551 521.594L130.405 528.74L188.462 586.796L195.607 579.651L137.551 521.594Z" fill="#B40E0E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M155.377 572.468C156.677 571.797 157.897 570.916 158.987 569.826L162.113 566.7C167.786 561.027 167.786 551.83 162.113 546.157L156.977 541.021L149.832 548.166L153.405 551.739C155.994 554.329 155.994 558.528 153.405 561.118C150.815 563.707 146.616 563.707 144.026 561.118L155.377 572.468Z" fill="#B40E0E"/>
<path d="M216.5 334C272.1 276.4 249.333 161.333 231 111C365 217.8 444.833 210.5 468 193.5C450 251.5 413.167 274.333 397 278.5C461.8 372.9 550.667 343.5 587 317C595.8 405.8 536 435.333 505 439C616.6 557.4 702.833 474 732 417.5C749.2 497.9 716.5 550.333 698 566.5C667.6 606.1 564 593.333 516 582C489.6 574 448.333 585.333 431 592C311.8 669.2 252 645 239.5 553.5C334 579 350.833 516.333 350 478.5C312.4 511.3 260.667 486.5 239.5 470C328.3 397.2 313.5 337.667 295 317C271.4 338.6 232.833 337.333 216.5 334Z" stroke="#B40E0E" stroke-width="18"/>
<path d="M322 302C344 341.5 383.8 393.5 367 285.5" stroke="#B40E0E" stroke-width="18"/>
<path d="M390.5 613C374 637.667 341.4 705.7 357 754.5C359.398 762 365.6 773.9 394 775.5C422.4 777.1 449.6 770 462 754.5C469.333 745.333 475 725.8 439 721C429.333 720.833 417.5 721 401 726.5C389 692.5 383 651.5 426.5 595.5" stroke="#B40E0E" stroke-width="18"/>
<path d="M555.5 587.5C573.5 612 601.32 649.096 610.5 699.5C611.911 707.246 610.5 737 591.462 754.192C570.351 773.256 539.807 775.483 521.575 767.635C510.792 762.993 488.623 744.165 518.137 723C526.59 718.308 541.352 716.405 558.5 713.5C570 668.999 555.5 629 525.5 587.5" stroke="#B40E0E" stroke-width="18"/>
<path d="M434 312.492C456.43 309.891 494.247 294.9 500.5 255C500.5 244.403 494.519 222.714 500.5 220C503.772 218.515 514.5 215.5 523 237C523 216.5 539.401 178.5 555 178.5C570.599 178.5 567.076 217.543 547.5 255C535.605 276.827 503.5 317 457 332.5" stroke="#B40E0E" stroke-width="15"/>
<path d="M297.182 381.105C268.059 370.989 236.729 374.676 212.093 406.679C207.007 415.976 201.846 437.874 195.296 437.385C191.712 437.117 180.854 434.613 183.715 411.672C173.876 429.657 141.25 455.123 127.565 447.636C113.88 440.15 135.709 407.588 170.86 384.122C191.771 370.682 227.33 346.961 305.431 361.806" stroke="#B40E0E" stroke-width="15"/>
<circle cx="370" cy="564" r="19" fill="#B40E0E"/>
<circle cx="441" cy="530" r="19" fill="#B40E0E"/>
<circle cx="496" cy="476" r="19" fill="#B40E0E"/>
<circle cx="453" cy="375" r="19" fill="#B40E0E"/>
<circle cx="403" cy="413" r="19" fill="#B40E0E"/>
<circle cx="338" cy="427" r="19" fill="#B40E0E"/>
</svg>`,
    `<svg width="636" height="866" viewBox="0 0 636 866" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M175 405.5C248.278 422.7 301.5 389.5 284 299C310.5 375.5 431.121 416.619 463 405.5C456 448 447.945 473 404.5 490.759C458.5 531.5 504.5 513 534 490.759C534 584 501.5 611.794 456 624C512 676.5 567.5 673.5 623 649C591.174 808.347 438.803 770.298 391.555 753.414C344.307 736.53 269.684 723.787 218.45 746.428C167.216 769.07 8.99996 771.412 9 611.794C75.5514 694.119 152.05 664 184.5 611.794C119 607.5 79.5 532.206 72.5 482.206C137 532.5 170 518 214 490.759C167.5 455 175 430 175 405.5Z" stroke="#005321" stroke-width="18"/>
<path d="M262.745 432.435C276.705 435.792 304.251 434.41 302.756 402.035" stroke="#005321" stroke-width="11"/>
<path d="M267.337 434.02C270.23 438.745 271.245 449.422 252.168 454.328" stroke="#005321" stroke-width="11"/>
<path d="M279.537 434.02C284.233 436.959 289.904 446.062 275.017 458.961" stroke="#005321" stroke-width="11"/>
<path d="M294.128 429.02C299.505 430.354 307.725 437.244 297.584 454.131" stroke="#005321" stroke-width="11"/>
<path d="M376.312 421.6C364.854 430.252 339.048 439.985 327.491 409.706" stroke="#005321" stroke-width="11"/>
<path d="M373.473 424.829C371.785 430.106 373.335 440.718 393.031 440.952" stroke="#005321" stroke-width="11"/>
<path d="M360.241 430.829C357.476 435.629 356.745 446.329 375.946 450.725" stroke="#005321" stroke-width="11"/>
<path d="M343.746 430.829C340.028 434.936 337.052 445.24 354.89 453.595" stroke="#005321" stroke-width="11"/>
<path d="M95.7533 334.026L95.7573 334C95.7573 357.083 104.427 361.185 122 363.331C101.449 365.58 93.8885 381.191 93.619 393.762C93.6386 394.49 93.6485 395.236 93.6485 396C93.613 395.267 93.6027 394.52 93.619 393.762C92.9765 369.965 81.9149 365.413 66 363.331C91.2923 363.331 93.178 350.944 95.7533 334.026Z" fill="#C4C4C4"/>
<path d="M95.7533 334.026L95.7573 334C95.7573 357.083 104.427 361.185 122 363.331C101.449 365.58 93.8885 381.191 93.619 393.762C93.6386 394.49 93.6485 395.236 93.6485 396C93.613 395.267 93.6027 394.52 93.619 393.762C92.9765 369.965 81.9149 365.413 66 363.331C91.2923 363.331 93.178 350.944 95.7533 334.026Z" fill="#005321"/>
<path d="M171.491 0.0554977L171.5 0C171.5 48.4 190 57 227.5 61.5C183.645 66.2156 167.512 98.9492 166.937 125.308C166.979 126.834 167 128.397 167 130C166.924 128.464 166.902 126.897 166.937 125.308C165.566 75.4113 141.961 65.8665 108 61.5C161.972 61.5 165.996 35.5271 171.491 0.0554977Z" fill="#C4C4C4"/>
<path d="M171.491 0.0554977L171.5 0C171.5 48.4 190 57 227.5 61.5C183.645 66.2156 167.512 98.9492 166.937 125.308C166.979 126.834 167 128.397 167 130C166.924 128.464 166.902 126.897 166.937 125.308C165.566 75.4113 141.961 65.8665 108 61.5C161.972 61.5 165.996 35.5271 171.491 0.0554977Z" fill="#005321"/>
<path d="M394.256 96.0482L394.264 96C394.264 138.071 410.364 145.546 443 149.458C404.833 153.557 390.793 182.01 390.292 204.921C390.329 206.248 390.347 207.607 390.347 209C390.281 207.665 390.262 206.303 390.292 204.921C389.099 161.55 368.556 153.253 339 149.458C385.971 149.458 389.473 126.881 394.256 96.0482Z" fill="#C4C4C4"/>
<path d="M394.256 96.0482L394.264 96C394.264 138.071 410.364 145.546 443 149.458C404.833 153.557 390.793 182.01 390.292 204.921C390.329 206.248 390.347 207.607 390.347 209C390.281 207.665 390.262 206.303 390.292 204.921C389.099 161.55 368.556 153.253 339 149.458C385.971 149.458 389.473 126.881 394.256 96.0482Z" fill="#005321"/>
<path d="M585.973 339.037L585.979 339C585.979 371.018 598.209 376.708 623 379.685C594.008 382.804 583.343 404.459 582.962 421.896C582.99 422.905 583.004 423.94 583.004 425C582.954 423.984 582.94 422.948 582.962 421.896C582.056 388.887 566.451 382.573 544 379.685C579.68 379.685 582.34 362.503 585.973 339.037Z" fill="#C4C4C4"/>
<path d="M585.973 339.037L585.979 339C585.979 371.018 598.209 376.708 623 379.685C594.008 382.804 583.343 404.459 582.962 421.896C582.99 422.905 583.004 423.94 583.004 425C582.954 423.984 582.94 422.948 582.962 421.896C582.056 388.887 566.451 382.573 544 379.685C579.68 379.685 582.34 362.503 585.973 339.037Z" fill="#005321"/>
<path d="M54.1613 153.039L54.1674 153C54.1674 187.252 67.3264 193.338 94 196.523C62.8062 199.86 51.3307 223.026 50.9217 241.679C50.9515 242.759 50.9665 243.866 50.9665 245C50.9126 243.913 50.897 242.804 50.9217 241.679C49.9464 206.368 33.1566 199.613 9 196.523C47.39 196.523 50.2523 178.142 54.1613 153.039Z" fill="#C4C4C4"/>
<path d="M54.1613 153.039L54.1674 153C54.1674 187.252 67.3264 193.338 94 196.523C62.8062 199.86 51.3307 223.026 50.9217 241.679C50.9515 242.759 50.9665 243.866 50.9665 245C50.9126 243.913 50.897 242.804 50.9217 241.679C49.9464 206.368 33.1566 199.613 9 196.523C47.39 196.523 50.2523 178.142 54.1613 153.039Z" fill="#005321"/>
<path d="M208.161 249.039L208.167 249C208.167 283.252 221.326 289.338 248 292.523C216.806 295.86 205.331 319.026 204.922 337.679C204.951 338.759 204.967 339.866 204.967 341C204.913 339.913 204.897 338.804 204.922 337.679C203.946 302.368 187.157 295.613 163 292.523C201.39 292.523 204.252 274.142 208.161 249.039Z" fill="#C4C4C4"/>
<path d="M208.161 249.039L208.167 249C208.167 283.252 221.326 289.338 248 292.523C216.806 295.86 205.331 319.026 204.922 337.679C204.951 338.759 204.967 339.866 204.967 341C204.913 339.913 204.897 338.804 204.922 337.679C203.946 302.368 187.157 295.613 163 292.523C201.39 292.523 204.252 274.142 208.161 249.039Z" fill="#005321"/>
<path d="M326 494.893C326 494.893 297.872 531.889 264.712 561.166C231.551 590.443 206.974 574.339 195.782 560.937C191.358 555.64 183.504 530.667 210.334 517.478C237.165 504.29 260.432 538.147 243.996 553.494C227.56 568.841 209.276 551.628 212.848 541.439C216.42 531.25 233.396 529.092 232.28 544.388" stroke="#005321" stroke-width="11"/>
<path d="M298 479C298 479 317.153 491.056 331 494C344.369 496.843 360 494 360 494" stroke="#005321" stroke-width="18"/>
<path d="M451 767C423.068 777.866 384.341 802.411 385.864 827.285C386.591 839.153 373.899 852.295 354.728 842.936C335.557 833.578 314.417 822.229 310.737 818.687C301.163 805.956 312.732 778.861 334.565 788.714C342.735 792.402 348.94 810.218 354.861 816.948C360.768 823.662 371.738 820.59 369.362 800.206C366.985 779.822 382.611 757.659 387.5 755.5" stroke="#005321" stroke-width="15"/>
<path d="M140.483 758.641C169.042 767.733 190.335 786.495 190.375 811.415C190.394 823.306 203.886 835.626 222.432 825.083C240.978 814.54 261.364 801.887 264.815 798.121C273.57 784.814 260.325 758.499 239.153 769.702C231.23 773.895 226.155 792.065 220.668 799.154C215.194 806.225 204.053 803.848 205.146 783.355C206.239 762.861 200.014 754.348 195 752.5" stroke="#005321" stroke-width="15"/>
<path d="M315.957 278.8C294.062 248.679 272.283 271.126 286.154 304.355C300.024 337.583 379.974 401.123 411.902 383.184C443.83 365.244 396.409 352.378 376.48 340.376C356.55 328.374 343.137 316.193 315.957 278.8Z" stroke="#005321" stroke-width="18"/>
<path d="M324 282L391 240H434L471 321L423.5 282L403.5 292L400.5 349" stroke="#005321" stroke-width="15"/>
<path d="M404.5 291.5L384 275" stroke="#005321" stroke-width="11"/>
<path d="M421 279.5V256.5" stroke="#005321" stroke-width="11"/>
<circle cx="477.5" cy="333.5" r="24.5" fill="#005321"/>
<path d="M404.781 631.5C430.254 618.855 433.326 650.82 444.5 663.5C455.674 676.18 478.5 684.5 478.5 684.5C467.074 693.414 428.07 702.156 424.607 703.467C370.722 719.853 348 703.467 348 675.938C354.532 652.162 387.146 659.7 404.781 659.7C402.822 648.603 395.478 636.118 404.781 631.5Z" stroke="#005321" stroke-width="15"/>
<path d="M242.664 630.241C228.61 617.574 224.498 637.524 215.048 643.544C205.598 649.564 193.367 651.785 193.367 651.785C199.087 659.526 218.582 670.187 220.566 671.649C252.164 691.862 269.687 685.59 274.649 668.106C274.747 651.817 252.476 650.669 241.168 647.46C244.424 640.769 247.796 634.866 242.664 630.241Z" stroke="#005321" stroke-width="15"/>
<path d="M279 702.082L304.472 705.853M329.945 709.625L304.472 705.853M304.472 705.853L311.795 656.392" stroke="#005321" stroke-width="15"/>
<path d="M299.743 572.22L348.215 579.396L339.794 636.276C337.812 649.661 325.355 658.906 311.969 656.924V656.924C298.584 654.942 289.34 642.485 291.322 629.1L299.743 572.22Z" stroke="#005321" stroke-width="15"/>
<path d="M296.5 613H341.5" stroke="#005321" stroke-width="18"/>
<path d="M339.5 616H298.5C293.5 629.833 290 657.1 316 655.5C342 653.9 342.5 628.5 339.5 616Z" fill="#005321"/>
</svg>`,
    `<svg width="755" height="859" viewBox="0 0 755 859" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M190.441 312.768C288.497 332.362 351.651 208.579 363.205 158C379.989 250.955 463.815 331.5 544.5 319.5C527.716 370.17 457.701 382.333 431.705 382.485C423.313 459.036 514.5 577 623 577C516 636.5 473.5 572 463.815 551.703C463.815 642.478 530.674 721.841 692 642.478C567.535 834.402 467.97 745.384 423.882 721.841C360.488 693.59 270.226 712.576 252.743 721.841C139.636 761.211 9 689.681 9 594.238C93.5323 693.831 190.441 624 230.5 567C178.757 592.297 146 606 89.5 543.5C193.029 561.271 273.143 422.431 288.497 382.485C248.727 383.943 199.106 334.64 190.441 312.768Z" stroke="#B40E0E" stroke-width="18"/>
<path d="M306.196 289.543C313.864 301.681 334.574 319.895 356.073 295.643" stroke="#B40E0E" stroke-width="11"/>
<path d="M311.512 296.865C312.89 302.231 310.728 312.736 291.051 311.826" stroke="#B40E0E" stroke-width="11"/>
<path d="M323.107 305.722C326.196 310.321 327.66 320.946 308.806 326.649" stroke="#B40E0E" stroke-width="11"/>
<path d="M339.233 308.932C343.549 312.407 348.102 322.118 331.793 333.163" stroke="#B40E0E" stroke-width="11"/>
<path d="M416.385 288.147C410.082 301.047 391.472 321.403 367.466 299.63" stroke="#B40E0E" stroke-width="11"/>
<path d="M411.896 296.003C411.109 301.487 414.4 311.695 433.862 308.653" stroke="#B40E0E" stroke-width="11"/>
<path d="M401.332 306.067C398.761 310.975 398.46 321.696 417.822 325.318" stroke="#B40E0E" stroke-width="11"/>
<path d="M385.65 311.011C381.738 314.934 378.266 325.082 395.679 334.29" stroke="#B40E0E" stroke-width="11"/>
<path d="M316.5 355.5C323.398 369.152 369.114 373.686 396.737 364.358C410 421 328 416.643 316.5 355.5Z" stroke="#B40E0E" stroke-width="11"/>
<path d="M254.605 719C236.939 748.167 209.429 802.213 254.605 824.5C292.105 843 312.605 836 324.017 824.5C335.428 813 334.517 790.5 303.017 790.5C280.017 790.5 256.005 803.2 279.605 714" stroke="#B40E0E" stroke-width="15"/>
<path d="M367 714.5C357.5 773 372.018 842.79 421.954 836.155C463.405 830.648 476.538 813.421 479.616 797.515C482.693 781.609 472.028 768.166 443.243 780.961C406 797.515 380.5 780 393 718.5" stroke="#B40E0E" stroke-width="15"/>
<path d="M173.258 0.0631864L173.268 0C173.268 55.1015 194.322 64.8923 237 70.0154C187.09 75.3839 168.729 112.65 168.075 142.658C168.122 144.395 168.146 146.176 168.146 148C168.06 146.251 168.035 144.468 168.075 142.658C166.514 85.8529 139.651 74.9864 101 70.0154C162.424 70.0154 167.004 40.4462 173.258 0.0631864Z" fill="#C4C4C4"/>
<path d="M173.258 0.0631864L173.268 0C173.268 55.1015 194.322 64.8923 237 70.0154C187.09 75.3839 168.729 112.65 168.075 142.658C168.122 144.395 168.146 146.176 168.146 148C168.06 146.251 168.035 144.468 168.075 142.658C166.514 85.8529 139.651 74.9864 101 70.0154C162.424 70.0154 167.004 40.4462 173.258 0.0631864Z" fill="#B40E0E"/>
<path d="M281.379 90.0354L281.385 90C281.385 120.902 293.151 126.392 317 129.265C289.109 132.276 278.849 153.175 278.483 170.004C278.51 170.978 278.523 171.977 278.523 173C278.475 172.019 278.461 171.019 278.483 170.004C277.611 138.147 262.599 132.053 241 129.265C275.325 129.265 277.884 112.683 281.379 90.0354Z" fill="#C4C4C4"/>
<path d="M281.379 90.0354L281.385 90C281.385 120.902 293.151 126.392 317 129.265C289.109 132.276 278.849 153.175 278.483 170.004C278.51 170.978 278.523 171.977 278.523 173C278.475 172.019 278.461 171.019 278.483 170.004C277.611 138.147 262.599 132.053 241 129.265C275.325 129.265 277.884 112.683 281.379 90.0354Z" fill="#B40E0E"/>
<path d="M174.941 197.029L174.946 197C174.946 222.317 184.544 226.815 204 229.169C181.247 231.636 172.877 248.758 172.578 262.546C172.6 263.344 172.611 264.162 172.611 265C172.572 264.197 172.56 263.377 172.578 262.546C171.867 236.446 159.62 231.453 142 229.169C170.002 229.169 172.09 215.583 174.941 197.029Z" fill="#C4C4C4"/>
<path d="M174.941 197.029L174.946 197C174.946 222.317 184.544 226.815 204 229.169C181.247 231.636 172.877 248.758 172.578 262.546C172.6 263.344 172.611 264.162 172.611 265C172.572 264.197 172.56 263.377 172.578 262.546C171.867 236.446 159.62 231.453 142 229.169C170.002 229.169 172.09 215.583 174.941 197.029Z" fill="#B40E0E"/>
<path d="M528.006 27.0448L528.013 27C528.013 66.0923 542.874 73.0385 573 76.6731C537.769 80.4818 524.809 106.921 524.347 128.21C524.381 129.443 524.397 130.706 524.397 132C524.337 130.759 524.319 129.494 524.347 128.21C523.245 87.9091 504.283 80.1998 477 76.6731C520.358 76.6731 523.591 55.695 528.006 27.0448Z" fill="#C4C4C4"/>
<path d="M528.006 27.0448L528.013 27C528.013 66.0923 542.874 73.0385 573 76.6731C537.769 80.4818 524.809 106.921 524.347 128.21C524.381 129.443 524.397 130.706 524.397 132C524.337 130.759 524.319 129.494 524.347 128.21C523.245 87.9091 504.283 80.1998 477 76.6731C520.358 76.6731 523.591 55.695 528.006 27.0448Z" fill="#B40E0E"/>
<path d="M468.941 167.029L468.946 167C468.946 192.317 478.544 196.815 498 199.169C475.247 201.636 466.877 218.758 466.578 232.546C466.6 233.344 466.611 234.162 466.611 235C466.572 234.197 466.56 233.377 466.578 232.546C465.867 206.446 453.62 201.453 436 199.169C464.002 199.169 466.09 185.583 468.941 167.029Z" fill="#C4C4C4"/>
<path d="M468.941 167.029L468.946 167C468.946 192.317 478.544 196.815 498 199.169C475.247 201.636 466.877 218.758 466.578 232.546C466.6 233.344 466.611 234.162 466.611 235C466.572 234.197 466.56 233.377 466.578 232.546C465.867 206.446 453.62 201.453 436 199.169C464.002 199.169 466.09 185.583 468.941 167.029Z" fill="#B40E0E"/>
<circle cx="226" cy="625" r="15" fill="#B40E0E"/>
<circle cx="241" cy="511" r="15" fill="#B40E0E"/>
<circle cx="269" cy="631" r="15" fill="#B40E0E"/>
<circle cx="292" cy="523" r="15" fill="#B40E0E"/>
<circle cx="317" cy="631" r="15" fill="#B40E0E"/>
<circle cx="344" cy="518" r="15" fill="#B40E0E"/>
<circle cx="362" cy="616" r="15" fill="#B40E0E"/>
<circle cx="389" cy="496" r="15" fill="#B40E0E"/>
<circle cx="407" cy="595" r="15" fill="#B40E0E"/>
<circle cx="419" cy="461" r="15" fill="#B40E0E"/>
<circle cx="437" cy="559" r="15" fill="#B40E0E"/>
<path d="M590.983 381C590.983 381 612.037 395.293 641.965 401.177C671.893 407.06 691.874 401.736 691.874 401.736L670.348 506.476C667.496 520.349 655.599 530.605 641.442 530.187C631.832 529.904 621.038 529.135 612.466 527.321C604.466 525.627 594.993 522.302 586.594 518.965C573.457 513.745 566.599 499.643 569.445 485.796L590.983 381Z" stroke="#B40E0E" stroke-width="18"/>
<path d="M584 413.5C537.5 397.5 519 453 573 463" stroke="#B40E0E" stroke-width="18"/>
<rect x="584" y="374.391" width="33" height="41" rx="10" transform="rotate(-72.0375 584 374.391)" stroke="#B40E0E" stroke-width="11"/>
<rect x="632.828" y="358.764" width="30.2391" height="36.499" rx="10" transform="rotate(-130.974 632.828 358.764)" stroke="#B40E0E" stroke-width="11"/>
<rect x="653" y="349.443" width="30.2391" height="36.499" rx="10" transform="rotate(-76.8219 653 349.443)" stroke="#B40E0E" stroke-width="11"/>
<rect x="657.103" y="400.921" width="33" height="41" rx="10" transform="rotate(-155.814 657.103 400.921)" stroke="#B40E0E" stroke-width="11"/>
<path d="M678.874 395C672.988 395 668.376 389.942 668.916 384.081L670.093 371.337C670.558 366.293 674.722 362.394 679.786 362.26L696.752 361.811C702.273 361.665 706.867 366.023 707.013 371.544L707.362 384.736C707.51 390.36 702.991 395 697.365 395L678.874 395Z" stroke="#B40E0E" stroke-width="11"/>
<path d="M650.037 300.779C663.979 286.829 681.047 245.516 637.779 191.865C594.512 138.215 616.801 93.1358 633.354 77.3025C624.299 90.8451 613.152 126.042 640.996 158.486L657.076 172.569C637.865 150.909 622.586 113.186 652.783 66.5771C691.729 6.46387 659.965 6.68468 639.215 14.3092C660.203 1.62951 699.931 -6.51327 690.946 62.3534C673.92 75.0379 651.513 114.224 698.093 169.494C707.169 180.106 721.02 206.995 708.42 233.79C707.71 235.958 706.744 237.637 705.75 238.793C706.748 237.129 707.635 235.46 708.42 233.79C711.114 225.573 710.135 210.334 693.062 189.913C696.174 225.782 691.925 298.172 650.037 300.779Z" fill="#B40E0E"/>
<path d="M449 460.5C484.5 481 520 470 542.5 452.5L536.5 426.5C520 441 493.2 466.5 436 386.5" stroke="#B40E0E" stroke-width="15"/>
<path d="M272 403.725C212 370 128.5 354.5 74 408.5C61.5 420.886 64 453 88.6677 439C95.3681 430.057 115.5 412 115.5 412C113.647 415.643 112.19 429.163 119.033 433.535C125.449 434.363 138.621 429.56 139.99 403.725C164.51 396.107 215.5 396 242.5 453" stroke="#B40E0E" stroke-width="15"/>
<path d="M162.5 402L177.5 454.5M177.5 454.5C186 460 189.5 475.5 177.5 483.063L45.5 510.5C45.5 510.5 50.5767 502.305 50.5 496.5C50.426 490.902 45.5 483.063 45.5 483.063M177.5 454.5L45.5 483.063M154.5 376L140 321L40 338L32 486L45.5 483.063" stroke="#B40E0E" stroke-width="15"/>
</svg>`,
    `<svg width="935" height="775" viewBox="0 0 935 775" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M551.199 445.5C564.699 447.167 587.5 445.5 587.5 419.5" stroke="#B40E0E" stroke-width="11"/>
<path d="M577 408C580.5 412.667 589 425.55 602.5 418.05" stroke="#B40E0E" stroke-width="11"/>
<path d="M543.199 429C553.199 438.5 550.699 451.5 543.199 457" stroke="#B40E0E" stroke-width="11"/>
<path d="M458.5 331.5C469.5 343.167 460.9 401.95 434.5 431.95" stroke="#B40E0E" stroke-width="18"/>
<path d="M545.5 320.5C565.333 329.5 584.1 348.05 666.5 302.45C666 329.95 656.9 390.55 624.5 412.95C653.833 439.783 710.9 457.6 796.5 404C800 425.333 805.7 493.4 744.5 529C784.667 535.167 883.7 542.05 922.5 496.45C939.333 546.95 895.202 709.707 753.5 630C737.5 621 689 611.5 655.5 648.5C603.84 705.557 554.8 751.85 504 735.45" stroke="#B40E0E" stroke-width="18"/>
<path d="M641.258 17.0632L641.268 17C641.268 72.1015 662.322 81.8923 705 87.0154C655.09 92.3839 636.729 129.65 636.075 159.658C636.122 161.395 636.146 163.176 636.146 165C636.06 163.251 636.035 161.468 636.075 159.658C634.514 102.853 607.651 91.9864 569 87.0154C630.424 87.0154 635.004 57.4462 641.258 17.0632Z" fill="#C4C4C4"/>
<path d="M641.258 17.0632L641.268 17C641.268 72.1015 662.322 81.8923 705 87.0154C655.09 92.3839 636.729 129.65 636.075 159.658C636.122 161.395 636.146 163.176 636.146 165C636.06 163.251 636.035 161.468 636.075 159.658C634.514 102.853 607.651 91.9864 569 87.0154C630.424 87.0154 635.004 57.4462 641.258 17.0632Z" fill="#B40E0E"/>
<path d="M700.567 222.038L700.573 222C700.573 255.135 713.268 261.023 739 264.104C708.907 267.332 697.837 289.742 697.442 307.788C697.471 308.832 697.485 309.903 697.485 311C697.433 309.948 697.418 308.876 697.442 307.788C696.501 273.628 680.304 267.093 657 264.104C694.035 264.104 696.796 246.322 700.567 222.038Z" fill="#C4C4C4"/>
<path d="M700.567 222.038L700.573 222C700.573 255.135 713.268 261.023 739 264.104C708.907 267.332 697.837 289.742 697.442 307.788C697.471 308.832 697.485 309.903 697.485 311C697.433 309.948 697.418 308.876 697.442 307.788C696.501 273.628 680.304 267.093 657 264.104C694.035 264.104 696.796 246.322 700.567 222.038Z" fill="#B40E0E"/>
<path d="M577.567 149.038L577.573 149C577.573 182.135 590.268 188.023 616 191.104C585.907 194.332 574.837 216.742 574.442 234.788C574.471 235.832 574.485 236.903 574.485 238C574.433 236.948 574.418 235.876 574.442 234.788C573.501 200.628 557.304 194.093 534 191.104C571.035 191.104 573.796 173.322 577.567 149.038Z" fill="#C4C4C4"/>
<path d="M577.567 149.038L577.573 149C577.573 182.135 590.268 188.023 616 191.104C585.907 194.332 574.837 216.742 574.442 234.788C574.471 235.832 574.485 236.903 574.485 238C574.433 236.948 574.418 235.876 574.442 234.788C573.501 200.628 557.304 194.093 534 191.104C571.035 191.104 573.796 173.322 577.567 149.038Z" fill="#B40E0E"/>
<path d="M384.567 64.038L384.573 64C384.573 97.1354 397.268 103.023 423 106.104C392.907 109.332 381.837 131.742 381.442 149.788C381.471 150.832 381.485 151.903 381.485 153C381.433 151.948 381.418 150.876 381.442 149.788C380.501 115.628 364.304 109.093 341 106.104C378.035 106.104 380.796 88.3224 384.567 64.038Z" fill="#C4C4C4"/>
<path d="M384.567 64.038L384.573 64C384.573 97.1354 397.268 103.023 423 106.104C392.907 109.332 381.837 131.742 381.442 149.788C381.471 150.832 381.485 151.903 381.485 153C381.433 151.948 381.418 150.876 381.442 149.788C380.501 115.628 364.304 109.093 341 106.104C378.035 106.104 380.796 88.3224 384.567 64.038Z" fill="#B40E0E"/>
<path d="M56.3187 335.049L56.3264 335C56.3264 377.815 72.7364 385.423 106 389.404C67.0995 393.575 52.7889 422.532 52.2788 445.849C52.316 447.199 52.3347 448.582 52.3347 450C52.2674 448.641 52.248 447.255 52.2788 445.849C51.0626 401.71 30.1247 393.266 0 389.404C47.8746 389.404 51.444 366.428 56.3187 335.049Z" fill="#C4C4C4"/>
<path d="M56.3187 335.049L56.3264 335C56.3264 377.815 72.7364 385.423 106 389.404C67.0995 393.575 52.7889 422.532 52.2788 445.849C52.316 447.199 52.3347 448.582 52.3347 450C52.2674 448.641 52.248 447.255 52.2788 445.849C51.0626 401.71 30.1247 393.266 0 389.404C47.8746 389.404 51.444 366.428 56.3187 335.049Z" fill="#B40E0E"/>
<path d="M241.753 119.026L241.757 119C241.757 141.711 250.427 145.746 268 147.858C247.449 150.07 239.888 165.43 239.619 177.798C239.639 178.514 239.649 179.248 239.649 180C239.613 179.279 239.603 178.544 239.619 177.798C238.976 154.385 227.915 149.907 212 147.858C237.292 147.858 239.178 135.67 241.753 119.026Z" fill="#C4C4C4"/>
<path d="M241.753 119.026L241.757 119C241.757 141.711 250.427 145.746 268 147.858C247.449 150.07 239.888 165.43 239.619 177.798C239.639 178.514 239.649 179.248 239.649 180C239.613 179.279 239.603 178.544 239.619 177.798C238.976 154.385 227.915 149.907 212 147.858C237.292 147.858 239.178 135.67 241.753 119.026Z" fill="#B40E0E"/>
<path d="M492.753 0.0260408L492.757 0C492.757 22.7108 501.427 26.7462 519 28.8577C498.449 31.0704 490.888 46.43 490.619 58.7982C490.639 59.5143 490.649 60.248 490.649 61C490.613 60.2793 490.603 59.5442 490.619 58.7982C489.976 35.3853 478.915 30.9066 463 28.8577C488.292 28.8577 490.178 16.6704 492.753 0.0260408Z" fill="#C4C4C4"/>
<path d="M492.753 0.0260408L492.757 0C492.757 22.7108 501.427 26.7462 519 28.8577C498.449 31.0704 490.888 46.43 490.619 58.7982C490.639 59.5143 490.649 60.248 490.649 61C490.613 60.2793 490.603 59.5442 490.619 58.7982C489.976 35.3853 478.915 30.9066 463 28.8577C488.292 28.8577 490.178 16.6704 492.753 0.0260408Z" fill="#B40E0E"/>
<path d="M590.693 485.461C609.526 464.151 618.081 489.45 639.54 500.141C661 510.833 687 498.5 687 498.5C679 520.5 646.714 550.48 644 552.999C600.258 588.477 565.205 573.516 554.835 548.016C551.929 523.53 584.98 518.227 601.316 511.583C595.321 502.043 583.815 493.243 590.693 485.461Z" stroke="#B40E0E" stroke-width="15"/>
<path d="M478.5 325.949C441.3 321.949 468.5 353.05 449 359.499C415.5 370.579 410.167 317.115 420 306.949C424.8 284.949 500.5 277 539 290.949C564 303 553 315.333 543.5 319.999C516 311.499 513.5 322.499 505 325.949C495.087 329.972 488.5 327.024 478.5 325.949Z" stroke="#B40E0E" stroke-width="18"/>
<path d="M472.933 400.209C485.867 406.441 513.083 410.914 518.465 378.954" stroke="#B40E0E" stroke-width="11"/>
<path d="M481.321 403.602C485.333 407.422 489.065 417.477 471.896 427.132" stroke="#B40E0E" stroke-width="11"/>
<path d="M495.847 404.969C500.904 407.233 507.775 415.468 494.808 430.295" stroke="#B40E0E" stroke-width="11"/>
<path d="M511.225 399.148C516.726 399.808 525.733 405.631 517.754 423.64" stroke="#B40E0E" stroke-width="11"/>
<path d="M570.856 347.768C569.445 362.056 559.1 387.622 529.008 375.584" stroke="#B40E0E" stroke-width="11"/>
<path d="M569.387 356.696C570.561 362.11 577.205 370.53 594.385 360.895" stroke="#B40E0E" stroke-width="11"/>
<path d="M562.994 369.812C562.296 375.308 565.751 385.461 585.161 382.105" stroke="#B40E0E" stroke-width="11"/>
<path d="M550.02 379.913C547.72 384.953 548.005 395.675 567.535 398.235" stroke="#B40E0E" stroke-width="11"/>
<path d="M530.5 289.45C529.333 275.45 520.7 245.65 495.5 238.45C470.3 231.25 474.167 197.001 476 184.501C477.167 178.834 473.5 153.5 448.5 177C441 179.167 431.1 180.5 425.5 188.5C422.5 181.5 405 176.101 399 184.501C391.5 195.001 349.5 196.95 354.5 273.95C360.833 253.783 381 213.95 411 215.95C412.833 229.45 420.8 254.35 438 245.95C440.833 254.283 450.5 269.5 435 293" stroke="#B40E0E" stroke-width="15"/>
<path d="M434.438 494V625.5" stroke="#B40E0E" stroke-width="11"/>
<path d="M369 560.062L500.5 560.062" stroke="#B40E0E" stroke-width="11"/>
<path d="M386.45 513.943L479.435 606.928" stroke="#B40E0E" stroke-width="11"/>
<path d="M386.45 606.928L479.435 513.943" stroke="#B40E0E" stroke-width="11"/>
<path d="M260.818 410.95V487.95" stroke="#B40E0E" stroke-width="11"/>
<path d="M222.5 449.632L299.5 449.632" stroke="#B40E0E" stroke-width="11"/>
<path d="M232.718 422.627L287.165 477.075" stroke="#B40E0E" stroke-width="11"/>
<path d="M232.718 477.075L287.165 422.627" stroke="#B40E0E" stroke-width="11"/>
<path d="M401.844 653V719" stroke="#B40E0E" stroke-width="11"/>
<path d="M369 686.156L435 686.156" stroke="#B40E0E" stroke-width="11"/>
<path d="M377.758 663.01L424.427 709.679" stroke="#B40E0E" stroke-width="11"/>
<path d="M377.758 709.678L424.427 663.009" stroke="#B40E0E" stroke-width="11"/>
<path d="M258.5 687.45L299 718.95" stroke="#B40E0E" stroke-width="11"/>
<path d="M267.5 670.95L308 702.45" stroke="#B40E0E" stroke-width="11"/>
<path d="M240.5 622.45L261.5 588.45" stroke="#B40E0E" stroke-width="11"/>
<path d="M254.5 635.45L279.5 603.45" stroke="#B40E0E" stroke-width="11"/>
<path d="M159 649.45L222.5 587.45L304.5 658.45L245 734.95" stroke="#B40E0E" stroke-width="11"/>
<path d="M175.5 600.45L211 628.45" stroke="#B40E0E" stroke-width="11"/>
<path d="M162.5 614.95L198 642.95" stroke="#B40E0E" stroke-width="11"/>
<path d="M157 579.45C147.833 559.283 137.9 499.75 171.5 422.95" stroke="#B40E0E" stroke-width="11"/>
<path d="M187.5 529.95C175.333 492.783 169.3 400.85 242.5 330.45" stroke="#B40E0E" stroke-width="11"/>
<path d="M275 270.45C272 248.283 198 186.45 150.5 226.949L175 243.949C161.667 248.949 135 254.45 119 283.95L156 294.95C145.5 303.95 132.9 311.85 142.5 319.45C152.1 327.05 180.167 314.45 186 308.95C173.333 324.45 158.2 366.15 193 352.95" stroke="#B40E0E" stroke-width="18"/>
<path d="M244.5 307.95C192.833 337.45 113.1 426.95 129.5 554.95C145.9 682.95 194.5 712.487 246.5 740.45C319.073 779.476 407 764.95 466 746.95C519.085 730.754 600.688 706.277 591 573.5M573 515C557.5 481 538.3 456.05 425.5 434.45C419.333 424.283 396.1 400.95 352.5 388.95C337.333 359.116 302.7 299.15 285.5 297.95" stroke="#B40E0E" stroke-width="18"/>
<path d="M243.5 302.45L288.5 287.95H237L279.5 275.45" stroke="#B40E0E" stroke-width="11"/>
<circle cx="368.5" cy="288.95" r="24" fill="#B40E0E"/>
<path d="M595 711.5C595.833 728.167 608.7 759.4 653.5 751C667.5 750.5 695 743.5 693 719.5C691.833 710.5 681.4 696.3 649 711.5C633.5 716.5 621.3 721.4 620.5 687" stroke="#B40E0E" stroke-width="15"/>
<path d="M719 623.5C735.676 622.89 771.358 654.043 766.86 699.402C767.572 713.392 762.974 741.394 738.891 741.476C729.824 741.091 709.123 734 727.119 698.331C738.891 675 721.84 625.825 687.5 628" stroke="#B40E0E" stroke-width="15"/>
</svg>`,
    `<svg width="637" height="871" viewBox="0 0 637 871" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M153.723 711.031V692H158.797V711.031" stroke="#005321" stroke-width="11"/>
<path d="M342.762 686.996V676H347.837V686.996" stroke="#005321" stroke-width="11"/>
<path d="M397.379 665.454V646H400.762V665.454" stroke="#005321" stroke-width="11"/>
<path d="M467.762 669.454V650H471.145V669.454" stroke="#005321" stroke-width="11"/>
<path d="M260.192 739.109C263.857 747.426 271.018 761.692 258.5 777.593C245.982 793.495 233.344 797.746 218.542 805.781C208.534 809.87 192.237 826.927 207.124 842.152C215.582 848.072 230.384 858.222 254.912 834.539C254.912 834.539 274.105 813.515 280.287 796.9C284.229 786.306 286.208 773.492 286.208 768.566C286.208 760.953 287.054 755.032 282.824 733.464" stroke="#005321" stroke-width="15"/>
<path d="M360.645 753.284C356.98 761.601 351.58 774.599 364.098 790.5C376.616 806.401 389.838 811.279 404.64 819.315C414.649 823.403 430.945 840.46 416.058 855.685C407.6 861.606 392.798 871.755 368.27 848.072C368.27 848.072 349.077 827.048 342.895 810.434C338.953 799.839 336.974 787.025 336.974 782.099C336.974 774.486 336.482 763.491 340.712 741.922" stroke="#005321" stroke-width="15"/>
<path d="M500.5 628C502.615 651.119 539.023 677.302 624.958 667.49C618.332 694.274 516.693 778.715 389.82 761.376C343.3 750.38 306.93 714.433 225.309 746.997C125.502 797.746 63.3349 769.411 35 719.931C48.1102 719.931 93.446 734.733 131 673.834" stroke="#005321" stroke-width="18"/>
<path d="M180.058 651.842C234.5 684.5 276.069 679.847 324.653 647.343C371.5 616 417.5 635.5 437 616" stroke="#005321" stroke-width="18"/>
<path d="M147.494 563.032C133.256 557.675 102.327 554.912 92.5158 586.715C79.2646 598.838 64.6036 624.1 103.511 631.543" stroke="#005321" stroke-width="18"/>
<path d="M515.424 580.371C521.768 578.398 534.878 570.898 536.57 556.688C538.684 538.926 514.578 549.499 525.574 526.662C534.371 508.392 505.556 499.878 490.05 497.904" stroke="#005321" stroke-width="18"/>
<path d="M109.432 621.394C98.6055 630.867 112.11 649.446 120.005 657.763L129.731 670.874C152.569 670.874 168.216 659.455 174.983 653.957C184.287 644.23 193.591 618.616 177.52 602.785C154.852 580.456 136.075 610.821 133.115 626.891C129.732 621.112 120.258 611.92 109.432 621.394Z" stroke="#005321" stroke-width="15"/>
<path d="M503.583 571.013C517.121 575.879 511.332 598.106 507.02 608.732L502.751 624.488C481.491 632.827 462.754 627.91 454.448 625.262C442.234 619.604 424.221 599.155 433.401 578.549C446.351 549.485 474.919 570.898 483.543 584.778C484.582 578.162 490.045 566.146 503.583 571.013Z" stroke="#005321" stroke-width="15"/>
<path d="M247.758 187V244.516" stroke="#005321" stroke-width="9"/>
<path d="M219 215.758L276.516 215.758" stroke="#005321" stroke-width="9"/>
<path d="M227.458 236.128L268.128 195.458" stroke="#005321" stroke-width="9"/>
<path d="M268.128 236.128L227.458 195.458" stroke="#005321" stroke-width="9"/>
<path d="M328.5 287V362" stroke="#005321" stroke-width="9"/>
<path d="M291 324.5L366 324.5" stroke="#005321" stroke-width="9"/>
<path d="M302.029 351.062L355.062 298.029" stroke="#005321" stroke-width="9"/>
<path d="M355.062 351.062L302.029 298.029" stroke="#005321" stroke-width="9"/>
<path d="M239.258 324V400.516" stroke="#005321" stroke-width="9"/>
<path d="M201 362.258L277.516 362.258" stroke="#005321" stroke-width="9"/>
<path d="M212.252 389.357L266.357 335.252" stroke="#005321" stroke-width="9"/>
<path d="M266.357 389.357L212.252 335.252" stroke="#005321" stroke-width="9"/>
<path d="M208.5 466V545" stroke="#005321" stroke-width="9"/>
<path d="M169 505.5L248 505.5" stroke="#005321" stroke-width="9"/>
<path d="M180.618 533.479L236.479 477.618" stroke="#005321" stroke-width="9"/>
<path d="M236.479 533.479L180.618 477.618" stroke="#005321" stroke-width="9"/>
<path d="M305.258 401V489.516" stroke="#005321" stroke-width="9"/>
<path d="M261 445.258L349.516 445.258" stroke="#005321" stroke-width="9"/>
<path d="M274.017 476.607L336.607 414.017" stroke="#005321" stroke-width="9"/>
<path d="M336.607 476.607L274.017 414.017" stroke="#005321" stroke-width="9"/>
<path d="M410.258 445V529.516" stroke="#005321" stroke-width="9"/>
<path d="M368 487.258L452.516 487.258" stroke="#005321" stroke-width="9"/>
<path d="M380.429 517.19L440.19 457.429" stroke="#005321" stroke-width="9"/>
<path d="M440.19 517.19L380.429 457.429" stroke="#005321" stroke-width="9"/>
<path d="M128.04 263.613C129.591 251.489 123.473 229.188 86.595 236.969C49.7173 244.751 71.2293 252.335 86.595 255.154C77.4319 254.45 60.2054 255.747 64.6036 266.573C61.5023 272.353 58.7676 283.574 72.639 282.221C58.6829 291.243 39.652 311.993 75.1763 322.82C80.9561 324.934 94.3764 325.696 101.82 311.824C109.432 319.859 126.264 329.671 132.692 304.635C135.793 308.582 143.688 314.446 150.454 306.326C155.247 305.903 164.072 301.421 161.027 286.873C157.982 272.325 147.071 267.278 141.996 266.573" stroke="#005321" stroke-width="15"/>
<path d="M129.732 263.19C140.586 231.331 180.988 166.09 255.758 160C263.653 160.564 280.625 164.99 285.362 178.185C294.807 202.432 325.623 256 373.327 276.3C402.931 286.45 450.973 316.476 406.314 355.384C361.655 394.291 400.393 418.397 425.345 425.587C452.552 429.111 502.906 449.185 486.666 501.287C451.001 547.666 333.404 624.777 148.34 562.186C153.414 554.715 152.653 536.558 109.009 523.701C65.3649 510.845 113.943 478.309 143.688 463.648C175.688 444.477 224.717 404.864 164.833 399.789C104.949 394.714 153.132 356.512 184.71 338.045C212.199 314.785 259.142 267.757 227.001 265.727C221.503 267.983 210 270.633 207.97 263.19C205.94 255.747 211.071 244.018 213.89 239.084C210.084 247.542 201.034 263.782 195.282 261.075C189.531 258.369 185.837 251.771 184.71 248.811C181.749 253.604 174.137 262.09 167.37 257.692C160.604 253.294 147.917 261.216 142.419 265.727L129.732 263.19Z" stroke="#005321" stroke-width="18"/>
<path d="M388.491 0.0554977L388.5 0C388.5 48.4 407 57 444.5 61.5C400.645 66.2156 384.512 98.9492 383.937 125.308C383.979 126.834 384 128.397 384 130C383.924 128.464 383.902 126.897 383.937 125.308C382.566 75.4113 358.961 65.8665 325 61.5C378.972 61.5 382.996 35.5271 388.491 0.0554977Z" fill="#C4C4C4"/>
<path d="M388.491 0.0554977L388.5 0C388.5 48.4 407 57 444.5 61.5C400.645 66.2156 384.512 98.9492 383.937 125.308C383.979 126.834 384 128.397 384 130C383.924 128.464 383.902 126.897 383.937 125.308C382.566 75.4113 358.961 65.8665 325 61.5C378.972 61.5 382.996 35.5271 388.491 0.0554977Z" fill="#005321"/>
<path d="M510.537 195.045L510.544 195C510.544 234.092 525.561 241.038 556 244.673C520.402 248.482 507.307 274.921 506.84 296.21C506.874 297.443 506.891 298.706 506.891 300C506.83 298.759 506.812 297.494 506.84 296.21C505.727 255.909 486.567 248.2 459 244.673C502.81 244.673 506.076 223.695 510.537 195.045Z" fill="#C4C4C4"/>
<path d="M510.537 195.045L510.544 195C510.544 234.092 525.561 241.038 556 244.673C520.402 248.482 507.307 274.921 506.84 296.21C506.874 297.443 506.891 298.706 506.891 300C506.83 298.759 506.812 297.494 506.84 296.21C505.727 255.909 486.567 248.2 459 244.673C502.81 244.673 506.076 223.695 510.537 195.045Z" fill="#005321"/>
<path d="M135.786 60.0337L135.791 60C135.791 89.4123 147.092 94.6385 170 97.3731C143.21 100.239 133.355 120.131 133.003 136.148C133.029 137.076 133.042 138.026 133.042 139C132.996 138.067 132.982 137.115 133.003 136.148C132.166 105.827 117.746 100.027 97 97.3731C129.97 97.3731 132.428 81.5895 135.786 60.0337Z" fill="#C4C4C4"/>
<path d="M135.786 60.0337L135.791 60C135.791 89.4123 147.092 94.6385 170 97.3731C143.21 100.239 133.355 120.131 133.003 136.148C133.029 137.076 133.042 138.026 133.042 139C132.996 138.067 132.982 137.115 133.003 136.148C132.166 105.827 117.746 100.027 97 97.3731C129.97 97.3731 132.428 81.5895 135.786 60.0337Z" fill="#005321"/>
<path d="M38.7855 389.034L38.7908 389C38.7908 418.412 50.092 423.638 73 426.373C46.21 429.239 36.3546 449.131 36.0033 465.148C36.0289 466.076 36.0418 467.026 36.0418 468C35.9955 467.067 35.9821 466.115 36.0033 465.148C35.1657 434.827 20.7462 429.027 0 426.373C32.9703 426.373 35.4284 410.59 38.7855 389.034Z" fill="#C4C4C4"/>
<path d="M38.7855 389.034L38.7908 389C38.7908 418.412 50.092 423.638 73 426.373C46.21 429.239 36.3546 449.131 36.0033 465.148C36.0289 466.076 36.0418 467.026 36.0418 468C35.9955 467.067 35.9821 466.115 36.0033 465.148C35.1657 434.827 20.7462 429.027 0 426.373C32.9703 426.373 35.4284 410.59 38.7855 389.034Z" fill="#005321"/>
<path d="M524.786 378.034L524.791 378C524.791 407.412 536.092 412.638 559 415.373C532.21 418.239 522.355 438.131 522.003 454.148C522.029 455.076 522.042 456.026 522.042 457C521.996 456.067 521.982 455.115 522.003 454.148C521.166 423.827 506.746 418.027 486 415.373C518.97 415.373 521.428 399.59 524.786 378.034Z" fill="#C4C4C4"/>
<path d="M524.786 378.034L524.791 378C524.791 407.412 536.092 412.638 559 415.373C532.21 418.239 522.355 438.131 522.003 454.148C522.029 455.076 522.042 456.026 522.042 457C521.996 456.067 521.982 455.115 522.003 454.148C521.166 423.827 506.746 418.027 486 415.373C518.97 415.373 521.428 399.59 524.786 378.034Z" fill="#005321"/>
<circle cx="155.414" cy="729.639" r="22.4142" fill="#005321"/>
<circle cx="344.877" cy="705.181" r="19.8767" fill="#005321"/>
<circle cx="399.493" cy="671.798" r="16.4934" fill="#005321"/>
<circle cx="469.877" cy="678.335" r="19.8767" fill="#005321"/>
<path d="M435.841 731.454V712H436.687V731.454" stroke="#005321" stroke-width="11"/>
<circle cx="436.687" cy="728.916" r="12.6873" fill="#005321"/>
<path d="M528.841 707.454V688H529.687V707.454" stroke="#005321" stroke-width="11"/>
<circle cx="529.687" cy="704.916" r="12.6873" fill="#005321"/>
<path d="M212.841 716.454V697H213.687V716.454" stroke="#005321" stroke-width="11"/>
<circle cx="213.687" cy="713.916" r="12.6873" fill="#005321"/>
</svg>`,
  ]

  const themeColors = {}

  const companyName = {
    top: "Halloween",
    bottom: "Technologies!",
  }

  const turnOnAt = new Date()

  const expiresAt = new Date()

  const currentPages: ParsedPage[] = [
    {
      slug: "react",
      componentsProps: [
        {
          type: "BGTitle",
          title: "Разработка на React",
          description:
            "С 2016 года React стал одной из ключевых технологий в нашей компании. 49% наших проектов используют React.",
          background:
            "https://images.ctfassets.net/13g5no3omm60/3ZWOHYFW1Zlb2FekQO5Xs3/7672e8ddf0d01336a9b437eb8f5d32cd/react-bg.jpg",
          titleFirstLineCharNumber: "10",
          id: "mainTitle",
          label: {
            primaryText: "HWdTech",
            usualText: "Услуги",
            primaryLinkMeta: {
              href: "/",
              linkTitle: "Открыть главную страницу",
            },
            usualLinkMeta: {
              href: "/services",
              linkTitle: "Открыть страницу услуг",
            },
          },
          primaryButton: {
            text: "Бесплатная консультация",
            title: "Перейти к форме обратной связи",
            action: "scrollToAnchor",
            actionArgs: {
              anchor: "contact",
              offset: 0,
            },
          },
          arrowButton: {
            text: "К нашему портфолио",
            linkMeta: {
              href: "/portfolio",
              linkTitle: "Открыть страницу портфолио",
            },
          },
        },
        {
          type: "LetTheNumbersSpeak",
          id: "LetTheNumbersSpeak",
          title: "Пусть говорят цифры!",
          text: "Мы начали разрабатывать приложения с использованием React в 2016 году. Самый большой проект на React, который был разработан нашей компанией, продолжается более 3 лет и на данный момент насчитывает 25 человеко-лет. 65% разрабатываемых наши проектов используют React.",
          button: {
            text: "Наши работы",
            linkMeta: {
              href: "/portfolio",
              linkTitle: "Открыть страницу с работами",
            },
          },
          cards: [
            {
              text: "Человеко-лет наибольшему проекту",
              number: 24,
              suffix: "+",
            },
            {
              text: "Проектов на  React",
              number: 65,
              suffix: "%",
            },
            {
              text: "Лет нашего опыта",
              number: 5,
            },
          ],
          descBox: [
            {
              text: "& Многое другое",
              description: "Открыть наши работы",
              href: "/portfolio",
              linkTitle: "Открыть страницу с работами",
            },
          ],
        },
        {
          type: "BadgesGridSection",
          id: "BadgesGridSection",
          title: "ПОЧЕТНЫЕ ПРИЗНАНИЯ И НАГРАДЫ",
          description:
            "Год за годом HWdTech признается одной из ведущих мировых дизайнерских и конструкторских компаний. Приятно чувствовать, что тебя ценят!",
          children: [
            {
              key: "top-web-developers-clutch",
              reward:
                "https://images.ctfassets.net/13g5no3omm60/2KnNP0teHpKDGhwgmwIQHD/d502d68eb922c8989ca06641c2ed987f/top-web-developers-clutch.png",
              width: "188",
              height: "200",
              alt: "top-web-developers-clutch",
            },
            {
              key: "top-web-developers-good-firm",
              reward:
                "https://images.ctfassets.net/13g5no3omm60/7DOS6AG6GN66mNXH6LeKwh/1f8a0b82f166bb1069dd75067024abfc/top-web-developers-good-firms.png",
              width: "212px",
              height: "170px",
              alt: "top-web-developers-good-firm",
            },
            {
              key: "top-web-developers-extract",
              reward:
                "https://images.ctfassets.net/13g5no3omm60/4kRpUdbO0EnWfyPdCCY23/5360e7c1c5e783142504399b97f5d262/top-web-developers-extract.png",
              width: "200px",
              height: "200px",
              alt: "top-web-developers-extract",
            },
          ],
        },
        {
          type: "BoxWithAppearedBlock",
          id: "BoxWithAppearedBlock",
          title: "У нас было 4 основных задачи",
          description:
            "Также мы разработали несколько маленьких фич и UX дизайн (обратите внимание на примеры немного ниже!).",
          appearedImage: {
            alt: "codefuse screen",
            src: "https://images.ctfassets.net/13g5no3omm60/1DgpctJcy1pmhSaaCgtff2/4ec001d5ecb6b415394869507b74aca6/code-fuse-screen2.jpg",
            animation: "right",
          },
          items: [
            {
              icon: "monitor",
              color: "orange",
              title: "Разработка админ-панели",
            },
            {
              icon: "settings",
              color: "green",
              title: "Двигатель процесса (выполнение тестов)",
            },
            {
              icon: "office",
              color: "pink",
              title: "Разработка расширения для Chrome",
            },
            {
              icon: "broken",
              color: "purple",
              title: "Исправление ошибок и поддержка",
            },
          ],
        },
        {
          type: "PortfolioCarousel",
          id: "PortfolioCarousel",
          imageOnLeft: "true",
          label: "Портфолио",
          children: [
            {
              key: "CodeFuse Console",
              primaryTitle: "Великобритания",
              title: "CodeFuse Console",
              text: "CodeFuse Console - это инновационное программное обеспечение SAAS для автоматизации тестирования. Что в нем такого особенного?\n\nCodeFuse позволяет проводить тестирование полностью в облаке и экономит ваше время и деньги. Используя CodeFuse, вы можете создавать и выполнять тесты с первого дня работы.",
              imageSrc:
                "https://images.ctfassets.net/13g5no3omm60/28oZjS9DLJbEs07qEn3bSt/e43cfc8b2bae67936153963507536934/codeFuse2.jpg",
              imageAlt: "CodeFuse Console превью картинка",
              buttonArrow: {
                text: "Смотреть всё портфолио",
                linkMeta: {
                  href: "/portfolio",
                  linkTitle: "Открыть страницу портфолио",
                },
                button: {
                  text: "подробнее о Tik-Tok Coach",
                  linkMeta: {
                    href: "/portfolio/tik-tok-coach",
                    linkTitle: "Открыть страницу Tik-Tok Coach",
                  },
                },
              },
            },
            {
              key: "Mapic",
              primaryTitle: "Норвегия",
              title: "Mapic",
              text: "Mapic помогает вам публиковать данные GEO без написания кода.\n\nС вашей собственной базой данных PostGIS и мощным тайловым сервером Mapic вы можете легко вносить изменения в свои карты без использования стороннего программного обеспечения.",
              imageSrc:
                "https://images.ctfassets.net/13g5no3omm60/2qlQfE0RUdRlhJwO5KjehR/ff0d1b4a66722f200383683738e52415/mapic2.jpg",
              imageAlt: "mapic portflio превью",
              buttonArrow: {
                text: "Смотреть всё портфолио",
                linkMeta: {
                  href: "/portfolio",
                  linkTitle: "Открыть страницу портфолио",
                },
                button: {
                  text: "подробнее о Tik-Tok Coach",
                  linkMeta: {
                    href: "/portfolio/tik-tok-coach",
                    linkTitle: "Открыть страницу Tik-Tok Coach",
                  },
                },
              },
            },
            {
              key: "MoneyWiz",
              primaryTitle: "США",
              title: "MoneyWiz",
              text: "MoneyWiz получил награды и признание, в том числе звание лучшего финансового приложения из 500 лучших приложений, обязательных к использованию по версии The Telegraph.\n\nMoneyWiz - это финансовое ПО, которое отслеживает доходы и расходы, а также устанавливает и отслеживает бюджеты.",
              imageSrc:
                "https://images.ctfassets.net/13g5no3omm60/6l4PvwvwLqAC9YsO1VgRmt/ad4dabbe007256168ebad13a291d0055/moneyWiz2.jpg",
              imageAlt: "MoneyWiz portflio превью",
              buttonArrow: {
                text: "Смотреть всё портфолио",
                linkMeta: {
                  href: "/portfolio",
                  linkTitle: "Открыть страницу портфолио",
                },
              },
            },
            {
              key: "Clifford Wallace",
              primaryTitle: "Австралия",
              title: "Clifford Wallace",
              text: "Clifford Wallace - это кадровое агентство премиум-класса, базирующееся в Сиднее, которое предоставляет кадровые решения для мероприятий, мероприятий, корпоративных залов заседаний, ресторанов, кафе, баров и отелей.",
              imageSrc:
                "https://images.ctfassets.net/13g5no3omm60/1dwTyOSqmGwLpRzOV8eJnp/a92b3bf04ecb247ef4fda65661d7be04/cliffordWallace2.jpg",
              imageAlt: "Clifford Wallace превью",
              buttonArrow: {
                text: "Смотреть всё портфолио",
                linkMeta: {
                  href: "/portfolio",
                  linkTitle: "Открыть страницу портфолио",
                },
              },
            },
            {
              key: "Kattis",
              primaryTitle: "Швеция",
              title: "Kattis",
              text: "Kattis позволяет компаниям демонстрировать свои тестовые задания и задачи.\n\nПотенциальные сотрудники, в свою очередь, могут участвовать в соревнованиях и иметь больше шансов быть нанятыми. Лучшие разработчики получают отклик от компании.",
              imageSrc:
                "https://images.ctfassets.net/13g5no3omm60/4xJAq0YpByek2rjXyGwQr4/6ca3f9c10105a9248e87c44261f30040/Kattis2.jpg",
              imageAlt: "Kattis portflio превью",
              buttonArrow: {
                text: "Смотреть всё портфолио",
                linkMeta: {
                  href: "/portfolio",
                  linkTitle: "Открыть страницу портфолио",
                },
              },
            },
            {
              key: "TTC",
              primaryTitle: "Собственный проект",
              title: "Tik-Tok Coach",
              text: "Tik-Tok Coach это настольное приложение и веб-портал, который предлагает вам учет рабочего времени, создание снимков экрана, постановку целей и оценку участия каждого сотрудника в рабочем процессе.",
              imageSrc:
                "https://images.ctfassets.net/13g5no3omm60/45cI55EqawHzcR6meqcPwb/d5a3ebd47e9041914c7485b129f00fc1/TTC2.jpg",
              imageAlt: "ttc portflio превью",
              buttonArrow: {
                text: "Смотреть всё портфолио",
                linkMeta: {
                  href: "/portfolio",
                  linkTitle: "Открыть страницу портфолио",
                },
              },
            },
          ],
        },
      ],
    },
    {
      slug: "wopi",
      componentsProps: [
        {
          type: "Meta",
          id: "mainMeta",
          title: "Office Online интеграция с помощью WOPI протокола",
          description: "Это позволит вам совместно работать с документами и вносить правки прямо в браузере",
          keywords: "MS Office, Online, MS, Microsoft Office Online, Microsoft",
        },
        {
          type: "MetaTwitter",
          id: "twitterMeta",
          title: "Office Online интеграция с помощью WOPI протокола",
          description: "Это позволит вам совместно работать с документами и вносить правки прямо в браузере",
          imageUrl:
            "https://images.ctfassets.net/13g5no3omm60/4kdcV1ZcPeNFPnTlIYRaof/c04c6521f2b730ea5e06b3985c13d8a8/cardOO.jpg",
        },
        {
          type: "MetaOpenGraph",
          id: "openGraphMeta",
          title: "Office Online интеграция с помощью WOPI протокола",
          description: "Это позволит вам совместно работать с документами и вносить правки прямо в браузере",
          imageUrl:
            "https://images.ctfassets.net/13g5no3omm60/4kdcV1ZcPeNFPnTlIYRaof/c04c6521f2b730ea5e06b3985c13d8a8/cardOO.jpg",
        },
        {
          type: "BGTitle",
          title: "Office Online интеграция с помощью WOPI протокола",
          description: "Это позволит вам совместно работать с документами и вносить правки прямо в браузере",
          background:
            "https://images.ctfassets.net/13g5no3omm60/6159JxyiC7whXiZZwczGib/186c9c1d9992e5173c49c5fd5d60c749/bg-office-online.jpg",
          titleFirstLineCharNumber: "13",
          titleSecondLineCharNumber: "21",
          id: "mainTitle",
          label: {
            usualText: "Услуги",
            primaryText: "HWdTech",
            usualLinkMeta: {
              href: "/services",
              linkTitle: "Открыть страницу услуг",
            },
            primaryLinkMeta: {
              href: "/",
              linkTitle: "Открыть главную страницу",
            },
          },
          primaryButton: {
            text: "Бесплатная консультация",
            title: "Перейти к форме обратной связи",
            action: "scrollToAnchor",
            actionArgs: {
              anchor: "contact",
              offset: 0,
            },
          },
          arrowButton: {
            text: "К нашему портфолио",
            linkMeta: {
              href: "/portfolio",
              linkTitle: "Открыть страницу портфолио",
            },
          },
        },
        {
          type: "QuoteAboveImage",
          id: "QuoteAboveImage",
          title: "Почему мы?",
          description: "Мы внедряем приложения с помощью WOPI протокола с 2014 года.",
          imageSrc:
            "https://images.ctfassets.net/13g5no3omm60/2W93KdN3szfT9W0jvMlKbL/b3663293a6e0a2bc5c2b70c06cadf3ec/monitor.jpg",
          altImg: "Монитор с превью",
          textList: [
            {
              icons: [
                {
                  iconColor: "orange",
                  icon: "hourglass",
                },
                {
                  iconColor: "blue",
                  icon: "trophy",
                },
              ],
              items: [
                {
                  text: [
                    "На тот момент Office Online назывался Office Web Apps Server. Пожалуйста, посмотрите ",
                    {
                      href: "https://github.com/jacob-l/WopiHost",
                      text: "исходный код",
                      type: "link",
                      linkTitle: "Открыть страницу с исходным кодом WOPI на github",
                    },
                    " нашей первой реализации и ",
                    {
                      href: "https://habr.com/en/company/tiktokcoach/blog/223179/",
                      text: "статью",
                      type: "link",
                      linkTitle: "Открыть страницу статьи на habr",
                    },
                    " об этом.",
                  ],
                },
                {
                  type: "text",
                  text: "Просто потому, что мы уже завершили несколько проектов, мы знаем основные проблемы и мы готовы предоставить вам фиксированную цену за режима просмотра и гарантию возврата денег за режим редактирования.",
                },
              ],
            },
          ],
          imageOnLeft: "true",
          quote: "Новый уровень удобства для наших клиентов.",
        },
        {
          type: "BadgesGridSection",
          id: "BadgesGridSection",
          title: "Не нужно скачивать и выгружать документы",
          description:
            "Давайте создадим WOPI Rest API Connector для Office Online, который позволит вашим пользователям просматривать и редактировать документы прямо в вашем приложении",
          children: [
            {
              key: "Word",
              reward:
                "https://images.ctfassets.net/13g5no3omm60/3hvtBcbl2EDnVl1xzIOiJK/8bb09b7fdf75371e415f855bfb325394/word.jpg",
              width: "156",
              height: "156",
              alt: "Word иконка",
              title: "Word",
            },
            {
              key: "Excel",
              reward:
                "https://images.ctfassets.net/13g5no3omm60/gxigceeSMnBgiPA4nDklf/ad31015a15aaf447b4670d932d9cea7e/excel.jpg",
              width: "156",
              height: "156",
              alt: "Excel иконка",
              title: "Excel",
            },
            {
              key: "Power Point",
              reward:
                "https://images.ctfassets.net/13g5no3omm60/1f7YyU6CzQ2GirWsdgB6bg/820e933ec656015ab2f186722dd0d6b6/pp.jpg",
              width: "156",
              height: "156",
              alt: "Power Point иконка",
              title: "Power Point",
            },
          ],
        },
        {
          type: "Technologies",
          id: "Технологии",
          projectName: "WOPI",
          text: "Вы можете выбрать любую технологию для сервера WOPI. Мы готовы реализовать WOPI протокол на любом из следующих языков программирования.",
          title: "Без ограничений на программную платформу",
          primaryButton: {
            text: "Нанять нас",
            title: "Перейти к форме обратной связи",
            action: "scrollToAnchor",
            actionArgs: {
              anchor: "contact",
              offset: 0,
            },
          },
          itemsTech: ["python", "vbdotnet", "java", "node", "csharp", "scala", "php", "ruby"],
        },
        {
          type: "LetTheNumbersSpeak",
          id: "LetTheNumbersSpeak",
          title: "Пусть цифры говорят!",
          text: "Впервые наша реализация была выпущена в 2012 году, когда продукт назывался Microsoft Wep Apps. Мы интегрировали Microsoft Office Online с корпоративными файловыми хранилищами, такими как Dropbox, и системами управления проектами",
          cards: [
            {
              text: "Лет услуге",
              number: 8,
            },
            {
              text: "Интеграций",
              number: 6,
            },
            {
              text: "Стэка разработки",
              number: 4,
            },
          ],
          descBox: [
            {
              text: "& Многое другое",
              description: "Открыть наши работы",
              href: "/portfolio",
              linkTitle: "Открыть страницу портфолио",
            },
          ],
          button: {
            text: "Наши работы",
            linkMeta: {
              primaryButtonHref: "/portfolio",
              primaryButtonlinkTitle: "Открыть страницу портфолио",
            },
          },
        },
        {
          type: "PeopleSection",
          id: "PeopleSection",
          title: "Преимущества работы с нами",
          description: "Всего в нескольких словах о том, почему нам стоит работать вместе над вашей задачей.",
          text: [
            "Корпоративная основа. Мы разработали инструмент для учёта времени и задач TikTokCoach, который используется в нашей компании и успешно распространяется в другие. Более того, у нас есть пара библиотек, которые мы собственно разработали.",
            "Статьи. Нам нравится делиться идеями с миров. Обратите внимание на наш блог ниже.",
            "Универсальная интеграция. Наша команда комжет сделать интеграцию с Office Online для веб и iOS.",
            "Довольные клиенты. Наша главная цель - помочь вашему бизнесу работать эффективно. Мы делаем всё, что в наших силах, чтобы клиенты были довольны. Мы с гордостью представляем вам некоторые из отзывов.",
          ],
          images: [
            {
              key: "board",
              animation: "left",
              src: "https://images.ctfassets.net/13g5no3omm60/7sXBbgXMFeY6Vw16GIt4Yd/b0fb0d72b9dd2f1586e3e41e52f8868c/board.jpg",
              location: "left",
              alt: "board keyboard",
            },
            {
              key: "keyboard",
              animation: "up",
              src: "https://images.ctfassets.net/13g5no3omm60/57hhZFCbDg73z9NN9PrO0Q/c06733b29eb1cb0c0c2acb549bac9c0c/keyboard.jpg",
              location: "left",
              alt: "keyboard keyboard",
            },
            {
              key: "smiling Maxim",
              animation: "bottom",
              src: "https://images.ctfassets.net/13g5no3omm60/OWM7tES541kvfM0w4NXp6/de97736f8e5b601222abc8661e31b8da/smilimg.jpg",
              location: "right",
              alt: "smiling Maxim and Anna",
            },
          ],
          button: [
            {
              text: "our blog",
              linkMeta: [
                {
                  href: "/blog",
                  linkTitle: "Go to Blog page",
                },
              ],
            },
          ],
        },
      ],
    },
  ]

  const pageMax = 5

  const genMax = true

  test(`generate all`, async () => {
    const easterEggsMap = {
      BGTitle: { ...mainEasterEggsConfig["BGTitle"] },
      BadgesGridSection: { ...mainEasterEggsConfig["BadgesGridSection"] },
      LetTheNumbersSpeak: { ...mainEasterEggsConfig["LetTheNumbersSpeak"] },
      BoxWithAppearedBlock: { ...mainEasterEggsConfig["BoxWithAppearedBlock"] },
    }
    const res = generator({
      currentPages,
      companyName,
      easterEggsMap,
      turnOnAt,
      expiresAt,
      icons,
      iconColors,
      logo,
      themeColors,
      pageMax,
      genMax,
      sizeEasterEgg: {
        minWidth: 1,
        maxWidth: 3,
      },
    })

    if (get(res, `pages.${currentPages[0].slug}.BGTitle`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.BGTitle.componentTotal`)
      const count = countChildren(get(res, `pages.${currentPages[0].slug}.BGTitle`))
      expect(componentTotal).toEqual(count)
    }
    if (get(res, `pages.${currentPages[0].slug}.LetTheNumbersSpeak`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.LetTheNumbersSpeak.componentTotal`)
      const count = countChildren(get(res, `pages.${currentPages[0].slug}.LetTheNumbersSpeak`))
      expect(componentTotal).toEqual(count)
    }
    if (get(res, `pages.${currentPages[0].slug}.BadgesGridSection`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.BadgesGridSection.componentTotal`)
      const count = countChildren(get(res, `pages.${currentPages[0].slug}.BadgesGridSection`))
      expect(componentTotal).toEqual(count)
    }
    if (get(res, `pages.${currentPages[0].slug}.BoxWithAppearedBlock`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.BoxWithAppearedBlock.componentTotal`)
      const count = countChildren(get(res, `pages.${currentPages[0].slug}.BoxWithAppearedBlock`))
      expect(componentTotal).toEqual(count)
    }
  })

  test(`generate simple map`, async () => {
    const easterEggsMap = {
      BoxWithAppearedBlock: { ...mainEasterEggsConfig["BoxWithAppearedBlock"] },
    }
    const res = generator({
      currentPages,
      companyName,
      easterEggsMap,
      turnOnAt,
      expiresAt,
      icons,
      iconColors,
      logo,
      themeColors,
      pageMax,
      genMax,
      sizeEasterEgg: {
        minWidth: 1,
        maxWidth: 3,
      },
    })

    if (get(res, `pages.${currentPages[0].slug}.BoxWithAppearedBlock`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.BoxWithAppearedBlock.componentTotal`)
      const count = countChildren(get(res, `pages.${currentPages[0].slug}.BoxWithAppearedBlock`))
      expect(componentTotal).toEqual(count)
      // eslint-disable-next-line no-console
      console.info("Expected", count, "Actual", componentTotal)
    }
  })

  test(`generate children map`, async () => {
    const easterEggsMap = {
      BadgesGridSection: { ...mainEasterEggsConfig["BadgesGridSection"] },
    }
    const res = generator({
      currentPages,
      companyName,
      easterEggsMap,
      turnOnAt,
      expiresAt,
      icons,
      iconColors,
      logo,
      themeColors,
      pageMax,
      genMax,
      sizeEasterEgg: {
        minWidth: 1,
        maxWidth: 3,
      },
    })

    if (get(res, `pages.${currentPages[0].slug}.BadgesGridSection`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.BadgesGridSection.componentTotal`)
      const count = countChildren(get(res, `pages.${currentPages[0].slug}.BadgesGridSection`))
      expect(componentTotal).toEqual(count)
    }
  })

  test(`generate children list`, async () => {
    const easterEggsMap = {
      LetTheNumbersSpeak: { ...mainEasterEggsConfig["LetTheNumbersSpeak"] },
    }
    const res = generator({
      currentPages,
      companyName,
      easterEggsMap,
      turnOnAt,
      expiresAt,
      icons,
      iconColors,
      logo,
      themeColors,
      pageMax,
      genMax,
      sizeEasterEgg: {
        minWidth: 1,
        maxWidth: 3,
      },
    })

    if (get(res, `pages.${currentPages[0].slug}.LetTheNumbersSpeak`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.LetTheNumbersSpeak.componentTotal`)
      const count = countChildren(get(res, `pages.${currentPages[0].slug}.LetTheNumbersSpeak`))
      expect(componentTotal).toEqual(count)
    }
  })

  test(`generate simple`, async () => {
    const easterEggsMap = {
      BGTitle: { ...mainEasterEggsConfig["BGTitle"] },
    }
    const res = generator({
      currentPages,
      companyName,
      easterEggsMap,
      turnOnAt,
      expiresAt,
      icons,
      iconColors,
      logo,
      themeColors,
      pageMax,
      genMax,
      sizeEasterEgg: {
        minWidth: 1,
        maxWidth: 3,
      },
    })

    if (get(res, `pages.${currentPages[0].slug}.BGTitle`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.BGTitle.componentTotal`)
      const count = countChildren(get(res, `pages.${currentPages[0].slug}.BGTitle`))
      expect(componentTotal).toEqual(count)
    }
  })

  test(`generate children map only exists`, async () => {
    const easterEggsMap = {
      BadgesGridSection: { ...mainEasterEggsConfig["BadgesGridSection"] },
      PortfolioCarousel: { ...mainEasterEggsConfig["PortfolioCarousel"] },
    }
    const res = generator({
      currentPages,
      companyName,
      easterEggsMap,
      turnOnAt,
      expiresAt,
      icons,
      iconColors,
      logo,
      themeColors,
      pageMax,
      genMax,
      sizeEasterEgg: {
        minWidth: 1,
        maxWidth: 3,
      },
    })

    if (get(res, `pages.${currentPages[0].slug}.BadgesGridSection.children`)) {
      const exp = !!get(res, `pages.${currentPages[0].slug}.BadgesGridSection.children.titleDescriptionBlock`)
      expect(exp).toBeFalsy()
    }

    if (get(res, `pages.${currentPages[0].slug}.PortfolioCarousel.children`)) {
      const exp = !!get(res, `pages.${currentPages[0].slug}.PortfolioCarousel.children.primaryButton`)
      expect(exp).toBeFalsy()
    }
  })
})

describe(`uncounted elements`, () => {
  const mainEasterEggsConfig = {
    AboutHoursSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      text: {
        dataType: "simpleItem",
        key: "text",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
        ],
      },
    },
    BadgesGridSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      badgesCard: {
        dataType: "peerChildrenMap",
        jsonChildrenKey: ["children"],
        key: "badgesCard",
        nested: {
          imageComponent: {
            dataType: "simpleItem",
            key: "imageComponent",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "0",
                },
                posY: {
                  base: "0",
                },
              },
              {
                posX: {
                  base: "80%",
                },
                posY: {
                  base: "80%",
                },
              },
            ],
          },
          thirdLevelTitle: {
            dataType: "simpleItem",
            key: "thirdLevelTitle",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "-2rem",
                },
                posY: {
                  base: "-1rem",
                },
              },
              {
                posX: {
                  base: "90%",
                },
                posY: {
                  base: "-15%",
                },
              },
            ],
          },
          text: {
            dataType: "simpleItem",
            key: "text",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "90%",
                },
                posY: {
                  base: "-1.5rem",
                },
              },
              {
                posX: {
                  base: "15%",
                },
                posY: {
                  base: "95%",
                },
              },
            ],
          },
        },
        max: 6,
      },
    },
    BGTitle: {
      labelBreadCrumbs: {
        dataType: "simpleItem",
        key: "labelBreadCrumbs",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "-1rem",
            },
            posY: {
              base: "-25%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-100%",
            },
          },
        ],
      },
      componentTitle: {
        dataType: "simpleItem",
        key: "componentTitle",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "-1rem",
            },
            posY: {
              base: "-1rem",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-15%",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
      buttonArrow: {
        dataType: "simpleItem",
        key: "buttonArrow",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "100%",
            },
            posY: {
              base: "-0.75rem",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "-150%",
            },
            hover: true,
          },
        ],
      },
    },
    BigImageWithDescription: {
      imageComponent: {
        dataType: "simpleItem",
        key: "imageComponent",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "0",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "80%",
            },
          },
        ],
      },
      primaryTitle: {
        dataType: "simpleItem",
        key: "primaryTitle",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "7%",
            },
            posY: {
              base: "-2rem",
            },
          },
          {
            posX: {
              base: "-2rem",
            },
            posY: {
              base: "0",
            },
          },
        ],
      },
      titleDescriptionBlock: {
        dataType: "simpleItem",
        key: "titleDescriptionBlock",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "35%",
            },
            posY: {
              base: "-1.8rem",
              sm: "-2.5rem",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "1.5rem",
              sm: "2rem",
              lg: "2.5rem",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
    },
    BoxWithAppearedBlock: {
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
      componentAnimator: {
        dataType: "simpleMap",
        key: "componentAnimator",
        nested: {
          imageComponent: {
            dataType: "simpleItem",
            key: "imageComponent",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "0",
                },
                posY: {
                  base: "0",
                },
              },
              {
                posX: {
                  base: "80%",
                },
                posY: {
                  base: "80%",
                },
              },
            ],
          },
        },
        max: 2,
      },
      reasonsWithTitle: {
        dataType: "simpleMap",
        key: "reasonsWithTitle",
        nested: {
          titleDescriptionBlock: {
            dataType: "simpleItem",
            key: "titleDescriptionBlock",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "35%",
                },
                posY: {
                  base: "-1.8rem",
                  sm: "-2.5rem",
                },
              },
              {
                posX: {
                  base: "5%",
                },
                posY: {
                  base: "1.5rem",
                  sm: "2rem",
                  lg: "2.5rem",
                },
              },
            ],
          },
          reasons: {
            dataType: "peerChildrenList",
            jsonChildrenKey: ["reasons"],
            key: "reasons",
            max: 4,
            easterEggs: [
              {
                posX: {
                  base: "14%",
                },
                posY: {
                  base: "5rem",
                },
              },
              {
                posX: {
                  base: "75%",
                },
                posY: {
                  base: "88%",
                },
              },
              {
                posX: {
                  base: "65%",
                },
                posY: {
                  base: "-6%",
                },
              },
              {
                posX: {
                  base: "25%",
                },
                posY: {
                  base: "-6%",
                },
              },
            ],
          },
        },
        max: 6,
      },
    },
    CommentsCarousel: {
      primaryTitle: {
        dataType: "simpleItem",
        key: "primaryTitle",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "7%",
            },
            posY: {
              base: "-2rem",
            },
          },
          {
            posX: {
              base: "-2rem",
            },
            posY: {
              base: "0",
            },
          },
        ],
      },
      comments: {
        dataType: "peerChildrenMap",
        jsonChildrenKey: ["comments"],
        key: "comments",
        nested: {
          imageComponent: {
            dataType: "simpleItem",
            key: "imageComponent",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "0",
                },
                posY: {
                  base: "0",
                },
              },
              {
                posX: {
                  base: "80%",
                },
                posY: {
                  base: "80%",
                },
              },
            ],
          },
          quote: {
            dataType: "simpleItem",
            key: "quote",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "15%",
                },
                posY: {
                  base: "5.5rem",
                },
              },
              {
                posX: {
                  base: "75%",
                },
                posY: {
                  base: "90%",
                },
              },
            ],
          },
          signature: {
            dataType: "simpleItem",
            key: "signature",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "10%",
                },
                posY: {
                  base: "-2rem",
                },
              },
              {
                posX: {
                  base: "100%",
                },
                posY: {
                  base: "1%",
                },
              },
            ],
          },
        },
        max: 6,
      },
    },
    ComponentWithLists: {
      title: {
        dataType: "simpleItem",
        key: "title",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "35%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "10%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
      buttonArrow: {
        dataType: "simpleItem",
        key: "buttonArrow",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "100%",
            },
            posY: {
              base: "-0.75rem",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "-150%",
            },
            hover: true,
          },
        ],
      },
      componentList: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["text"],
        key: "componentList",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "10%",
            },
            posY: {
              base: "-2rem",
            },
          },
          {
            posX: {
              base: "100%",
            },
            posY: {
              base: "1%",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "20%",
            },
          },
        ],
      },
    },
    ContactForm: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
    },
    ContactsSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      contact: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["items"],
        key: "contact",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "4%",
            },
            posY: {
              base: "-3rem",
            },
          },
          {
            posX: {
              base: "100%",
            },
            posY: {
              base: "65%",
            },
          },
        ],
      },
    },
    ContentCarouselSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      infoSiteWithMap: {
        dataType: "peerChildrenMap",
        jsonChildrenKey: ["items"],
        key: "infoSiteWithMap",
        nested: {
          imageComponent: {
            dataType: "simpleItem",
            key: "imageComponent",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "0",
                },
                posY: {
                  base: "0",
                },
              },
              {
                posX: {
                  base: "80%",
                },
                posY: {
                  base: "80%",
                },
              },
            ],
          },
        },
        max: 2,
      },
    },
    GridPlatesSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      gridPlate: {
        dataType: "peerChildrenMap",
        jsonChildrenKey: ["cards"],
        key: "gridPlate",
        nested: {
          thirdLevelTitle: {
            dataType: "simpleItem",
            key: "thirdLevelTitle",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "-2rem",
                },
                posY: {
                  base: "-1rem",
                },
              },
              {
                posX: {
                  base: "90%",
                },
                posY: {
                  base: "-15%",
                },
              },
            ],
          },
          text: {
            dataType: "simpleItem",
            key: "text",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "90%",
                },
                posY: {
                  base: "-1.5rem",
                },
              },
              {
                posX: {
                  base: "15%",
                },
                posY: {
                  base: "95%",
                },
              },
            ],
          },
        },
        max: 4,
      },
    },
    ImageLinkWithTitle: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      imageComponent: {
        dataType: "simpleItem",
        key: "imageComponent",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "0",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "80%",
            },
          },
        ],
      },
    },
    InfoBlocksAndButton: {
      primaryTitle: {
        dataType: "simpleItem",
        key: "primaryTitle",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "7%",
            },
            posY: {
              base: "-2rem",
            },
          },
          {
            posX: {
              base: "-2rem",
            },
            posY: {
              base: "0",
            },
          },
        ],
      },
      titleDescriptionBlock: {
        dataType: "simpleItem",
        key: "titleDescriptionBlock",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "35%",
            },
            posY: {
              base: "-1.8rem",
              sm: "-2.5rem",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "1.5rem",
              sm: "2rem",
              lg: "2.5rem",
            },
          },
        ],
      },
      infoBlocksAndButtons: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["items"],
        key: "infoBlocksAndButtons",
        max: 1,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "0",
            },
            bg: true,
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
    },
    InternshipSubscribeSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
    },
    LetTheNumbersSpeak: {
      titleDescriptionBlock: {
        dataType: "simpleItem",
        key: "titleDescriptionBlock",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "35%",
            },
            posY: {
              base: "-1.8rem",
              sm: "-2.5rem",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "1.5rem",
              sm: "2rem",
              lg: "2.5rem",
            },
          },
        ],
      },
      letTheNumberSpeakCardsSpace: {
        dataType: "simpleItem",
        key: "letTheNumberSpeakCardsSpace",
        max: 1,
        easterEggs: [
          {
            posX: {
              base: "40%",
              sm: "43%",
            },
            posY: {
              base: "40%",
              sm: "41%",
            },
          },
        ],
      },
      letTheNumberSpeakCard: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["cards"],
        key: "letTheNumberSpeakCard",
        max: 4,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "-2.5rem",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "90%",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "90%",
            },
          },
        ],
      },
      letTheNumberSpeakDescBox: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["descBox"],
        key: "letTheNumberSpeakDescBox",
        max: 4,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "-2.5rem",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "90%",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "90%",
            },
          },
        ],
      },
    },
    ListImagesWithTitleSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
    },
    NewCommentCarousel: {
      primaryTitle: {
        dataType: "simpleItem",
        key: "primaryTitle",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "7%",
            },
            posY: {
              base: "-2rem",
            },
          },
          {
            posX: {
              base: "-2rem",
            },
            posY: {
              base: "0",
            },
          },
        ],
      },
      imageComponent: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["photos"],
        key: "imageComponent",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "0",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "80%",
            },
          },
        ],
      },
      commentWithNoPhoto: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["comments"],
        key: "commentWithNoPhoto",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "78%",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "50%",
            },
          },
          {
            posX: {
              base: "40%",
            },
            posY: {
              base: "1rem",
              lg: "2rem",
            },
          },
        ],
      },
    },
    PeopleSection: {
      titleDescriptionBlock: {
        dataType: "simpleItem",
        key: "titleDescriptionBlock",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "35%",
            },
            posY: {
              base: "-1.8rem",
              sm: "-2.5rem",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "1.5rem",
              sm: "2rem",
              lg: "2.5rem",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
      points: {
        dataType: "simpleItem",
        key: "points",
        max: 1,
        easterEggs: [
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "-2rem",
            },
          },
        ],
      },
      componentAnimator: {
        dataType: "peerChildrenMap",
        jsonChildrenKey: ["images"],
        key: "componentAnimator",
        nested: {
          imageComponent: {
            dataType: "simpleItem",
            key: "imageComponent",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "0",
                },
                posY: {
                  base: "0",
                },
              },
              {
                posX: {
                  base: "80%",
                },
                posY: {
                  base: "80%",
                },
              },
            ],
          },
        },
        max: 2,
      },
    },
    PortfolioCarousel: {
      portfolioCarouselCard: {
        dataType: "peerChildrenMap",
        jsonChildrenKey: ["children"],
        key: "portfolioCarouselCard",
        nested: {
          primaryTitle: {
            dataType: "simpleItem",
            key: "primaryTitle",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "7%",
                },
                posY: {
                  base: "-2rem",
                },
              },
              {
                posX: {
                  base: "-2rem",
                },
                posY: {
                  base: "0",
                },
              },
            ],
          },
          title: {
            dataType: "simpleItem",
            key: "title",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "35%",
                },
                posY: {
                  base: "-2.3rem",
                },
              },
              {
                posX: {
                  base: "10%",
                },
                posY: {
                  base: "-1.5rem",
                },
              },
            ],
          },
          text: {
            dataType: "simpleItem",
            key: "text",
            max: 2,
            easterEggs: [
              {
                posX: {
                  base: "90%",
                },
                posY: {
                  base: "-1.5rem",
                },
              },
              {
                posX: {
                  base: "15%",
                },
                posY: {
                  base: "95%",
                },
              },
            ],
          },
          primaryButton: {
            dataType: "simpleItem",
            key: "primaryButton",
            max: 3,
            easterEggs: [
              {
                posX: {
                  base: "80%",
                },
                posY: {
                  base: "-1.5rem",
                },
              },
              {
                posX: {
                  base: "15%",
                },
                posY: {
                  base: "95%",
                },
              },
              {
                posX: {
                  base: "80%",
                },
                posY: {
                  base: "-50%",
                },
                hover: true,
              },
            ],
          },
          buttonArrow: {
            dataType: "simpleItem",
            key: "buttonArrow",
            max: 3,
            easterEggs: [
              {
                posX: {
                  base: "100%",
                },
                posY: {
                  base: "-0.75rem",
                },
              },
              {
                posX: {
                  base: "50%",
                },
                posY: {
                  base: "95%",
                },
              },
              {
                posX: {
                  base: "5%",
                },
                posY: {
                  base: "-150%",
                },
                hover: true,
              },
            ],
          },
        },
        max: 12,
      },
    },
    PortfolioPlatesSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      portfolioPlate: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["cards"],
        key: "portfolioPlate",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "40%",
            },
            posY: {
              base: "20%",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "-0.75rem",
            },
          },
          {
            posX: {
              base: "-5%",
            },
            posY: {
              base: "70%",
            },
          },
        ],
      },
    },
    QuoteAboveImage: {
      imageComponent: {
        dataType: "simpleItem",
        key: "imageComponent",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "0",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "80%",
            },
          },
        ],
      },
      titleDescriptionBlock: {
        dataType: "simpleItem",
        key: "titleDescriptionBlock",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "35%",
            },
            posY: {
              base: "-1.8rem",
              sm: "-2.5rem",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "1.5rem",
              sm: "2rem",
              lg: "2.5rem",
            },
          },
        ],
      },
      quoteAboveImage: {
        dataType: "simpleItem",
        key: "quoteAboveImage",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "10%",
            },
            posY: {
              base: "-0.6rem",
            },
          },
          {
            posX: {
              base: "45%",
            },
            posY: {
              base: "91%",
            },
          },
        ],
      },
      points: {
        dataType: "simpleItem",
        key: "points",
        max: 1,
        easterEggs: [
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "-2rem",
            },
          },
        ],
      },
    },
    StatisticBox: {
      statisticBlock: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["items"],
        key: "statisticBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "10%",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "50%",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "45%",
            },
          },
        ],
      },
    },
    StepByStep: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      imageComponent: {
        dataType: "simpleItem",
        key: "imageComponent",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "0",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "80%",
            },
          },
        ],
      },
      stepItem: {
        dataType: "peerChildrenList",
        jsonChildrenKey: ["items"],
        key: "stepItem",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
            },
            posY: {
              base: "-2.5rem",
            },
          },
          {
            posX: {
              base: "90%",
            },
            posY: {
              base: "50%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "90%",
            },
          },
        ],
      },
    },
    SubscribeSection: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
    },
    Technologies: {
      titleDescriptionBlock: {
        dataType: "simpleItem",
        key: "titleDescriptionBlock",
        max: 2,
        easterEggs: [
          {
            posX: {
              base: "35%",
            },
            posY: {
              base: "-1.8rem",
              sm: "-2.5rem",
            },
          },
          {
            posX: {
              base: "5%",
            },
            posY: {
              base: "1.5rem",
              sm: "2rem",
              lg: "2.5rem",
            },
          },
        ],
      },
      primaryButton: {
        dataType: "simpleItem",
        key: "primaryButton",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-1.5rem",
            },
          },
          {
            posX: {
              base: "15%",
            },
            posY: {
              base: "95%",
            },
          },
          {
            posX: {
              base: "80%",
            },
            posY: {
              base: "-50%",
            },
            hover: true,
          },
        ],
      },
      projectName: {
        dataType: "simpleItem",
        key: "projectName",
        max: 1,
        easterEggs: [
          {
            posX: {
              base: "20%",
              lg: "20%",
            },
            posY: {
              base: "5%",
              lg: "15%",
            },
          },
        ],
      },
    },
    Youtube: {
      titlePrimaryDescriptionBlock: {
        dataType: "simpleItem",
        key: "titlePrimaryDescriptionBlock",
        max: 3,
        easterEggs: [
          {
            posX: {
              base: "0",
              lg: "-2rem",
            },
            posY: {
              base: "35%",
            },
          },
          {
            posX: {
              base: "50%",
            },
            posY: {
              base: "-2.3rem",
            },
          },
          {
            posX: {
              base: "95%",
              lg: "101%",
            },
            posY: {
              base: "35%",
            },
          },
        ],
      },
    },
  }

  const logo =
    "https://images.ctfassets.net/mue5t0ky2rh8/MrW07PciC8cSlOSa3Whhv/ae98405eb550191e093e027d6a560196/Group.svg"

  const iconColors = ["hwPurple", "hwOrange", "hwBlue", "hwBrown"]

  const icons = [
    `<svg width="718" height="867" viewBox="0 0 718 867" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M622.5 404.5L613 391.5" stroke="#005321" stroke-width="15"/>
<path d="M654.5 388L645 375" stroke="#005321" stroke-width="15"/>
<path d="M666.5 471L657 458" stroke="#005321" stroke-width="15"/>
<path d="M697.5 450L688 437" stroke="#005321" stroke-width="15"/>
<path d="M324.951 539.176L305.326 560.059L335.958 627.131L362.623 621.304L324.951 539.176Z" stroke="#005321" stroke-width="15"/>
<path d="M611 422.5L607 417.5L678.5 379.5L707.5 422.5L634.5 471L631.5 465.5" stroke="#005321" stroke-width="15"/>
<path d="M476 508.5L609 427.5L628.5 462.5L486 534" stroke="#005321" stroke-width="15"/>
<path d="M514.5 488C495.667 449.667 449.2 396 414 488C411.333 496.167 400.2 508.9 377 494.5C333.167 472.667 231 462.5 272.5 602.5" stroke="#005321" stroke-width="18"/>
<path d="M528.516 516.174C544.897 555.618 554.568 625.943 462.209 591.696C454.313 588.312 437.399 588.277 432.913 615.211C432.913 667 326 742 272.5 601.5" stroke="#005321" stroke-width="18"/>
<path d="M185 446.5C167.833 454 122.7 470.1 79.5001 474.5C75.5001 474.667 67.9 476.4 69.5 482C69.3334 487.5 73 497.8 89 495C71.3334 507 36.8 532.4 58 542C63.1666 545.089 96.7594 516.09 115 504.5C127.86 496.328 133.5 491.52 151 485C176.5 475.5 201 474.5 230 474.5" stroke="#005321" stroke-width="18"/>
<path d="M285.5 757.5C292.833 765.167 302.2 791.1 281 833.5C276.667 845.833 276.6 867.1 311 853.5C319 847.667 333 837 338.5 826C343 817 346.5 802.3 338.5 789.5C332.833 782 319.4 763.6 311 750" stroke="#005321" stroke-width="18"/>
<path d="M475.15 718.615C475.929 729.195 485.776 747.041 531.457 759.709C543.517 764.754 559.35 778.953 526.206 795.38C516.516 797.411 493.839 802.303 477.5 792.5C465.761 785.457 461.8 777.46 455.15 765.494C444.812 746.891 447.8 727.641 443.331 712.294" stroke="#005321" stroke-width="18"/>
<path d="M466.5 437.5C470.833 435.667 507.5 423.5 507.5 392.5C493.333 397.333 450.3 420.564 411.5 378.964C407.833 373.631 403.2 363.564 414 365.964C434.167 375.964 470.3 379.7 507.5 334.5C471.5 322.5 410.3 272.9 453.5 170.5C421.833 212.833 331 265 266 220.5C262.5 251.5 248 299 290.5 329C299 335 301.7 343.2 294.5 352C279.667 371.667 229.6 402.4 156 406C166 427.167 196.8 470.9 240 476.5C246.167 476.167 256.5 477.5 250 491.5C240.669 511.597 201.5 582 113.5 594.5C122.167 614.5 157 650.4 227 634C234 632.167 242.5 632 234.5 643C215.5 667 161.1 731.4 85.5 743C130.5 767.667 247.5 798.2 355.5 723C367.667 716.667 407.9 706.5 471.5 716.5C523 724.333 632.7 718.2 659.5 631C633.333 646.833 568 668.5 513.5 603" stroke="#005321" stroke-width="18"/>
<path d="M327.5 365.5C342 348 345 318.5 366.5 327C378.678 331.815 381 372 357 389C346.015 396.781 318.911 375.866 327.5 365.5Z" stroke="#005321" stroke-width="18"/>
<circle cx="451.5" cy="533.5" r="31" stroke="#005321" stroke-width="15"/>
<path d="M338.07 250C337.237 264.333 343.47 291.2 375.07 284" stroke="#005321" stroke-width="11"/>
<path d="M338.129 259.048C336.126 264.213 328.251 271.495 312.783 259.299" stroke="#005321" stroke-width="11"/>
<path d="M342.4 273C342.233 278.538 337.237 288.028 318.587 281.688" stroke="#005321" stroke-width="11"/>
<path d="M353.641 285C355.127 290.337 353.174 300.883 333.483 300.368" stroke="#005321" stroke-width="11"/>
<path d="M438.246 290.146C428.296 300.497 404.349 314.18 388.159 286.103" stroke="#005321" stroke-width="11"/>
<path d="M431.567 296.251C429.139 301.231 429.148 311.956 448.606 315.017" stroke="#005321" stroke-width="11"/>
<path d="M418.429 302.598C414.48 306.483 410.912 316.598 428.236 325.972" stroke="#005321" stroke-width="11"/>
<path d="M401.987 302.505C397.062 305.042 390.651 313.64 404.409 327.736" stroke="#005321" stroke-width="11"/>
<path d="M192.491 0.0554977L192.5 0C192.5 48.4 211 57 248.5 61.5C204.645 66.2156 188.512 98.9492 187.937 125.308C187.979 126.834 188 128.397 188 130C187.924 128.464 187.902 126.897 187.937 125.308C186.566 75.4113 162.961 65.8665 129 61.5C182.972 61.5 186.996 35.5271 192.491 0.0554977Z" fill="#C4C4C4"/>
<path d="M192.491 0.0554977L192.5 0C192.5 48.4 211 57 248.5 61.5C204.645 66.2156 188.512 98.9492 187.937 125.308C187.979 126.834 188 128.397 188 130C187.924 128.464 187.902 126.897 187.937 125.308C186.566 75.4113 162.961 65.8665 129 61.5C182.972 61.5 186.996 35.5271 192.491 0.0554977Z" fill="#005321"/>
<path d="M144.491 229.055L144.5 229C144.5 277.4 163 286 200.5 290.5C156.645 295.216 140.512 327.949 139.937 354.308C139.979 355.834 140 357.397 140 359C139.924 357.464 139.902 355.897 139.937 354.308C138.566 304.411 114.961 294.866 81 290.5C134.972 290.5 138.996 264.527 144.491 229.055Z" fill="#C4C4C4"/>
<path d="M144.491 229.055L144.5 229C144.5 277.4 163 286 200.5 290.5C156.645 295.216 140.512 327.949 139.937 354.308C139.979 355.834 140 357.397 140 359C139.924 357.464 139.902 355.897 139.937 354.308C138.566 304.411 114.961 294.866 81 290.5C134.972 290.5 138.996 264.527 144.491 229.055Z" fill="#005321"/>
<path d="M365.286 81.0414L365.293 81C365.293 117.114 379.071 123.531 407 126.888C374.338 130.407 362.323 154.831 361.894 174.499C361.926 175.637 361.941 176.804 361.941 178C361.885 176.854 361.869 175.685 361.894 174.499C360.873 137.268 343.293 130.147 318 126.888C358.197 126.888 361.194 107.509 365.286 81.0414Z" fill="#C4C4C4"/>
<path d="M365.286 81.0414L365.293 81C365.293 117.114 379.071 123.531 407 126.888C374.338 130.407 362.323 154.831 361.894 174.499C361.926 175.637 361.941 176.804 361.941 178C361.885 176.854 361.869 175.685 361.894 174.499C360.873 137.268 343.293 130.147 318 126.888C358.197 126.888 361.194 107.509 365.286 81.0414Z" fill="#005321"/>
<path d="M43.036 608.038L43.0418 608C43.0418 641.135 55.5816 647.023 81 650.104C51.2742 653.332 40.3387 675.742 39.9489 693.788C39.9773 694.832 39.9916 695.903 39.9916 697C39.9402 695.948 39.9254 694.876 39.9489 693.788C39.0195 659.628 23.0198 653.093 0 650.104C36.5834 650.104 39.311 632.322 43.036 608.038Z" fill="#C4C4C4"/>
<path d="M43.036 608.038L43.0418 608C43.0418 641.135 55.5816 647.023 81 650.104C51.2742 653.332 40.3387 675.742 39.9489 693.788C39.9773 694.832 39.9916 695.903 39.9916 697C39.9402 695.948 39.9254 694.876 39.9489 693.788C39.0195 659.628 23.0198 653.093 0 650.104C36.5834 650.104 39.311 632.322 43.036 608.038Z" fill="#005321"/>
</svg>
`,
    `<svg width="746" height="792" viewBox="0 0 746 792" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M110.491 148.055L110.5 148C110.5 196.4 129 205 166.5 209.5C122.645 214.216 106.512 246.949 105.937 273.308C105.979 274.834 106 276.397 106 278C105.924 276.464 105.902 274.897 105.937 273.308C104.566 223.411 80.9613 213.866 47 209.5C100.972 209.5 104.996 183.527 110.491 148.055Z" fill="#C4C4C4"/>
<path d="M110.491 148.055L110.5 148C110.5 196.4 129 205 166.5 209.5C122.645 214.216 106.512 246.949 105.937 273.308C105.979 274.834 106 276.397 106 278C105.924 276.464 105.902 274.897 105.937 273.308C104.566 223.411 80.9613 213.866 47 209.5C100.972 209.5 104.996 183.527 110.491 148.055Z" fill="#B40E0E"/>
<path d="M160.818 0.0414173L160.824 0C160.824 36.1138 174.757 42.5308 203 45.8885C169.971 49.407 157.821 73.8314 157.388 93.4987C157.419 94.6374 157.435 95.8043 157.435 97C157.378 95.854 157.362 94.685 157.388 93.4987C156.355 56.2684 138.578 49.1465 113 45.8885C153.648 45.8885 156.679 26.5087 160.818 0.0414173Z" fill="#C4C4C4"/>
<path d="M160.818 0.0414173L160.824 0C160.824 36.1138 174.757 42.5308 203 45.8885C169.971 49.407 157.821 73.8314 157.388 93.4987C157.419 94.6374 157.435 95.8043 157.435 97C157.378 95.854 157.362 94.685 157.388 93.4987C156.355 56.2684 138.578 49.1465 113 45.8885C153.648 45.8885 156.679 26.5087 160.818 0.0414173Z" fill="#B40E0E"/>
<path d="M668.723 613.033L668.728 613C668.728 641.668 679.72 646.762 702 649.427C675.944 652.22 666.359 671.608 666.017 687.221C666.042 688.125 666.054 689.051 666.054 690C666.009 689.09 665.996 688.162 666.017 687.221C665.202 657.667 651.178 652.013 631 649.427C663.067 649.427 665.458 634.043 668.723 613.033Z" fill="#C4C4C4"/>
<path d="M668.723 613.033L668.728 613C668.728 641.668 679.72 646.762 702 649.427C675.944 652.22 666.359 671.608 666.017 687.221C666.042 688.125 666.054 689.051 666.054 690C666.009 689.09 665.996 688.162 666.017 687.221C665.202 657.667 651.178 652.013 631 649.427C663.067 649.427 665.458 634.043 668.723 613.033Z" fill="#B40E0E"/>
<path d="M251.723 699.033L251.728 699C251.728 727.668 262.72 732.762 285 735.427C258.944 738.22 249.359 757.608 249.017 773.221C249.042 774.125 249.054 775.051 249.054 776C249.009 775.09 248.996 774.162 249.017 773.221C248.202 743.667 234.178 738.013 214 735.427C246.067 735.427 248.458 720.043 251.723 699.033Z" fill="#C4C4C4"/>
<path d="M251.723 699.033L251.728 699C251.728 727.668 262.72 732.762 285 735.427C258.944 738.22 249.359 757.608 249.017 773.221C249.042 774.125 249.054 775.051 249.054 776C249.009 775.09 248.996 774.162 249.017 773.221C248.202 743.667 234.178 738.013 214 735.427C246.067 735.427 248.458 720.043 251.723 699.033Z" fill="#B40E0E"/>
<path d="M703.723 268.033L703.728 268C703.728 296.668 714.72 301.762 737 304.427C710.944 307.22 701.359 326.608 701.017 342.221C701.042 343.125 701.054 344.051 701.054 345C701.009 344.09 700.996 343.162 701.017 342.221C700.202 312.667 686.178 307.013 666 304.427C698.067 304.427 700.458 289.043 703.723 268.033Z" fill="#C4C4C4"/>
<path d="M703.723 268.033L703.728 268C703.728 296.668 714.72 301.762 737 304.427C710.944 307.22 701.359 326.608 701.017 342.221C701.042 343.125 701.054 344.051 701.054 345C701.009 344.09 700.996 343.162 701.017 342.221C700.202 312.667 686.178 307.013 666 304.427C698.067 304.427 700.458 289.043 703.723 268.033Z" fill="#B40E0E"/>
<path d="M401.537 24.0453L401.544 24C401.544 63.4646 416.561 70.4769 447 74.1462C411.402 77.9912 398.307 104.682 397.84 126.174C397.874 127.418 397.891 128.693 397.891 130C397.83 128.748 397.812 127.47 397.84 126.174C396.727 85.4892 377.567 77.7065 350 74.1462C393.81 74.1462 397.076 52.9682 401.537 24.0453Z" fill="#C4C4C4"/>
<path d="M401.537 24.0453L401.544 24C401.544 63.4646 416.561 70.4769 447 74.1462C411.402 77.9912 398.307 104.682 397.84 126.174C397.874 127.418 397.891 128.693 397.891 130C397.83 128.748 397.812 127.47 397.84 126.174C396.727 85.4892 377.567 77.7065 350 74.1462C393.81 74.1462 397.076 52.9682 401.537 24.0453Z" fill="#B40E0E"/>
<path d="M266.081 262.492C278.701 269.338 305.669 275.115 312.583 243.451" stroke="#B40E0E" stroke-width="11"/>
<path d="M274.296 266.284C278.12 270.293 281.364 280.516 263.75 289.333" stroke="#B40E0E" stroke-width="11"/>
<path d="M288.74 268.348C293.682 270.853 300.149 279.409 286.483 293.595" stroke="#B40E0E" stroke-width="11"/>
<path d="M304.38 263.273C309.843 264.197 318.559 270.446 309.723 288.051" stroke="#B40E0E" stroke-width="11"/>
<path d="M363.123 206.085C363.923 220.421 357.628 247.273 326.044 240" stroke="#B40E0E" stroke-width="11"/>
<path d="M363.043 215.133C365.035 220.303 372.892 227.603 388.388 215.442" stroke="#B40E0E" stroke-width="11"/>
<path d="M358.74 229.075C358.894 234.613 363.869 244.115 382.532 237.818" stroke="#B40E0E" stroke-width="11"/>
<path d="M347.471 241.049C345.974 246.383 347.901 256.934 367.593 256.463" stroke="#B40E0E" stroke-width="11"/>
<circle cx="121.342" cy="564.517" r="91.5" transform="rotate(24.6731 121.342 564.517)" stroke="#B40E0E" stroke-width="18"/>
<path d="M147.282 476.291L163.649 440.661L177.705 447.118L161.337 482.748" stroke="#B40E0E" stroke-width="18"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M79.4942 556.428C73.8214 562.101 73.8214 571.299 79.4942 576.971L115.668 613.145L122.813 606L88.2027 571.389C85.6129 568.799 85.6129 564.6 88.2027 562.011C90.7924 559.421 94.9914 559.421 97.5812 562.011L132.192 596.622L139.337 589.476L103.163 553.302C97.4906 547.629 88.2933 547.629 82.6202 553.302L79.4942 556.428Z" fill="#B40E0E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M112.542 523.381C106.869 529.054 106.869 538.251 112.542 543.924L138.444 569.826C144.117 575.499 153.314 575.499 158.987 569.826L162.113 566.7C167.786 561.027 167.786 551.83 162.113 546.157L136.211 520.255C130.538 514.582 121.341 514.582 115.668 520.255L112.542 523.381ZM121.25 528.963C118.661 531.553 118.661 535.752 121.25 538.341L144.026 561.118C146.616 563.707 150.815 563.707 153.405 561.118C155.994 558.528 155.994 554.329 153.405 551.739L130.629 528.963C128.039 526.373 123.84 526.373 121.25 528.963Z" fill="#B40E0E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M96.018 539.905C90.3453 545.577 90.3453 554.775 96.018 560.448L101.154 565.584L108.299 558.438L104.726 554.865C102.137 552.276 102.137 548.077 104.726 545.487C107.316 542.897 111.515 542.897 114.105 545.487L117.678 549.06L124.823 541.914L119.687 536.778C114.014 531.106 104.817 531.106 99.144 536.778L96.018 539.905Z" fill="#B40E0E"/>
<path d="M53.1454 536.332L46 543.477L115.668 613.145L122.813 606L53.1454 536.332Z" fill="#B40E0E"/>
<path d="M137.551 521.594L130.405 528.74L188.462 586.796L195.607 579.651L137.551 521.594Z" fill="#B40E0E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M155.377 572.468C156.677 571.797 157.897 570.916 158.987 569.826L162.113 566.7C167.786 561.027 167.786 551.83 162.113 546.157L156.977 541.021L149.832 548.166L153.405 551.739C155.994 554.329 155.994 558.528 153.405 561.118C150.815 563.707 146.616 563.707 144.026 561.118L155.377 572.468Z" fill="#B40E0E"/>
<path d="M216.5 334C272.1 276.4 249.333 161.333 231 111C365 217.8 444.833 210.5 468 193.5C450 251.5 413.167 274.333 397 278.5C461.8 372.9 550.667 343.5 587 317C595.8 405.8 536 435.333 505 439C616.6 557.4 702.833 474 732 417.5C749.2 497.9 716.5 550.333 698 566.5C667.6 606.1 564 593.333 516 582C489.6 574 448.333 585.333 431 592C311.8 669.2 252 645 239.5 553.5C334 579 350.833 516.333 350 478.5C312.4 511.3 260.667 486.5 239.5 470C328.3 397.2 313.5 337.667 295 317C271.4 338.6 232.833 337.333 216.5 334Z" stroke="#B40E0E" stroke-width="18"/>
<path d="M322 302C344 341.5 383.8 393.5 367 285.5" stroke="#B40E0E" stroke-width="18"/>
<path d="M390.5 613C374 637.667 341.4 705.7 357 754.5C359.398 762 365.6 773.9 394 775.5C422.4 777.1 449.6 770 462 754.5C469.333 745.333 475 725.8 439 721C429.333 720.833 417.5 721 401 726.5C389 692.5 383 651.5 426.5 595.5" stroke="#B40E0E" stroke-width="18"/>
<path d="M555.5 587.5C573.5 612 601.32 649.096 610.5 699.5C611.911 707.246 610.5 737 591.462 754.192C570.351 773.256 539.807 775.483 521.575 767.635C510.792 762.993 488.623 744.165 518.137 723C526.59 718.308 541.352 716.405 558.5 713.5C570 668.999 555.5 629 525.5 587.5" stroke="#B40E0E" stroke-width="18"/>
<path d="M434 312.492C456.43 309.891 494.247 294.9 500.5 255C500.5 244.403 494.519 222.714 500.5 220C503.772 218.515 514.5 215.5 523 237C523 216.5 539.401 178.5 555 178.5C570.599 178.5 567.076 217.543 547.5 255C535.605 276.827 503.5 317 457 332.5" stroke="#B40E0E" stroke-width="15"/>
<path d="M297.182 381.105C268.059 370.989 236.729 374.676 212.093 406.679C207.007 415.976 201.846 437.874 195.296 437.385C191.712 437.117 180.854 434.613 183.715 411.672C173.876 429.657 141.25 455.123 127.565 447.636C113.88 440.15 135.709 407.588 170.86 384.122C191.771 370.682 227.33 346.961 305.431 361.806" stroke="#B40E0E" stroke-width="15"/>
<circle cx="370" cy="564" r="19" fill="#B40E0E"/>
<circle cx="441" cy="530" r="19" fill="#B40E0E"/>
<circle cx="496" cy="476" r="19" fill="#B40E0E"/>
<circle cx="453" cy="375" r="19" fill="#B40E0E"/>
<circle cx="403" cy="413" r="19" fill="#B40E0E"/>
<circle cx="338" cy="427" r="19" fill="#B40E0E"/>
</svg>`,
    `<svg width="636" height="866" viewBox="0 0 636 866" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M175 405.5C248.278 422.7 301.5 389.5 284 299C310.5 375.5 431.121 416.619 463 405.5C456 448 447.945 473 404.5 490.759C458.5 531.5 504.5 513 534 490.759C534 584 501.5 611.794 456 624C512 676.5 567.5 673.5 623 649C591.174 808.347 438.803 770.298 391.555 753.414C344.307 736.53 269.684 723.787 218.45 746.428C167.216 769.07 8.99996 771.412 9 611.794C75.5514 694.119 152.05 664 184.5 611.794C119 607.5 79.5 532.206 72.5 482.206C137 532.5 170 518 214 490.759C167.5 455 175 430 175 405.5Z" stroke="#005321" stroke-width="18"/>
<path d="M262.745 432.435C276.705 435.792 304.251 434.41 302.756 402.035" stroke="#005321" stroke-width="11"/>
<path d="M267.337 434.02C270.23 438.745 271.245 449.422 252.168 454.328" stroke="#005321" stroke-width="11"/>
<path d="M279.537 434.02C284.233 436.959 289.904 446.062 275.017 458.961" stroke="#005321" stroke-width="11"/>
<path d="M294.128 429.02C299.505 430.354 307.725 437.244 297.584 454.131" stroke="#005321" stroke-width="11"/>
<path d="M376.312 421.6C364.854 430.252 339.048 439.985 327.491 409.706" stroke="#005321" stroke-width="11"/>
<path d="M373.473 424.829C371.785 430.106 373.335 440.718 393.031 440.952" stroke="#005321" stroke-width="11"/>
<path d="M360.241 430.829C357.476 435.629 356.745 446.329 375.946 450.725" stroke="#005321" stroke-width="11"/>
<path d="M343.746 430.829C340.028 434.936 337.052 445.24 354.89 453.595" stroke="#005321" stroke-width="11"/>
<path d="M95.7533 334.026L95.7573 334C95.7573 357.083 104.427 361.185 122 363.331C101.449 365.58 93.8885 381.191 93.619 393.762C93.6386 394.49 93.6485 395.236 93.6485 396C93.613 395.267 93.6027 394.52 93.619 393.762C92.9765 369.965 81.9149 365.413 66 363.331C91.2923 363.331 93.178 350.944 95.7533 334.026Z" fill="#C4C4C4"/>
<path d="M95.7533 334.026L95.7573 334C95.7573 357.083 104.427 361.185 122 363.331C101.449 365.58 93.8885 381.191 93.619 393.762C93.6386 394.49 93.6485 395.236 93.6485 396C93.613 395.267 93.6027 394.52 93.619 393.762C92.9765 369.965 81.9149 365.413 66 363.331C91.2923 363.331 93.178 350.944 95.7533 334.026Z" fill="#005321"/>
<path d="M171.491 0.0554977L171.5 0C171.5 48.4 190 57 227.5 61.5C183.645 66.2156 167.512 98.9492 166.937 125.308C166.979 126.834 167 128.397 167 130C166.924 128.464 166.902 126.897 166.937 125.308C165.566 75.4113 141.961 65.8665 108 61.5C161.972 61.5 165.996 35.5271 171.491 0.0554977Z" fill="#C4C4C4"/>
<path d="M171.491 0.0554977L171.5 0C171.5 48.4 190 57 227.5 61.5C183.645 66.2156 167.512 98.9492 166.937 125.308C166.979 126.834 167 128.397 167 130C166.924 128.464 166.902 126.897 166.937 125.308C165.566 75.4113 141.961 65.8665 108 61.5C161.972 61.5 165.996 35.5271 171.491 0.0554977Z" fill="#005321"/>
<path d="M394.256 96.0482L394.264 96C394.264 138.071 410.364 145.546 443 149.458C404.833 153.557 390.793 182.01 390.292 204.921C390.329 206.248 390.347 207.607 390.347 209C390.281 207.665 390.262 206.303 390.292 204.921C389.099 161.55 368.556 153.253 339 149.458C385.971 149.458 389.473 126.881 394.256 96.0482Z" fill="#C4C4C4"/>
<path d="M394.256 96.0482L394.264 96C394.264 138.071 410.364 145.546 443 149.458C404.833 153.557 390.793 182.01 390.292 204.921C390.329 206.248 390.347 207.607 390.347 209C390.281 207.665 390.262 206.303 390.292 204.921C389.099 161.55 368.556 153.253 339 149.458C385.971 149.458 389.473 126.881 394.256 96.0482Z" fill="#005321"/>
<path d="M585.973 339.037L585.979 339C585.979 371.018 598.209 376.708 623 379.685C594.008 382.804 583.343 404.459 582.962 421.896C582.99 422.905 583.004 423.94 583.004 425C582.954 423.984 582.94 422.948 582.962 421.896C582.056 388.887 566.451 382.573 544 379.685C579.68 379.685 582.34 362.503 585.973 339.037Z" fill="#C4C4C4"/>
<path d="M585.973 339.037L585.979 339C585.979 371.018 598.209 376.708 623 379.685C594.008 382.804 583.343 404.459 582.962 421.896C582.99 422.905 583.004 423.94 583.004 425C582.954 423.984 582.94 422.948 582.962 421.896C582.056 388.887 566.451 382.573 544 379.685C579.68 379.685 582.34 362.503 585.973 339.037Z" fill="#005321"/>
<path d="M54.1613 153.039L54.1674 153C54.1674 187.252 67.3264 193.338 94 196.523C62.8062 199.86 51.3307 223.026 50.9217 241.679C50.9515 242.759 50.9665 243.866 50.9665 245C50.9126 243.913 50.897 242.804 50.9217 241.679C49.9464 206.368 33.1566 199.613 9 196.523C47.39 196.523 50.2523 178.142 54.1613 153.039Z" fill="#C4C4C4"/>
<path d="M54.1613 153.039L54.1674 153C54.1674 187.252 67.3264 193.338 94 196.523C62.8062 199.86 51.3307 223.026 50.9217 241.679C50.9515 242.759 50.9665 243.866 50.9665 245C50.9126 243.913 50.897 242.804 50.9217 241.679C49.9464 206.368 33.1566 199.613 9 196.523C47.39 196.523 50.2523 178.142 54.1613 153.039Z" fill="#005321"/>
<path d="M208.161 249.039L208.167 249C208.167 283.252 221.326 289.338 248 292.523C216.806 295.86 205.331 319.026 204.922 337.679C204.951 338.759 204.967 339.866 204.967 341C204.913 339.913 204.897 338.804 204.922 337.679C203.946 302.368 187.157 295.613 163 292.523C201.39 292.523 204.252 274.142 208.161 249.039Z" fill="#C4C4C4"/>
<path d="M208.161 249.039L208.167 249C208.167 283.252 221.326 289.338 248 292.523C216.806 295.86 205.331 319.026 204.922 337.679C204.951 338.759 204.967 339.866 204.967 341C204.913 339.913 204.897 338.804 204.922 337.679C203.946 302.368 187.157 295.613 163 292.523C201.39 292.523 204.252 274.142 208.161 249.039Z" fill="#005321"/>
<path d="M326 494.893C326 494.893 297.872 531.889 264.712 561.166C231.551 590.443 206.974 574.339 195.782 560.937C191.358 555.64 183.504 530.667 210.334 517.478C237.165 504.29 260.432 538.147 243.996 553.494C227.56 568.841 209.276 551.628 212.848 541.439C216.42 531.25 233.396 529.092 232.28 544.388" stroke="#005321" stroke-width="11"/>
<path d="M298 479C298 479 317.153 491.056 331 494C344.369 496.843 360 494 360 494" stroke="#005321" stroke-width="18"/>
<path d="M451 767C423.068 777.866 384.341 802.411 385.864 827.285C386.591 839.153 373.899 852.295 354.728 842.936C335.557 833.578 314.417 822.229 310.737 818.687C301.163 805.956 312.732 778.861 334.565 788.714C342.735 792.402 348.94 810.218 354.861 816.948C360.768 823.662 371.738 820.59 369.362 800.206C366.985 779.822 382.611 757.659 387.5 755.5" stroke="#005321" stroke-width="15"/>
<path d="M140.483 758.641C169.042 767.733 190.335 786.495 190.375 811.415C190.394 823.306 203.886 835.626 222.432 825.083C240.978 814.54 261.364 801.887 264.815 798.121C273.57 784.814 260.325 758.499 239.153 769.702C231.23 773.895 226.155 792.065 220.668 799.154C215.194 806.225 204.053 803.848 205.146 783.355C206.239 762.861 200.014 754.348 195 752.5" stroke="#005321" stroke-width="15"/>
<path d="M315.957 278.8C294.062 248.679 272.283 271.126 286.154 304.355C300.024 337.583 379.974 401.123 411.902 383.184C443.83 365.244 396.409 352.378 376.48 340.376C356.55 328.374 343.137 316.193 315.957 278.8Z" stroke="#005321" stroke-width="18"/>
<path d="M324 282L391 240H434L471 321L423.5 282L403.5 292L400.5 349" stroke="#005321" stroke-width="15"/>
<path d="M404.5 291.5L384 275" stroke="#005321" stroke-width="11"/>
<path d="M421 279.5V256.5" stroke="#005321" stroke-width="11"/>
<circle cx="477.5" cy="333.5" r="24.5" fill="#005321"/>
<path d="M404.781 631.5C430.254 618.855 433.326 650.82 444.5 663.5C455.674 676.18 478.5 684.5 478.5 684.5C467.074 693.414 428.07 702.156 424.607 703.467C370.722 719.853 348 703.467 348 675.938C354.532 652.162 387.146 659.7 404.781 659.7C402.822 648.603 395.478 636.118 404.781 631.5Z" stroke="#005321" stroke-width="15"/>
<path d="M242.664 630.241C228.61 617.574 224.498 637.524 215.048 643.544C205.598 649.564 193.367 651.785 193.367 651.785C199.087 659.526 218.582 670.187 220.566 671.649C252.164 691.862 269.687 685.59 274.649 668.106C274.747 651.817 252.476 650.669 241.168 647.46C244.424 640.769 247.796 634.866 242.664 630.241Z" stroke="#005321" stroke-width="15"/>
<path d="M279 702.082L304.472 705.853M329.945 709.625L304.472 705.853M304.472 705.853L311.795 656.392" stroke="#005321" stroke-width="15"/>
<path d="M299.743 572.22L348.215 579.396L339.794 636.276C337.812 649.661 325.355 658.906 311.969 656.924V656.924C298.584 654.942 289.34 642.485 291.322 629.1L299.743 572.22Z" stroke="#005321" stroke-width="15"/>
<path d="M296.5 613H341.5" stroke="#005321" stroke-width="18"/>
<path d="M339.5 616H298.5C293.5 629.833 290 657.1 316 655.5C342 653.9 342.5 628.5 339.5 616Z" fill="#005321"/>
</svg>`,
    `<svg width="755" height="859" viewBox="0 0 755 859" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M190.441 312.768C288.497 332.362 351.651 208.579 363.205 158C379.989 250.955 463.815 331.5 544.5 319.5C527.716 370.17 457.701 382.333 431.705 382.485C423.313 459.036 514.5 577 623 577C516 636.5 473.5 572 463.815 551.703C463.815 642.478 530.674 721.841 692 642.478C567.535 834.402 467.97 745.384 423.882 721.841C360.488 693.59 270.226 712.576 252.743 721.841C139.636 761.211 9 689.681 9 594.238C93.5323 693.831 190.441 624 230.5 567C178.757 592.297 146 606 89.5 543.5C193.029 561.271 273.143 422.431 288.497 382.485C248.727 383.943 199.106 334.64 190.441 312.768Z" stroke="#B40E0E" stroke-width="18"/>
<path d="M306.196 289.543C313.864 301.681 334.574 319.895 356.073 295.643" stroke="#B40E0E" stroke-width="11"/>
<path d="M311.512 296.865C312.89 302.231 310.728 312.736 291.051 311.826" stroke="#B40E0E" stroke-width="11"/>
<path d="M323.107 305.722C326.196 310.321 327.66 320.946 308.806 326.649" stroke="#B40E0E" stroke-width="11"/>
<path d="M339.233 308.932C343.549 312.407 348.102 322.118 331.793 333.163" stroke="#B40E0E" stroke-width="11"/>
<path d="M416.385 288.147C410.082 301.047 391.472 321.403 367.466 299.63" stroke="#B40E0E" stroke-width="11"/>
<path d="M411.896 296.003C411.109 301.487 414.4 311.695 433.862 308.653" stroke="#B40E0E" stroke-width="11"/>
<path d="M401.332 306.067C398.761 310.975 398.46 321.696 417.822 325.318" stroke="#B40E0E" stroke-width="11"/>
<path d="M385.65 311.011C381.738 314.934 378.266 325.082 395.679 334.29" stroke="#B40E0E" stroke-width="11"/>
<path d="M316.5 355.5C323.398 369.152 369.114 373.686 396.737 364.358C410 421 328 416.643 316.5 355.5Z" stroke="#B40E0E" stroke-width="11"/>
<path d="M254.605 719C236.939 748.167 209.429 802.213 254.605 824.5C292.105 843 312.605 836 324.017 824.5C335.428 813 334.517 790.5 303.017 790.5C280.017 790.5 256.005 803.2 279.605 714" stroke="#B40E0E" stroke-width="15"/>
<path d="M367 714.5C357.5 773 372.018 842.79 421.954 836.155C463.405 830.648 476.538 813.421 479.616 797.515C482.693 781.609 472.028 768.166 443.243 780.961C406 797.515 380.5 780 393 718.5" stroke="#B40E0E" stroke-width="15"/>
<path d="M173.258 0.0631864L173.268 0C173.268 55.1015 194.322 64.8923 237 70.0154C187.09 75.3839 168.729 112.65 168.075 142.658C168.122 144.395 168.146 146.176 168.146 148C168.06 146.251 168.035 144.468 168.075 142.658C166.514 85.8529 139.651 74.9864 101 70.0154C162.424 70.0154 167.004 40.4462 173.258 0.0631864Z" fill="#C4C4C4"/>
<path d="M173.258 0.0631864L173.268 0C173.268 55.1015 194.322 64.8923 237 70.0154C187.09 75.3839 168.729 112.65 168.075 142.658C168.122 144.395 168.146 146.176 168.146 148C168.06 146.251 168.035 144.468 168.075 142.658C166.514 85.8529 139.651 74.9864 101 70.0154C162.424 70.0154 167.004 40.4462 173.258 0.0631864Z" fill="#B40E0E"/>
<path d="M281.379 90.0354L281.385 90C281.385 120.902 293.151 126.392 317 129.265C289.109 132.276 278.849 153.175 278.483 170.004C278.51 170.978 278.523 171.977 278.523 173C278.475 172.019 278.461 171.019 278.483 170.004C277.611 138.147 262.599 132.053 241 129.265C275.325 129.265 277.884 112.683 281.379 90.0354Z" fill="#C4C4C4"/>
<path d="M281.379 90.0354L281.385 90C281.385 120.902 293.151 126.392 317 129.265C289.109 132.276 278.849 153.175 278.483 170.004C278.51 170.978 278.523 171.977 278.523 173C278.475 172.019 278.461 171.019 278.483 170.004C277.611 138.147 262.599 132.053 241 129.265C275.325 129.265 277.884 112.683 281.379 90.0354Z" fill="#B40E0E"/>
<path d="M174.941 197.029L174.946 197C174.946 222.317 184.544 226.815 204 229.169C181.247 231.636 172.877 248.758 172.578 262.546C172.6 263.344 172.611 264.162 172.611 265C172.572 264.197 172.56 263.377 172.578 262.546C171.867 236.446 159.62 231.453 142 229.169C170.002 229.169 172.09 215.583 174.941 197.029Z" fill="#C4C4C4"/>
<path d="M174.941 197.029L174.946 197C174.946 222.317 184.544 226.815 204 229.169C181.247 231.636 172.877 248.758 172.578 262.546C172.6 263.344 172.611 264.162 172.611 265C172.572 264.197 172.56 263.377 172.578 262.546C171.867 236.446 159.62 231.453 142 229.169C170.002 229.169 172.09 215.583 174.941 197.029Z" fill="#B40E0E"/>
<path d="M528.006 27.0448L528.013 27C528.013 66.0923 542.874 73.0385 573 76.6731C537.769 80.4818 524.809 106.921 524.347 128.21C524.381 129.443 524.397 130.706 524.397 132C524.337 130.759 524.319 129.494 524.347 128.21C523.245 87.9091 504.283 80.1998 477 76.6731C520.358 76.6731 523.591 55.695 528.006 27.0448Z" fill="#C4C4C4"/>
<path d="M528.006 27.0448L528.013 27C528.013 66.0923 542.874 73.0385 573 76.6731C537.769 80.4818 524.809 106.921 524.347 128.21C524.381 129.443 524.397 130.706 524.397 132C524.337 130.759 524.319 129.494 524.347 128.21C523.245 87.9091 504.283 80.1998 477 76.6731C520.358 76.6731 523.591 55.695 528.006 27.0448Z" fill="#B40E0E"/>
<path d="M468.941 167.029L468.946 167C468.946 192.317 478.544 196.815 498 199.169C475.247 201.636 466.877 218.758 466.578 232.546C466.6 233.344 466.611 234.162 466.611 235C466.572 234.197 466.56 233.377 466.578 232.546C465.867 206.446 453.62 201.453 436 199.169C464.002 199.169 466.09 185.583 468.941 167.029Z" fill="#C4C4C4"/>
<path d="M468.941 167.029L468.946 167C468.946 192.317 478.544 196.815 498 199.169C475.247 201.636 466.877 218.758 466.578 232.546C466.6 233.344 466.611 234.162 466.611 235C466.572 234.197 466.56 233.377 466.578 232.546C465.867 206.446 453.62 201.453 436 199.169C464.002 199.169 466.09 185.583 468.941 167.029Z" fill="#B40E0E"/>
<circle cx="226" cy="625" r="15" fill="#B40E0E"/>
<circle cx="241" cy="511" r="15" fill="#B40E0E"/>
<circle cx="269" cy="631" r="15" fill="#B40E0E"/>
<circle cx="292" cy="523" r="15" fill="#B40E0E"/>
<circle cx="317" cy="631" r="15" fill="#B40E0E"/>
<circle cx="344" cy="518" r="15" fill="#B40E0E"/>
<circle cx="362" cy="616" r="15" fill="#B40E0E"/>
<circle cx="389" cy="496" r="15" fill="#B40E0E"/>
<circle cx="407" cy="595" r="15" fill="#B40E0E"/>
<circle cx="419" cy="461" r="15" fill="#B40E0E"/>
<circle cx="437" cy="559" r="15" fill="#B40E0E"/>
<path d="M590.983 381C590.983 381 612.037 395.293 641.965 401.177C671.893 407.06 691.874 401.736 691.874 401.736L670.348 506.476C667.496 520.349 655.599 530.605 641.442 530.187C631.832 529.904 621.038 529.135 612.466 527.321C604.466 525.627 594.993 522.302 586.594 518.965C573.457 513.745 566.599 499.643 569.445 485.796L590.983 381Z" stroke="#B40E0E" stroke-width="18"/>
<path d="M584 413.5C537.5 397.5 519 453 573 463" stroke="#B40E0E" stroke-width="18"/>
<rect x="584" y="374.391" width="33" height="41" rx="10" transform="rotate(-72.0375 584 374.391)" stroke="#B40E0E" stroke-width="11"/>
<rect x="632.828" y="358.764" width="30.2391" height="36.499" rx="10" transform="rotate(-130.974 632.828 358.764)" stroke="#B40E0E" stroke-width="11"/>
<rect x="653" y="349.443" width="30.2391" height="36.499" rx="10" transform="rotate(-76.8219 653 349.443)" stroke="#B40E0E" stroke-width="11"/>
<rect x="657.103" y="400.921" width="33" height="41" rx="10" transform="rotate(-155.814 657.103 400.921)" stroke="#B40E0E" stroke-width="11"/>
<path d="M678.874 395C672.988 395 668.376 389.942 668.916 384.081L670.093 371.337C670.558 366.293 674.722 362.394 679.786 362.26L696.752 361.811C702.273 361.665 706.867 366.023 707.013 371.544L707.362 384.736C707.51 390.36 702.991 395 697.365 395L678.874 395Z" stroke="#B40E0E" stroke-width="11"/>
<path d="M650.037 300.779C663.979 286.829 681.047 245.516 637.779 191.865C594.512 138.215 616.801 93.1358 633.354 77.3025C624.299 90.8451 613.152 126.042 640.996 158.486L657.076 172.569C637.865 150.909 622.586 113.186 652.783 66.5771C691.729 6.46387 659.965 6.68468 639.215 14.3092C660.203 1.62951 699.931 -6.51327 690.946 62.3534C673.92 75.0379 651.513 114.224 698.093 169.494C707.169 180.106 721.02 206.995 708.42 233.79C707.71 235.958 706.744 237.637 705.75 238.793C706.748 237.129 707.635 235.46 708.42 233.79C711.114 225.573 710.135 210.334 693.062 189.913C696.174 225.782 691.925 298.172 650.037 300.779Z" fill="#B40E0E"/>
<path d="M449 460.5C484.5 481 520 470 542.5 452.5L536.5 426.5C520 441 493.2 466.5 436 386.5" stroke="#B40E0E" stroke-width="15"/>
<path d="M272 403.725C212 370 128.5 354.5 74 408.5C61.5 420.886 64 453 88.6677 439C95.3681 430.057 115.5 412 115.5 412C113.647 415.643 112.19 429.163 119.033 433.535C125.449 434.363 138.621 429.56 139.99 403.725C164.51 396.107 215.5 396 242.5 453" stroke="#B40E0E" stroke-width="15"/>
<path d="M162.5 402L177.5 454.5M177.5 454.5C186 460 189.5 475.5 177.5 483.063L45.5 510.5C45.5 510.5 50.5767 502.305 50.5 496.5C50.426 490.902 45.5 483.063 45.5 483.063M177.5 454.5L45.5 483.063M154.5 376L140 321L40 338L32 486L45.5 483.063" stroke="#B40E0E" stroke-width="15"/>
</svg>`,
    `<svg width="935" height="775" viewBox="0 0 935 775" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M551.199 445.5C564.699 447.167 587.5 445.5 587.5 419.5" stroke="#B40E0E" stroke-width="11"/>
<path d="M577 408C580.5 412.667 589 425.55 602.5 418.05" stroke="#B40E0E" stroke-width="11"/>
<path d="M543.199 429C553.199 438.5 550.699 451.5 543.199 457" stroke="#B40E0E" stroke-width="11"/>
<path d="M458.5 331.5C469.5 343.167 460.9 401.95 434.5 431.95" stroke="#B40E0E" stroke-width="18"/>
<path d="M545.5 320.5C565.333 329.5 584.1 348.05 666.5 302.45C666 329.95 656.9 390.55 624.5 412.95C653.833 439.783 710.9 457.6 796.5 404C800 425.333 805.7 493.4 744.5 529C784.667 535.167 883.7 542.05 922.5 496.45C939.333 546.95 895.202 709.707 753.5 630C737.5 621 689 611.5 655.5 648.5C603.84 705.557 554.8 751.85 504 735.45" stroke="#B40E0E" stroke-width="18"/>
<path d="M641.258 17.0632L641.268 17C641.268 72.1015 662.322 81.8923 705 87.0154C655.09 92.3839 636.729 129.65 636.075 159.658C636.122 161.395 636.146 163.176 636.146 165C636.06 163.251 636.035 161.468 636.075 159.658C634.514 102.853 607.651 91.9864 569 87.0154C630.424 87.0154 635.004 57.4462 641.258 17.0632Z" fill="#C4C4C4"/>
<path d="M641.258 17.0632L641.268 17C641.268 72.1015 662.322 81.8923 705 87.0154C655.09 92.3839 636.729 129.65 636.075 159.658C636.122 161.395 636.146 163.176 636.146 165C636.06 163.251 636.035 161.468 636.075 159.658C634.514 102.853 607.651 91.9864 569 87.0154C630.424 87.0154 635.004 57.4462 641.258 17.0632Z" fill="#B40E0E"/>
<path d="M700.567 222.038L700.573 222C700.573 255.135 713.268 261.023 739 264.104C708.907 267.332 697.837 289.742 697.442 307.788C697.471 308.832 697.485 309.903 697.485 311C697.433 309.948 697.418 308.876 697.442 307.788C696.501 273.628 680.304 267.093 657 264.104C694.035 264.104 696.796 246.322 700.567 222.038Z" fill="#C4C4C4"/>
<path d="M700.567 222.038L700.573 222C700.573 255.135 713.268 261.023 739 264.104C708.907 267.332 697.837 289.742 697.442 307.788C697.471 308.832 697.485 309.903 697.485 311C697.433 309.948 697.418 308.876 697.442 307.788C696.501 273.628 680.304 267.093 657 264.104C694.035 264.104 696.796 246.322 700.567 222.038Z" fill="#B40E0E"/>
<path d="M577.567 149.038L577.573 149C577.573 182.135 590.268 188.023 616 191.104C585.907 194.332 574.837 216.742 574.442 234.788C574.471 235.832 574.485 236.903 574.485 238C574.433 236.948 574.418 235.876 574.442 234.788C573.501 200.628 557.304 194.093 534 191.104C571.035 191.104 573.796 173.322 577.567 149.038Z" fill="#C4C4C4"/>
<path d="M577.567 149.038L577.573 149C577.573 182.135 590.268 188.023 616 191.104C585.907 194.332 574.837 216.742 574.442 234.788C574.471 235.832 574.485 236.903 574.485 238C574.433 236.948 574.418 235.876 574.442 234.788C573.501 200.628 557.304 194.093 534 191.104C571.035 191.104 573.796 173.322 577.567 149.038Z" fill="#B40E0E"/>
<path d="M384.567 64.038L384.573 64C384.573 97.1354 397.268 103.023 423 106.104C392.907 109.332 381.837 131.742 381.442 149.788C381.471 150.832 381.485 151.903 381.485 153C381.433 151.948 381.418 150.876 381.442 149.788C380.501 115.628 364.304 109.093 341 106.104C378.035 106.104 380.796 88.3224 384.567 64.038Z" fill="#C4C4C4"/>
<path d="M384.567 64.038L384.573 64C384.573 97.1354 397.268 103.023 423 106.104C392.907 109.332 381.837 131.742 381.442 149.788C381.471 150.832 381.485 151.903 381.485 153C381.433 151.948 381.418 150.876 381.442 149.788C380.501 115.628 364.304 109.093 341 106.104C378.035 106.104 380.796 88.3224 384.567 64.038Z" fill="#B40E0E"/>
<path d="M56.3187 335.049L56.3264 335C56.3264 377.815 72.7364 385.423 106 389.404C67.0995 393.575 52.7889 422.532 52.2788 445.849C52.316 447.199 52.3347 448.582 52.3347 450C52.2674 448.641 52.248 447.255 52.2788 445.849C51.0626 401.71 30.1247 393.266 0 389.404C47.8746 389.404 51.444 366.428 56.3187 335.049Z" fill="#C4C4C4"/>
<path d="M56.3187 335.049L56.3264 335C56.3264 377.815 72.7364 385.423 106 389.404C67.0995 393.575 52.7889 422.532 52.2788 445.849C52.316 447.199 52.3347 448.582 52.3347 450C52.2674 448.641 52.248 447.255 52.2788 445.849C51.0626 401.71 30.1247 393.266 0 389.404C47.8746 389.404 51.444 366.428 56.3187 335.049Z" fill="#B40E0E"/>
<path d="M241.753 119.026L241.757 119C241.757 141.711 250.427 145.746 268 147.858C247.449 150.07 239.888 165.43 239.619 177.798C239.639 178.514 239.649 179.248 239.649 180C239.613 179.279 239.603 178.544 239.619 177.798C238.976 154.385 227.915 149.907 212 147.858C237.292 147.858 239.178 135.67 241.753 119.026Z" fill="#C4C4C4"/>
<path d="M241.753 119.026L241.757 119C241.757 141.711 250.427 145.746 268 147.858C247.449 150.07 239.888 165.43 239.619 177.798C239.639 178.514 239.649 179.248 239.649 180C239.613 179.279 239.603 178.544 239.619 177.798C238.976 154.385 227.915 149.907 212 147.858C237.292 147.858 239.178 135.67 241.753 119.026Z" fill="#B40E0E"/>
<path d="M492.753 0.0260408L492.757 0C492.757 22.7108 501.427 26.7462 519 28.8577C498.449 31.0704 490.888 46.43 490.619 58.7982C490.639 59.5143 490.649 60.248 490.649 61C490.613 60.2793 490.603 59.5442 490.619 58.7982C489.976 35.3853 478.915 30.9066 463 28.8577C488.292 28.8577 490.178 16.6704 492.753 0.0260408Z" fill="#C4C4C4"/>
<path d="M492.753 0.0260408L492.757 0C492.757 22.7108 501.427 26.7462 519 28.8577C498.449 31.0704 490.888 46.43 490.619 58.7982C490.639 59.5143 490.649 60.248 490.649 61C490.613 60.2793 490.603 59.5442 490.619 58.7982C489.976 35.3853 478.915 30.9066 463 28.8577C488.292 28.8577 490.178 16.6704 492.753 0.0260408Z" fill="#B40E0E"/>
<path d="M590.693 485.461C609.526 464.151 618.081 489.45 639.54 500.141C661 510.833 687 498.5 687 498.5C679 520.5 646.714 550.48 644 552.999C600.258 588.477 565.205 573.516 554.835 548.016C551.929 523.53 584.98 518.227 601.316 511.583C595.321 502.043 583.815 493.243 590.693 485.461Z" stroke="#B40E0E" stroke-width="15"/>
<path d="M478.5 325.949C441.3 321.949 468.5 353.05 449 359.499C415.5 370.579 410.167 317.115 420 306.949C424.8 284.949 500.5 277 539 290.949C564 303 553 315.333 543.5 319.999C516 311.499 513.5 322.499 505 325.949C495.087 329.972 488.5 327.024 478.5 325.949Z" stroke="#B40E0E" stroke-width="18"/>
<path d="M472.933 400.209C485.867 406.441 513.083 410.914 518.465 378.954" stroke="#B40E0E" stroke-width="11"/>
<path d="M481.321 403.602C485.333 407.422 489.065 417.477 471.896 427.132" stroke="#B40E0E" stroke-width="11"/>
<path d="M495.847 404.969C500.904 407.233 507.775 415.468 494.808 430.295" stroke="#B40E0E" stroke-width="11"/>
<path d="M511.225 399.148C516.726 399.808 525.733 405.631 517.754 423.64" stroke="#B40E0E" stroke-width="11"/>
<path d="M570.856 347.768C569.445 362.056 559.1 387.622 529.008 375.584" stroke="#B40E0E" stroke-width="11"/>
<path d="M569.387 356.696C570.561 362.11 577.205 370.53 594.385 360.895" stroke="#B40E0E" stroke-width="11"/>
<path d="M562.994 369.812C562.296 375.308 565.751 385.461 585.161 382.105" stroke="#B40E0E" stroke-width="11"/>
<path d="M550.02 379.913C547.72 384.953 548.005 395.675 567.535 398.235" stroke="#B40E0E" stroke-width="11"/>
<path d="M530.5 289.45C529.333 275.45 520.7 245.65 495.5 238.45C470.3 231.25 474.167 197.001 476 184.501C477.167 178.834 473.5 153.5 448.5 177C441 179.167 431.1 180.5 425.5 188.5C422.5 181.5 405 176.101 399 184.501C391.5 195.001 349.5 196.95 354.5 273.95C360.833 253.783 381 213.95 411 215.95C412.833 229.45 420.8 254.35 438 245.95C440.833 254.283 450.5 269.5 435 293" stroke="#B40E0E" stroke-width="15"/>
<path d="M434.438 494V625.5" stroke="#B40E0E" stroke-width="11"/>
<path d="M369 560.062L500.5 560.062" stroke="#B40E0E" stroke-width="11"/>
<path d="M386.45 513.943L479.435 606.928" stroke="#B40E0E" stroke-width="11"/>
<path d="M386.45 606.928L479.435 513.943" stroke="#B40E0E" stroke-width="11"/>
<path d="M260.818 410.95V487.95" stroke="#B40E0E" stroke-width="11"/>
<path d="M222.5 449.632L299.5 449.632" stroke="#B40E0E" stroke-width="11"/>
<path d="M232.718 422.627L287.165 477.075" stroke="#B40E0E" stroke-width="11"/>
<path d="M232.718 477.075L287.165 422.627" stroke="#B40E0E" stroke-width="11"/>
<path d="M401.844 653V719" stroke="#B40E0E" stroke-width="11"/>
<path d="M369 686.156L435 686.156" stroke="#B40E0E" stroke-width="11"/>
<path d="M377.758 663.01L424.427 709.679" stroke="#B40E0E" stroke-width="11"/>
<path d="M377.758 709.678L424.427 663.009" stroke="#B40E0E" stroke-width="11"/>
<path d="M258.5 687.45L299 718.95" stroke="#B40E0E" stroke-width="11"/>
<path d="M267.5 670.95L308 702.45" stroke="#B40E0E" stroke-width="11"/>
<path d="M240.5 622.45L261.5 588.45" stroke="#B40E0E" stroke-width="11"/>
<path d="M254.5 635.45L279.5 603.45" stroke="#B40E0E" stroke-width="11"/>
<path d="M159 649.45L222.5 587.45L304.5 658.45L245 734.95" stroke="#B40E0E" stroke-width="11"/>
<path d="M175.5 600.45L211 628.45" stroke="#B40E0E" stroke-width="11"/>
<path d="M162.5 614.95L198 642.95" stroke="#B40E0E" stroke-width="11"/>
<path d="M157 579.45C147.833 559.283 137.9 499.75 171.5 422.95" stroke="#B40E0E" stroke-width="11"/>
<path d="M187.5 529.95C175.333 492.783 169.3 400.85 242.5 330.45" stroke="#B40E0E" stroke-width="11"/>
<path d="M275 270.45C272 248.283 198 186.45 150.5 226.949L175 243.949C161.667 248.949 135 254.45 119 283.95L156 294.95C145.5 303.95 132.9 311.85 142.5 319.45C152.1 327.05 180.167 314.45 186 308.95C173.333 324.45 158.2 366.15 193 352.95" stroke="#B40E0E" stroke-width="18"/>
<path d="M244.5 307.95C192.833 337.45 113.1 426.95 129.5 554.95C145.9 682.95 194.5 712.487 246.5 740.45C319.073 779.476 407 764.95 466 746.95C519.085 730.754 600.688 706.277 591 573.5M573 515C557.5 481 538.3 456.05 425.5 434.45C419.333 424.283 396.1 400.95 352.5 388.95C337.333 359.116 302.7 299.15 285.5 297.95" stroke="#B40E0E" stroke-width="18"/>
<path d="M243.5 302.45L288.5 287.95H237L279.5 275.45" stroke="#B40E0E" stroke-width="11"/>
<circle cx="368.5" cy="288.95" r="24" fill="#B40E0E"/>
<path d="M595 711.5C595.833 728.167 608.7 759.4 653.5 751C667.5 750.5 695 743.5 693 719.5C691.833 710.5 681.4 696.3 649 711.5C633.5 716.5 621.3 721.4 620.5 687" stroke="#B40E0E" stroke-width="15"/>
<path d="M719 623.5C735.676 622.89 771.358 654.043 766.86 699.402C767.572 713.392 762.974 741.394 738.891 741.476C729.824 741.091 709.123 734 727.119 698.331C738.891 675 721.84 625.825 687.5 628" stroke="#B40E0E" stroke-width="15"/>
</svg>`,
    `<svg width="637" height="871" viewBox="0 0 637 871" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M153.723 711.031V692H158.797V711.031" stroke="#005321" stroke-width="11"/>
<path d="M342.762 686.996V676H347.837V686.996" stroke="#005321" stroke-width="11"/>
<path d="M397.379 665.454V646H400.762V665.454" stroke="#005321" stroke-width="11"/>
<path d="M467.762 669.454V650H471.145V669.454" stroke="#005321" stroke-width="11"/>
<path d="M260.192 739.109C263.857 747.426 271.018 761.692 258.5 777.593C245.982 793.495 233.344 797.746 218.542 805.781C208.534 809.87 192.237 826.927 207.124 842.152C215.582 848.072 230.384 858.222 254.912 834.539C254.912 834.539 274.105 813.515 280.287 796.9C284.229 786.306 286.208 773.492 286.208 768.566C286.208 760.953 287.054 755.032 282.824 733.464" stroke="#005321" stroke-width="15"/>
<path d="M360.645 753.284C356.98 761.601 351.58 774.599 364.098 790.5C376.616 806.401 389.838 811.279 404.64 819.315C414.649 823.403 430.945 840.46 416.058 855.685C407.6 861.606 392.798 871.755 368.27 848.072C368.27 848.072 349.077 827.048 342.895 810.434C338.953 799.839 336.974 787.025 336.974 782.099C336.974 774.486 336.482 763.491 340.712 741.922" stroke="#005321" stroke-width="15"/>
<path d="M500.5 628C502.615 651.119 539.023 677.302 624.958 667.49C618.332 694.274 516.693 778.715 389.82 761.376C343.3 750.38 306.93 714.433 225.309 746.997C125.502 797.746 63.3349 769.411 35 719.931C48.1102 719.931 93.446 734.733 131 673.834" stroke="#005321" stroke-width="18"/>
<path d="M180.058 651.842C234.5 684.5 276.069 679.847 324.653 647.343C371.5 616 417.5 635.5 437 616" stroke="#005321" stroke-width="18"/>
<path d="M147.494 563.032C133.256 557.675 102.327 554.912 92.5158 586.715C79.2646 598.838 64.6036 624.1 103.511 631.543" stroke="#005321" stroke-width="18"/>
<path d="M515.424 580.371C521.768 578.398 534.878 570.898 536.57 556.688C538.684 538.926 514.578 549.499 525.574 526.662C534.371 508.392 505.556 499.878 490.05 497.904" stroke="#005321" stroke-width="18"/>
<path d="M109.432 621.394C98.6055 630.867 112.11 649.446 120.005 657.763L129.731 670.874C152.569 670.874 168.216 659.455 174.983 653.957C184.287 644.23 193.591 618.616 177.52 602.785C154.852 580.456 136.075 610.821 133.115 626.891C129.732 621.112 120.258 611.92 109.432 621.394Z" stroke="#005321" stroke-width="15"/>
<path d="M503.583 571.013C517.121 575.879 511.332 598.106 507.02 608.732L502.751 624.488C481.491 632.827 462.754 627.91 454.448 625.262C442.234 619.604 424.221 599.155 433.401 578.549C446.351 549.485 474.919 570.898 483.543 584.778C484.582 578.162 490.045 566.146 503.583 571.013Z" stroke="#005321" stroke-width="15"/>
<path d="M247.758 187V244.516" stroke="#005321" stroke-width="9"/>
<path d="M219 215.758L276.516 215.758" stroke="#005321" stroke-width="9"/>
<path d="M227.458 236.128L268.128 195.458" stroke="#005321" stroke-width="9"/>
<path d="M268.128 236.128L227.458 195.458" stroke="#005321" stroke-width="9"/>
<path d="M328.5 287V362" stroke="#005321" stroke-width="9"/>
<path d="M291 324.5L366 324.5" stroke="#005321" stroke-width="9"/>
<path d="M302.029 351.062L355.062 298.029" stroke="#005321" stroke-width="9"/>
<path d="M355.062 351.062L302.029 298.029" stroke="#005321" stroke-width="9"/>
<path d="M239.258 324V400.516" stroke="#005321" stroke-width="9"/>
<path d="M201 362.258L277.516 362.258" stroke="#005321" stroke-width="9"/>
<path d="M212.252 389.357L266.357 335.252" stroke="#005321" stroke-width="9"/>
<path d="M266.357 389.357L212.252 335.252" stroke="#005321" stroke-width="9"/>
<path d="M208.5 466V545" stroke="#005321" stroke-width="9"/>
<path d="M169 505.5L248 505.5" stroke="#005321" stroke-width="9"/>
<path d="M180.618 533.479L236.479 477.618" stroke="#005321" stroke-width="9"/>
<path d="M236.479 533.479L180.618 477.618" stroke="#005321" stroke-width="9"/>
<path d="M305.258 401V489.516" stroke="#005321" stroke-width="9"/>
<path d="M261 445.258L349.516 445.258" stroke="#005321" stroke-width="9"/>
<path d="M274.017 476.607L336.607 414.017" stroke="#005321" stroke-width="9"/>
<path d="M336.607 476.607L274.017 414.017" stroke="#005321" stroke-width="9"/>
<path d="M410.258 445V529.516" stroke="#005321" stroke-width="9"/>
<path d="M368 487.258L452.516 487.258" stroke="#005321" stroke-width="9"/>
<path d="M380.429 517.19L440.19 457.429" stroke="#005321" stroke-width="9"/>
<path d="M440.19 517.19L380.429 457.429" stroke="#005321" stroke-width="9"/>
<path d="M128.04 263.613C129.591 251.489 123.473 229.188 86.595 236.969C49.7173 244.751 71.2293 252.335 86.595 255.154C77.4319 254.45 60.2054 255.747 64.6036 266.573C61.5023 272.353 58.7676 283.574 72.639 282.221C58.6829 291.243 39.652 311.993 75.1763 322.82C80.9561 324.934 94.3764 325.696 101.82 311.824C109.432 319.859 126.264 329.671 132.692 304.635C135.793 308.582 143.688 314.446 150.454 306.326C155.247 305.903 164.072 301.421 161.027 286.873C157.982 272.325 147.071 267.278 141.996 266.573" stroke="#005321" stroke-width="15"/>
<path d="M129.732 263.19C140.586 231.331 180.988 166.09 255.758 160C263.653 160.564 280.625 164.99 285.362 178.185C294.807 202.432 325.623 256 373.327 276.3C402.931 286.45 450.973 316.476 406.314 355.384C361.655 394.291 400.393 418.397 425.345 425.587C452.552 429.111 502.906 449.185 486.666 501.287C451.001 547.666 333.404 624.777 148.34 562.186C153.414 554.715 152.653 536.558 109.009 523.701C65.3649 510.845 113.943 478.309 143.688 463.648C175.688 444.477 224.717 404.864 164.833 399.789C104.949 394.714 153.132 356.512 184.71 338.045C212.199 314.785 259.142 267.757 227.001 265.727C221.503 267.983 210 270.633 207.97 263.19C205.94 255.747 211.071 244.018 213.89 239.084C210.084 247.542 201.034 263.782 195.282 261.075C189.531 258.369 185.837 251.771 184.71 248.811C181.749 253.604 174.137 262.09 167.37 257.692C160.604 253.294 147.917 261.216 142.419 265.727L129.732 263.19Z" stroke="#005321" stroke-width="18"/>
<path d="M388.491 0.0554977L388.5 0C388.5 48.4 407 57 444.5 61.5C400.645 66.2156 384.512 98.9492 383.937 125.308C383.979 126.834 384 128.397 384 130C383.924 128.464 383.902 126.897 383.937 125.308C382.566 75.4113 358.961 65.8665 325 61.5C378.972 61.5 382.996 35.5271 388.491 0.0554977Z" fill="#C4C4C4"/>
<path d="M388.491 0.0554977L388.5 0C388.5 48.4 407 57 444.5 61.5C400.645 66.2156 384.512 98.9492 383.937 125.308C383.979 126.834 384 128.397 384 130C383.924 128.464 383.902 126.897 383.937 125.308C382.566 75.4113 358.961 65.8665 325 61.5C378.972 61.5 382.996 35.5271 388.491 0.0554977Z" fill="#005321"/>
<path d="M510.537 195.045L510.544 195C510.544 234.092 525.561 241.038 556 244.673C520.402 248.482 507.307 274.921 506.84 296.21C506.874 297.443 506.891 298.706 506.891 300C506.83 298.759 506.812 297.494 506.84 296.21C505.727 255.909 486.567 248.2 459 244.673C502.81 244.673 506.076 223.695 510.537 195.045Z" fill="#C4C4C4"/>
<path d="M510.537 195.045L510.544 195C510.544 234.092 525.561 241.038 556 244.673C520.402 248.482 507.307 274.921 506.84 296.21C506.874 297.443 506.891 298.706 506.891 300C506.83 298.759 506.812 297.494 506.84 296.21C505.727 255.909 486.567 248.2 459 244.673C502.81 244.673 506.076 223.695 510.537 195.045Z" fill="#005321"/>
<path d="M135.786 60.0337L135.791 60C135.791 89.4123 147.092 94.6385 170 97.3731C143.21 100.239 133.355 120.131 133.003 136.148C133.029 137.076 133.042 138.026 133.042 139C132.996 138.067 132.982 137.115 133.003 136.148C132.166 105.827 117.746 100.027 97 97.3731C129.97 97.3731 132.428 81.5895 135.786 60.0337Z" fill="#C4C4C4"/>
<path d="M135.786 60.0337L135.791 60C135.791 89.4123 147.092 94.6385 170 97.3731C143.21 100.239 133.355 120.131 133.003 136.148C133.029 137.076 133.042 138.026 133.042 139C132.996 138.067 132.982 137.115 133.003 136.148C132.166 105.827 117.746 100.027 97 97.3731C129.97 97.3731 132.428 81.5895 135.786 60.0337Z" fill="#005321"/>
<path d="M38.7855 389.034L38.7908 389C38.7908 418.412 50.092 423.638 73 426.373C46.21 429.239 36.3546 449.131 36.0033 465.148C36.0289 466.076 36.0418 467.026 36.0418 468C35.9955 467.067 35.9821 466.115 36.0033 465.148C35.1657 434.827 20.7462 429.027 0 426.373C32.9703 426.373 35.4284 410.59 38.7855 389.034Z" fill="#C4C4C4"/>
<path d="M38.7855 389.034L38.7908 389C38.7908 418.412 50.092 423.638 73 426.373C46.21 429.239 36.3546 449.131 36.0033 465.148C36.0289 466.076 36.0418 467.026 36.0418 468C35.9955 467.067 35.9821 466.115 36.0033 465.148C35.1657 434.827 20.7462 429.027 0 426.373C32.9703 426.373 35.4284 410.59 38.7855 389.034Z" fill="#005321"/>
<path d="M524.786 378.034L524.791 378C524.791 407.412 536.092 412.638 559 415.373C532.21 418.239 522.355 438.131 522.003 454.148C522.029 455.076 522.042 456.026 522.042 457C521.996 456.067 521.982 455.115 522.003 454.148C521.166 423.827 506.746 418.027 486 415.373C518.97 415.373 521.428 399.59 524.786 378.034Z" fill="#C4C4C4"/>
<path d="M524.786 378.034L524.791 378C524.791 407.412 536.092 412.638 559 415.373C532.21 418.239 522.355 438.131 522.003 454.148C522.029 455.076 522.042 456.026 522.042 457C521.996 456.067 521.982 455.115 522.003 454.148C521.166 423.827 506.746 418.027 486 415.373C518.97 415.373 521.428 399.59 524.786 378.034Z" fill="#005321"/>
<circle cx="155.414" cy="729.639" r="22.4142" fill="#005321"/>
<circle cx="344.877" cy="705.181" r="19.8767" fill="#005321"/>
<circle cx="399.493" cy="671.798" r="16.4934" fill="#005321"/>
<circle cx="469.877" cy="678.335" r="19.8767" fill="#005321"/>
<path d="M435.841 731.454V712H436.687V731.454" stroke="#005321" stroke-width="11"/>
<circle cx="436.687" cy="728.916" r="12.6873" fill="#005321"/>
<path d="M528.841 707.454V688H529.687V707.454" stroke="#005321" stroke-width="11"/>
<circle cx="529.687" cy="704.916" r="12.6873" fill="#005321"/>
<path d="M212.841 716.454V697H213.687V716.454" stroke="#005321" stroke-width="11"/>
<circle cx="213.687" cy="713.916" r="12.6873" fill="#005321"/>
</svg>`,
  ]

  const uncountedIcons = [
    `<svg width="867" height="867" viewBox="0 0 867 867" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M421.298 867V0H446.307V867H421.298Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M867 446.308L0 446.308L-1.0932e-06 421.298L867 421.298L867 446.308Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M749.137 136.154L136.075 749.215L118.391 731.531L731.452 118.469L749.137 136.154Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M136.075 118.469L749.136 731.531L731.452 749.215L118.39 136.154L136.075 118.469Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M329.983 185.848L433.699 237.706L533.912 196.442L564.505 298.637L664.839 332.945L626.496 427.479L664.376 536.546L573.141 563.916L532.619 678.947L432.284 619.271L328.267 664.038L305.745 552.718L212.709 538.794L230.04 438.136L188.928 332.702L294.175 298.481L329.983 185.848ZM344.956 221.296L314.119 318.295L221.852 348.295L255.867 435.528L241.694 517.844L326.783 530.578L346.672 628.889L434.11 591.258L519.171 641.85L553.777 543.614L632.186 520.092L599.784 426.797L631.723 348.053L544.237 318.138L517.878 230.091L432.695 265.166L344.956 221.296Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M343.774 30.6536L361.459 12.9691L435.015 86.5252L508.571 12.9691L526.256 30.6536L435.015 121.894L343.774 30.6536Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M660.03 87.3991L684.95 89.5149L676.149 193.166L779.8 201.967L777.685 226.887L649.114 215.97L660.03 87.3991Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M834.529 342.562L852.214 360.247L778.658 433.803L852.214 507.359L834.529 525.044L743.289 433.803L834.529 342.562Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M785.238 662.871L782.929 687.774L679.349 678.172L669.748 781.752L644.845 779.443L656.755 650.961L785.238 662.871Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M525.043 844.223L507.359 861.907L433.803 788.351L360.247 861.907L342.562 844.223L433.803 752.982L525.043 844.223Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M210.833 784.286L185.839 783.394L189.546 679.437L85.5877 675.73L86.4788 650.736L215.431 655.334L210.833 784.286Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.0773 525.043L15.3928 507.359L88.9489 433.803L15.3928 360.247L33.0773 342.562L124.318 433.803L33.0773 525.043Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M86.0336 216.279V191.269L190.058 191.269V87.2452L215.067 87.2452L215.067 216.279L86.0336 216.279Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M717.834 573.116L142.863 324.104L152.802 301.154L727.773 550.167L717.834 573.116Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M574.857 155.825L317.976 727.324L295.165 717.07L552.046 145.572L574.857 155.825Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M325.756 143.174L568.078 720.996L545.014 730.668L302.692 152.846L325.756 143.174Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M726.032 319.635L155.422 578.482L145.09 555.707L715.701 296.859L726.032 319.635Z" fill="white"/>
</svg>`,
    `<svg width="874" height="867" viewBox="0 0 874 867" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M435.96 489.055C467.354 489.055 492.803 463.605 492.803 432.212C492.803 400.819 467.354 375.37 435.96 375.37C404.567 375.37 379.118 400.819 379.118 432.212C379.118 463.605 404.567 489.055 435.96 489.055ZM435.96 515.151C481.767 515.151 518.9 478.018 518.9 432.212C518.9 386.406 481.767 349.273 435.96 349.273C390.154 349.273 353.021 386.406 353.021 432.212C353.021 478.018 390.154 515.151 435.96 515.151Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M435.83 619.954C539.95 619.954 624.221 535.823 624.221 432.208C624.221 328.593 539.95 244.462 435.83 244.462C331.709 244.462 247.438 328.593 247.438 432.208C247.438 535.823 331.709 619.954 435.83 619.954ZM435.83 646.051C554.289 646.051 650.318 550.31 650.318 432.208C650.318 314.106 554.289 218.365 435.83 218.365C317.371 218.365 221.341 314.106 221.341 432.208C221.341 550.31 317.371 646.051 435.83 646.051Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M449.524 0V351.848H423.427V0H449.524Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M449.524 515.152V867H423.427V515.152H449.524Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M752.233 136.196L503.438 384.99L484.985 366.537L733.779 117.743L752.233 136.196Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M387.965 500.463L139.171 749.257L120.717 730.804L369.512 482.01L387.965 500.463Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M139.171 117.743L387.966 366.537L369.512 384.99L120.718 136.196L139.171 117.743Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M503.439 482.01L752.233 730.804L733.78 749.257L484.985 500.463L503.439 482.01Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.97534 420.451L354.824 420.451L354.824 446.548L2.97534 446.548L2.97534 420.451Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M518.127 420.451L869.975 420.451L869.975 446.548L518.127 446.548L518.127 420.451Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M361.713 87.6629L385.54 77.0168L438.194 194.861L487.817 77.2668L511.861 87.4129L438.878 260.364L361.713 87.6629Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M625.856 136.179L650.232 145.499L604.136 266.059L722.376 217.996L732.203 242.172L558.302 312.861L625.856 136.179Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M778.905 357.704L789.551 381.53L671.707 434.184L789.301 483.807L779.155 507.851L606.203 434.868L778.905 357.704Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M726.781 617.713L717.461 642.089L596.901 595.992L644.964 714.232L620.788 724.06L550.099 550.158L726.781 617.713Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M511.752 771.07L487.925 781.716L435.271 663.872L385.648 781.466L361.605 771.319L434.588 598.368L511.752 771.07Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M253.283 726.99L228.907 717.67L275.003 597.11L156.763 645.173L146.936 620.997L320.838 550.308L253.283 726.99Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M94.5869 510.065L83.9409 486.238L201.785 433.584L84.1908 383.961L94.337 359.917L267.288 432.9L94.5869 510.065Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M148.481 255.979L157.802 231.603L278.362 277.699L230.299 159.459L254.475 149.632L325.163 323.534L148.481 255.979Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M438.435 204.826L496.424 290.044L593.233 278.499L587.46 372.613L662.617 432.543L587.441 494.712L593.168 590.38L502.334 583.728L437.116 650.08L379.204 579.088L276.608 591.128L286.447 492.467L207.813 432.993L289.629 367.836L275.843 267.388L379.076 285.516L438.435 204.826ZM437.605 249.994L390.505 314.019L306.561 299.279L317.503 378.999L250.372 432.461L313.869 480.486L305.796 561.426L390.378 551.501L438.924 611.011L492.191 556.818L565.336 562.175L560.599 483.045L621.221 432.912L560.581 384.558L565.27 308.115L483.77 317.835L437.605 249.994Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M547.229 24.8691L436.437 72.4283L327.204 24.8413L337.626 0.916092L436.514 43.9957L536.935 0.888275L547.229 24.8691Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M800.494 219.102L688.523 174.39L644.932 63.5011L669.22 53.9535L708.682 154.339L810.172 194.866L800.494 219.102Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M850 544.511L802.441 433.719L850.028 324.486L873.953 334.908L830.874 433.796L873.981 534.217L850 544.511Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M633.625 788.503L678.337 676.533L789.226 632.942L798.774 657.23L698.388 696.692L657.861 798.181L633.625 788.503Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M327.268 833.888L438.059 786.329L547.293 833.916L536.87 857.841L437.983 814.762L337.562 857.869L327.268 833.888Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M73.4968 640.18L185.468 684.892L229.058 795.781L204.771 805.328L165.309 704.942L63.8189 664.416L73.4968 640.18Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9809 325.58L71.5401 436.371L23.953 545.605L0.0278161 535.182L43.1074 436.295L-9.16763e-06 335.874L23.9809 325.58Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M234.184 75.9299L189.472 187.901L78.5829 231.492L69.0353 207.204L169.421 167.742L209.948 66.252L234.184 75.9299Z" fill="white"/>
</svg>`,
    `<svg width="927" height="867" viewBox="0 0 927 867" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M437.433 867V0H463.313V867H437.433Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M819.325 661.457L68.481 227.957L81.4213 205.543L832.265 639.043L819.325 661.457Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M832.265 227.956L81.4214 661.457L68.4811 639.043L819.325 205.543L832.265 227.956Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M673.185 66.5818L598.09 360.104L573.017 353.689L627.42 141.047L458.897 288.587L441.849 269.114L673.185 66.5818Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M242.845 57.8017L459.495 269.597L441.404 288.104L284.451 134.668L327.963 354.383L302.576 359.411L242.845 57.8017Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.8899 435.428L301.976 335.743L311.177 359.933L126.242 430.274L350.105 486.055L343.847 511.168L39.8899 435.428Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M227.638 805.583L302.733 512.061L327.806 518.475L273.403 731.118L441.926 583.578L458.974 603.05L227.638 805.583Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M876.697 438.558L584.951 520.285L577.97 495.364L789.325 436.157L577.291 363.982L585.63 339.482L876.697 438.558Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M693.737 785.201L443.102 614.975L457.643 593.565L639.216 716.886L557.602 508.302L581.703 498.872L693.737 785.201Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M375.029 132.451L393.33 114.151L437.432 158.253V123.301H463.313V158.253L507.416 114.151L525.716 132.451L450.373 207.794L375.029 132.451Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M375.03 49.3852L393.331 31.0848L437.433 75.1875V40.235H463.314V75.1875L507.417 31.0848L525.717 49.3852L450.374 124.728L375.03 49.3852Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M673.012 218.592L698.011 225.291L681.868 285.536L712.138 268.06L725.078 290.473L694.809 307.949L755.054 324.092L748.356 349.091L645.435 321.513L673.012 218.592Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M744.949 177.059L769.948 183.758L753.805 244.003L784.075 226.527L797.015 248.94L766.745 266.416L826.99 282.559L820.292 307.558L717.371 279.98L744.949 177.059Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M743.163 516.397L749.861 541.395L689.616 557.538L719.885 575.014L706.945 597.427L676.675 579.951L692.818 640.197L667.819 646.895L640.242 543.974L743.163 516.397Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M815.1 557.93L821.798 582.928L761.553 599.071L791.822 616.547L778.882 638.961L748.612 621.484L764.755 681.73L739.756 688.428L712.179 585.507L815.1 557.93Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M525.716 741.039L507.415 759.339L463.313 715.236L463.313 750.189L437.432 750.189L437.432 715.236L393.33 759.339L375.029 741.039L450.373 665.695L525.716 741.039Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M525.716 824.104L507.415 842.405L463.313 798.302L463.313 833.254L437.432 833.254L437.432 798.302L393.33 842.405L375.029 824.104L450.373 748.761L525.716 824.104Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M232.397 645.597L207.398 638.899L223.541 578.653L193.271 596.13L180.331 573.716L210.601 556.24L150.355 540.097L157.054 515.099L259.974 542.676L232.397 645.597Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M160.46 687.13L135.462 680.432L151.604 620.186L121.335 637.663L108.394 615.249L138.664 597.773L78.4187 581.63L85.1171 556.632L188.038 584.209L160.46 687.13Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M157.054 350.389L150.356 325.39L210.601 309.247L180.331 291.771L193.272 269.358L223.541 286.834L207.399 226.589L232.397 219.89L259.975 322.811L157.054 350.389Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M85.1181 308.854L78.4197 283.855L138.665 267.713L108.395 250.237L121.336 227.823L151.605 245.3L135.463 185.054L160.461 178.356L188.039 281.277L85.1181 308.854Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M597.516 46.3322L622.514 39.6339L642.68 114.892L717.938 94.7267L724.636 119.725L624.379 146.589L597.516 46.3322Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M190.039 117.13L196.737 92.1309L271.995 112.296L292.16 37.0381L317.159 43.7365L290.295 143.993L190.039 117.13Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M73.3931 504.943L55.0927 486.643L110.186 431.55L55.0927 376.457L73.3931 358.157L146.786 431.55L73.3931 504.943Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M853.304 362.05L871.605 380.351L816.512 435.444L871.605 490.536L853.304 508.837L779.911 435.444L853.304 362.05Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M735.704 719.411L733.272 745.177L655.704 737.855L648.381 815.423L622.615 812.99L632.37 709.656L735.704 719.411Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M302.969 818.969L277.526 823.705L263.268 747.108L186.671 761.366L181.934 735.922L283.975 716.928L302.969 818.969Z" fill="white"/>
</svg>`,
    `<svg width="748" height="867" viewBox="0 0 748 867" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M361.808 378.473C355.484 380.553 350.743 384.72 346.969 389.154L332.838 377.127C337.772 371.329 345.193 364.403 356.01 360.846C367.009 357.228 380.35 357.473 396.336 363.946L389.371 381.146C376.73 376.027 367.95 376.453 361.808 378.473Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M492.789 378.151C499.4 379.911 504.122 383.656 507.399 387.651L521.746 375.883C516.502 369.49 508.627 363.165 497.562 360.219C486.475 357.268 473.078 357.947 457.219 364.036L463.871 381.36C476.845 376.378 486.2 376.398 492.789 378.151Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M497.635 565.845C523.737 587.226 552.964 593.394 563.351 593.846L574.961 594.352L554.843 667.968L548.173 668.342C514.992 670.2 489.928 657.03 472.367 640.018C455.016 623.209 444.826 602.544 440.662 588.296L458.474 583.092C461.87 594.712 470.558 612.429 485.278 626.69C498.587 639.583 516.681 649.557 540.531 649.948L551.183 610.968C534.601 607.856 509.12 599.24 485.876 580.201L497.635 565.845Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M561.983 499.998C563.805 509.596 562.207 518.81 560.087 524.661L559.903 525.169L559.661 525.652C546.785 551.381 522.631 567.901 498.897 578.166C475.076 588.468 450.485 593 434.834 594.027L434.656 594.038L434.478 594.043C369.07 595.814 319.404 562.843 302.135 545.433L301.347 544.638L300.771 543.679C290.862 527.195 291.072 511.634 295.87 499.054C300.495 486.931 309.183 477.994 315.988 473.277L326.559 488.528C322.207 491.544 316.253 497.686 313.208 505.668C310.418 512.981 309.879 522.225 316.114 533.16C331.36 547.992 375.683 577.009 433.796 575.498C447.619 574.569 469.992 570.449 491.531 561.134C513.064 551.821 532.599 537.834 542.806 517.863C543.922 514.509 544.798 508.969 543.752 503.459C542.722 498.033 539.896 492.729 533.233 488.998L542.302 472.808C554.465 479.621 560.093 490.046 561.983 499.998Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M623.846 706.548C632.999 671.851 631.439 590.692 556.417 531.49L544.922 546.057C613.202 599.939 613.634 673.28 605.789 702.243L605.642 702.788L605.561 703.347C602.017 727.983 579.439 788.935 517.904 827.529C488.039 846.26 452.942 850.399 420.557 847.566C388.318 844.746 359.648 835.081 343.303 827.159C321.362 814.871 271.398 774.052 250.119 710.641C240.006 680.508 246.203 646.976 259.114 616.391C271.977 585.918 290.969 559.682 304.366 545.035L290.673 532.511C276.059 548.489 255.818 576.483 242.018 609.174C228.266 641.754 220.37 680.319 232.526 716.545C255.713 785.639 309.759 829.737 334.501 843.498L334.721 843.62L334.948 843.731C353.13 852.587 384.112 863.005 418.94 866.052C453.773 869.099 493.342 864.838 527.763 843.25C594.371 801.475 619.449 735.748 623.846 706.548Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M291.356 428.28C281.388 377.12 307.042 333.444 321.368 317.602L335.131 330.049C323.243 343.195 301.084 381.174 309.57 424.731C318.179 468.914 348.85 496.537 362.298 504.415L362.547 504.561L362.787 504.722C379.514 515.972 424.602 533.978 468.916 515.88C514.188 497.392 534.647 461.021 539.03 446.372L539.089 446.174L539.157 445.979C542.863 435.343 546.584 416.199 545.047 394.592C543.516 373.075 536.821 349.676 520.324 329.741L534.62 317.91C554.193 341.562 561.828 368.979 563.557 393.275C565.27 417.361 561.228 438.933 556.747 451.893C550.888 471.207 526.947 512.225 475.932 533.06C423.989 554.272 372.467 533.485 352.668 520.279C335.619 510.181 301.154 478.565 291.356 428.28Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M649.189 554.606C659.691 547.212 673.794 543.232 691.019 548.302C707.363 553.112 717.385 561.608 722.749 573.2C727.755 584.014 728.122 596.465 728.122 607.628V609.483L727.409 611.195C724.361 618.515 717.362 624.708 710.156 629.788C702.587 635.123 693.161 640.325 683.266 645.226C668.895 652.344 652.722 659.209 638.787 665.125C633.613 667.321 628.748 669.386 624.398 671.285L616.975 654.278C621.655 652.235 626.739 650.077 632.052 647.821C645.845 641.967 661.184 635.455 675.03 628.597C684.577 623.869 693.031 619.156 699.465 614.621C705.019 610.706 708.123 607.564 709.557 605.381C709.477 595.072 708.782 587.201 705.909 580.994C703.191 575.12 697.99 569.697 685.779 566.103C674.45 562.769 666.156 565.354 659.871 569.779C653.205 574.472 648.489 581.519 645.829 586.995L644.408 589.921L609.45 606.552L601.479 589.795L630.68 575.903C634.385 569.142 640.412 560.784 649.189 554.606Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M207.431 553.425C196.928 546.031 182.826 542.051 165.601 547.121C149.257 551.931 139.235 560.427 133.87 572.019C128.865 582.833 128.498 595.284 128.498 606.447V608.302L129.211 610.014C132.259 617.334 139.258 623.527 146.464 628.607C154.033 633.942 163.458 639.144 173.354 644.045C187.725 651.163 203.898 658.029 217.833 663.944C223.007 666.14 227.872 668.205 232.222 670.104L239.645 653.097C234.965 651.054 229.881 648.896 224.567 646.64C210.775 640.786 195.436 634.274 181.59 627.417C172.043 622.688 163.589 617.975 157.155 613.44C151.601 609.525 148.497 606.383 147.063 604.2C147.143 593.891 147.838 586.02 150.711 579.813C153.429 573.939 158.63 568.516 170.84 564.922C182.17 561.588 190.464 564.174 196.749 568.598C203.415 573.291 208.131 580.338 210.791 585.814L212.212 588.74L247.169 605.371L255.141 588.614L225.94 574.722C222.235 567.961 216.208 559.603 207.431 553.425Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M429.712 397.849L432.939 400.41C446.552 411.208 451.437 423.411 448.661 435.19C446.17 445.763 438.058 453.201 432.045 456.911L429.082 458.739L332.114 442.583C316.033 439.904 316.032 416.789 332.114 414.11L429.712 397.849ZM359.578 428.347L424.902 439.23C427.614 436.946 429.89 433.942 430.6 430.933C431.169 428.515 431.235 423.967 424.421 417.543L359.578 428.347Z" fill="#2B7ECA"/>
<path d="M641.919 0.0668925L641.93 0C641.93 58.3405 664.273 68.7067 709.565 74.131C656.598 79.815 637.113 119.272 636.419 151.043C636.469 152.883 636.495 154.768 636.495 156.7C636.403 154.848 636.377 152.96 636.419 151.043C634.763 90.8994 606.254 79.3942 565.236 74.131C630.422 74.131 635.282 42.8237 641.919 0.0668925Z" fill="#C4C4C4"/>
<path d="M641.919 0.0668925L641.93 0C641.93 58.3405 664.273 68.7067 709.565 74.131C656.598 79.815 637.113 119.272 636.419 151.043C636.469 152.883 636.495 154.768 636.495 156.7C636.403 154.848 636.377 152.96 636.419 151.043C634.763 90.8994 606.254 79.3942 565.236 74.131C630.422 74.131 635.282 42.8237 641.919 0.0668925Z" fill="#2B7ECA"/>
<path d="M636.663 447.446L636.667 447.418C636.667 471.215 645.764 475.444 664.204 477.656C642.64 479.975 634.706 496.069 634.423 509.028C634.444 509.779 634.455 510.547 634.455 511.335C634.417 510.58 634.406 509.81 634.423 509.028C633.749 484.496 622.142 479.803 605.442 477.656C631.982 477.656 633.961 464.886 636.663 447.446Z" fill="#C4C4C4"/>
<path d="M636.663 447.446L636.667 447.418C636.667 471.215 645.764 475.444 664.204 477.656C642.64 479.975 634.706 496.069 634.423 509.028C634.444 509.779 634.455 510.547 634.455 511.335C634.417 510.58 634.406 509.81 634.423 509.028C633.749 484.496 622.142 479.803 605.442 477.656C631.982 477.656 633.961 464.886 636.663 447.446Z" fill="#2B7ECA"/>
<path d="M215.018 462.91L215.022 462.882C215.022 486.679 224.119 490.907 242.559 493.12C220.994 495.438 213.061 511.533 212.778 524.492C212.799 525.242 212.809 526.011 212.809 526.799C212.772 526.044 212.761 525.274 212.778 524.492C212.104 499.96 200.497 495.267 183.797 493.12C210.336 493.12 212.315 480.35 215.018 462.91Z" fill="#C4C4C4"/>
<path d="M215.018 462.91L215.022 462.882C215.022 486.679 224.119 490.907 242.559 493.12C220.994 495.438 213.061 511.533 212.778 524.492C212.799 525.242 212.809 526.011 212.809 526.799C212.772 526.044 212.761 525.274 212.778 524.492C212.104 499.96 200.497 495.267 183.797 493.12C210.336 493.12 212.315 480.35 215.018 462.91Z" fill="#2B7ECA"/>
<path d="M252.131 374.251L252.135 374.223C252.135 398.02 261.232 402.248 279.672 404.461C258.107 406.779 250.174 422.874 249.891 435.833C249.912 436.583 249.922 437.352 249.922 438.14C249.885 437.385 249.874 436.615 249.891 435.833C249.217 411.301 237.61 406.608 220.91 404.461C247.45 404.461 249.428 391.691 252.131 374.251Z" fill="#C4C4C4"/>
<path d="M252.131 374.251L252.135 374.223C252.135 398.02 261.232 402.248 279.672 404.461C258.107 406.779 250.174 422.874 249.891 435.833C249.912 436.583 249.922 437.352 249.922 438.14C249.885 437.385 249.874 436.615 249.891 435.833C249.217 411.301 237.61 406.608 220.91 404.461C247.45 404.461 249.428 391.691 252.131 374.251Z" fill="#2B7ECA"/>
<path d="M720.167 307.241L720.172 307.214C720.172 331.01 729.269 335.239 747.709 337.451C726.144 339.77 718.211 355.864 717.928 368.823C717.949 369.574 717.959 370.343 717.959 371.131C717.922 370.375 717.911 369.605 717.928 368.823C717.254 344.291 705.647 339.598 688.947 337.451C715.486 337.451 717.465 324.681 720.167 307.241Z" fill="#C4C4C4"/>
<path d="M720.167 307.241L720.172 307.214C720.172 331.01 729.269 335.239 747.709 337.451C726.144 339.77 718.211 355.864 717.928 368.823C717.949 369.574 717.959 370.343 717.959 371.131C717.922 370.375 717.911 369.605 717.928 368.823C717.254 344.291 705.647 339.598 688.947 337.451C715.486 337.451 717.465 324.681 720.167 307.241Z" fill="#2B7ECA"/>
<path d="M579.223 190.759L579.229 190.72C579.229 224.88 592.316 230.949 618.844 234.125C587.821 237.454 576.408 260.557 576.001 279.16C576.031 280.237 576.046 281.341 576.046 282.472C575.992 281.388 575.977 280.282 576.001 279.16C575.031 243.944 558.333 237.207 534.309 234.125C572.489 234.125 575.336 215.794 579.223 190.759Z" fill="#C4C4C4"/>
<path d="M579.223 190.759L579.229 190.72C579.229 224.88 592.316 230.949 618.844 234.125C587.821 237.454 576.408 260.557 576.001 279.16C576.031 280.237 576.046 281.341 576.046 282.472C575.992 281.388 575.977 280.282 576.001 279.16C575.031 243.944 558.333 237.207 534.309 234.125C572.489 234.125 575.336 215.794 579.223 190.759Z" fill="#2B7ECA"/>
<path d="M289.568 80.4587L289.576 80.4116C289.576 121.48 305.376 128.778 337.403 132.596C299.949 136.597 286.17 164.373 285.679 186.738C285.714 188.033 285.732 189.36 285.732 190.72C285.668 189.417 285.649 188.087 285.679 186.738C284.508 144.4 264.348 136.301 235.343 132.596C281.438 132.596 284.875 110.557 289.568 80.4587Z" fill="#C4C4C4"/>
<path d="M289.568 80.4587L289.576 80.4116C289.576 121.48 305.376 128.778 337.403 132.596C299.949 136.597 286.17 164.373 285.679 186.738C285.714 188.033 285.732 189.36 285.732 190.72C285.668 189.417 285.649 188.087 285.679 186.738C284.508 144.4 264.348 136.301 235.343 132.596C281.438 132.596 284.875 110.557 289.568 80.4587Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M435.699 500.825C406.341 502.755 378.003 491.752 364.281 479.575L376.598 465.696C386.27 474.279 409.602 483.944 434.481 482.308C458.427 480.734 483.626 468.73 498.952 434.045L515.926 441.545C497.592 483.036 465.989 498.833 435.699 500.825Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M396.148 169.72C401.752 172.518 411.123 175.37 426.147 175.37C439.275 175.37 448.581 172.451 454.745 169.415C442.958 164.036 433.588 161.775 424.841 161.856C416.042 161.938 407.091 164.395 396.148 169.72ZM468.503 182.972C467.756 183.439 466.967 183.909 466.138 184.377C457.389 189.314 444.298 193.927 426.147 193.927C405.884 193.927 392.587 189.427 384.047 184.217C383.875 184.112 383.705 184.007 383.537 183.902L332.897 311.132C353.048 318.581 383.184 326.516 416.301 329.064C451.831 331.796 489.947 328.266 522.76 312.112L468.503 182.972ZM424.668 143.301C441.13 143.148 457.352 149.024 476.768 159.839L479.567 161.397L546.353 320.36L539.169 324.423C500.406 346.341 455.092 350.659 414.878 347.565C374.61 344.468 338.475 333.87 317.225 324.893L308.855 321.357L372.464 161.543L375.225 159.932C392.842 149.646 408.179 143.454 424.668 143.301Z" fill="#2B7ECA"/>
<path d="M428.31 634.437C428.31 648.134 416.942 659.238 402.918 659.238C388.894 659.238 377.526 648.134 377.526 634.437C377.526 620.739 388.894 609.635 402.918 609.635C416.942 609.635 428.31 620.739 428.31 634.437Z" fill="#2B7ECA"/>
<path d="M427.129 710.613C427.129 724.637 415.761 736.005 401.737 736.005C387.713 736.005 376.345 724.637 376.345 710.613C376.345 696.589 387.713 685.221 401.737 685.221C415.761 685.221 427.129 696.589 427.129 710.613Z" fill="#2B7ECA"/>
<path d="M428.31 799.191C428.31 813.214 416.942 824.583 402.918 824.583C388.894 824.583 377.526 813.214 377.526 799.191C377.526 785.167 388.894 773.798 402.918 773.798C416.942 773.798 428.31 785.167 428.31 799.191Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M181.253 634.646L188.34 701.965L169.885 703.908L162.799 636.589L181.253 634.646Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M151.703 406.501L170.6 554.13L152.193 556.486L133.297 408.857L151.703 406.501Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M51.2634 240.091C51.8993 243.212 52.7501 247.299 53.7958 252.123C56.3038 263.694 59.9248 279.469 64.3805 296.317C68.8424 313.188 74.1071 331.003 79.8877 346.698C85.7498 362.613 91.8501 375.518 97.7307 383.163C108.817 397.578 125.298 401.8 140.616 398.89C156.327 395.904 169.042 385.803 172.967 373.665C175.224 366.686 177.181 353.641 178.749 337.124C180.29 320.894 181.386 302.158 182.161 284.327C182.935 266.514 183.385 249.693 183.641 237.319C183.752 231.987 183.826 227.485 183.875 224.09C157.453 217.125 129.946 218.178 105.592 222.745C83.1562 226.951 63.8657 234.052 51.2634 240.091ZM193.238 217.149L202.516 217.222L202.57 210.378L196.047 208.306C163.841 198.077 130.476 199.199 102.172 204.506C73.8772 209.811 49.9904 219.419 36.3469 226.878L30.4258 230.115L31.6813 236.745L40.7975 235.019C31.6813 236.745 31.6815 236.746 31.6818 236.748L31.6999 236.843L31.7511 237.11C31.796 237.344 31.8623 237.688 31.9495 238.135C32.1239 239.029 32.382 240.338 32.7192 242.012C33.3937 245.361 34.3857 250.173 35.6604 256.054C38.2083 267.809 41.8938 283.869 46.4408 301.061C50.9814 318.23 56.4154 336.66 62.4748 353.111C68.4528 369.341 75.334 384.482 83.0218 394.477C99.0716 415.344 123.082 421.11 144.08 417.12C164.685 413.204 184.111 399.515 190.623 379.374C193.585 370.215 195.667 355.269 197.223 338.878C198.806 322.2 199.919 303.111 200.7 285.133C201.482 267.138 201.936 250.169 202.194 237.704C202.323 231.469 202.404 226.356 202.452 222.799C202.476 221.02 202.492 219.629 202.502 218.682C202.507 218.208 202.51 217.845 202.513 217.6L202.516 217.225C202.516 217.223 202.516 217.222 193.238 217.149Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M119.058 338.691C99.0946 342.396 82.0772 348.522 72.7694 352.881L64.9004 336.075C75.6394 331.047 94.1634 324.438 115.672 320.446C137.14 316.461 162.278 314.952 185.902 320.76L181.471 338.78C161.326 333.827 139.061 334.978 119.058 338.691Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M89.7273 265.231L80.8312 213.128L99.123 210.005L108.019 262.108L89.7273 265.231Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M138.211 288.954L137.71 212.607L156.266 212.485L156.767 288.833L138.211 288.954Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M586.012 373.127C575.854 341.927 543.655 311.667 494.038 309.474L494.857 290.936C552.122 293.467 591.081 328.754 603.657 367.382C609.936 386.666 609.733 407.186 601.295 424.721C592.756 442.465 576.286 456.089 552.22 462.146L547.691 444.151C567.028 439.284 578.682 428.917 584.574 416.674C590.566 404.222 591.101 388.757 586.012 373.127Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M510.057 274.856L479.045 283.977L478.734 284.004C478.685 284.138 478.632 284.302 478.577 284.501C477.939 286.795 477.818 290.875 478.616 296.665C480.17 307.944 484.603 321.72 488.306 331.024L471.064 337.885C467.09 327.899 462.075 312.563 460.233 299.198C459.333 292.666 459.028 285.54 460.697 279.533C461.561 276.426 463.097 273.086 465.861 270.371C468.507 267.773 471.812 266.212 475.454 265.691L504.821 257.054L510.057 274.856Z" fill="#2B7ECA"/>
</svg>`,
    `<svg width="686" height="868" viewBox="0 0 686 868" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M376.762 517.592C397.142 513.832 414.304 506.104 423.505 500.423L438.661 516.161C417.601 547.561 404.935 602.794 398.105 661.063C391.344 718.735 390.523 777.156 391.843 813.2L392.104 820.341L299.735 867.242L118.506 847.096L122.269 834.304C158.547 710.993 95.2332 624.103 60.2325 596.66L42.7471 582.951L309.064 510.024L312.711 511.646C333.733 520.999 356.429 521.343 376.762 517.592ZM300.733 535.485L89.6498 593.287C128.012 632.93 174.83 716.326 147.193 827.791L289.088 843.564C297.272 808.338 306.757 754.828 310.953 698.458C315.248 640.757 313.896 581.293 300.733 535.485ZM313.903 834.975L369.275 806.859C368.274 769.622 369.415 713.78 375.9 658.46C381.11 614.013 389.9 568.584 404.528 533.425C397.237 535.871 389.256 538.021 380.818 539.577C363.747 542.727 344.352 543.526 324.822 539.095C336.632 587.15 337.313 645.505 333.248 700.117C329.469 750.891 321.507 799.362 313.903 834.975Z" fill="#2B7ECA"/>
<path d="M191.324 838.785C243.382 684.101 186.318 591.701 151.279 564.837L221 548.93C276.776 583.995 246.862 761.255 224.933 845.501L191.324 838.785Z" fill="#2B7ECA"/>
<path d="M358.706 826.699C353.924 616.315 378.515 538.809 391.408 526.354C378.468 533.755 359.292 535.843 351.322 535.962C355.26 580.088 346.165 753.866 341.125 835.239L358.706 826.699Z" fill="#2B7ECA"/>
<path d="M191.594 0.0784798L191.606 0C191.606 68.4381 217.757 80.5986 270.764 86.9617C208.774 93.6295 185.969 139.915 185.156 177.186C185.216 179.344 185.245 181.555 185.245 183.821C185.138 181.65 185.107 179.434 185.156 177.186C183.218 106.632 149.853 93.1359 101.847 86.9617C178.138 86.9617 183.826 50.2357 191.594 0.0784798Z" fill="#C4C4C4"/>
<path d="M191.594 0.0784798L191.606 0C191.606 68.4381 217.757 80.5986 270.764 86.9617C208.774 93.6295 185.969 139.915 185.156 177.186C185.216 179.344 185.245 181.555 185.245 183.821C185.138 181.65 185.107 179.434 185.156 177.186C183.218 106.632 149.853 93.1359 101.847 86.9617C178.138 86.9617 183.826 50.2357 191.594 0.0784798Z" fill="#2B7ECA"/>
<path d="M171.175 283.236L171.183 283.184C171.183 328.501 188.488 336.554 223.566 340.767C182.544 345.182 167.452 375.831 166.914 400.51C166.954 401.939 166.973 403.403 166.973 404.904C166.902 403.466 166.882 401.999 166.914 400.51C165.632 353.792 143.551 344.855 111.783 340.767C162.27 340.767 166.034 316.449 171.175 283.236Z" fill="#C4C4C4"/>
<path d="M171.175 283.236L171.183 283.184C171.183 328.501 188.488 336.554 223.566 340.767C182.544 345.182 167.452 375.831 166.914 400.51C166.954 401.939 166.973 403.403 166.973 404.904C166.902 403.466 166.882 401.999 166.914 400.51C165.632 353.792 143.551 344.855 111.783 340.767C162.27 340.767 166.034 316.449 171.175 283.236Z" fill="#2B7ECA"/>
<path d="M609.614 349.064L609.622 349.012C609.622 394.329 626.927 402.382 662.005 406.595C620.983 411.01 605.891 441.659 605.353 466.338C605.392 467.767 605.412 469.231 605.412 470.732C605.341 469.294 605.321 467.827 605.353 466.338C604.071 419.62 581.99 410.683 550.222 406.595C600.709 406.595 604.473 382.276 609.614 349.064Z" fill="#C4C4C4"/>
<path d="M609.614 349.064L609.622 349.012C609.622 394.329 626.927 402.382 662.005 406.595C620.983 411.01 605.891 441.659 605.353 466.338C605.392 467.767 605.412 469.231 605.412 470.732C605.341 469.294 605.321 467.827 605.353 466.338C604.071 419.62 581.99 410.683 550.222 406.595C600.709 406.595 604.473 382.276 609.614 349.064Z" fill="#2B7ECA"/>
<path d="M70.2185 213.668L70.2243 213.63C70.2243 246.462 82.7226 252.296 108.057 255.348C78.4294 258.547 67.5301 280.752 67.1416 298.632C67.1699 299.667 67.1842 300.728 67.1842 301.815C67.133 300.773 67.1182 299.71 67.1416 298.632C66.2153 264.785 50.2684 258.31 27.3247 255.348C63.7873 255.348 66.5058 237.73 70.2185 213.668Z" fill="#C4C4C4"/>
<path d="M70.2185 213.668L70.2243 213.63C70.2243 246.462 82.7226 252.296 108.057 255.348C78.4294 258.547 67.5301 280.752 67.1416 298.632C67.1699 299.667 67.1842 300.728 67.1842 301.815C67.133 300.773 67.1182 299.71 67.1416 298.632C66.2153 264.785 50.2684 258.31 27.3247 255.348C63.7873 255.348 66.5058 237.73 70.2185 213.668Z" fill="#2B7ECA"/>
<path d="M574.097 525.413L574.101 525.381C574.101 553.127 584.677 558.056 606.114 560.636C581.044 563.339 571.822 582.104 571.493 597.214C571.517 598.088 571.529 598.985 571.529 599.904C571.486 599.023 571.473 598.125 571.493 597.214C570.709 568.611 557.216 563.139 537.802 560.636C568.655 560.636 570.955 545.747 574.097 525.413Z" fill="#C4C4C4"/>
<path d="M574.097 525.413L574.101 525.381C574.101 553.127 584.677 558.056 606.114 560.636C581.044 563.339 571.822 582.104 571.493 597.214C571.517 598.088 571.529 598.985 571.529 599.904C571.486 599.023 571.473 598.125 571.493 597.214C570.709 568.611 557.216 563.139 537.802 560.636C568.655 560.636 570.955 545.747 574.097 525.413Z" fill="#2B7ECA"/>
<path d="M609.494 243.462L609.497 243.439C609.497 263.323 616.996 266.856 632.197 268.705C614.42 270.642 607.881 284.09 607.647 294.919C607.664 295.546 607.673 296.188 607.673 296.847C607.642 296.216 607.633 295.572 607.647 294.919C607.092 274.42 597.524 270.499 583.757 268.705C605.635 268.705 607.266 258.035 609.494 243.462Z" fill="#C4C4C4"/>
<path d="M609.494 243.462L609.497 243.439C609.497 263.323 616.996 266.856 632.197 268.705C614.42 270.642 607.881 284.09 607.647 294.919C607.664 295.546 607.673 296.188 607.673 296.847C607.642 296.216 607.633 295.572 607.647 294.919C607.092 274.42 597.524 270.499 583.757 268.705C605.635 268.705 607.266 258.035 609.494 243.462Z" fill="#2B7ECA"/>
<path d="M662.901 301.838L662.904 301.815C662.904 321.699 670.403 325.232 685.604 327.081C667.827 329.018 661.288 342.466 661.055 353.295C661.072 353.922 661.08 354.564 661.08 355.222C661.05 354.591 661.041 353.948 661.055 353.295C660.499 332.796 650.931 328.875 637.165 327.081C659.042 327.081 660.673 316.41 662.901 301.838Z" fill="#C4C4C4"/>
<path d="M662.901 301.838L662.904 301.815C662.904 321.699 670.403 325.232 685.604 327.081C667.827 329.018 661.288 342.466 661.055 353.295C661.072 353.922 661.08 354.564 661.08 355.222C661.05 354.591 661.041 353.948 661.055 353.295C660.499 332.796 650.931 328.875 637.165 327.081C659.042 327.081 660.673 316.41 662.901 301.838Z" fill="#2B7ECA"/>
<path d="M30.1825 508.182C50.1862 580.087 162.257 551.785 215.792 528.645C116.417 532.956 91.6481 512.583 91.6852 501.858C81.9568 488.081 82.0885 465.806 121.45 453.346C160.811 440.887 192.797 498.555 212.757 521.671C176.29 429.477 109.376 399.721 88.2649 404.529C60.5692 409.12 10.1787 436.277 30.1825 508.182Z" fill="#2B7ECA"/>
<path d="M203.993 406.842C189.395 421.572 197.331 483.946 215.868 511.565C215.868 489.93 211.427 462.081 218.185 448.271C228.323 427.557 242.033 421.707 250.915 421.515C258.543 421.994 274.203 428.017 275.825 448.271C277.447 468.525 242.129 504.661 224.268 520.196C284.282 492.807 305.658 455.08 308.844 439.64C310.196 428.707 309.423 404.368 295.521 394.471C281.618 384.574 256.708 383.25 245.991 383.826C238.074 385.36 218.591 392.112 203.993 406.842Z" fill="#2B7ECA"/>
<path d="M252.873 518.944C252.873 533.554 241.232 545.398 226.872 545.398C212.512 545.398 181.039 559.298 181.039 531.947C181.039 517.336 212.512 492.489 226.872 492.489C241.232 492.489 252.873 504.333 252.873 518.944Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M590.043 213.267L569.811 241.434C552.582 265.422 539.836 301.018 530.93 344.011C522.067 386.798 517.2 435.925 515.114 486.205C510.94 586.768 517.926 690.883 525.654 755.929L527.409 770.707L512.727 768.276C453.112 758.406 405.437 772.556 390.212 780.094L380.293 760.058C398.138 751.224 444.203 737.818 501.829 744.21C494.685 677.931 488.839 580.159 492.776 485.278C494.893 434.281 499.845 383.855 509.038 339.476C515.727 307.185 524.766 277.56 536.926 253.126C486.624 264.985 398.512 276.39 299.247 263.334C310.405 289.403 323.232 325.212 332.688 364.443C344.67 414.158 351.518 470.496 341.832 519.786L319.895 515.475C328.681 470.766 322.616 418.071 310.953 369.681C299.329 321.453 282.423 278.624 270.528 254.17L261.085 234.756L282.389 238.249C408.086 258.862 518.542 237.303 557.17 224.318L590.043 213.267Z" fill="#2B7ECA"/>
<path d="M391.409 263.134C411.201 327.169 407.543 461.19 403.241 520.197L437.588 533.537C433.996 423.734 443.399 300.761 450.928 258.516L391.409 263.134Z" fill="#2B7ECA"/>
<path d="M448.362 752.63C418.089 749.552 409.195 756.393 402.183 759.814C402.183 646.932 404.749 613.58 402.183 569.967L424.759 519.17H437.074L448.362 752.63Z" fill="#2B7ECA"/>
<path d="M454.52 241.584C454.52 256.319 427.679 256.12 411.527 256.12C395.374 256.12 384.333 233.4 384.333 218.664C384.333 203.928 403.477 211.311 419.629 211.311C435.782 211.311 454.52 226.848 454.52 241.584Z" fill="#2B7ECA"/>
<path d="M304.183 148.2C279.218 214.443 360.576 238.525 401.383 241.071C381.38 225.26 352.857 200.044 349.336 192.326C345.815 184.609 344.576 171.972 349.336 164.106C356.377 155.553 359.953 155.896 377.556 155.896C395.159 155.896 409.585 189.046 413.986 211.824C422.627 163.267 405.917 135.756 394.982 124.501C377.112 105.609 329.147 81.9561 304.183 148.2Z" fill="#2B7ECA"/>
<path d="M569.967 183.603C542.875 227.114 475.214 234.229 444.771 232.348C498.133 208.745 495.054 208.232 519.683 190.274C539.386 175.907 546.706 148.371 547.903 136.398C544.654 117.756 528.508 87.3461 489.923 114.848C451.338 142.35 457.085 166.671 424.247 214.902L427.325 169.237C429.036 152.304 460.574 82.0099 495.054 67.6431C529.535 53.2763 555.942 70.2086 564.836 80.4706C577.834 96.7187 597.058 140.093 569.967 183.603Z" fill="#2B7ECA"/>
<path d="M385.251 319.062C385.251 332.097 374.684 342.664 361.649 342.664C348.614 342.664 338.046 332.097 338.046 319.062C338.046 306.026 348.614 295.459 361.649 295.459C374.684 295.459 385.251 306.026 385.251 319.062Z" fill="#2B7ECA"/>
<path d="M515.58 287.249C515.58 296.317 508.228 303.669 499.16 303.669C490.092 303.669 482.741 296.317 482.741 287.249C482.741 278.181 490.092 270.83 499.16 270.83C508.228 270.83 515.58 278.181 515.58 287.249Z" fill="#2B7ECA"/>
<path d="M499.159 344.203C499.159 356.389 489.281 366.267 477.096 366.267C464.911 366.267 455.033 356.389 455.033 344.203C455.033 332.018 464.911 322.14 477.096 322.14C489.281 322.14 499.159 332.018 499.159 344.203Z" fill="#2B7ECA"/>
<path d="M397.566 357.031C397.566 363.832 392.052 369.345 385.251 369.345C378.45 369.345 372.937 363.832 372.937 357.031C372.937 350.23 378.45 344.717 385.251 344.717C392.052 344.717 397.566 350.23 397.566 357.031Z" fill="#2B7ECA"/>
<path d="M341.125 283.145C341.125 289.946 335.612 295.459 328.81 295.459C322.009 295.459 316.496 289.946 316.496 283.145C316.496 276.344 322.009 270.83 328.81 270.83C335.612 270.83 341.125 276.344 341.125 283.145Z" fill="#2B7ECA"/>
<path d="M489.924 408.341C489.924 415.142 484.411 420.655 477.61 420.655C470.809 420.655 465.295 415.142 465.295 408.341C465.295 401.54 470.809 396.026 477.61 396.026C484.411 396.026 489.924 401.54 489.924 408.341Z" fill="#2B7ECA"/>
<path d="M473.505 452.467C473.505 459.268 467.991 464.782 461.19 464.782C454.389 464.782 448.876 459.268 448.876 452.467C448.876 445.666 454.389 440.153 461.19 440.153C467.991 440.153 473.505 445.666 473.505 452.467Z" fill="#2B7ECA"/>
<path d="M485.819 497.62C485.819 504.421 480.305 509.934 473.504 509.934C466.703 509.934 461.19 504.421 461.19 497.62C461.19 490.819 466.703 485.306 473.504 485.306C480.305 485.306 485.819 490.819 485.819 497.62Z" fill="#2B7ECA"/>
<path d="M473.505 608.449C473.505 615.25 467.991 620.764 461.19 620.764C454.389 620.764 448.876 615.25 448.876 608.449C448.876 601.648 454.389 596.135 461.19 596.135C467.991 596.135 473.505 601.648 473.505 608.449Z" fill="#2B7ECA"/>
<path d="M485.819 653.602C485.819 660.403 480.305 665.917 473.504 665.917C466.703 665.917 461.19 660.403 461.19 653.602C461.19 646.801 466.703 641.288 473.504 641.288C480.305 641.288 485.819 646.801 485.819 653.602Z" fill="#2B7ECA"/>
<path d="M489.923 713.122C489.923 722.756 482.113 730.567 472.478 730.567C462.843 730.567 455.033 722.756 455.033 713.122C455.033 703.487 462.843 695.676 472.478 695.676C482.113 695.676 489.923 703.487 489.923 713.122Z" fill="#2B7ECA"/>
<path d="M485.819 558.166C485.819 568.367 477.549 576.637 467.348 576.637C457.146 576.637 448.876 568.367 448.876 558.166C448.876 547.964 457.146 539.694 467.348 539.694C477.549 539.694 485.819 547.964 485.819 558.166Z" fill="#2B7ECA"/>
<path d="M397.566 452.467C397.566 459.268 392.052 464.782 385.251 464.782C378.45 464.782 372.937 459.268 372.937 452.467C372.937 445.666 378.45 440.153 385.251 440.153C392.052 440.153 397.566 445.666 397.566 452.467Z" fill="#2B7ECA"/>
<path d="M382.173 496.594C382.173 503.395 376.659 508.908 369.858 508.908C363.057 508.908 357.544 503.395 357.544 496.594C357.544 489.793 363.057 484.279 369.858 484.279C376.659 484.279 382.173 489.793 382.173 496.594Z" fill="#2B7ECA"/>
<path d="M385.252 407.315C385.252 417.516 376.982 425.786 366.78 425.786C356.579 425.786 348.309 417.516 348.309 407.315C348.309 397.113 356.579 388.843 366.78 388.843C376.982 388.843 385.252 397.113 385.252 407.315Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M154.953 835.997C191.035 704.5 126.698 614.036 92.8945 584.335L101.912 574.071C138.574 606.284 205.933 701.835 168.129 839.612L154.953 835.997Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M181.168 667.511C171.274 622.911 152.69 591.882 136.508 577.664L145.526 567.401C164.577 584.14 184.218 618.172 194.506 664.552C204.843 711.151 205.873 770.73 187.113 839.099L173.938 835.484C192.121 769.216 191.013 711.894 181.168 667.511Z" fill="#2B7ECA"/>
</svg>`,
    `<svg width="740" height="868" viewBox="0 0 740 868" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M404.512 482.426C363.606 477.961 309.087 488.875 286.865 494.969L283.47 482.591C306.173 476.365 362.567 464.936 405.905 469.666L404.512 482.426Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M367.015 536.77C332.36 507.673 311.436 468.817 305.162 452.659L317.127 448.013C322.815 462.66 342.636 499.54 375.268 526.939L367.015 536.77Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M430.287 400.315C373.589 408.847 334.282 429.866 322.247 438.797L314.598 428.49C328.462 418.201 369.78 396.44 428.376 387.622L430.287 400.315Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M424.49 452.978C381.29 438.284 339.77 406.535 324.306 392.454L332.947 382.963C347.736 396.428 387.744 426.922 428.623 440.826L424.49 452.978Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M304.157 611.989C291.674 566.161 267.034 531.391 257.283 520.737L266.751 512.071C277.728 524.064 303.464 560.608 316.542 608.616L304.157 611.989Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M401.89 223.908L421.039 407.837L420.856 408.774C415.562 436.036 395.605 473.617 373.518 508.867C351.262 544.386 326.227 578.487 309.932 599.081L308.775 600.544L307.014 601.158C281.242 610.155 261.354 614.28 246.149 614.766C230.979 615.25 219.766 612.121 212.244 605.782C204.59 599.33 201.821 590.462 201.698 581.867C201.577 573.377 203.994 564.726 207.198 557.545L218.92 562.774C216.223 568.82 214.445 575.591 214.532 581.684C214.618 587.673 216.46 592.549 220.516 595.967C224.706 599.498 232.303 602.366 245.74 601.936C258.827 601.519 276.791 597.983 301.024 589.65C317.096 569.223 341.197 536.275 362.641 502.052C384.5 467.164 403.006 431.861 408.072 407.247L389.123 225.237L401.89 223.908Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M313.581 233.246C313.508 233.518 313.356 234.179 313.272 235.41C313.107 237.799 313.269 241.172 313.842 245.572C314.984 254.344 317.531 265.577 320.715 278.048C322.441 284.807 324.365 291.957 326.308 299.175C331.325 317.81 336.463 336.895 338.606 350.862C343.38 381.969 340.483 405.495 337.967 414.452L337.959 414.48L337.951 414.508C328.132 448.729 306.095 481.584 283.209 508.425C260.234 535.369 235.719 557.044 219.935 568.908L219.78 569.024L219.621 569.135C130.461 631.138 130.878 686.98 139.052 707.365C166.449 717.629 204.009 718.081 241.509 713.656C279.914 709.125 316.546 699.7 338.655 692.362C355.035 684.092 380.723 669.948 405.176 654.079C430.364 637.732 452.805 620.454 463.239 606.449C487.725 573.579 519.261 552.67 532.669 546.012L533.087 545.804L533.522 545.635C579.508 527.695 616.761 495.039 632.078 478.467C629.315 453.097 612.799 421.626 593.981 394.457C584.24 380.394 574.25 368.005 566.055 358.925C561.95 354.376 558.383 350.755 555.593 348.205C554.194 346.926 553.086 346.005 552.276 345.398C551.867 345.093 551.621 344.934 551.52 344.87C547.946 343.349 545.96 340.528 545.043 339.036C543.927 337.222 543.103 335.212 542.468 333.364C541.183 329.624 540.122 324.899 539.21 319.746C537.367 309.34 535.859 295.589 534.633 280.804C532.472 254.747 531.123 224.655 530.456 202.084C444.762 190.894 411.405 220.155 405.717 231.135L398.374 245.309L388.264 232.956C380.364 223.302 369.46 220.558 357.513 221.679C345.305 222.825 333.318 228 326.212 232.396L316.722 238.268L313.851 232.929C313.763 233.031 313.673 233.136 313.581 233.246ZM321.658 210.904C319.849 210.142 317.777 209.669 315.439 209.66C308.06 209.629 301.87 214.29 296.877 220.493C293.509 224.678 292.594 229.943 292.317 233.967C292.017 238.324 292.357 243.24 293.014 248.284C294.331 258.402 297.157 270.682 300.364 283.243C302.301 290.829 304.368 298.506 306.391 306.024C311.265 324.128 315.89 341.306 317.845 354.048C322.25 382.748 319.312 403.164 317.754 408.744C309.118 438.817 289.239 468.981 267.227 494.797C245.372 520.428 222.081 540.999 207.467 552.004C108.434 620.947 105.646 690.422 122.104 720.618L123.861 723.842L127.244 725.268C160.107 739.129 203.914 739.241 243.97 734.515C284.397 729.745 322.817 719.81 346.031 712.043L346.745 711.805L347.418 711.466C364.33 702.961 391.073 688.271 416.61 671.698C441.75 655.382 467.161 636.342 480.082 618.997C502.043 589.518 530.413 570.694 541.615 565.023C594.56 544.242 636.229 505.97 650.859 488.968L653.591 485.792L653.387 481.607C651.808 449.222 631.352 411.524 611.247 382.498C601.005 367.71 590.457 354.614 581.648 344.853C577.251 339.98 573.199 335.841 569.764 332.701C568.051 331.136 566.394 329.729 564.854 328.577C564.173 328.068 563.369 327.496 562.478 326.95C562.432 326.826 562.384 326.689 562.332 326.539C561.574 324.331 560.737 320.855 559.892 316.084C558.22 306.644 556.775 293.66 555.565 279.069C553.152 249.97 551.758 215.534 551.217 192.699L551.009 183.925L542.338 182.571C460.974 169.871 414.571 190.049 395.034 210.58C382.828 201.572 368.456 199.556 355.55 200.767C342.763 201.967 330.675 206.336 321.658 210.904Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M352.124 560.129C313.452 551.838 257.856 546.739 236.255 546.165L236.596 533.334C258.841 533.925 315.239 539.094 354.815 547.579L352.124 560.129Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M366.572 358.276C346.523 349.908 329.097 340.057 319.067 333.454L326.124 322.733C335.511 328.912 352.231 338.381 371.516 346.431C390.878 354.512 412.298 360.938 431.244 361.492L430.869 374.323C409.646 373.702 386.544 366.612 366.572 358.276Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M420.205 325.177C382.13 336.944 347.903 369.329 335.644 384.068L325.776 375.86C338.777 360.228 374.954 325.727 416.415 312.913L420.205 325.177Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M420.041 309.133C371.923 299.142 320.414 267.319 300.649 252.712L308.278 242.39C327.442 256.553 377.186 287.126 422.65 296.565L420.041 309.133Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M413.818 247.094C377.292 264.946 338.044 301.724 322.981 317.963L313.571 309.233C329 292.601 369.531 254.452 408.181 235.562L413.818 247.094Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M433.237 279.734C435.479 315.859 441.163 354.922 445.718 379.833L445.746 379.988L445.767 380.144C452.78 433.027 430.618 485.731 418.493 505.925C376.917 590.197 326.231 629.844 304.755 639.367L304.084 639.665L303.363 639.803C248.683 650.29 216.307 643.948 198.662 629.383C180.641 614.506 179.948 592.838 184.356 578.063L196.656 581.732C193.152 593.48 194.13 608.998 206.834 619.485C219.854 630.233 247.064 637.415 300.201 627.339C318.73 618.759 366.914 581.58 407.098 500.009L407.22 499.762L407.363 499.526C418.606 480.917 439.515 431.069 433.063 381.985C428.449 356.718 422.703 317.219 420.426 280.529C419.286 262.158 419.004 244.319 420.212 229.25C421.393 214.53 424.068 201.229 429.728 192.936L440.33 200.172C436.73 205.446 434.175 215.712 433.007 230.277C431.867 244.494 432.115 261.66 433.237 279.734Z" fill="#2B7ECA"/>
<path d="M653.031 542.721L644.914 484.557L558.057 548.693C539.306 558.063 518.568 570.57 510.543 575.653L477.529 610.882L427.404 655.876L346.907 703.533C270.994 735.41 171.744 727.07 131.608 718.916L135.22 734.543C157.628 746.021 189.773 749.211 203.045 749.372C314.75 743.309 368.245 715.548 381.029 702.425C395.709 700.581 483.203 624.258 525.115 586.327L566.631 600.457C621.588 583.494 647.13 554.898 653.031 542.721Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M578.7 574.3L620.801 564.569L622.895 575.219C624.081 581.246 627.04 588.562 631.132 592.618C632.984 594.454 634.698 595.27 636.359 595.474C638.022 595.678 640.909 595.427 645.393 592.79C659.736 584.355 672.929 583.664 683.75 587.487C694.069 591.132 701.145 598.492 704.702 604.511L710.016 613.501L389.847 805.166L389.552 805.318C340.143 830.805 296.94 852.551 231.267 852.612C218.278 852.624 200.607 846.665 191.6 828.16C182.832 810.146 183.886 783.333 200.135 745.151L202.505 739.582L265.27 731.831L260.289 747.454C256.829 758.304 253.025 773.611 252.339 784.906C252.174 787.615 252.206 789.854 252.396 791.599L253.581 791.609C268.579 791.746 306.657 785.596 337.711 760.531C337.309 755.547 336.649 749.221 335.694 742.774C334.332 733.576 332.497 725.047 330.33 719.741L326.752 710.984L379.401 682.754L380.676 698.766C381.402 707.885 383.554 720.137 387.196 728.282C388.757 731.77 390.094 733.363 390.763 733.964C390.987 733.862 391.302 733.695 391.713 733.425L392.71 732.769L393.829 732.353C420.442 722.474 493.24 687.903 566.958 630.071C571.45 625.606 582.183 609.144 579.619 583.495L578.7 574.3ZM249.247 792.44C249.247 792.439 249.256 792.437 249.274 792.435C249.256 792.439 249.247 792.44 249.247 792.44ZM601.012 590.7C601.167 618.602 589.128 638.091 581.037 645.67L580.704 645.982L580.345 646.264C505.593 704.992 431.511 740.583 402.154 751.664C399.05 753.52 395.614 754.796 391.907 755.059C387.651 755.362 383.76 754.277 380.45 752.329C374.301 748.71 370.476 742.342 368.023 736.857C365.2 730.545 363.202 723.097 361.847 715.999L352.745 720.88C354.352 726.916 355.562 733.558 356.471 739.697C357.904 749.377 358.722 758.766 359.04 764.551L359.321 769.651L355.483 773.02C319.975 804.195 275.372 812.322 255.142 812.607C251.796 813.548 248.013 813.848 244.192 812.614C239.387 811.062 236.27 807.655 234.43 804.195C231.18 798.079 230.98 790.118 231.374 783.632C231.887 775.19 233.722 765.497 235.903 756.621L217.177 758.934C204.26 791.549 205.951 809.651 210.486 818.968C215.033 828.311 223.906 831.615 231.248 831.608C291.318 831.553 330.539 812.122 379.628 786.804L678.383 607.958C677.86 607.713 677.316 607.49 676.754 607.291C672.329 605.728 665.568 605.292 656.041 610.895C648.589 615.277 641.089 617.217 633.797 616.321C626.503 615.424 620.696 611.848 616.345 607.535C611.19 602.425 607.629 595.868 605.291 589.711L601.012 590.7Z" fill="#2B7ECA"/>
<path d="M89.1345 420.152L89.1464 420.075C89.1464 486.978 114.798 498.866 166.795 505.087C105.987 511.605 83.6168 556.853 82.8194 593.288C82.8775 595.397 82.9068 597.559 82.9068 599.774C82.8017 597.651 82.7713 595.485 82.8194 593.288C80.9182 524.316 48.1887 511.122 1.09863 505.087C75.9349 505.087 81.5145 469.184 89.1345 420.152Z" fill="#C4C4C4"/>
<path d="M89.1345 420.152L89.1464 420.075C89.1464 486.978 114.798 498.866 166.795 505.087C105.987 511.605 83.6168 556.853 82.8194 593.288C82.8775 595.397 82.9068 597.559 82.9068 599.774C82.8017 597.651 82.7713 595.485 82.8194 593.288C80.9182 524.316 48.1887 511.122 1.09863 505.087C75.9349 505.087 81.5145 469.184 89.1345 420.152Z" fill="#2B7ECA"/>
<path d="M425.337 0.0443283L425.344 0C425.344 38.6649 440.157 45.5351 470.183 49.1299C435.069 52.897 422.151 79.0467 421.69 100.103C421.724 101.322 421.741 102.572 421.741 103.852C421.68 102.625 421.663 101.373 421.69 100.103C420.593 60.2431 401.692 52.6181 374.5 49.1299C417.715 49.1299 420.937 28.3812 425.337 0.0443283Z" fill="#C4C4C4"/>
<path d="M425.337 0.0443283L425.344 0C425.344 38.6649 440.157 45.5351 470.183 49.1299C435.069 52.897 422.151 79.0467 421.69 100.103C421.724 101.322 421.741 102.572 421.741 103.852C421.68 102.625 421.663 101.373 421.69 100.103C420.593 60.2431 401.692 52.6181 374.5 49.1299C417.715 49.1299 420.937 28.3812 425.337 0.0443283Z" fill="#2B7ECA"/>
<path d="M121.948 75.8915L121.955 75.8472C121.955 114.512 136.768 121.382 166.795 124.977C131.68 128.744 118.762 154.894 118.302 175.95C118.335 177.17 118.352 178.419 118.352 179.699C118.291 178.472 118.274 177.221 118.302 175.95C117.204 136.09 98.3037 128.465 71.1108 124.977C114.326 124.977 117.548 104.228 121.948 75.8915Z" fill="#C4C4C4"/>
<path d="M121.948 75.8915L121.955 75.8472C121.955 114.512 136.768 121.382 166.795 124.977C131.68 128.744 118.762 154.894 118.302 175.95C118.335 177.17 118.352 178.419 118.352 179.699C118.291 178.472 118.274 177.221 118.302 175.95C117.204 136.09 98.3037 128.465 71.1108 124.977C114.326 124.977 117.548 104.228 121.948 75.8915Z" fill="#2B7ECA"/>
<path d="M525.431 79.3794L525.436 79.3475C525.436 107.151 536.094 112.092 557.698 114.677C532.433 117.386 523.138 136.19 522.807 151.332C522.831 152.209 522.843 153.107 522.843 154.028C522.8 153.145 522.787 152.245 522.807 151.332C522.017 122.668 508.418 117.185 488.853 114.677C519.946 114.677 522.265 99.7565 525.431 79.3794Z" fill="#C4C4C4"/>
<path d="M525.431 79.3794L525.436 79.3475C525.436 107.151 536.094 112.092 557.698 114.677C532.433 117.386 523.138 136.19 522.807 151.332C522.831 152.209 522.843 153.107 522.843 154.028C522.8 153.145 522.787 152.245 522.807 151.332C522.017 122.668 508.418 117.185 488.853 114.677C519.946 114.677 522.265 99.7565 525.431 79.3794Z" fill="#2B7ECA"/>
<path d="M253.549 338.426L253.553 338.394C253.553 366.198 264.212 371.138 285.816 373.723C260.55 376.432 251.256 395.237 250.925 410.378C250.949 411.255 250.961 412.153 250.961 413.074C250.917 412.192 250.905 411.292 250.925 410.378C250.135 381.715 236.536 376.232 216.97 373.723C248.064 373.723 250.382 358.803 253.549 338.426Z" fill="#C4C4C4"/>
<path d="M253.549 338.426L253.553 338.394C253.553 366.198 264.212 371.138 285.816 373.723C260.55 376.432 251.256 395.237 250.925 410.378C250.949 411.255 250.961 412.153 250.961 413.074C250.917 412.192 250.905 411.292 250.925 410.378C250.135 381.715 236.536 376.232 216.97 373.723C248.064 373.723 250.382 358.803 253.549 338.426Z" fill="#2B7ECA"/>
<path d="M216.209 0.0324906L216.214 0.000610352C216.214 27.8046 226.872 32.7449 248.476 35.33C223.211 38.0389 213.916 56.8432 213.585 71.985C213.609 72.8617 213.621 73.76 213.621 74.6806C213.577 73.7983 213.565 72.8983 213.585 71.985C212.795 43.3215 199.196 37.8384 179.63 35.33C210.724 35.33 213.043 20.4096 216.209 0.0324906Z" fill="#C4C4C4"/>
<path d="M216.209 0.0324906L216.214 0.000610352C216.214 27.8046 226.872 32.7449 248.476 35.33C223.211 38.0389 213.916 56.8432 213.585 71.985C213.609 72.8617 213.621 73.76 213.621 74.6806C213.577 73.7983 213.565 72.8983 213.585 71.985C212.795 43.3215 199.196 37.8384 179.63 35.33C210.724 35.33 213.043 20.4096 216.209 0.0324906Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M188.926 305.774C223.456 227.743 279.882 215.657 306.629 227.927L297.872 247.018C285.567 241.373 239.812 242.687 208.133 314.273C190.896 353.223 169.776 372.402 148.307 378.419C127.195 384.335 108.536 376.728 97.6173 367.859C84.6095 358.905 66.1816 351.043 51.201 352.669C44.1474 353.434 37.919 356.271 32.8453 362.332C27.581 368.621 22.8724 379.219 20.8664 396.672L0 394.274C2.29326 374.322 7.9748 359.321 16.7393 348.851C25.6944 338.152 37.1336 333.069 48.9344 331.788C71.5338 329.334 95.3736 340.723 109.936 350.841L110.301 351.095L110.643 351.378C117.514 357.07 129.41 361.901 142.639 358.194C155.752 354.519 173.057 341.633 188.926 305.774Z" fill="#2B7ECA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M234.288 119.06C254.954 117.484 274.733 128.433 286.355 138.004L286.747 138.327L287.105 138.685C293.935 145.515 319.603 160.78 358.65 152.498C383.202 147.29 400.923 154.202 412.325 166.578C423.078 178.249 427.104 193.555 427.741 204.054L406.775 205.325C406.337 198.089 403.43 187.922 396.878 180.81C390.976 174.403 381.02 169.224 363.008 173.044C317.442 182.71 284.788 165.724 272.656 153.934C262.963 146.063 248.646 139.03 235.886 140.003C229.81 140.467 223.85 142.737 218.341 148.09C212.683 153.589 207.01 162.834 202.723 177.99C192.623 213.691 172.383 231.389 149.8 237.336C128.172 243.031 106.366 237.425 92.8545 230.771L102.135 211.928C112.628 217.097 129.14 221.057 144.451 217.025C158.806 213.244 174.125 201.922 182.512 172.273C187.468 154.754 194.636 141.839 203.703 133.027C212.921 124.07 223.574 119.878 234.288 119.06Z" fill="#2B7ECA"/>
</svg>`,
    `<svg width="871" height="867" viewBox="0 0 871 867" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M467.643 595.629C505.964 595.629 537.029 564.564 537.029 526.243C537.029 487.922 505.964 456.856 467.643 456.856C429.322 456.856 398.256 487.922 398.256 526.243C398.256 564.564 429.322 595.629 467.643 595.629ZM449.737 539.113C465.498 539.113 478.275 526.336 478.275 510.575C478.275 494.814 465.498 482.037 449.737 482.037C433.976 482.037 421.199 494.814 421.199 510.575C421.199 526.336 433.976 539.113 449.737 539.113Z" fill="#008A58"/>
<path d="M440.036 0.0697097L440.047 0C440.047 60.7902 463.275 71.5917 510.359 77.2437C455.296 83.1664 435.04 124.28 434.318 157.386C434.371 159.302 434.397 161.267 434.397 163.279C434.302 161.35 434.274 159.383 434.318 157.386C432.596 94.7162 402.959 82.7279 360.318 77.2437C428.084 77.2437 433.136 44.6219 440.036 0.0697097Z" fill="#C4C4C4"/>
<path d="M440.036 0.0697097L440.047 0C440.047 60.7902 463.275 71.5917 510.359 77.2437C455.296 83.1664 435.04 124.28 434.318 157.386C434.371 159.302 434.397 161.267 434.397 163.279C434.302 161.35 434.274 159.383 434.318 157.386C432.596 94.7162 402.959 82.7279 360.318 77.2437C428.084 77.2437 433.136 44.6219 440.036 0.0697097Z" fill="#008A58"/>
<path d="M505.469 226.206L505.475 226.164C505.475 262.72 519.48 269.216 547.869 272.615C514.67 276.176 502.456 300.9 502.021 320.808C502.053 321.961 502.069 323.142 502.069 324.352C502.011 323.192 501.995 322.009 502.021 320.808C500.983 283.122 483.113 275.913 457.404 272.615C498.262 272.615 501.308 252.997 505.469 226.206Z" fill="#C4C4C4"/>
<path d="M505.469 226.206L505.475 226.164C505.475 262.72 519.48 269.216 547.869 272.615C514.67 276.176 502.456 300.9 502.021 320.808C502.053 321.961 502.069 323.142 502.069 324.352C502.011 323.192 501.995 322.009 502.021 320.808C500.983 283.122 483.113 275.913 457.404 272.615C498.262 272.615 501.308 252.997 505.469 226.206Z" fill="#008A58"/>
<path d="M369.77 145.669L369.777 145.627C369.777 182.184 383.782 188.679 412.171 192.078C378.971 195.64 366.758 220.363 366.322 240.272C366.354 241.424 366.37 242.605 366.37 243.816C366.313 242.656 366.296 241.472 366.322 240.272C365.284 202.585 347.415 195.376 321.705 192.078C362.564 192.078 365.61 172.461 369.77 145.669Z" fill="#C4C4C4"/>
<path d="M369.77 145.669L369.777 145.627C369.777 182.184 383.782 188.679 412.171 192.078C378.971 195.64 366.758 220.363 366.322 240.272C366.354 241.424 366.37 242.605 366.37 243.816C366.313 242.656 366.296 241.472 366.322 240.272C365.284 202.585 347.415 195.376 321.705 192.078C362.564 192.078 365.61 172.461 369.77 145.669Z" fill="#008A58"/>
<path d="M325.436 530.713L325.444 530.658C325.444 578.715 343.89 587.254 381.28 591.722C337.554 596.404 321.468 628.906 320.894 655.078C320.936 656.593 320.957 658.146 320.957 659.737C320.882 658.212 320.86 656.656 320.894 655.078C319.527 605.535 295.992 596.058 262.13 591.722C315.944 591.722 319.956 565.933 325.436 530.713Z" fill="#C4C4C4"/>
<path d="M325.436 530.713L325.444 530.658C325.444 578.715 343.89 587.254 381.28 591.722C337.554 596.404 321.468 628.906 320.894 655.078C320.936 656.593 320.957 658.146 320.957 659.737C320.882 658.212 320.86 656.656 320.894 655.078C319.527 605.535 295.992 596.058 262.13 591.722C315.944 591.722 319.956 565.933 325.436 530.713Z" fill="#008A58"/>
<path d="M442.789 658.662L442.794 658.634C442.794 683.689 452.358 688.141 471.746 690.47C449.073 692.912 440.732 709.857 440.435 723.502C440.456 724.292 440.467 725.102 440.467 725.931C440.428 725.136 440.417 724.325 440.435 723.502C439.726 697.672 427.522 692.731 409.964 690.47C437.868 690.47 439.948 677.025 442.789 658.662Z" fill="#C4C4C4"/>
<path d="M442.789 658.662L442.794 658.634C442.794 683.689 452.358 688.141 471.746 690.47C449.073 692.912 440.732 709.857 440.435 723.502C440.456 724.292 440.467 725.102 440.467 725.931C440.428 725.136 440.417 724.325 440.435 723.502C439.726 697.672 427.522 692.731 409.964 690.47C437.868 690.47 439.948 677.025 442.789 658.662Z" fill="#008A58"/>
<path d="M331.362 730.373L331.367 730.344C331.367 755.4 340.931 759.852 360.318 762.181C337.646 764.622 329.305 781.568 329.007 795.213C329.029 796.003 329.04 796.812 329.04 797.642C329.001 796.847 328.99 796.036 329.007 795.213C328.299 769.383 316.095 764.442 298.537 762.181C326.441 762.181 328.521 748.736 331.362 730.373Z" fill="#C4C4C4"/>
<path d="M331.362 730.373L331.367 730.344C331.367 755.4 340.931 759.852 360.318 762.181C337.646 764.622 329.305 781.568 329.007 795.213C329.029 796.003 329.04 796.812 329.04 797.642C329.001 796.847 328.99 796.036 329.007 795.213C328.299 769.383 316.095 764.442 298.537 762.181C326.441 762.181 328.521 748.736 331.362 730.373Z" fill="#008A58"/>
<path d="M569.662 176.547L569.666 176.518C569.666 201.574 579.231 206.026 598.618 208.355C575.945 210.796 567.604 227.742 567.307 241.387C567.329 242.177 567.34 242.986 567.34 243.816C567.3 243.021 567.289 242.21 567.307 241.387C566.598 215.557 554.395 210.616 536.837 208.355C564.74 208.355 566.82 194.91 569.662 176.547Z" fill="#C4C4C4"/>
<path d="M569.662 176.547L569.666 176.518C569.666 201.574 579.231 206.026 598.618 208.355C575.945 210.796 567.604 227.742 567.307 241.387C567.329 242.177 567.34 242.986 567.34 243.816C567.3 243.021 567.289 242.21 567.307 241.387C566.598 215.557 554.395 210.616 536.837 208.355C564.74 208.355 566.82 194.91 569.662 176.547Z" fill="#008A58"/>
<path d="M750.181 403.825L750.187 403.785C750.187 437.877 763.167 443.935 789.478 447.105C758.708 450.426 747.388 473.483 746.985 492.049C747.014 493.124 747.029 494.225 747.029 495.354C746.976 494.272 746.961 493.169 746.985 492.049C746.023 456.903 729.461 450.18 705.632 447.105C743.501 447.105 746.325 428.81 750.181 403.825Z" fill="#C4C4C4"/>
<path d="M750.181 403.825L750.187 403.785C750.187 437.877 763.167 443.935 789.478 447.105C758.708 450.426 747.388 473.483 746.985 492.049C747.014 493.124 747.029 494.225 747.029 495.354C746.976 494.272 746.961 493.169 746.985 492.049C746.023 456.903 729.461 450.18 705.632 447.105C743.501 447.105 746.325 428.81 750.181 403.825Z" fill="#008A58"/>
<path d="M822.444 514.156L822.451 514.109C822.451 555.184 838.164 562.482 870.015 566.301C832.767 570.303 819.064 598.082 818.575 620.451C818.611 621.746 818.629 623.073 818.629 624.433C818.564 623.13 818.546 621.8 818.575 620.451C817.411 578.107 797.362 570.007 768.517 566.301C814.358 566.301 817.776 544.259 822.444 514.156Z" fill="#C4C4C4"/>
<path d="M822.444 514.156L822.451 514.109C822.451 555.184 838.164 562.482 870.015 566.301C832.767 570.303 819.064 598.082 818.575 620.451C818.611 621.746 818.629 623.073 818.629 624.433C818.564 623.13 818.546 621.8 818.575 620.451C817.411 578.107 797.362 570.007 768.517 566.301C814.358 566.301 817.776 544.259 822.444 514.156Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M541.438 508.887C549.196 537.837 578.954 555.018 607.904 547.261C636.855 539.503 654.036 509.746 646.278 480.795C638.521 451.844 608.763 434.664 579.813 442.421C550.862 450.178 533.681 479.936 541.438 508.887ZM580.511 483.919C583.701 495.826 595.94 502.892 607.848 499.702C619.755 496.511 626.821 484.272 623.63 472.365C620.44 460.458 608.201 453.391 596.294 456.582C584.387 459.772 577.32 472.011 580.511 483.919Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M485.311 446.75C504.117 465.828 534.828 466.049 553.906 447.243C572.985 428.437 573.205 397.726 554.399 378.648C535.594 359.57 504.882 359.349 485.804 378.155C466.726 396.961 466.505 427.672 485.311 446.75ZM504.661 410.1C512.395 417.947 525.027 418.038 532.873 410.303C540.72 402.569 540.811 389.937 533.076 382.091C525.341 374.244 512.71 374.153 504.863 381.888C497.017 389.623 496.926 402.254 504.661 410.1Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M808.681 154.581C811.525 152.168 814.362 149.93 817.14 147.892L829.224 163.644C826.512 165.819 823.823 167.951 821.158 170.036C807.303 181.87 793.967 197.863 788.071 213.379C784.637 222.416 784.03 230.456 786.307 237.265C788.527 243.902 794.011 250.933 805.945 257.082L826.994 267.928L804.504 275.339C795.422 278.332 786.288 282.037 778.498 286.495C770.603 291.012 764.791 295.906 761.512 300.958C758.494 305.609 757.445 310.59 759.311 316.768C761.331 323.458 767.034 332.336 779.561 343.386L798.028 359.676L773.427 360.752C760.023 361.339 745.064 360.457 731.377 359.651C729.774 359.557 728.189 359.463 726.625 359.374C711.129 358.483 698.297 357.987 689.76 359.414C686.3 359.993 684.588 360.739 683.871 361.165C683.883 361.258 683.901 361.365 683.924 361.488C684.295 363.404 685.857 367.134 690.353 373.203C694.721 379.102 701.315 386.495 710.697 395.677L700.876 412.277C680.554 406.126 655.214 400.792 634.109 400.821C623.526 400.835 614.765 402.204 608.399 404.93C605.432 406.201 603.097 407.705 601.309 409.465C599.513 412.909 597.803 415.88 596.271 418.282L578.427 409.965C579.866 405.387 582.058 401.46 584.808 398.117C590.203 387.329 596.543 371.467 600.27 354.182C604.774 333.287 605.077 312.141 597.231 295.437C595.587 292.773 594.168 290.21 593 287.901L610.157 277.965C611.848 280.535 613.349 283.178 614.675 285.88C618.454 291.842 623.237 297.766 628.105 301.294C631.415 303.692 633.768 304.263 635.249 304.168C636.383 304.095 638.671 303.542 641.866 299.476C648.297 291.292 649.365 280.604 647.087 269.158C644.811 257.72 639.438 247.043 635.29 240.929L650.153 227.978C655.417 232.72 664.09 238.504 672.696 240.836C680.877 243.052 687.355 241.932 692.351 235.682C698.716 227.721 700.62 218.367 700.164 209.349C699.702 200.196 696.815 192.074 694.515 187.738L712.056 178.43C716.652 187.09 721.647 191.269 726.567 193.124C731.606 195.023 738.153 195.084 746.928 192.396C763.236 187.403 783.734 174.065 808.681 154.581ZM770.394 204.091C764.281 207.187 758.39 209.655 752.743 211.384C741.603 214.795 730.453 215.641 720.086 211.899C720.075 223.52 717.077 236.555 707.863 248.082C696.329 262.51 680.496 263.522 667.504 260.003C666.716 259.79 665.932 259.559 665.154 259.312C665.687 261.268 666.161 263.261 666.563 265.282C669.453 279.804 668.865 297.257 657.48 311.745C651.768 319.016 644.69 323.462 636.52 323.986C631.665 324.297 627.17 323.17 623.179 321.343C623.742 334.01 622.194 346.715 619.682 358.367C617.824 366.985 615.383 375.295 612.693 382.953C619.492 381.539 626.762 380.972 634.082 380.962C647.057 380.945 661.091 382.685 674.608 385.309C674.536 385.213 674.465 385.118 674.394 385.022C669.286 378.126 665.639 371.528 664.427 365.256C663.07 358.235 664.823 351.519 670.215 346.665C674.8 342.537 680.978 340.749 686.485 339.828C697.666 337.958 712.927 338.695 727.765 339.548C729.337 339.638 730.912 339.731 732.486 339.823C738.327 340.166 744.171 340.509 749.899 340.75C745.316 334.598 742.118 328.529 740.3 322.508C736.625 310.337 738.89 299.339 744.854 290.148C750.559 281.357 759.398 274.544 768.636 269.258C772.407 267.101 776.363 265.131 780.386 263.335C774.226 257.517 769.925 250.889 767.475 243.565C763.294 231.066 765.03 218.109 769.508 206.325C769.791 205.579 770.087 204.834 770.394 204.091ZM683.845 360.703C683.845 360.703 683.845 360.707 683.844 360.716C683.844 360.707 683.845 360.703 683.845 360.703Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M148.453 329.231C159.088 330.837 167.671 333.888 174.247 338.453C185.134 346.012 189.292 356.843 189.008 367.993C188.741 378.539 184.571 389.262 179.442 398.575C178.629 400.052 177.78 401.514 176.903 402.957C214.368 398.451 238.2 407.883 251.947 426.577C259.835 437.302 263.502 450.028 265.129 462.154C265.739 466.698 266.074 471.251 266.221 475.702C299.464 451.592 333.418 434.404 364.097 425.59C381.049 420.719 397.594 418.255 412.66 418.933C387.426 387.56 379.989 356.589 376.265 337.831C364.971 345.158 354.619 349.362 345.059 350.581C331.429 352.318 320.357 347.855 312.015 339.848C304.055 332.208 298.908 321.702 295.465 311.393C294.006 307.026 292.804 302.543 291.812 298.099C282.373 305.028 273.209 308.957 264.301 309.796C250.469 311.1 239.492 304.787 231.663 295.705C224.046 286.867 218.999 275.061 215.926 263.382C214.908 259.512 214.084 255.568 213.451 251.634C195.387 263.424 171.966 262.7 151.314 257.28C146.598 256.043 141.891 254.535 137.255 252.812C143.623 263.877 147.962 274.785 150.451 285.108C154.307 301.098 153.851 316.928 148.453 329.231ZM92.057 227.905C114.707 249.341 126.736 271.472 131.146 289.763C136.393 311.522 130.621 324.956 123.618 329.457L95.3226 347.645L128.959 347.739C147.321 347.79 157.56 351.043 162.922 354.766C167.593 358.008 169.294 362.09 169.157 367.489C169.004 373.493 166.475 380.957 162.048 388.996C157.703 396.885 151.971 404.533 146.445 410.693L125.031 434.561L156.185 426.971C205.536 414.947 226.391 425.345 235.949 438.342C241.158 445.424 244.072 454.546 245.447 464.795C246.819 475.019 246.578 485.708 245.981 495.466L244.611 517.844L262.103 503.818C298.911 474.304 336.852 454.079 369.581 444.676C402.863 435.113 428.231 437.368 442.655 448.662L454.986 433.096C408.144 395.549 399.942 354.513 395.122 330.401C394.142 325.502 393.303 321.302 392.307 317.971L388.084 303.846L376.582 313.069C361.571 325.106 350.452 329.874 342.549 330.882C335.229 331.815 330.044 329.627 325.765 325.52C321.103 321.046 317.264 313.975 314.301 305.102C311.38 296.357 309.573 286.667 308.468 277.771L305.945 257.479L291.558 272.01C278.65 285.047 268.983 289.409 262.438 290.026C256.519 290.584 251.431 288.223 246.705 282.74C241.767 277.011 237.77 268.359 235.131 258.33C232.52 248.403 231.446 237.908 231.796 229.135L233.324 190.83L213.393 223.577C202.53 241.424 181.664 244.714 156.355 238.072C137.127 233.027 118.076 222.759 104.955 212.775C101.52 209.555 97.8847 206.368 94.0457 203.224L80.6266 217.818C83.8201 221.111 87.678 224.517 92.057 227.905Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M547.466 560.708L563.649 549.215C586.939 579.994 606.965 594.73 627.107 598.885C647.253 603.04 670.029 597.135 700.149 580.46L712.012 596.134C691.365 616.981 682.278 629.991 679.625 637.616C679.021 639.352 678.877 640.479 678.871 641.116C678.869 641.424 678.898 641.609 678.917 641.699C678.936 641.783 678.952 641.816 678.955 641.823L678.955 641.823C678.957 641.827 678.965 641.842 678.984 641.869C678.994 641.884 679.008 641.902 679.027 641.924C679.083 641.991 679.198 642.113 679.409 642.278C679.85 642.622 680.642 643.1 681.967 643.607C687.938 645.889 698.289 646.56 712.313 646.621C715.588 646.636 719.027 646.619 722.563 646.601C733.223 646.548 744.759 646.491 755.322 647.281L787.358 649.679L759.557 665.776C751.642 670.358 746.436 674.416 743.199 677.826C739.948 681.25 739.14 683.529 738.972 684.627C738.801 685.747 739.074 688.851 746.652 693.205C753.717 697.263 764.245 700.483 775.754 702.271C787.198 704.049 798.648 704.263 807.238 702.957L810.224 722.59C791.816 725.389 780.299 732.691 773.033 741.815C765.619 751.125 761.852 763.323 760.906 777.088C758.992 804.923 768.843 836.071 777.548 852.57L761.698 864.177C751.134 853.47 741.58 842.243 733.05 832.217C731.358 830.229 729.707 828.288 728.095 826.408C718.048 814.683 709.936 805.784 702.773 800.726C699.29 798.267 696.661 797.186 694.718 796.864C693.047 796.588 691.501 796.793 689.631 797.873C685.049 800.523 678.485 808.459 670.614 827.751L651.519 823.259C653.466 797.237 651.789 782.226 648.761 774.118C647.313 770.242 645.792 768.588 644.824 767.866C643.956 767.22 642.846 766.8 640.995 766.821C636.512 766.871 630.127 769.413 621.736 774.031C618.754 775.672 615.819 777.397 612.813 779.163C611.772 779.774 610.724 780.391 609.661 781.01C605.666 783.34 601.492 785.71 597.516 787.557L572.036 799.398L584.419 774.177C596.791 748.978 601.263 733.321 601.574 724.022C601.724 719.558 600.881 717.341 600.234 716.294C599.67 715.381 598.785 714.576 596.939 713.931C592.44 712.357 585.008 712.627 574.779 714.264C571.58 714.776 567.983 715.452 564.282 716.148C557.688 717.387 550.764 718.688 545.161 719.236L524.416 721.266L535.912 703.878C576.415 642.615 562.689 583.577 547.466 560.708ZM765.925 720.678C755.346 718.519 744.968 715.139 736.76 710.423C727.313 704.997 717.221 695.514 719.342 681.628C720.18 676.141 722.87 671.077 726.751 666.444C725.615 666.449 724.478 666.454 723.34 666.46C719.639 666.478 715.926 666.496 712.225 666.48C698.95 666.421 684.824 665.959 674.876 662.156C669.665 660.164 664.164 656.731 661.144 650.604C658.075 644.379 658.624 637.545 660.87 631.091C662.489 626.437 665.233 621.28 669.134 615.541C653.227 620.183 638.031 621.414 623.096 618.334C608.2 615.261 594.322 608.058 580.799 596.852C584.989 624.972 581.916 659.966 563.442 696.085C566.038 695.603 568.762 695.116 571.641 694.655C581.612 693.06 593.709 691.762 603.496 695.186C608.794 697.039 613.741 700.375 617.128 705.857C620.432 711.204 621.657 717.636 621.421 724.687C621.144 732.975 618.806 743.125 614.226 755.513C622.098 751.308 631.581 747.068 640.77 746.964C646.164 746.902 651.735 748.25 656.693 751.945C661.55 755.566 664.996 760.829 667.364 767.17C669.384 772.578 670.777 779.199 671.536 787.175C674.121 784.509 676.831 782.335 679.693 780.681C685.52 777.313 691.721 776.24 697.959 777.272C703.924 778.259 709.365 781.071 714.228 784.505C723.756 791.233 733.433 802.119 743.174 813.486C743.399 813.748 743.624 814.011 743.849 814.274C741.432 801.81 740.21 788.578 741.094 775.726C742.22 759.361 746.816 742.86 757.499 729.445C760.01 726.291 762.815 723.361 765.925 720.678Z" fill="#008A58"/>
</svg>`,
    `<svg width="673" height="867" viewBox="0 0 673 867" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M307.229 173.522C275.809 208.496 258.157 252.57 251.665 282.219L251.638 282.338L122.811 817.296L164.561 834.635L300.596 286.039C300.599 286.029 300.601 286.019 300.604 286.009C313.815 231.527 340.189 199.201 368.947 181.535C397.178 164.194 426.773 161.564 446.232 164.806C475.177 167.993 497.586 177.877 514.39 192.42C531.203 206.971 541.709 225.581 547.857 245.083C558.387 278.483 556.478 315.5 550.876 343.127L590.198 351.125C606.679 262.575 586.009 206.592 555.035 172.027C522.247 135.438 476.191 120.902 443.88 118.913L443.717 118.903L443.554 118.889C382.582 113.441 338.33 138.901 307.229 173.522ZM445.495 95.3379C375.754 89.159 324.648 118.772 289.65 157.73C254.985 196.316 235.799 244.3 228.608 277.042L95.1138 831.38L180.881 867L323.554 291.635L323.562 291.605C335.492 242.379 358.526 215.67 381.316 201.67C404.458 187.454 428.359 185.714 442.607 188.159L442.971 188.221L443.337 188.261C468.322 190.96 486.152 199.233 498.926 210.288C511.76 221.395 520.193 235.924 525.32 252.188C535.695 285.098 532.044 323.681 525.189 349.217L521.931 361.354L608.538 378.969L610.998 367.552C632.744 266.635 611.025 199.099 572.633 156.257C534.797 114.034 482.399 97.6483 445.495 95.3379Z" fill="#008A58"/>
<path d="M189.056 777.59L137.949 708.939L163.121 604.437L219.567 667.749L189.056 777.59Z" fill="#008A58"/>
<path d="M441.439 391.297L441.452 391.214C441.452 463.551 469.092 476.404 525.119 483.13C459.597 490.178 435.493 539.1 434.634 578.495C434.697 580.776 434.728 583.113 434.728 585.508C434.615 583.212 434.582 580.871 434.634 578.495C432.586 503.921 397.319 489.656 346.579 483.13C427.216 483.13 433.228 444.312 441.439 391.297Z" fill="#C4C4C4"/>
<path d="M441.439 391.297L441.452 391.214C441.452 463.551 469.092 476.404 525.119 483.13C459.597 490.178 435.493 539.1 434.634 578.495C434.697 580.776 434.728 583.113 434.728 585.508C434.615 583.212 434.582 580.871 434.634 578.495C432.586 503.921 397.319 489.656 346.579 483.13C427.216 483.13 433.228 444.312 441.439 391.297Z" fill="#008A58"/>
<path d="M94.8601 198.315L94.873 198.232C94.873 270.57 122.513 283.423 178.54 290.148C113.019 297.196 88.9147 346.119 88.0555 385.513C88.1181 387.794 88.1497 390.131 88.1497 392.527C88.0364 390.231 88.0036 387.889 88.0555 385.513C86.0069 310.94 50.7403 296.674 0 290.148C80.6373 290.148 86.6494 251.33 94.8601 198.315Z" fill="#C4C4C4"/>
<path d="M94.8601 198.315L94.873 198.232C94.873 270.57 122.513 283.423 178.54 290.148C113.019 297.196 88.9147 346.119 88.0555 385.513C88.1181 387.794 88.1497 390.131 88.1497 392.527C88.0364 390.231 88.0036 387.889 88.0555 385.513C86.0069 310.94 50.7403 296.674 0 290.148C80.6373 290.148 86.6494 251.33 94.8601 198.315Z" fill="#008A58"/>
<path d="M214.566 45.9956L214.574 45.948C214.574 87.493 230.426 94.875 262.56 98.7376C224.981 102.785 211.157 130.883 210.664 153.508C210.7 154.818 210.718 156.16 210.718 157.536C210.653 156.217 210.634 154.873 210.664 153.508C209.489 110.679 189.262 102.486 160.161 98.7376C206.409 98.7376 209.857 76.4433 214.566 45.9956Z" fill="#C4C4C4"/>
<path d="M214.566 45.9956L214.574 45.948C214.574 87.493 230.426 94.875 262.56 98.7376C224.981 102.785 211.157 130.883 210.664 153.508C210.7 154.818 210.718 156.16 210.718 157.536C210.653 156.217 210.634 154.873 210.664 153.508C209.489 110.679 189.262 102.486 160.161 98.7376C206.409 98.7376 209.857 76.4433 214.566 45.9956Z" fill="#008A58"/>
<path d="M58.3832 550.101L58.3892 550.062C58.3892 583.787 71.1931 589.779 97.1469 592.915C66.7949 596.201 55.6291 619.009 55.2311 637.376C55.2601 638.439 55.2747 639.529 55.2747 640.645C55.2222 639.575 55.2071 638.483 55.2311 637.376C54.2821 602.608 37.9454 595.958 14.4407 592.915C51.7947 592.915 54.5797 574.817 58.3832 550.101Z" fill="#C4C4C4"/>
<path d="M58.3832 550.101L58.3892 550.062C58.3892 583.787 71.1931 589.779 97.1469 592.915C66.7949 596.201 55.6291 619.009 55.2311 637.376C55.2601 638.439 55.2747 639.529 55.2747 640.645C55.2222 639.575 55.2071 638.483 55.2311 637.376C54.2821 602.608 37.9454 595.958 14.4407 592.915C51.7947 592.915 54.5797 574.817 58.3832 550.101Z" fill="#008A58"/>
<path d="M633.389 0.0386645L633.395 0C633.395 33.7248 646.199 39.7172 672.153 42.8528C641.801 46.1385 630.635 68.9472 630.237 87.3134C630.266 88.3768 630.28 89.4664 630.28 90.5831C630.228 89.5128 630.213 88.4212 630.237 87.3134C629.288 52.5461 612.951 45.8953 589.446 42.8528C626.8 42.8528 629.585 24.755 633.389 0.0386645Z" fill="#C4C4C4"/>
<path d="M633.389 0.0386645L633.395 0C633.395 33.7248 646.199 39.7172 672.153 42.8528C641.801 46.1385 630.635 68.9472 630.237 87.3134C630.266 88.3768 630.28 89.4664 630.28 90.5831C630.228 89.5128 630.213 88.4212 630.237 87.3134C629.288 52.5461 612.951 45.8953 589.446 42.8528C626.8 42.8528 629.585 24.755 633.389 0.0386645Z" fill="#008A58"/>
<path d="M519.3 660.387L519.308 660.337C519.308 703.837 535.973 711.567 569.754 715.611C530.248 719.849 515.715 749.269 515.197 772.959C515.235 774.331 515.254 775.736 515.254 777.176C515.185 775.796 515.166 774.388 515.197 772.959C513.962 728.114 492.698 719.536 462.105 715.611C510.724 715.611 514.349 692.268 519.3 660.387Z" fill="#C4C4C4"/>
<path d="M519.3 660.387L519.308 660.337C519.308 703.837 535.973 711.567 569.754 715.611C530.248 719.849 515.715 749.269 515.197 772.959C515.235 774.331 515.254 775.736 515.254 777.176C515.185 775.796 515.166 774.388 515.197 772.959C513.962 728.114 492.698 719.536 462.105 715.611C510.724 715.611 514.349 692.268 519.3 660.387Z" fill="#008A58"/>
<path d="M357.826 564.553L357.833 564.503C357.833 608.003 374.499 615.732 408.28 619.777C368.774 624.015 354.241 653.435 353.723 677.125C353.761 678.496 353.78 679.902 353.78 681.342C353.711 679.962 353.692 678.553 353.723 677.125C352.488 632.28 331.224 623.701 300.631 619.777C349.25 619.777 352.875 596.433 357.826 564.553Z" fill="#C4C4C4"/>
<path d="M357.826 564.553L357.833 564.503C357.833 608.003 374.499 615.732 408.28 619.777C368.774 624.015 354.241 653.435 353.723 677.125C353.761 678.496 353.78 679.902 353.78 681.342C353.711 679.962 353.692 678.553 353.723 677.125C352.488 632.28 331.224 623.701 300.631 619.777C349.25 619.777 352.875 596.433 357.826 564.553Z" fill="#008A58"/>
<path d="M243.975 549.516L192.868 480.865L218.04 376.363L274.487 439.675L243.975 549.516Z" fill="#008A58"/>
<path d="M305.761 320.68L251.603 258.131L305.761 154.392L348.477 200.16L305.761 320.68Z" fill="#008A58"/>
<path d="M414.077 107.1L427.045 174.225C443.521 167.513 478.66 184.141 494.17 193.295L535.361 139.9C517.054 112.439 446.877 106.591 414.077 107.1Z" fill="#008A58"/>
<path d="M552.904 302.373L603.248 327.545L596.383 228.383L541.462 257.369L552.904 302.373Z" fill="#008A58"/>
</svg>`,
    `<svg width="686" height="867" viewBox="0 0 686 867" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M336.211 824.273C258.98 829.849 185.711 817.083 158.301 809.883L163.069 791.731C188.877 798.509 260.055 810.954 334.86 805.553L336.211 824.273Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M334.899 790.445C265.992 791.748 193.304 778.7 165.357 771.974L169.749 753.727C196.692 760.211 267.716 772.943 334.544 771.681L334.899 790.445Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M586.129 798.323C522.132 822.625 443.994 824.905 412.759 823.057L413.868 804.322C443.724 806.088 518.908 803.774 579.467 780.777L586.129 798.323Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M582.465 757.022C523.062 784.902 443.518 790.167 411.174 789.412L411.612 770.649C442.75 771.376 518.913 766.117 574.491 740.032L582.465 757.022Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M620.248 800.221C613.711 656.169 561.711 577.823 538.293 557.462L550.607 543.298C579.363 568.301 633.872 654.226 639.262 805.937L639.486 812.224L633.754 814.819C589.231 834.975 505.44 853.278 410.453 859.069C315.307 864.869 207.629 858.201 115.318 827.47L109.476 825.525L108.935 819.392C106.585 792.786 107.48 748.049 117.569 699.21C127.655 650.387 147.072 596.761 182.292 553.023L196.91 564.795C164.182 605.438 145.671 655.944 135.949 703.006C126.991 746.37 125.619 786.213 127.174 811.595C215.129 839.664 317.639 845.924 409.311 840.335C499.041 834.865 577.202 818.123 620.248 800.221Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M328.261 764.051L417.01 761.917L418.769 835.114L330.02 837.247L328.261 764.051ZM347.474 782.362L348.332 818.033L399.555 816.802L398.698 781.131L347.474 782.362Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M356.453 253.686C303.915 254.299 253.243 268.8 224.465 293.535L212.232 279.301C245.661 250.569 301.378 235.559 356.234 234.92C411.098 234.28 468.047 247.983 503.633 279.989L491.082 293.943C460.435 266.379 408.983 253.074 356.453 253.686Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M205.218 145.553C202.494 145.461 197.807 146.417 192.623 155.054C190.017 159.397 189.284 162.648 189.253 164.933C189.223 167.167 189.855 169.059 190.959 170.778C193.386 174.556 198.117 177.428 202.021 178.704L202.265 178.784L202.505 178.877C204.415 179.62 207.999 180.361 211.559 179.848C214.807 179.38 217.759 177.956 219.963 174.505C221.909 171.459 222.22 167.279 220.774 162.054C219.427 157.187 216.858 152.658 214.863 149.943C212.41 147.688 208.71 145.671 205.218 145.553ZM205.851 126.796C215.788 127.131 223.961 132.52 228.505 137.023L228.943 137.457L229.32 137.945C232.557 142.128 236.66 149.09 238.863 157.048C241.055 164.969 241.715 175.315 235.78 184.608C230.104 193.494 221.825 197.33 214.236 198.424C207.094 199.453 200.354 198.13 195.951 196.464C189.566 194.329 180.637 189.436 175.168 180.921C172.29 176.442 170.403 170.98 170.487 164.681C170.571 158.433 172.585 151.972 176.531 145.397C184.451 132.199 194.935 126.427 205.851 126.796Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M375.47 201.618C314.127 202.994 254.034 187.025 231.233 178.723L237.654 161.087C258.955 168.844 316.95 184.252 375.54 182.844L376.032 182.832L376.522 182.871C388.794 183.864 418.937 190.527 447.615 209.351C475.091 227.385 491.247 246.943 496.737 256.104C499.937 260.07 504.362 267.483 509.236 278.271C514.524 289.976 520.572 306.167 526.338 327.375L508.228 332.299C502.694 311.946 496.969 296.703 492.133 285.999C487.197 275.074 483.399 269.349 481.924 267.639L481.329 266.951L480.879 266.161C477.538 260.307 463.486 242.218 437.317 225.041C411.973 208.406 385.374 202.533 375.47 201.618Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M257.022 220.776C259.003 234.675 252.816 245.877 246.398 252.035L246.171 252.253L245.929 252.456C235.724 261.008 230.815 272.309 228.92 283.446C227.004 294.713 228.29 305.242 229.917 311.113L211.831 316.126C209.528 307.819 208.002 294.5 210.418 280.298C212.841 266.06 219.341 250.384 233.593 238.308C236.513 235.4 239.384 230.034 238.441 223.424C237.495 216.786 232.349 206.52 214.073 194.857L224.169 179.036C245.079 192.379 255.024 206.762 257.022 220.776Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M388.071 481.293C382.209 486.431 373.857 491.378 363.662 491.378C353.599 491.377 345.515 486.776 339.834 481.787C334.192 476.834 330.251 470.942 328.215 466.708L345.129 458.574C346.195 460.791 348.675 464.575 352.217 467.685C355.719 470.759 359.578 472.609 363.663 472.609C367.614 472.61 371.728 470.661 375.7 467.179C379.644 463.722 382.564 459.502 383.909 456.941L400.524 465.671C398.246 470.006 393.961 476.13 388.071 481.293Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M317.561 380.454C315.809 379.656 313.367 379.144 309.863 379.557C299.953 380.728 296.122 389.058 295.561 394.775L284.147 393.655C284.971 385.251 290.976 370.239 308.518 368.167C313.826 367.54 318.416 368.24 322.316 370.017C326.196 371.784 329.047 374.46 331.14 377.27C334.558 381.859 336.262 387.378 337.132 390.198C337.276 390.665 337.397 391.058 337.5 391.361L326.636 395.04C326.432 394.436 326.233 393.809 326.028 393.165C325.098 390.234 324.062 386.967 321.942 384.122C320.751 382.522 319.332 381.261 317.561 380.454Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M422.948 382.392C421.106 381.576 418.547 381.059 414.902 381.48C404.547 382.678 400.658 391.119 400.09 396.727L388.679 395.571C389.541 387.057 395.762 372.148 413.584 370.087C418.982 369.462 423.64 370.153 427.597 371.907C431.541 373.656 434.454 376.313 436.602 379.124C440.112 383.717 441.861 389.249 442.752 392.068C442.899 392.534 443.023 392.926 443.128 393.228L432.292 396.987C432.082 396.382 431.878 395.754 431.668 395.11C430.716 392.18 429.658 388.927 427.489 386.089C426.27 384.493 424.803 383.215 422.948 382.392Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M342.996 423.586C343.711 424.415 344.98 425.437 347.218 426.502C351.383 428.485 357.279 429.714 363.455 429.728C369.685 429.742 375.12 428.52 378.593 426.629C380.584 425.546 381.536 424.529 381.965 423.577C381.093 422.661 379.52 421.558 376.744 420.559C372.53 419.042 366.907 418.316 361.032 418.575C355.146 418.834 349.778 420.049 346.052 421.769C344.542 422.466 343.591 423.095 342.996 423.586ZM383.101 402.9C389.99 405.38 397.363 410.065 400.458 418.376L401.007 419.852L401.045 421.426C401.298 431.95 394.91 439.117 387.565 443.114C380.467 446.977 371.643 448.514 363.413 448.496C355.129 448.477 346.364 446.882 339.152 443.448C332.141 440.112 324.723 434.02 323.478 424.253L323.309 422.926L323.517 421.606C324.908 412.776 332.099 407.539 338.185 404.729C344.666 401.737 352.56 400.162 360.205 399.825C367.862 399.487 376.037 400.357 383.101 402.9Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M239.262 359.013L261.551 421.451C278.624 411.103 305.217 398.734 334.871 412.54L326.95 429.554C301.753 417.823 279.448 432.173 262.404 443.139C262.182 443.282 261.96 443.424 261.74 443.566L251.8 449.959L228.76 385.417L221.224 389.251C220.858 390.332 220.477 392.164 220.417 395.069C220.325 399.456 220.987 404.936 222.226 410.995C224.695 423.077 229.145 435.994 232.487 444.133L235.07 450.425L229.895 454.838C222.18 461.416 215.176 467.663 209.118 476.762C203.103 485.796 197.724 498.124 194.313 516.94C191.894 530.286 195.113 543.322 200.589 554.559C206.085 565.836 213.534 574.619 218.404 579.029L221.39 581.732L221.487 585.759C221.765 597.32 224.033 614.312 229.598 627.797C235.35 641.735 242.732 648.073 251.799 647.451C285.307 645.152 312.133 660.299 322.303 669.003C350.265 689.586 373.937 691.372 380.468 690.419L380.924 690.353L381.384 690.332C407.669 689.101 426.363 671.033 432.081 662.543L434.135 659.493L437.715 658.651C461.393 653.079 477.988 646.078 488.999 639.8C498.196 634.556 503.035 630.086 505.061 627.698C508.896 597.377 525.368 564.921 533.781 551.239C536.047 544.814 539.414 540.721 541.47 538.221C541.99 537.589 542.425 537.06 542.738 536.62C544.271 534.467 546.481 530.703 547.569 518.4C550.811 481.75 523.214 453.828 504.936 443.924L495.562 438.845L501.79 430.192C513.384 414.084 512.559 395.84 510.223 386.393C508.506 385.67 506.665 384.964 504.983 384.431C504.622 385.041 504.232 385.698 503.821 386.392C503.575 386.806 503.322 387.232 503.063 387.67C500.693 391.667 497.671 396.798 494.61 402.315C491.541 407.849 488.494 413.663 486.061 419.015C483.555 424.528 481.991 428.932 481.481 431.823L479.43 443.44L468.572 438.829C448.822 430.443 434.765 426.958 423.612 426.39C412.709 425.834 404.017 428.036 394.836 432.064L387.296 414.877C398.504 409.96 410.119 406.91 424.566 407.646C436.493 408.253 449.928 411.419 466.257 417.655C467.091 415.513 468.016 413.359 468.975 411.249C471.698 405.259 475.009 398.96 478.198 393.212C481.396 387.447 484.532 382.125 486.918 378.099C487.192 377.638 487.453 377.197 487.704 376.776C488.558 375.335 489.276 374.126 489.844 373.152C490.527 371.98 490.748 371.557 490.757 371.561C490.76 371.562 490.739 371.611 490.704 371.696C492.118 368.292 494.842 366.478 497.081 365.658C499.114 364.913 501.039 364.843 502.311 364.882C504.894 364.961 507.569 365.614 509.692 366.245C514.129 367.562 518.945 369.644 522.017 371.13L525.379 372.756L526.705 376.248C530.632 386.592 534.131 410.045 522.273 432.664C543.487 447.587 569.925 478.67 566.264 520.054C564.99 534.463 562.1 541.785 558.027 547.505C556.735 549.32 555.739 550.54 554.928 551.533C553.242 553.597 552.356 554.681 551.276 558.094L550.914 559.236L550.277 560.251C542.44 572.733 526.287 604.596 523.44 632.142L523.228 634.193L522.176 635.966C518.762 641.719 510.773 648.989 498.295 656.104C486.075 663.072 468.823 670.31 445.404 676.102C435.937 688.197 413.751 707.436 382.693 709.058C370.166 710.682 341.809 706.78 310.861 683.885L310.559 683.661L310.275 683.414C303.25 677.288 280.946 664.263 253.084 666.175C231.296 667.67 218.804 650.84 212.249 634.957C206.157 620.196 203.551 602.867 202.876 590.122C196.764 583.914 189.381 574.401 183.718 562.781C177.093 549.186 172.504 532.028 175.846 513.593C179.636 492.683 185.838 477.862 193.496 466.361C199.508 457.331 206.233 450.646 212.662 444.937C209.498 436.406 206.017 425.416 203.838 414.753C202.457 407.999 201.521 401.006 201.653 394.678C201.778 388.664 202.886 381.597 207.2 376.25L208.459 374.689L239.262 359.013Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M445.377 299.822C419.093 289.867 388.942 282.645 360.118 284.147C300.181 287.27 257.548 303.605 244.558 310.773L244.409 310.855L244.256 310.932C226.362 319.973 218.538 332.476 215.517 344.139C213.797 350.777 213.599 357.312 214.196 362.974C241.076 347.973 295.106 329.831 369.338 335.194C412.592 338.318 445.849 343.824 469.942 349.493C487.417 353.605 500.374 357.873 508.889 361.52C512.89 355.018 513.283 349.223 512.397 344.494C511.22 338.208 507.576 332.916 504.557 329.996C492.681 321.793 471.219 309.609 445.377 299.822ZM452.024 282.27C479.71 292.756 502.812 305.891 515.844 314.984L516.348 315.336L516.802 315.751C522.263 320.738 528.718 329.686 530.845 341.038C533.073 352.931 530.357 366.581 518.673 379.592L513.56 385.284L506.955 381.423C502.175 378.628 488.911 373.237 465.643 367.762C442.63 362.347 410.369 356.975 367.986 353.913C284.293 347.867 229.572 373.344 213.819 385.477L203.812 393.184L199.322 381.378C195.581 371.54 193.106 355.812 197.348 339.433C201.688 322.679 212.945 305.774 235.642 294.257C251.541 285.536 296.908 268.647 359.142 265.404C391.503 263.718 424.38 271.8 452.024 282.27Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M561.848 698.271C552.449 661.656 539.786 630.094 531.114 612.434L547.961 604.162C557.197 622.97 570.307 655.74 580.027 693.604C589.729 731.397 596.234 774.955 591.701 815.068L573.051 812.96C577.226 776.023 571.266 734.957 561.848 698.271Z" fill="#008A58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M161.968 709.911C170.165 670.816 181.001 634.772 188.532 613.403L206.233 619.641C198.958 640.285 188.352 675.531 180.337 713.762C172.286 752.161 167.031 792.739 169.959 824.399L151.27 826.127C148.08 791.625 153.807 748.839 161.968 709.911Z" fill="#008A58"/>
<path d="M379.937 724.398C380.055 729.306 376.42 733.375 371.819 733.486C367.218 733.596 363.392 729.707 363.274 724.799C363.156 719.891 366.79 715.822 371.392 715.711C375.993 715.601 379.819 719.49 379.937 724.398Z" fill="#008A58"/>
<path d="M380.565 746.059C380.676 750.66 377.035 754.48 372.434 754.591C367.832 754.701 364.013 751.061 363.902 746.459C363.791 741.858 367.432 738.038 372.033 737.927C376.635 737.817 380.455 741.457 380.565 746.059Z" fill="#008A58"/>
<path d="M96.749 155.425L96.7593 155.358C96.7593 213.2 118.874 223.477 163.7 228.855C111.277 234.49 91.9922 273.609 91.3047 305.109C91.3549 306.933 91.3801 308.802 91.3801 310.717C91.2895 308.881 91.2633 307.009 91.3047 305.109C89.6657 245.48 61.4497 234.073 20.8535 228.855C85.3696 228.855 90.1797 197.816 96.749 155.425Z" fill="#C4C4C4"/>
<path d="M96.749 155.425L96.7593 155.358C96.7593 213.2 118.874 223.477 163.7 228.855C111.277 234.49 91.9922 273.609 91.3047 305.109C91.3549 306.933 91.3801 308.802 91.3801 310.717C91.2895 308.881 91.2633 307.009 91.3047 305.109C89.6657 245.48 61.4497 234.073 20.8535 228.855C85.3696 228.855 90.1797 197.816 96.749 155.425Z" fill="#008A58"/>
<path d="M38.2247 456.724L38.2299 456.691C38.2299 485.806 49.3677 490.979 71.9445 493.686C45.5419 496.522 35.829 516.213 35.4827 532.069C35.508 532.987 35.5207 533.927 35.5207 534.891C35.475 533.967 35.4618 533.025 35.4827 532.069C34.6573 502.054 20.4463 496.312 0 493.686C32.4935 493.686 34.9161 478.062 38.2247 456.724Z" fill="#C4C4C4"/>
<path d="M38.2247 456.724L38.2299 456.691C38.2299 485.806 49.3677 490.979 71.9445 493.686C45.5419 496.522 35.829 516.213 35.4827 532.069C35.508 532.987 35.5207 533.927 35.5207 534.891C35.475 533.967 35.4618 533.025 35.4827 532.069C34.6573 502.054 20.4463 496.312 0 493.686C32.4935 493.686 34.9161 478.062 38.2247 456.724Z" fill="#008A58"/>
<path d="M411.502 0.0333836L411.507 0C411.507 29.1146 422.645 34.2879 445.222 36.9949C418.819 39.8315 409.106 59.5222 408.76 75.3778C408.785 76.2958 408.798 77.2365 408.798 78.2005C408.752 77.2766 408.739 76.3342 408.76 75.3778C407.934 45.3631 393.723 39.6215 373.277 36.9949C405.771 36.9949 408.193 21.371 411.502 0.0333836Z" fill="#C4C4C4"/>
<path d="M411.502 0.0333836L411.507 0C411.507 29.1146 422.645 34.2879 445.222 36.9949C418.819 39.8315 409.106 59.5222 408.76 75.3778C408.785 76.2958 408.798 77.2365 408.798 78.2005C408.752 77.2766 408.739 76.3342 408.76 75.3778C407.934 45.3631 393.723 39.6215 373.277 36.9949C405.771 36.9949 408.193 21.371 411.502 0.0333836Z" fill="#008A58"/>
<path d="M102.413 548.473L102.417 548.446C102.417 571.738 111.295 575.877 129.291 578.042C108.246 580.311 100.504 596.064 100.228 608.749C100.248 609.483 100.258 610.235 100.258 611.007C100.222 610.268 100.211 609.514 100.228 608.749C99.5697 584.737 88.2421 580.143 71.9443 578.042C97.845 578.042 99.776 565.543 102.413 548.473Z" fill="#C4C4C4"/>
<path d="M102.413 548.473L102.417 548.446C102.417 571.738 111.295 575.877 129.291 578.042C108.246 580.311 100.504 596.064 100.228 608.749C100.248 609.483 100.258 610.235 100.258 611.007C100.222 610.268 100.211 609.514 100.228 608.749C99.5697 584.737 88.2421 580.143 71.9443 578.042C97.845 578.042 99.776 565.543 102.413 548.473Z" fill="#008A58"/>
<path d="M475.69 135.574L475.695 135.548C475.695 158.839 484.573 162.978 502.568 165.143C481.523 167.413 473.781 183.165 473.505 195.85C473.525 196.584 473.535 197.337 473.535 198.108C473.499 197.369 473.488 196.615 473.505 195.85C472.847 171.838 461.519 167.245 445.221 165.143C471.122 165.143 473.053 152.644 475.69 135.574Z" fill="#C4C4C4"/>
<path d="M475.69 135.574L475.695 135.548C475.695 158.839 484.573 162.978 502.568 165.143C481.523 167.413 473.781 183.165 473.505 195.85C473.525 196.584 473.535 197.337 473.535 198.108C473.499 197.369 473.488 196.615 473.505 195.85C472.847 171.838 461.519 167.245 445.221 165.143C471.122 165.143 473.053 152.644 475.69 135.574Z" fill="#008A58"/>
<path d="M635.19 385.838L635.197 385.789C635.197 428.879 651.662 436.535 685.036 440.541C646.006 444.74 631.648 473.882 631.136 497.348C631.174 498.707 631.192 500.099 631.192 501.526C631.125 500.158 631.105 498.764 631.136 497.348C629.916 452.926 608.908 444.429 578.684 440.541C626.718 440.541 630.299 417.418 635.19 385.838Z" fill="#C4C4C4"/>
<path d="M635.19 385.838L635.197 385.789C635.197 428.879 651.662 436.535 685.036 440.541C646.006 444.74 631.648 473.882 631.136 497.348C631.174 498.707 631.192 500.099 631.192 501.526C631.125 500.158 631.105 498.764 631.136 497.348C629.916 452.926 608.908 444.429 578.684 440.541C626.718 440.541 630.299 417.418 635.19 385.838Z" fill="#008A58"/>
<path d="M131.871 379.579L131.879 379.533C131.879 419.517 147.213 426.622 178.297 430.339C141.946 434.235 128.573 461.277 128.096 483.052C128.131 484.313 128.148 485.605 128.148 486.929C128.086 485.66 128.067 484.365 128.096 483.052C126.96 441.832 107.394 433.947 79.2432 430.339C123.981 430.339 127.316 408.883 131.871 379.579Z" fill="#C4C4C4"/>
<path d="M131.871 379.579L131.879 379.533C131.879 419.517 147.213 426.622 178.297 430.339C141.946 434.235 128.573 461.277 128.096 483.052C128.131 484.313 128.148 485.605 128.148 486.929C128.086 485.66 128.067 484.365 128.096 483.052C126.96 441.832 107.394 433.947 79.2432 430.339C123.981 430.339 127.316 408.883 131.871 379.579Z" fill="#008A58"/>
<path d="M334.15 41.7529L334.157 41.707C334.157 81.6912 349.492 88.7958 380.576 92.5133C344.224 96.4089 330.851 123.451 330.375 145.226C330.41 146.487 330.427 147.778 330.427 149.102C330.364 147.834 330.346 146.539 330.375 145.226C329.238 104.006 309.672 96.1205 281.522 92.5133C326.259 92.5133 329.595 71.0566 334.15 41.7529Z" fill="#C4C4C4"/>
<path d="M334.15 41.7529L334.157 41.707C334.157 81.6912 349.492 88.7958 380.576 92.5133C344.224 96.4089 330.851 123.451 330.375 145.226C330.41 146.487 330.427 147.778 330.427 149.102C330.364 147.834 330.346 146.539 330.375 145.226C329.238 104.006 309.672 96.1205 281.522 92.5133C326.259 92.5133 329.595 71.0566 334.15 41.7529Z" fill="#008A58"/>
</svg>`,
  ]

  const themeColors = {}

  const companyName = {
    top: "Halloween",
    bottom: "Technologies!",
  }

  const turnOnAt = new Date()

  const expiresAt = new Date()

  const currentPages: ParsedPage[] = [
    {
      slug: "react",
      componentsProps: [
        {
          type: "BGTitle",
          title: "Разработка на React",
          description:
            "С 2016 года React стал одной из ключевых технологий в нашей компании. 49% наших проектов используют React.",
          background:
            "https://images.ctfassets.net/13g5no3omm60/3ZWOHYFW1Zlb2FekQO5Xs3/7672e8ddf0d01336a9b437eb8f5d32cd/react-bg.jpg",
          titleFirstLineCharNumber: "10",
          id: "mainTitle",
          label: {
            primaryText: "HWdTech",
            usualText: "Услуги",
            primaryLinkMeta: {
              href: "/",
              linkTitle: "Открыть главную страницу",
            },
            usualLinkMeta: {
              href: "/services",
              linkTitle: "Открыть страницу услуг",
            },
          },
          primaryButton: {
            text: "Бесплатная консультация",
            title: "Перейти к форме обратной связи",
            action: "scrollToAnchor",
            actionArgs: {
              anchor: "contact",
              offset: 0,
            },
          },
          arrowButton: {
            text: "К нашему портфолио",
            linkMeta: {
              href: "/portfolio",
              linkTitle: "Открыть страницу портфолио",
            },
          },
        },
        {
          type: "LetTheNumbersSpeak",
          id: "LetTheNumbersSpeak",
          title: "Пусть говорят цифры!",
          text: "Мы начали разрабатывать приложения с использованием React в 2016 году. Самый большой проект на React, который был разработан нашей компанией, продолжается более 3 лет и на данный момент насчитывает 25 человеко-лет. 65% разрабатываемых наши проектов используют React.",
          button: {
            text: "Наши работы",
            linkMeta: {
              href: "/portfolio",
              linkTitle: "Открыть страницу с работами",
            },
          },
          cards: [
            {
              text: "Человеко-лет наибольшему проекту",
              number: 24,
              suffix: "+",
            },
            {
              text: "Проектов на  React",
              number: 65,
              suffix: "%",
            },
            {
              text: "Лет нашего опыта",
              number: 5,
            },
          ],
          descBox: [
            {
              text: "& Многое другое",
              description: "Открыть наши работы",
              href: "/portfolio",
              linkTitle: "Открыть страницу с работами",
            },
          ],
        },
        {
          type: "BadgesGridSection",
          id: "BadgesGridSection",
          title: "ПОЧЕТНЫЕ ПРИЗНАНИЯ И НАГРАДЫ",
          description:
            "Год за годом HWdTech признается одной из ведущих мировых дизайнерских и конструкторских компаний. Приятно чувствовать, что тебя ценят!",
          children: [
            {
              key: "top-web-developers-clutch",
              reward:
                "https://images.ctfassets.net/13g5no3omm60/2KnNP0teHpKDGhwgmwIQHD/d502d68eb922c8989ca06641c2ed987f/top-web-developers-clutch.png",
              width: "188",
              height: "200",
              alt: "top-web-developers-clutch",
            },
            {
              key: "top-web-developers-good-firm",
              reward:
                "https://images.ctfassets.net/13g5no3omm60/7DOS6AG6GN66mNXH6LeKwh/1f8a0b82f166bb1069dd75067024abfc/top-web-developers-good-firms.png",
              width: "212px",
              height: "170px",
              alt: "top-web-developers-good-firm",
            },
            {
              key: "top-web-developers-extract",
              reward:
                "https://images.ctfassets.net/13g5no3omm60/4kRpUdbO0EnWfyPdCCY23/5360e7c1c5e783142504399b97f5d262/top-web-developers-extract.png",
              width: "200px",
              height: "200px",
              alt: "top-web-developers-extract",
            },
          ],
        },
        {
          type: "BoxWithAppearedBlock",
          id: "BoxWithAppearedBlock",
          title: "У нас было 4 основных задачи",
          description:
            "Также мы разработали несколько маленьких фич и UX дизайн (обратите внимание на примеры немного ниже!).",
          appearedImage: {
            alt: "codefuse screen",
            src: "https://images.ctfassets.net/13g5no3omm60/1DgpctJcy1pmhSaaCgtff2/4ec001d5ecb6b415394869507b74aca6/code-fuse-screen2.jpg",
            animation: "right",
          },
          items: [
            {
              icon: "monitor",
              color: "orange",
              title: "Разработка админ-панели",
            },
            {
              icon: "settings",
              color: "green",
              title: "Двигатель процесса (выполнение тестов)",
            },
            {
              icon: "office",
              color: "pink",
              title: "Разработка расширения для Chrome",
            },
            {
              icon: "broken",
              color: "purple",
              title: "Исправление ошибок и поддержка",
            },
          ],
        },
        {
          type: "PortfolioCarousel",
          id: "PortfolioCarousel",
          imageOnLeft: "true",
          label: "Портфолио",
          children: [
            {
              key: "CodeFuse Console",
              primaryTitle: "Великобритания",
              title: "CodeFuse Console",
              text: "CodeFuse Console - это инновационное программное обеспечение SAAS для автоматизации тестирования. Что в нем такого особенного?\n\nCodeFuse позволяет проводить тестирование полностью в облаке и экономит ваше время и деньги. Используя CodeFuse, вы можете создавать и выполнять тесты с первого дня работы.",
              imageSrc:
                "https://images.ctfassets.net/13g5no3omm60/28oZjS9DLJbEs07qEn3bSt/e43cfc8b2bae67936153963507536934/codeFuse2.jpg",
              imageAlt: "CodeFuse Console превью картинка",
              buttonArrow: {
                text: "Смотреть всё портфолио",
                linkMeta: {
                  href: "/portfolio",
                  linkTitle: "Открыть страницу портфолио",
                },
                button: {
                  text: "подробнее о Tik-Tok Coach",
                  linkMeta: {
                    href: "/portfolio/tik-tok-coach",
                    linkTitle: "Открыть страницу Tik-Tok Coach",
                  },
                },
              },
            },
            {
              key: "Mapic",
              primaryTitle: "Норвегия",
              title: "Mapic",
              text: "Mapic помогает вам публиковать данные GEO без написания кода.\n\nС вашей собственной базой данных PostGIS и мощным тайловым сервером Mapic вы можете легко вносить изменения в свои карты без использования стороннего программного обеспечения.",
              imageSrc:
                "https://images.ctfassets.net/13g5no3omm60/2qlQfE0RUdRlhJwO5KjehR/ff0d1b4a66722f200383683738e52415/mapic2.jpg",
              imageAlt: "mapic portflio превью",
              buttonArrow: {
                text: "Смотреть всё портфолио",
                linkMeta: {
                  href: "/portfolio",
                  linkTitle: "Открыть страницу портфолио",
                },
                button: {
                  text: "подробнее о Tik-Tok Coach",
                  linkMeta: {
                    href: "/portfolio/tik-tok-coach",
                    linkTitle: "Открыть страницу Tik-Tok Coach",
                  },
                },
              },
            },
            {
              key: "MoneyWiz",
              primaryTitle: "США",
              title: "MoneyWiz",
              text: "MoneyWiz получил награды и признание, в том числе звание лучшего финансового приложения из 500 лучших приложений, обязательных к использованию по версии The Telegraph.\n\nMoneyWiz - это финансовое ПО, которое отслеживает доходы и расходы, а также устанавливает и отслеживает бюджеты.",
              imageSrc:
                "https://images.ctfassets.net/13g5no3omm60/6l4PvwvwLqAC9YsO1VgRmt/ad4dabbe007256168ebad13a291d0055/moneyWiz2.jpg",
              imageAlt: "MoneyWiz portflio превью",
              buttonArrow: {
                text: "Смотреть всё портфолио",
                linkMeta: {
                  href: "/portfolio",
                  linkTitle: "Открыть страницу портфолио",
                },
              },
            },
            {
              key: "Clifford Wallace",
              primaryTitle: "Австралия",
              title: "Clifford Wallace",
              text: "Clifford Wallace - это кадровое агентство премиум-класса, базирующееся в Сиднее, которое предоставляет кадровые решения для мероприятий, мероприятий, корпоративных залов заседаний, ресторанов, кафе, баров и отелей.",
              imageSrc:
                "https://images.ctfassets.net/13g5no3omm60/1dwTyOSqmGwLpRzOV8eJnp/a92b3bf04ecb247ef4fda65661d7be04/cliffordWallace2.jpg",
              imageAlt: "Clifford Wallace превью",
              buttonArrow: {
                text: "Смотреть всё портфолио",
                linkMeta: {
                  href: "/portfolio",
                  linkTitle: "Открыть страницу портфолио",
                },
              },
            },
            {
              key: "Kattis",
              primaryTitle: "Швеция",
              title: "Kattis",
              text: "Kattis позволяет компаниям демонстрировать свои тестовые задания и задачи.\n\nПотенциальные сотрудники, в свою очередь, могут участвовать в соревнованиях и иметь больше шансов быть нанятыми. Лучшие разработчики получают отклик от компании.",
              imageSrc:
                "https://images.ctfassets.net/13g5no3omm60/4xJAq0YpByek2rjXyGwQr4/6ca3f9c10105a9248e87c44261f30040/Kattis2.jpg",
              imageAlt: "Kattis portflio превью",
              buttonArrow: {
                text: "Смотреть всё портфолио",
                linkMeta: {
                  href: "/portfolio",
                  linkTitle: "Открыть страницу портфолио",
                },
              },
            },
            {
              key: "TTC",
              primaryTitle: "Собственный проект",
              title: "Tik-Tok Coach",
              text: "Tik-Tok Coach это настольное приложение и веб-портал, который предлагает вам учет рабочего времени, создание снимков экрана, постановку целей и оценку участия каждого сотрудника в рабочем процессе.",
              imageSrc:
                "https://images.ctfassets.net/13g5no3omm60/45cI55EqawHzcR6meqcPwb/d5a3ebd47e9041914c7485b129f00fc1/TTC2.jpg",
              imageAlt: "ttc portflio превью",
              buttonArrow: {
                text: "Смотреть всё портфолио",
                linkMeta: {
                  href: "/portfolio",
                  linkTitle: "Открыть страницу портфолио",
                },
              },
            },
          ],
        },
      ],
    },
    {
      slug: "wopi",
      componentsProps: [
        {
          type: "Meta",
          id: "mainMeta",
          title: "Office Online интеграция с помощью WOPI протокола",
          description: "Это позволит вам совместно работать с документами и вносить правки прямо в браузере",
          keywords: "MS Office, Online, MS, Microsoft Office Online, Microsoft",
        },
        {
          type: "MetaTwitter",
          id: "twitterMeta",
          title: "Office Online интеграция с помощью WOPI протокола",
          description: "Это позволит вам совместно работать с документами и вносить правки прямо в браузере",
          imageUrl:
            "https://images.ctfassets.net/13g5no3omm60/4kdcV1ZcPeNFPnTlIYRaof/c04c6521f2b730ea5e06b3985c13d8a8/cardOO.jpg",
        },
        {
          type: "MetaOpenGraph",
          id: "openGraphMeta",
          title: "Office Online интеграция с помощью WOPI протокола",
          description: "Это позволит вам совместно работать с документами и вносить правки прямо в браузере",
          imageUrl:
            "https://images.ctfassets.net/13g5no3omm60/4kdcV1ZcPeNFPnTlIYRaof/c04c6521f2b730ea5e06b3985c13d8a8/cardOO.jpg",
        },
        {
          type: "BGTitle",
          title: "Office Online интеграция с помощью WOPI протокола",
          description: "Это позволит вам совместно работать с документами и вносить правки прямо в браузере",
          background:
            "https://images.ctfassets.net/13g5no3omm60/6159JxyiC7whXiZZwczGib/186c9c1d9992e5173c49c5fd5d60c749/bg-office-online.jpg",
          titleFirstLineCharNumber: "13",
          titleSecondLineCharNumber: "21",
          id: "mainTitle",
          label: {
            usualText: "Услуги",
            primaryText: "HWdTech",
            usualLinkMeta: {
              href: "/services",
              linkTitle: "Открыть страницу услуг",
            },
            primaryLinkMeta: {
              href: "/",
              linkTitle: "Открыть главную страницу",
            },
          },
          primaryButton: {
            text: "Бесплатная консультация",
            title: "Перейти к форме обратной связи",
            action: "scrollToAnchor",
            actionArgs: {
              anchor: "contact",
              offset: 0,
            },
          },
          arrowButton: {
            text: "К нашему портфолио",
            linkMeta: {
              href: "/portfolio",
              linkTitle: "Открыть страницу портфолио",
            },
          },
        },
        {
          type: "QuoteAboveImage",
          id: "QuoteAboveImage",
          title: "Почему мы?",
          description: "Мы внедряем приложения с помощью WOPI протокола с 2014 года.",
          imageSrc:
            "https://images.ctfassets.net/13g5no3omm60/2W93KdN3szfT9W0jvMlKbL/b3663293a6e0a2bc5c2b70c06cadf3ec/monitor.jpg",
          altImg: "Монитор с превью",
          textList: [
            {
              icons: [
                {
                  iconColor: "orange",
                  icon: "hourglass",
                },
                {
                  iconColor: "blue",
                  icon: "trophy",
                },
              ],
              items: [
                {
                  text: [
                    "На тот момент Office Online назывался Office Web Apps Server. Пожалуйста, посмотрите ",
                    {
                      href: "https://github.com/jacob-l/WopiHost",
                      text: "исходный код",
                      type: "link",
                      linkTitle: "Открыть страницу с исходным кодом WOPI на github",
                    },
                    " нашей первой реализации и ",
                    {
                      href: "https://habr.com/en/company/tiktokcoach/blog/223179/",
                      text: "статью",
                      type: "link",
                      linkTitle: "Открыть страницу статьи на habr",
                    },
                    " об этом.",
                  ],
                },
                {
                  type: "text",
                  text: "Просто потому, что мы уже завершили несколько проектов, мы знаем основные проблемы и мы готовы предоставить вам фиксированную цену за режима просмотра и гарантию возврата денег за режим редактирования.",
                },
              ],
            },
          ],
          imageOnLeft: "true",
          quote: "Новый уровень удобства для наших клиентов.",
        },
        {
          type: "BadgesGridSection",
          id: "BadgesGridSection",
          title: "Не нужно скачивать и выгружать документы",
          description:
            "Давайте создадим WOPI Rest API Connector для Office Online, который позволит вашим пользователям просматривать и редактировать документы прямо в вашем приложении",
          children: [
            {
              key: "Word",
              reward:
                "https://images.ctfassets.net/13g5no3omm60/3hvtBcbl2EDnVl1xzIOiJK/8bb09b7fdf75371e415f855bfb325394/word.jpg",
              width: "156",
              height: "156",
              alt: "Word иконка",
              title: "Word",
            },
            {
              key: "Excel",
              reward:
                "https://images.ctfassets.net/13g5no3omm60/gxigceeSMnBgiPA4nDklf/ad31015a15aaf447b4670d932d9cea7e/excel.jpg",
              width: "156",
              height: "156",
              alt: "Excel иконка",
              title: "Excel",
            },
            {
              key: "Power Point",
              reward:
                "https://images.ctfassets.net/13g5no3omm60/1f7YyU6CzQ2GirWsdgB6bg/820e933ec656015ab2f186722dd0d6b6/pp.jpg",
              width: "156",
              height: "156",
              alt: "Power Point иконка",
              title: "Power Point",
            },
          ],
        },
        {
          type: "Technologies",
          id: "Технологии",
          projectName: "WOPI",
          text: "Вы можете выбрать любую технологию для сервера WOPI. Мы готовы реализовать WOPI протокол на любом из следующих языков программирования.",
          title: "Без ограничений на программную платформу",
          primaryButton: {
            text: "Нанять нас",
            title: "Перейти к форме обратной связи",
            action: "scrollToAnchor",
            actionArgs: {
              anchor: "contact",
              offset: 0,
            },
          },
          itemsTech: ["python", "vbdotnet", "java", "node", "csharp", "scala", "php", "ruby"],
        },
        {
          type: "LetTheNumbersSpeak",
          id: "LetTheNumbersSpeak",
          title: "Пусть цифры говорят!",
          text: "Впервые наша реализация была выпущена в 2012 году, когда продукт назывался Microsoft Wep Apps. Мы интегрировали Microsoft Office Online с корпоративными файловыми хранилищами, такими как Dropbox, и системами управления проектами",
          cards: [
            {
              text: "Лет услуге",
              number: 8,
            },
            {
              text: "Интеграций",
              number: 6,
            },
            {
              text: "Стэка разработки",
              number: 4,
            },
          ],
          descBox: [
            {
              text: "& Многое другое",
              description: "Открыть наши работы",
              href: "/portfolio",
              linkTitle: "Открыть страницу портфолио",
            },
          ],
          button: {
            text: "Наши работы",
            linkMeta: {
              primaryButtonHref: "/portfolio",
              primaryButtonlinkTitle: "Открыть страницу портфолио",
            },
          },
        },
        {
          type: "PeopleSection",
          id: "PeopleSection",
          title: "Преимущества работы с нами",
          description: "Всего в нескольких словах о том, почему нам стоит работать вместе над вашей задачей.",
          text: [
            "Корпоративная основа. Мы разработали инструмент для учёта времени и задач TikTokCoach, который используется в нашей компании и успешно распространяется в другие. Более того, у нас есть пара библиотек, которые мы собственно разработали.",
            "Статьи. Нам нравится делиться идеями с миров. Обратите внимание на наш блог ниже.",
            "Универсальная интеграция. Наша команда комжет сделать интеграцию с Office Online для веб и iOS.",
            "Довольные клиенты. Наша главная цель - помочь вашему бизнесу работать эффективно. Мы делаем всё, что в наших силах, чтобы клиенты были довольны. Мы с гордостью представляем вам некоторые из отзывов.",
          ],
          images: [
            {
              key: "board",
              animation: "left",
              src: "https://images.ctfassets.net/13g5no3omm60/7sXBbgXMFeY6Vw16GIt4Yd/b0fb0d72b9dd2f1586e3e41e52f8868c/board.jpg",
              location: "left",
              alt: "board keyboard",
            },
            {
              key: "keyboard",
              animation: "up",
              src: "https://images.ctfassets.net/13g5no3omm60/57hhZFCbDg73z9NN9PrO0Q/c06733b29eb1cb0c0c2acb549bac9c0c/keyboard.jpg",
              location: "left",
              alt: "keyboard keyboard",
            },
            {
              key: "smiling Maxim",
              animation: "bottom",
              src: "https://images.ctfassets.net/13g5no3omm60/OWM7tES541kvfM0w4NXp6/de97736f8e5b601222abc8661e31b8da/smilimg.jpg",
              location: "right",
              alt: "smiling Maxim and Anna",
            },
          ],
          button: [
            {
              text: "our blog",
              linkMeta: [
                {
                  href: "/blog",
                  linkTitle: "Go to Blog page",
                },
              ],
            },
          ],
        },
      ],
    },
  ]

  const pageMax = 10

  const genMax = true

  // eslint-disable-next-line @typescript-eslint/ban-types
  const params = (easterEggsMap: {}) => ({
    currentPages,
    companyName,
    easterEggsMap,
    turnOnAt,
    expiresAt,
    icons,
    iconColors,
    logo,
    themeColors,
    pageMax,
    genMax,
    uncountedIcons,
    sizeEasterEgg: {
      minWidth: 1,
      maxWidth: 3,
    },
  })

  test(`generate all`, async () => {
    const easterEggsMap = {
      BGTitle: { ...mainEasterEggsConfig["BGTitle"] },
      BadgesGridSection: { ...mainEasterEggsConfig["BadgesGridSection"] },
      LetTheNumbersSpeak: { ...mainEasterEggsConfig["LetTheNumbersSpeak"] },
      BoxWithAppearedBlock: { ...mainEasterEggsConfig["BoxWithAppearedBlock"] },
    }
    const res = generator(params(easterEggsMap))

    if (get(res, `pages.${currentPages[0].slug}.BGTitle`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.BGTitle.componentTotal`)
      const componentUncountedTotal = get(
        res,
        `pages.${currentPages[0].slug}.BGTitle.componentUncountedTotal`
      ) as number
      const count = countChildren(get(res, `pages.${currentPages[0].slug}.BGTitle`)) - componentUncountedTotal
      expect(componentTotal).toEqual(count)
    }
    if (get(res, `pages.${currentPages[0].slug}.LetTheNumbersSpeak`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.LetTheNumbersSpeak.componentTotal`)
      const componentUncountedTotal = get(
        res,
        `pages.${currentPages[0].slug}.LetTheNumbersSpeak.componentUncountedTotal`
      ) as number
      const count =
        countChildren(get(res, `pages.${currentPages[0].slug}.LetTheNumbersSpeak`)) - componentUncountedTotal
      expect(componentTotal).toEqual(count)
    }
    if (get(res, `pages.${currentPages[0].slug}.BadgesGridSection`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.BadgesGridSection.componentTotal`)
      const componentUncountedTotal = get(
        res,
        `pages.${currentPages[0].slug}.BadgesGridSection.componentUncountedTotal`
      ) as number
      const count = countChildren(get(res, `pages.${currentPages[0].slug}.BadgesGridSection`)) - componentUncountedTotal
      expect(componentTotal).toEqual(count)
    }
    if (get(res, `pages.${currentPages[0].slug}.BoxWithAppearedBlock`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.BoxWithAppearedBlock.componentTotal`)
      const componentUncountedTotal = get(
        res,
        `pages.${currentPages[0].slug}.BoxWithAppearedBlock.componentUncountedTotal`
      ) as number
      const count =
        countChildren(get(res, `pages.${currentPages[0].slug}.BoxWithAppearedBlock`)) - componentUncountedTotal
      expect(componentTotal).toEqual(count)
    }
  })

  test(`generate simple map`, async () => {
    const easterEggsMap = {
      BoxWithAppearedBlock: { ...mainEasterEggsConfig["BoxWithAppearedBlock"] },
    }
    const res = generator(params(easterEggsMap))

    if (get(res, `pages.${currentPages[0].slug}.BoxWithAppearedBlock`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.BoxWithAppearedBlock.componentTotal`)
      const componentUncountedTotal = get(
        res,
        `pages.${currentPages[0].slug}.BoxWithAppearedBlock.componentUncountedTotal`
      ) as number
      const count =
        countChildren(get(res, `pages.${currentPages[0].slug}.BoxWithAppearedBlock`)) - componentUncountedTotal
      expect(componentTotal).toEqual(count)
      // eslint-disable-next-line no-console
      console.info("Expected", count, "Actual", componentTotal)
    }
  })

  test(`generate children map`, async () => {
    const easterEggsMap = {
      BadgesGridSection: { ...mainEasterEggsConfig["BadgesGridSection"] },
    }
    const res = generator(params(easterEggsMap))

    if (get(res, `pages.${currentPages[0].slug}.BadgesGridSection`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.BadgesGridSection.componentTotal`)
      const componentUncountedTotal = get(
        res,
        `pages.${currentPages[0].slug}.BadgesGridSection.componentUncountedTotal`
      ) as number
      const count = countChildren(get(res, `pages.${currentPages[0].slug}.BadgesGridSection`)) - componentUncountedTotal
      expect(componentTotal).toEqual(count)
    }
  })

  test(`generate children list`, async () => {
    const easterEggsMap = {
      LetTheNumbersSpeak: { ...mainEasterEggsConfig["LetTheNumbersSpeak"] },
    }
    const res = generator(params(easterEggsMap))

    if (get(res, `pages.${currentPages[0].slug}.LetTheNumbersSpeak`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.LetTheNumbersSpeak.componentTotal`)
      const componentUncountedTotal = get(
        res,
        `pages.${currentPages[0].slug}.LetTheNumbersSpeak.componentUncountedTotal`
      ) as number
      const count =
        countChildren(get(res, `pages.${currentPages[0].slug}.LetTheNumbersSpeak`)) - componentUncountedTotal
      expect(componentTotal).toEqual(count)
    }
  })

  test(`generate simple`, async () => {
    const easterEggsMap = {
      BGTitle: { ...mainEasterEggsConfig["BGTitle"] },
    }
    const res = generator(params(easterEggsMap))

    if (get(res, `pages.${currentPages[0].slug}.BGTitle`)) {
      const componentTotal = get(res, `pages.${currentPages[0].slug}.BGTitle.componentTotal`)
      const componentUncountedTotal = get(
        res,
        `pages.${currentPages[0].slug}.BGTitle.componentUncountedTotal`
      ) as number
      const count = countChildren(get(res, `pages.${currentPages[0].slug}.BGTitle`)) - componentUncountedTotal
      expect(componentTotal).toEqual(count)
    }
  })

  test(`generate children map only exists`, async () => {
    const easterEggsMap = {
      BadgesGridSection: { ...mainEasterEggsConfig["BadgesGridSection"] },
      PortfolioCarousel: { ...mainEasterEggsConfig["PortfolioCarousel"] },
    }
    const res = generator(params(easterEggsMap))

    if (get(res, `pages.${currentPages[0].slug}.BadgesGridSection.children`)) {
      const exp = !!get(res, `pages.${currentPages[0].slug}.BadgesGridSection.children.titleDescriptionBlock`)
      expect(exp).toBeFalsy()
    }

    if (get(res, `pages.${currentPages[0].slug}.PortfolioCarousel.children`)) {
      const exp = !!get(res, `pages.${currentPages[0].slug}.PortfolioCarousel.children.primaryButton`)
      expect(exp).toBeFalsy()
    }
  })
})
