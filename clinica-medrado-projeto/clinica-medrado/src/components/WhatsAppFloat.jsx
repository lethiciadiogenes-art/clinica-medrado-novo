import { whatsappLink } from '../config/site.js'
import { useScrolled } from '../hooks/useScrolled.js'
import { WhatsAppIcon } from './Icons.jsx'

/** Botão flutuante de WhatsApp — aparece depois que a pessoa começa a rolar a página. */
export default function WhatsAppFloat() {
  const visible = useScrolled(520)
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-5 right-5 z-40 flex h-14 items-center rounded-full bg-ink text-paper shadow-[0_12px_32px_-8px_rgba(42,28,29,0.45)] transition-all duration-500 ease-soft hover:bg-rose-deep sm:bottom-7 sm:right-7 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span className="flex h-14 w-14 items-center justify-center">
        <WhatsAppIcon className="h-6 w-6" />
      </span>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-[11px] uppercase tracking-[0.2em] transition-[max-width,padding] duration-500 ease-soft group-hover:max-w-[160px] group-hover:pr-6 sm:block">
        Agendar
      </span>
    </a>
  )
}
