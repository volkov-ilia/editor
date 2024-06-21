import React from "react"
import { SymbolIcon } from "./SymbolIcon"
import { useAmp } from "next/amp"
import IconProps from "../../../others/types/nested/IconProps"

export const Icon: React.FC<IconProps> = ({ color, icon }) => {
  const isAmp = useAmp()

  return isAmp ? <AmpIcon color={color} icon={icon} /> : <NoAmpIcon color={color} icon={icon} />
}

const NoAmpIcon: React.FC<IconProps> = ({ color, icon }) => (
  <div className="icon-box relative rounded-full w-full h-full flex items-center justify-center overflow-hidden bg-color text-white">
    {icon && <SymbolIcon icon={icon} />}
    <style jsx>{`
      .bg-color {
        background-image: ${color};
      }
    `}</style>
    <style jsx>
      {`
        .icon-box::after {
          content: "";
          transform: rotate(-45deg);
          background-color: rgba(255, 255, 255, 0.15);
          width: 100%;
          height: 28px;
          position: absolute;
        }
        .icon-box::before {
          content: "";
          transform: rotate(45deg);
          background-color: rgba(0, 0, 0, 0.05);
          width: 100%;
          height: 28px;
          position: absolute;
        }
        .icon-img {
          height: 60%;
          width: 60%;
          background-size: contain;
          background-position: center center;
          background-repeat: no-repeat;
        }
      `}
    </style>
  </div>
)

const AmpIcon: React.FC<IconProps> = ({ color, icon }) => (
  <div className="icon-box bg-color">
    {icon && <SymbolIcon icon={icon} />}
    <style jsx>
      {`
        .bg-color {
          background-image: ${color};
        }
        .icon-box {
          position: relative;
          border-radius: 9999px;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          color: rgba(255, 255, 255, 1);
        }
        .icon-box::after {
          content: "";
          transform: rotate(-45deg);
          background-color: rgba(255, 255, 255, 0.15);
          width: 100%;
          height: 28px;
          position: absolute;
        }
        .icon-box::before {
          content: "";
          transform: rotate(45deg);
          background-color: rgba(0, 0, 0, 0.05);
          width: 100%;
          height: 28px;
          position: absolute;
        }
        .icon-img {
          height: 60%;
          width: 60%;
          background-size: contain;
          background-position: center center;
          background-repeat: no-repeat;
        }
      `}
    </style>
  </div>
)
