import Reveal from './Reveal.jsx'

/** Cabeçalho padrão das seções: número + rótulo, título e texto de apoio. */
export default function SectionHeading({ index, eyebrow, title, children, align = 'left', className = '' }) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      <Reveal className={`eyebrow flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        {index && <span className="font-display text-[13px] italic tracking-normal text-taupe normal-case">{index}</span>}
        {index && <span className="h-px w-8 bg-rose/60" />}
        <span>{eyebrow}</span>
      </Reveal>
      <Reveal as="h2" delay={90} className="display mt-5 text-[clamp(2.1rem,6.2vw,3.6rem)]">
        {title}
      </Reveal>
      {children && (
        <Reveal as="p" delay={180} className="lead mt-6">
          {children}
        </Reveal>
      )}
    </div>
  )
}
