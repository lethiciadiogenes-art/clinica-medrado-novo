import { nav, site, whatsappLink } from '../config/site.js'
import { InstagramIcon, PinIcon, WhatsAppIcon, ArrowIcon } from '../components/Icons.jsx'
import { Logo } from './Header.jsx'

const linkClass = 'transition-colors duration-300 hover:text-rose-deep'
const titleClass = 'text-[11px] uppercase tracking-[0.24em] text-taupe'

export default function Footer() {
  return (
    <footer className="pt-20 lg:pt-28">
      <div className="container-x">
        <div className="grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-xs font-display text-[1.35rem] italic leading-snug text-ink/80">{site.tagline}.</p>
            <div className="mt-7 flex gap-3">
              <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 transition-all duration-500 ease-soft hover:border-ink hover:bg-ink hover:text-paper">
                <InstagramIcon />
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 transition-all duration-500 ease-soft hover:border-ink hover:bg-ink hover:text-paper">
                <WhatsAppIcon />
              </a>
              <a href={site.links.maps} target="_blank" rel="noopener noreferrer" aria-label="Como chegar" className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 transition-all duration-500 ease-soft hover:border-ink hover:bg-ink hover:text-paper">
                <PinIcon />
              </a>
            </div>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-2">
            <h2 className={titleClass}>Navegação</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className={titleClass}>Contato</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  WhatsApp · {site.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Instagram · {site.links.instagramHandle}
                </a>
              </li>
              <li>
                <a href={site.links.vipGroup} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Grupo VIP no WhatsApp
                </a>
              </li>
              <li>
                <a href={site.links.mentorship} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Mentorias e cursos para profissionais
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className={titleClass}>Onde estamos</h2>
            <address className="mt-5 not-italic leading-[1.8]">
              {site.address.line1}
              <br />
              {site.address.line2}
            </address>
            {site.hours && <p className="mt-3 text-taupe">{site.hours}</p>}
            <a href={site.links.maps} target="_blank" rel="noopener noreferrer" className="group mt-5 inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 hover:border-rose-deep hover:text-rose-deep">
              Como chegar <ArrowIcon className="h-3 w-3 transition-transform duration-500 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-7 text-[12px] text-taupe sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.brand}. Todos os direitos reservados.</p>
          <p>Os resultados variam de pessoa para pessoa. A indicação de cada tratamento depende de avaliação individual.</p>
        </div>
      </div>
    </footer>
  )
}
