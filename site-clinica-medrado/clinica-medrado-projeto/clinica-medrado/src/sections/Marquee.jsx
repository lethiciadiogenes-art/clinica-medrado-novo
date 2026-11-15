import { services } from '../config/site.js'

/** Faixa em movimento contínuo com os nomes dos tratamentos. */
export default function Marquee() {
  const items = [...services, ...services]
  return (
    <div className="overflow-hidden border-b border-line py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
        {items.map((s, i) => (
          <span key={i} className="flex items-center whitespace-nowrap font-display text-[1.35rem] italic text-ink/70">
            <span className="px-7">{s.name}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-rose" />
          </span>
        ))}
      </div>
    </div>
  )
}
