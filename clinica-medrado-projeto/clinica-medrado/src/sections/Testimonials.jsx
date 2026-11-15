import { testimonials } from '../config/site.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

/** Só aparece quando houver depoimentos reais cadastrados em config/site.js. */
export default function Testimonials() {
  if (!testimonials.length) return null
  return (
    <section id="depoimentos" className="py-20 lg:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Depoimentos" title="Quem viveu a experiência." align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={i} delay={(i % 3) * 110} className="flex flex-col border border-line bg-paper p-8">
              <span className="font-display text-5xl italic leading-none text-rose" aria-hidden="true">“</span>
              <blockquote className="mt-2 font-display text-[1.25rem] italic leading-[1.5]">{t.text}</blockquote>
              <figcaption className="mt-auto pt-8 text-[11px] uppercase tracking-[0.22em] text-taupe">{t.name}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
