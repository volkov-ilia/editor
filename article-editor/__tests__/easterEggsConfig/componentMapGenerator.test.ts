import { test } from "@jest/globals"
import { componentNestedConfigGenerator } from "../../utils/easterEggsConfig/componentEasterEggsMapGenerator"
import PEER_CHILDREN_LIST from "../../utils/easterEggsConfig/dataTypes/PEER_CHILDREN_LIST"
import SIMPLE_ITEM from "../../utils/easterEggsConfig/dataTypes/SIMPLE_ITEM"
import PEER_CHILDREN_MAP from "../../utils/easterEggsConfig/dataTypes/PEER_CHILDREN_MAP"
import { listComponentsEasterEggs } from "../../utils/listComponentsEasterEggs"

describe(`check generator config easter eggs`, () => {
  test(`componentNestedConfigGenerator AboutHoursSection`, () => {
    const res = componentNestedConfigGenerator(listComponentsEasterEggs["AboutHoursSection"])
    const actual = {
      AboutHoursSection: {
        titlePrimaryDescriptionBlock: {
          dataType: SIMPLE_ITEM,
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
              textSize: {
                base: "1.5rem",
              },
            },
            {
              posX: {
                base: "50%",
              },
              posY: {
                base: "-2.3rem",
              },
              textSize: {
                base: "2rem",
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
              textSize: {
                base: "2.3rem",
              },
            },
          ],
        },
      },
    }
    expect(res.titlePrimaryDescriptionBlock).toEqual(actual.AboutHoursSection.titlePrimaryDescriptionBlock)
  })

  test(`componentNestedConfigGenerator BadgesGridSection`, () => {
    const res = componentNestedConfigGenerator(listComponentsEasterEggs["BadgesGridSection"])
    const actual = {
      BadgesGridSection: {
        badgesCard: {
          dataType: PEER_CHILDREN_MAP,
          jsonChildrenKey: ["children"],
          key: "badgesCard",
          max: 6,
          nested: {
            imageComponent: {
              dataType: SIMPLE_ITEM,
              easterEggs: [
                {
                  posX: {
                    base: "0",
                  },
                  posY: {
                    base: "0",
                  },
                  textSize: {
                    base: "2rem",
                  },
                },
                {
                  posX: {
                    base: "80%",
                  },
                  posY: {
                    base: "80%",
                  },
                  textSize: {
                    base: "1.9rem",
                  },
                },
              ],
              key: "imageComponent",
              max: 2,
            },
            text: {
              dataType: SIMPLE_ITEM,
              easterEggs: [
                {
                  posX: {
                    base: "90%",
                  },
                  posY: {
                    base: "-1.5rem",
                  },
                  textSize: {
                    base: "1.5rem",
                  },
                },
                {
                  posX: {
                    base: "15%",
                  },
                  posY: {
                    base: "95%",
                  },
                  textSize: {
                    base: "1.2rem",
                  },
                },
              ],
              key: "text",
              max: 2,
            },
            thirdLevelTitle: {
              dataType: SIMPLE_ITEM,
              easterEggs: [
                {
                  posX: {
                    base: "-2rem",
                  },
                  posY: {
                    base: "-1rem",
                  },
                  textSize: {
                    base: "2rem",
                  },
                },
                {
                  posX: {
                    base: "90%",
                  },
                  posY: {
                    base: "-15%",
                  },
                  textSize: {
                    base: "1.9rem",
                  },
                },
              ],
              key: "thirdLevelTitle",
              max: 2,
            },
          },
        },
      },
    }
    expect(res.badgesCard).toEqual(actual.BadgesGridSection.badgesCard)
  })

  test(`componentNestedConfigGenerator BoxWithAppearedBlock`, () => {
    const res = componentNestedConfigGenerator(listComponentsEasterEggs["BoxWithAppearedBlock"])
    const actual = {
      BoxWithAppearedBlock: {
        primaryButton: {
          dataType: SIMPLE_ITEM,
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
              textSize: {
                base: "1.5rem",
              },
            },
            {
              posX: {
                base: "15%",
              },
              posY: {
                base: "95%",
              },
              textSize: {
                base: "1.2rem",
              },
            },
            {
              posX: {
                base: "80%",
              },
              posY: {
                base: "-50%",
              },
              textSize: {
                base: "4rem",
              },
              hover: true,
            },
          ],
        },
        reasons: {
          dataType: PEER_CHILDREN_MAP,
          key: "reasonsWithTitle",
          max: 6,
          nested: {
            reasons: {
              dataType: PEER_CHILDREN_LIST,
              easterEggs: [
                {
                  posX: {
                    base: "14%",
                  },
                  posY: {
                    base: "5rem",
                  },
                  textSize: {
                    base: "2rem",
                  },
                },
                {
                  posX: {
                    base: "75%",
                  },
                  posY: {
                    base: "88%",
                  },
                  textSize: {
                    base: "1.6rem",
                  },
                },
                {
                  posX: {
                    base: "65%",
                  },
                  posY: {
                    base: "-6%",
                  },
                  textSize: {
                    base: "2rem",
                  },
                },
                {
                  posX: {
                    base: "25%",
                  },
                  posY: {
                    base: "-6%",
                  },
                  textSize: {
                    base: "2rem",
                  },
                },
              ],
              jsonChildrenKey: ["reasons"],
              key: "reasons",
              max: 4,
            },
            titleDescriptionBlock: {
              dataType: SIMPLE_ITEM,
              easterEggs: [
                {
                  posX: {
                    base: "35%",
                  },
                  posY: {
                    base: "-1.8rem",
                    sm: "-2.5rem",
                  },
                  textSize: {
                    base: "2.3rem",
                    sm: "3rem",
                  },
                },
                {
                  posX: {
                    base: "5%",
                  },
                  posY: {
                    base: "1.5rem",
                    lg: "2.5rem",
                    sm: "2rem",
                  },
                  textSize: {
                    base: "1.875rem",
                  },
                },
              ],
              key: "titleDescriptionBlock",
              max: 2,
            },
          },
        },
        componentAnimator: {
          dataType: PEER_CHILDREN_MAP,
          jsonChildrenKey: ["images"],
          key: "componentAnimator",
          max: 2,
          nested: {
            imageComponent: {
              dataType: SIMPLE_ITEM,
              easterEggs: [
                {
                  posX: {
                    base: "0",
                  },
                  posY: {
                    base: "0",
                  },
                  textSize: {
                    base: "2rem",
                  },
                },
                {
                  posX: {
                    base: "80%",
                  },
                  posY: {
                    base: "80%",
                  },
                  textSize: {
                    base: "1.9rem",
                  },
                },
              ],
              key: "imageComponent",
              max: 2,
            },
          },
        },
      },
    }
    expect(res.componentAnimator).toEqual(actual.BoxWithAppearedBlock.componentAnimator)
    expect(res.reasonsWithTitle).toEqual(actual.BoxWithAppearedBlock.reasons)
    expect(res.primaryButton).toEqual(actual.BoxWithAppearedBlock.primaryButton)
  })
})
