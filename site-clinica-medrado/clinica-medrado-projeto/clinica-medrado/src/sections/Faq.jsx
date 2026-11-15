import { useState } from 'react'
import { faq, whatsappLink } from '../config/site.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'

function FaqItem({ item, isOpen, onToggle, id }) {
  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-painel`}
          id={`${id}-botao`}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
        >
          <span className={`font-display text-[1.3rem] leading-snug transition-colors duration-300 sm:text-[1.5rem] ${isOpen ? 'text-rose-deep' : 'group-hover:text-rose-deep'}`}>
            {item.q}
          </span>
          <span className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-soft ${isOpen ? 'rotate-180 border-ink bg-ink text-paper' : 'border-ink/20 group-hover:border-ink'}`} aria-hidden="true">
            <span className="absolute h-px w-3.5 bg-current" />
            <span className={`absolute h-3.5 w-px bg-current transition-transform duration-500 ease-soft ${isOpen ? 'scale-y-0' : ''}`} />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-painel`}
        role="region"
        aria-labelledby={`${id}-botao`}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-soft ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-xl pb-7 pr-10 text-[1rem] leading-[1.8] text-taupe">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="duvidas" className="py-20 lg:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading index="05" eyebrow="Perguntas frequentes" title="Antes de agendar.">
              Não encontrou a sua dúvida? A equipe responde pelo WhatsApp.
            </SectionHeading>
            <Reveal delay={260} className="mt-8">
              <Button href={whatsappLink('Olá! Vim pelo site e tenho uma dúvida.')} external icon="whatsapp" variant="outline">
                Tirar uma dúvida
              </Button>
            </Reveal>
          </div>
        </div>

        <Reveal className="border-t border-line lg:col-span-7 lg:col-start-6">
          {faq.map((item, i) => (
            <FaqItem key={item.q} id={`faq-${i}`} item={item} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
