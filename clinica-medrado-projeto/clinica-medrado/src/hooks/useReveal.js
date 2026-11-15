import { useEffect, useRef } from 'react'

/**
 * Marca o elemento como visível (classe `is-visible`) quando ele entra na tela.
 * A animação em si é CSS (ver `.reveal` e `.reveal-photo` em index.css).
 */
export function useReveal({ threshold = 0.08, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin])

  return ref
}
