import { useState, useEffect } from "react"

export const useOnScreen = (options: IntersectionObserverInit) => {
  const [ref, setRef] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio > 0) {
        setVisible(true)
      }
    }, options)

    if (ref) {
      intersectionObserver.observe(ref)
    }
  }, [ref, options])

  return [setRef, visible]
}
