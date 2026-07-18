import { useEffect, useState } from 'react'

/**
 * Tracks scroll progress (0 -> 1) across a target element's height,
 * used to grow the botanical vine rail as the visitor scrolls the page.
 */
export default function useScrollProgress(targetRef) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const target = targetRef?.current

    function handleScroll() {
      const height = target
        ? target.offsetHeight
        : document.documentElement.scrollHeight - window.innerHeight

      const scrolled = window.scrollY
      const pct = height > 0 ? Math.min(Math.max(scrolled / height, 0), 1) : 0
      setProgress(pct)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [targetRef])

  return progress
}
