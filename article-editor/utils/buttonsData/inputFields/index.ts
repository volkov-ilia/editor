import LINK_BUTTON_ACTION from "../actions/LINK_BUTTON_ACTION"
import SCROLL_TO_ANCHOR_BUTTON_ACTION from "../actions/SCROLL_TO_ANCHOR_BUTTON_ACTION"
import linkInputs from "./linkInputs"
import scrollToAnchorInputs from "./scrollToAnchorInputs"

const map = {
  [SCROLL_TO_ANCHOR_BUTTON_ACTION]: scrollToAnchorInputs,
  [LINK_BUTTON_ACTION]: linkInputs,
}

export default map
