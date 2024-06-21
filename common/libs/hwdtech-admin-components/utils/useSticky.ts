import useRafState from "react-use/lib/useRafState"
import React from "react"

export const useSticky: (options: { threshold: number }) => boolean = (options = { threshold: 50 }) => {
  const { threshold } = options
  const [isSticky, setSticky] = useRafState(false)

  const handleScroll = React.useCallback(() => {
    if (document.defaultView) {
      const newStickyState = document.defaultView.window.pageYOffset < threshold
      setSticky(!newStickyState)
    }
  }, [setSticky, threshold])

  React.useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll)
  }, [handleScroll])

  return isSticky
}
