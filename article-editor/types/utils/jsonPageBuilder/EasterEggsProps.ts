type nestedConfig = { base: string; sm?: string; lg?: string; md?: string }

type EasterEggsProps = {
  posX: nestedConfig
  posY: nestedConfig
  textSize: nestedConfig
  hover?: boolean
  bg?: boolean
  rotate?: number
  icon: string
  color: string
}

export default EasterEggsProps
