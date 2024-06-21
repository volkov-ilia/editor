import clsx from "clsx"
import { Icon } from "./Icon"
import React from "react"
import { useAmp } from "next/amp"
import RoundIconProps from "../../../others/types/nested/RoundIconProps"

export const RoundIcon: React.FC<RoundIconProps> = ({ icon, iconColor, className, size, ampStyle }) => {
  const isAmp = useAmp()

  return isAmp ? (
    <AmpRoundIcon icon={icon} iconColor={iconColor} size={size} ampStyle={ampStyle} />
  ) : (
    <NoAmpRoundIcon icon={icon} iconColor={iconColor} className={className} size={size} />
  )
}

const NoAmpRoundIcon: React.FC<RoundIconProps> = ({ icon, iconColor, className, size }) => {
  const sizes: { [key: string]: string } = {
    sm: "text-2xl w-12 h-12 sm-min",
    md: "text-3xl w-16 h-16 base-min",
    lg: "text-4xl w-20 h-20 lg-min",
  }
  return (
    <div className={clsx(size ? sizes[size] : sizes.sm, className)}>
      <Icon icon={icon} color={iconColor} />
      <style jsx>{`
        .sm-min {
          min-height: 3rem;
          min-width: 3rem;
        }
        .base-min {
          min-height: 4rem;
          min-width: 4rem;
        }
        .lg-min {
          min-height: 5rem;
          min-width: 5rem;
        }
      `}</style>
    </div>
  )
}

const AmpRoundIcon: React.FC<RoundIconProps> = ({ icon, iconColor, size, ampStyle }) => {
  const sizes: { [key: string]: string } = {
    sm: "text-2xl w-12 h-12 sm-min",
    md: "text-3xl w-16 h-16 base-min",
    lg: "text-4xl w-20 h-20 lg-min",
  }
  return (
    <div className={clsx(size ? sizes[size] : sizes.sm)} style={ampStyle}>
      <Icon icon={icon} color={iconColor} />
      <style jsx>{`
        .mt-2 {
          margin-top: 0.5rem;
        }
        .mr-4 {
          margin-right: 1rem;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .mb-8 {
          margin-bottom: 2rem;
        }
        .text-2xl {
          font-size: 1.5rem;
          line-height: 2rem;
        }
        .text-3xl {
          font-size: 1.875rem;
          line-height: 2.25rem;
        }
        .text-4xl {
          font-size: 2.25rem;
          line-height: 2.5rem;
        }
        .w-12 {
          width: 3rem;
        }
        .w-16 {
          width: 4rem;
        }
        .w-20 {
          width: 5rem;
        }
        .h-12 {
          height: 3rem;
        }
        .h-16 {
          height: 4rem;
        }
        .h-20 {
          height: 5rem;
        }
        .sm-min {
          min-height: 3rem;
          min-width: 3rem;
        }
        .base-min {
          min-height: 4rem;
          min-width: 4rem;
        }
        .lg-min {
          min-height: 5rem;
          min-width: 5rem;
        }
      `}</style>
    </div>
  )
}
