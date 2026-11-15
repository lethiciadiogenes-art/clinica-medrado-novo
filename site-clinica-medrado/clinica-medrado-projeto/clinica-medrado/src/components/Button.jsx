import { ArrowIcon, WhatsAppIcon } from './Icons.jsx'

const variants = {
  solid: 'bg-ink text-paper before:bg-rose-deep',
  light: 'bg-paper text-ink before:bg-petal',
  outline: 'text-ink ring-1 ring-inset ring-ink/25 before:bg-ink hover:text-paper hover:ring-ink',
}

/**
 * Botão em formato de pílula. No hover, uma cor sobe por dentro do botão
 * e a seta desliza — efeito feito apenas com CSS.
 */
export default function Button({ href, variant = 'solid', icon = 'arrow', external = false, className = '', children, ...rest }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a
      href={href}
      {...externalProps}
      className={`group relative isolate inline-flex min-h-[54px] items-center justify-center gap-3 overflow-hidden rounded-full px-7 text-[12px] font-normal uppercase tracking-[0.2em] transition-colors duration-500 ease-soft before:absolute before:inset-0 before:-z-10 before:translate-y-[101%] before:rounded-full before:transition-transform before:duration-500 before:ease-soft hover:before:translate-y-0 ${variants[variant]} ${className}`}
      {...rest}
    >
      {icon === 'whatsapp' && <WhatsAppIcon className="h-[18px] w-[18px]" />}
      <span>{children}</span>
      {icon === 'arrow' && (
        <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-500 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  )
}
