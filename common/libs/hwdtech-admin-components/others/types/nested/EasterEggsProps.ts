type nestedConfig = { base: string; sm?: string; lg?: string; md?: string }

type EasterEggsProps = {
  posX: nestedConfig
  posY: nestedConfig
  hover?: boolean
  bg?: boolean
  rotate?: number
  icon: React.ReactNode
  color: string
}

export default EasterEggsProps
