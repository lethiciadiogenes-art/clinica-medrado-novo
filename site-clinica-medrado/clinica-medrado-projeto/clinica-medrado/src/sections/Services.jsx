import { images, services, whatsappLink } from '../config/site.js'
import Photo from '../components/Photo.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { ArrowIcon } from '../components/Icons.jsx'

const tones = ['petal', 'blush', 'rose', 'blush', 'petal', 'rose']

function ServiceCard({ service, index }) {
  const href = whatsappLink(`Olá! Vim pelo site e gostaria de saber mais sobre ${service.name}.`)
  return (
    <Reveal
      as="article"
      delay={(index % 3) * 110}
      className="group w-[80vw] max-w-[340px] shrink-0 snap-start md:w-auto md:max-w-none"
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative overflow-hidden">
          <Photo
            src={images.services[service.id]}
            alt={`${service.name} — Clínica Medrado`}
            imgClassName="object-top"
            label={`Foto · ${service.name}`}
            tone={tones[index % tones.length]}
            className="aspect-[4/5] transition-transform duration-[1400ms] ease-soft group-hover:scale-[1.045]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
            {service.short}
          </span>
          <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-paper text-ink opacity-0 transition-all duration-500 ease-soft group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
            <ArrowIcon />
          </span>
        </div>
        <div className="mt-5 flex items-baseline gap-4">
          <span className="font-display text-sm italic text-rose-deep">0{index + 1}</span>
          <h3 className="font-display text-[1.55rem] leading-tight">{service.name}</h3>
        </div>
        <p className="mt-3 text-[0.97rem] leading-[1.7] text-taupe">{service.description}</p>
        <span className="mt-4 inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 group-hover:border-rose-deep group-hover:text-rose-deep">
          Quero saber mais
        </span>
      </a>
    </Reveal>
  )
}

export default function Services() {
  return (
    <section id="tratamentos" className="bg-blush/45 py-20 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index="02" eyebrow="Tratamentos" title="Cada rosto pede um caminho próprio.">
            Protocolos que podem ser feitos isoladamente ou combinados, sempre a partir de uma avaliação individual.
          </SectionHeading>
          <p className="text-[11px] uppercase tracking-[0.22em] text-taupe md:hidden">Deslize para ver todos →</p>
        </div>
      </div>

      {/* Mobile: carrossel com deslize. Desktop: grade de 3 colunas. */}
      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-5 px-5 pb-2 sm:scroll-pl-8 sm:px-8 md:container-x md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-16 md:overflow-visible lg:mt-16 lg:grid-cols-3">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}
