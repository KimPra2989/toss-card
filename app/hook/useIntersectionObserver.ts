import { useEffect, RefObject } from 'react'

const useIntersectionObserver = (
  targetRef: RefObject<HTMLElement> | null,
  onIntersect: () => void,
) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onIntersect()
      }
    })

    const target = targetRef?.current
    if (target) {
      observer.observe(target)
    }

    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [targetRef, onIntersect])
}

export default useIntersectionObserver
