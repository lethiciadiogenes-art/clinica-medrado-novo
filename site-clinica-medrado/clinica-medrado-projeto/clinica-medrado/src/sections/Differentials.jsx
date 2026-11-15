import { differentials } from '../config/site.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading index="03" eyebrow="Diferenciais" title="O cuidado que não se percebe — só se sente.">
              Todo mundo nota que você está bem. Ninguém sabe dizer exatamente o que foi feito. É esse o resultado que a clínica busca.
            </SectionHeading>
          </div>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7">
          {differentials.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 90}
              className="group grid grid-cols-[3rem_1fr] gap-x-4 border-t border-line py-8 last:border-b sm:grid-cols-[5rem_1fr] sm:py-10"
            >
              <span className="font-display text-[1.6rem] italic leading-none text-rose transition-colors duration-500 group-hover:text-rose-deep sm:text-[2rem]">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-[1.5rem] leading-tight sm:text-[1.75rem]">{item.title}</h3>
                <p className="mt-3 max-w-md text-[0.98rem] leading-[1.75] text-taupe">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
