import { useEffect, useRef, useState } from 'react'

export default function Counter({ cuenta }) {
  const [count, setCount] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const finalCount = cuenta
    const duration = 1000
    const steps = finalCount
    const stepInterval = duration / steps
    let currentStep = 0

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // Trigger when at least 50% of the element is in the viewport
    }

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            if (currentStep < steps) {
              setCount(currentStep)
              currentStep += 1
            } else {
              clearInterval(interval)
              setCount(finalCount)
              observer.unobserve(containerRef.current)
            }
          }, stepInterval)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [cuenta])

  return (
    <span className="count" ref={containerRef}>
      {count}
    </span>
  )
}
