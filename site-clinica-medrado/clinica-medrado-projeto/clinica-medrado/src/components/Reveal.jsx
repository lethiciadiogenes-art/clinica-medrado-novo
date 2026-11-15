import { useReveal } from '../hooks/useReveal.js'

/** Envolve qualquer conteúdo com a animação de entrada. `delay` em ms cria o efeito em cascata. */
export default function Reveal({ as: Tag = 'div', delay = 0, variant = 'fade', className = '', style, children, ...rest }) {
  const ref = useReveal()
  const base = variant === 'photo' ? 'reveal-photo' : 'reveal'
  return (
    <Tag ref={ref} className={`${base} ${className}`} style={{ '--delay': `${delay}ms`, ...style }} {...rest}>
      {variant === 'photo' ? <div className="reveal-photo__clip">{children}</div> : children}
    </Tag>
  )
}
