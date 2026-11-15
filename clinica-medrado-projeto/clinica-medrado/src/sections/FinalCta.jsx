import { images, site, whatsappLink } from '../config/site.js'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import Photo from '../components/Photo.jsx'

export default function FinalCta() {
  return (
    <section id="agendar" className="px-3 sm:px-5">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-ink text-paper sm:rounded-[40px]">
        {images.cta && (
          <div className="absolute inset-0 -z-10 opacity-30">
            <Photo src={images.cta} alt="" className="h-full !bg-ink" imgClassName="object-[30%_20%]" />
          </div>
        )}
        <div className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-rose-deep/35 blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-52 right-[-10%] -z-10 h-[560px] w-[560px] rounded-full bg-rose/20 blur-[130px]" aria-hidden="true" />

        <div className="container-x py-20 text-center sm:py-28 lg:py-36">
          <Reveal className="eyebrow !text-petal">Sua avaliação</Reveal>
          <Reveal as="h2" delay={100} className="display mx-auto mt-6 max-w-4xl text-[clamp(2.5rem,9vw,5.6rem)] leading-[1.02]">
            O primeiro passo é uma <em className="font-normal italic text-petal">boa conversa.</em>
          </Reveal>
          <Reveal as="p" delay={200} className="mx-auto mt-7 max-w-md text-[1.05rem] leading-[1.75] text-paper/70">
            Agende a sua avaliação na Clínica Medrado e receba um plano pensado para o seu rosto e para o seu momento.
          </Reveal>
          <Reveal delay={300} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={whatsappLink()} external icon="whatsapp" variant="light" className="w-full sm:w-auto">
              Agendar pelo WhatsApp
            </Button>
            <a href={`tel:+${site.whatsapp.number}`} className="py-2 text-[12px] uppercase tracking-[0.22em] text-paper/70 underline decoration-paper/30 underline-offset-8 transition-colors duration-300 hover:text-paper hover:decoration-paper">
              {site.whatsapp.display}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
