import { useState, useEffect, useRef } from 'react'

export function useCountdown(target) {
  const [t, setT] = useState({ days: '--', hours: '--', mins: '--', secs: '--' })
  useEffect(() => {
    const tick = () => {
      const diff = new Date(target) - new Date()
      if (diff <= 0) {
        setT({ days: '00', hours: '00', mins: '00', secs: '00' })
        return
      }
      setT({
        days:  String(Math.floor(diff / 86400000)).padStart(2, '0'),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        mins:  String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        secs:  String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return t
}

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}
