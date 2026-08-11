import { useEffect, useState, useRef } from 'react'

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        if (options.once !== false && ref.current) {
          observer.unobserve(ref.current)
        }
      } else if (options.once === false) {
        setIsVisible(false)
      }
    }, { threshold: options.threshold || 0.15, ...options })

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [options])

  return [ref, isVisible]
}
