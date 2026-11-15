import { images, site } from '../config/site.js'
import Photo from '../components/Photo.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'

// Posição e proporção de cada foto na grade (mobile: 2 colunas · desktop: 12 colunas).
const layout = [
  { cell: 'col-span-2 lg:col-span-5', ratio: 'aspect-[4/3] lg:aspect-[4/5]', tone: 'petal', label: 'Foto · a clínica', alt: 'Dra. Polyana ao lado do laser de CO₂ fracionado' },
  { cell: 'col-span-1 lg:col-span-3 lg:mt-24', ratio: 'aspect-[3/4]', tone: 'blush', label: 'Foto · atendimento', alt: 'Dra. Polyana na porta do consultório' },
  { cell: 'col-span-1 lg:col-span-4', ratio: 'aspect-[3/4] lg:aspect-square', tone: 'rose', label: 'Foto · detalhe', alt: 'Detalhe da recepção da Clínica Medrado' },
  { cell: 'col-span-1 lg:col-span-4', ratio: 'aspect-[3/4] lg:aspect-[4/3]', tone: 'blush', label: 'Foto · recepção', alt: 'Fachada da Clínica Medrado' },
  { cell: 'col-span-1 lg:col-span-3 lg:mt-16', ratio: 'aspect-[3/4]', tone: 'rose', label: 'Foto · tecnologia', alt: 'Dra. Polyana durante uma consulta' },
  { cell: 'col-span-2 lg:col-span-5', ratio: 'aspect-[4/3]', tone: 'petal', label: 'Foto · a Dra. em ação', alt: 'Dra. Polyana Medrado no consultório' },
]

export default function Gallery() {
  return (
    <section id="galeria" className="bg-blush/45 py-20 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index="04" eyebrow="Galeria" title="Um espaço pensado para você desacelerar.">
            Bastidores, ambiente e detalhes do dia a dia na Clínica Medrado.
          </SectionHeading>
          <Reveal delay={200}>
            <Button href={site.links.instagram} external variant="outline">
              Ver mais no Instagram
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 items-start gap-3 sm:gap-5 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          {layout.map((item, i) => (
            <Reveal key={i} variant="photo" delay={(i % 3) * 120} className={item.cell}>
              <div className="group overflow-hidden">
                <Photo
                  src={images.gallery[i]}
                  alt={item.alt}
                  label={item.label}
                  tone={item.tone}
                  imgClassName="object-[50%_20%]"
                  className={`${item.ratio} transition-transform duration-[1400ms] ease-soft group-hover:scale-[1.05]`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
