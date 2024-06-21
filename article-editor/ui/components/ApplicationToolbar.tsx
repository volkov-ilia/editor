import { icons, Toolbar, ToolbarItemsBox } from "hwdtech-admin-components"
import React from "react"
import MarkButton from "./Slate/MarkButton"
import BlockButton from "./Slate/BlockButton"
import ORDERED_LIST from "../../utils/slate/globalValues/article/nestedTypes/ORDERED_LIST"
import UNORDERED_LIST from "../../utils/slate/globalValues/article/nestedTypes/UNORDERED_LIST"
import STRIKE from "../../utils/slate/globalValues/leafs/STRIKE"
import UNDERLINE from "../../utils/slate/globalValues/leafs/UNDERLINE"
import BOLD from "../../utils/slate/globalValues/leafs/BOLD"
import ITALIC from "../../utils/slate/globalValues/leafs/ITALIC"
import H3 from "../../utils/slate/globalValues/article/nestedTypes/THIRD_HEADER"
import H2 from "../../utils/slate/globalValues/article/nestedTypes/SECOND_HEADER"
import TEXT_LEFT from "../../utils/slate/globalValues/leafs/TEXT_LEFT"
import TEXT_RIGHT from "../../utils/slate/globalValues/leafs/TEXT_RIGHT"
import TEXT_CENTER from "../../utils/slate/globalValues/leafs/TEXT_CENTER"
import LinkButton from "./Slate/LinkButton"
import ApplicationToolbarProps from "../../types/ApplicationToolbarProps"

const ApplicationToolbar: React.FC<ApplicationToolbarProps> = ({ setContentFormType, setIsFormOpen, setSelection }) => (
  <Toolbar>
    <ToolbarItemsBox>
      <BlockButton format={TEXT_CENTER} icon={icons.alignCenter} size={"l"} />
      <BlockButton format={TEXT_RIGHT} icon={icons.alignRight} size={"l"} />
      <BlockButton format={TEXT_LEFT} icon={icons.alignLeft} size={"l"} />
    </ToolbarItemsBox>
    <ToolbarItemsBox>
      <BlockButton format={H2} icon={icons.h2} size={"m"} />
      <BlockButton format={H3} icon={icons.h3} size={"m"} />
      <MarkButton format={ITALIC} icon={icons.italics} size={"m"} />
      <MarkButton format={BOLD} icon={icons.bold} size={"m"} />
      <MarkButton format={UNDERLINE} icon={icons.underline} size={"m"} />
      <MarkButton format={STRIKE} icon={icons.s} size={"m"} />
    </ToolbarItemsBox>
    <ToolbarItemsBox>
      <LinkButton
        setContentFormType={setContentFormType}
        setIsFormOpen={setIsFormOpen}
        setSelection={setSelection}
        icon={icons.link}
      />
      <BlockButton format={ORDERED_LIST} icon={icons.numList} />
      <BlockButton format={UNORDERED_LIST} icon={icons.dotList} />
    </ToolbarItemsBox>
  </Toolbar>
)

export default ApplicationToolbar
