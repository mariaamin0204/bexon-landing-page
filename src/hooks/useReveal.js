import { useEffect, useRef } from 'react'

/* ==========================================================================
   useReveal: jab koi section scroll karke screen par aaye to us ke andar
   maujood .reveal elements ko ".is-visible" class de deta hai.
   Asal animation global.css ke .reveal / .reveal.is-visible mein hai.

   Istemal (aage components mein):
     const ref = useReveal()
     <section ref={ref}>
       <h2 className="reveal">...</h2>
       <p className="reveal" style={{ '--reveal-delay': '0.1s' }}>...</p>
     </section>
   ========================================================================== */

export default function useReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    // Container khud .reveal ho to wo bhi, aur us ke andar ke sab .reveal bhi
    const targets = [
      ...(node.classList.contains('reveal') ? [node] : []),
      ...node.querySelectorAll('.reveal'),
    ]
    if (targets.length === 0) return undefined

    const showAll = () => targets.forEach((el) => el.classList.add('is-visible'))

    // Purane browser ya reduced-motion: animation ke bagair seedha dikha do
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      showAll()
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target) // sirf ek baar animate hoga
          }
        })
      },
      { threshold, rootMargin },
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}