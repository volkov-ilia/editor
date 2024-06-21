import { FixedOnScreenContainer, SmallComponentsToolbar } from "hwdtech-admin-components"
import React from "react"
import TEXT_CENTER from "../../utils/slate/globalValues/leafs/TEXT_CENTER"
import TEXT_RIGHT from "../../utils/slate/globalValues/leafs/TEXT_RIGHT"
import TEXT_LEFT from "../../utils/slate/globalValues/leafs/TEXT_LEFT"
import H2 from "../../utils/slate/globalValues/article/nestedTypes/SECOND_HEADER"
import H3 from "../../utils/slate/globalValues/article/nestedTypes/THIRD_HEADER"
import ITALIC from "../../utils/slate/globalValues/leafs/ITALIC"
import BOLD from "../../utils/slate/globalValues/leafs/BOLD"
import UNDERLINE from "../../utils/slate/globalValues/leafs/UNDERLINE"
import STRIKE from "../../utils/slate/globalValues/leafs/STRIKE"
import ORDERED_LIST from "../../utils/slate/globalValues/article/nestedTypes/ORDERED_LIST"
import UNORDERED_LIST from "../../utils/slate/globalValues/article/nestedTypes/UNORDERED_LIST"
import RightLinkButton from "./Slate/RightLinkButton"
import RightMarkButton from "./Slate/RightMarkButton"
import RightBlockButton from "./Slate/RightBlockButton"
import ApplicationComponentsToolbarProps from "../../types/ApplicationComponentsToolbarProps"
import RightDeleteButton from "./Slate/RightDeleteButton"

const ApplicationComponentsToolbar: React.FC<ApplicationComponentsToolbarProps> = ({
  setContentFormType,
  setIsFormOpen,
  setSelection,
  editor,
}) => {
  return (
    <FixedOnScreenContainer>
      <SmallComponentsToolbar>
        <RightMarkButton format={ITALIC} icon={"italics"} />
        <RightMarkButton format={BOLD} icon={"bold"} />
        <RightMarkButton format={UNDERLINE} icon={"underline"} />
        <RightMarkButton format={STRIKE} icon={"s"} />
        <RightBlockButton format={TEXT_LEFT} icon={"alignLeft"} />
        <RightBlockButton format={TEXT_CENTER} icon={"alignCenter"} />
        <RightBlockButton format={TEXT_RIGHT} icon={"alignRight"} />
        <RightBlockButton format={H2} icon={"h2"} />
        <RightBlockButton format={H3} icon={"h3"} />
        <RightLinkButton
          setContentFormType={setContentFormType}
          setIsFormOpen={setIsFormOpen}
          setSelection={setSelection}
          icon={"link"}
        />
        <RightBlockButton format={ORDERED_LIST} icon={"numList"} />
        <RightBlockButton format={UNORDERED_LIST} icon={"dotList"} />
        <RightDeleteButton icon={"rossCancel"} editor={editor} />
      </SmallComponentsToolbar>
    </FixedOnScreenContainer>
  )
}

export default ApplicationComponentsToolbar
