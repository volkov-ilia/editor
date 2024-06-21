import React from "react"
import { useSticky } from "../../../utils/useSticky"
import clsx from "clsx"
import FixedOnScreenContainerProps from "../../../others/types/nested/FixedOnScreenContainerProps"
import HEADER_HEIGHT from "../../../others/constants/HEADER_HEIGHT"

export const FixedOnScreenContainer: React.FC<FixedOnScreenContainerProps> = ({ children, threshold, isLeft }) => {
  const isSticky = useSticky({ threshold })
  return <div className={clsx({ "fixed top-0": isSticky }, isLeft ? "left-0" : "right-0")}>{children}</div>
}

FixedOnScreenContainer.defaultProps = {
  threshold: HEADER_HEIGHT * 16,
}
