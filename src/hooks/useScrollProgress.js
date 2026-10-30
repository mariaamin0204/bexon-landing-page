import { useEffect, useState } from 'react'

/* ==========================================================================
   useScrollProgress: page kitna scroll hua hai, wo 0 se 100 ke number mein
   deta hai. Video mein neeche-right wale gol button par jo percentage
   (7%, 38%, 70%...) dikhti hai, wo isi se aayegi.

   Istemal (aage ScrollTop component mein):
     const progress = useScrollProgress()   // 0 se 100
   ========================================================================== */

function readProgress() {
  const doc = document.documentElement
  const scrollable = doc.scrollHeight - window.innerHeight
  if (scrollable <= 0) return 0
  const value = (window.scrollY / scrollable) * 100
  return Math.min(100, Math.max(0, Math.round(value)))
}

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = null

    const update = () => {
      frame = null
      // Sirf tab state badlo jab number sach mein badla ho (re-render kam)
      setProgress((prev) => {
        const next = readProgress()
        return prev === next ? prev : next
      })
    }

    // Scroll par har baar nahi, har frame mein sirf ek baar hisaab
    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  return progress
}