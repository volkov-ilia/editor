export const scrollToAnchor = ({
  anchor,
  offset = 0,
  isAmp = false,
}: {
  anchor: string
  offset: number
  isAmp: boolean
}) => {
  return isAmp ? AmpScrollToAnchor(anchor) : () => NoAmpScrollToAnchor(anchor, offset)
}

export const NoAmpScrollToAnchor = (anchor: string, offset: number) => {
  if (process.browser) {
    const $anchor = document.getElementById(anchor)
    if ($anchor) {
      const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset
      window.scroll({
        top: offsetTop - offset,
        behavior: "smooth",
      })
    }
  }
}

const AmpScrollToAnchor = (anchor: string) => `tap:AMP.scrollTo(id=${anchor}, position='top')`
