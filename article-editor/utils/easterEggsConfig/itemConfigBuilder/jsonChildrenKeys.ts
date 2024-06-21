interface JsonChildrenKeys {
  [key: string]: string[]
}

const map: JsonChildrenKeys = {
  badgesCard: ["children"],
  reasons: ["reasons"],
  reasonsWithTitle: ["items"],
  comments: ["comments"],
  componentList: ["text"],
  contact: ["items"],
  infoSiteWithMap: ["items"],
  gridPlate: ["cards"],
  infoBlocksAndButtons: ["items"],
  letTheNumberSpeakCard: ["cards"],
  letTheNumberSpeakDescBox: ["descBox"],
  imageComponent: ["photos"],
  commentWithNoPhoto: ["comments"],
  points: ["text", "textList"],
  componentAnimator: ["images", "appearedImage"],
  portfolioCarouselCard: ["children"],
  portfolioPlate: ["cards"],
  statisticBlock: ["items"],
  stepItem: ["items"],
}

export default map
