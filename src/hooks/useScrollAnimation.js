import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element once it scrolls into view, respecting reduced-motion
 * preferences. Returns a ref to attach and a boolean for visibility.
 */
export default function useScrollAnimation({ threshold = 0.2, once = true } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(node)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, isVisible]
}
