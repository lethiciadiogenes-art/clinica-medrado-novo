import { images, site } from '../config/site.js'
import Photo from '../components/Photo.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="relative lg:col-span-5">
          <Reveal variant="photo">
            <Photo
              src={images.about}
              alt="Dra. Polyana Medrado na Clínica Medrado"
              label="Foto · a Dra. na clínica"
              tone="blush"
              className="aspect-[4/5] w-[84%]"
            />
          </Reveal>
          <Reveal variant="photo" delay={250} className="absolute -bottom-8 right-0 w-[42%] ring-8 ring-paper">
            <Photo src={images.aboutDetail} alt="Detalhe de um atendimento" label="Foto · detalhe" tone="rose" className="aspect-square" />
          </Reveal>
        </div>

        <div className="pt-6 lg:col-span-6 lg:col-start-7 lg:pt-10">
          <Reveal className="eyebrow flex items-center gap-3">
            <span className="font-display text-[13px] italic normal-case tracking-normal text-taupe">01</span>
            <span className="h-px w-8 bg-rose/60" />
            <span>Quem cuida de você</span>
          </Reveal>

          <Reveal as="h2" delay={90} className="display mt-5 text-[clamp(2.1rem,6.2vw,3.6rem)]">
            {site.professional}
          </Reveal>

          <Reveal as="p" delay={160} className="mt-7 font-display text-[1.45rem] italic leading-[1.4] text-ink/85 sm:text-[1.65rem]">
            “Escolhi estudar como cuidar dos efeitos do tempo no rosto — com planejamento, técnica e respeito à beleza de cada mulher.”
          </Reveal>

          <Reveal delay={240} className="lead mt-7 space-y-5">
            <p>
              À frente da Clínica Medrado, em Governador Valadares, a Dra. Polyana conduz cada tratamento a partir de uma ideia simples:
              rejuvenescer não é mudar quem você é.
            </p>
            <p>
              Referência em bioestimulador de colágeno, ela também atua como professora de pós-graduação e mentora de outros profissionais
              da estética — o mesmo critério que ensina é o que aplica em cada paciente.
            </p>
          </Reveal>

          <Reveal delay={320} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#tratamentos" variant="outline">
              Conhecer os tratamentos
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
