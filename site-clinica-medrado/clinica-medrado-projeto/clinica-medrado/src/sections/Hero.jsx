import { facts, images, site, whatsappLink } from '../config/site.js'
import Button from '../components/Button.jsx'
import Photo from '../components/Photo.jsx'

function RotatingSeal() {
  return (
    <div className="relative h-[104px] w-[104px] sm:h-[128px] sm:w-[128px]" aria-hidden="true">
      <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slow">
        <defs>
          <path id="seal-path" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <circle cx="60" cy="60" r="59" className="fill-paper" />
        <text className="fill-ink text-[9.4px] uppercase">
          <textPath href="#seal-path" textLength="280" lengthAdjust="spacing">Beleza com naturalidade · Clínica Medrado ·</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-display text-3xl italic text-rose-deep">M</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-[84px]">
      {/* Mancha de cor suave ao fundo */}
      <div className="pointer-events-none absolute -right-[20%] -top-[10%] h-[70vw] max-h-[900px] w-[70vw] max-w-[900px] rounded-full bg-blush/70 blur-3xl" aria-hidden="true" />

      <div className="container-x relative grid items-end gap-x-12 gap-y-12 pb-14 pt-8 lg:grid-cols-12 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-7 lg:pb-10">
          <p className="eyebrow animate-rise">{site.brand} · {site.city}</p>

          <h1 className="display mt-6 animate-rise text-[clamp(3.1rem,13.5vw,7.4rem)] leading-[0.98] [animation-delay:120ms]">
            Beleza com <em className="font-normal italic text-rose-deep">naturalidade.</em>
          </h1>

          <p className="lead mt-7 max-w-[30rem] animate-rise [animation-delay:260ms]">
            Harmonização facial e corporal planejada para que você continue se reconhecendo no espelho — só que na sua melhor versão.
          </p>

          <div className="mt-9 flex animate-rise flex-col gap-3 [animation-delay:380ms] sm:flex-row sm:items-center">
            <Button href={whatsappLink()} external icon="whatsapp">
              Agendar avaliação
            </Button>
            <Button href="#tratamentos" variant="outline">
              Ver tratamentos
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="animate-unveil [animation-delay:200ms]">
            <Photo
              src={images.hero}
              alt="Retrato da Dra. Polyana Medrado"
              label="Foto · retrato da Dra. Polyana"
              tone="petal"
              priority
              className="aspect-[4/5] w-full rounded-t-[999px] sm:mx-auto sm:max-w-md lg:max-w-none"
            />
          </div>
          <div className="absolute -left-2 bottom-14 animate-rise [animation-delay:900ms] sm:left-[calc(50%-15.5rem)] lg:-left-16 lg:bottom-14">
            <RotatingSeal />
          </div>
        </div>
      </div>

      {/* Faixa de credenciais */}
      <div className="border-y border-line">
        <dl className="container-x grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className="flex animate-rise items-baseline gap-4 py-5 sm:flex-col sm:gap-1 sm:px-8 sm:py-7 sm:first:pl-0"
              style={{ animationDelay: `${600 + i * 120}ms` }}
            >
              <dt className="order-2 text-[13px] text-taupe sm:order-2">{fact.label}</dt>
              <dd className="order-1 min-w-[7.5rem] font-display text-[1.6rem] leading-none sm:min-w-0 sm:text-[1.9rem]">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
