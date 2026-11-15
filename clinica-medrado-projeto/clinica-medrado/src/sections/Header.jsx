import { useEffect, useState } from 'react'
import { nav, site, whatsappLink } from '../config/site.js'
import { useScrolled } from '../hooks/useScrolled.js'
import Button from '../components/Button.jsx'

export function Logo({ className = '' }) {
  return (
    <a href="#inicio" className={`group inline-flex flex-col leading-none ${className}`} aria-label={`${site.brand} — início`}>
      <span className="font-display text-[22px] tracking-[0.02em]">
        Medrado<span className="text-rose-deep">.</span>
      </span>
      <span className="mt-1.5 text-[9px] uppercase tracking-[0.34em] opacity-70">Dra. Polyana Medrado</span>
    </a>
  )
}

export default function Header() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  // Trava a rolagem da página enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-soft ${
        scrolled && !open ? 'bg-paper/85 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className={`container-x flex items-center justify-between transition-[height] duration-500 ease-soft ${scrolled ? 'h-[68px]' : 'h-[84px]'}`}>
        <Logo className="relative z-50" />

        <nav aria-label="Navegação principal" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-2 text-[12px] uppercase tracking-[0.2em] text-ink/80 transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-rose-deep after:transition-transform after:duration-500 after:ease-soft hover:text-ink hover:after:origin-left hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={whatsappLink()} external className="!min-h-[46px] !px-6">
            Agendar
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="relative z-50 -mr-2 flex h-12 w-12 items-center justify-center lg:hidden"
        >
          <span className="relative block h-3 w-7">
            <span className={`absolute left-0 h-px w-full bg-ink transition-all duration-500 ease-soft ${open ? 'top-1/2 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 h-px w-full bg-ink transition-all duration-500 ease-soft ${open ? 'top-1/2 -rotate-45' : 'top-full'}`} />
          </span>
        </button>
      </div>

      {/* Menu mobile em tela cheia */}
      <div
        id="menu-mobile"
        className={`fixed inset-0 z-40 flex flex-col bg-paper px-5 pb-8 pt-28 transition-[opacity,visibility] duration-500 ease-soft lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Navegação mobile" className="flex flex-col">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
              className={`flex items-baseline justify-between border-b border-line py-5 font-display text-[2rem] transition-[opacity,transform] duration-700 ease-soft ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              {item.label}
              <span className="font-display text-sm italic text-taupe">0{i + 1}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto">
          <Button href={whatsappLink()} external icon="whatsapp" className="w-full" onClick={() => setOpen(false)}>
            Agendar avaliação
          </Button>
          <p className="mt-5 text-center text-[11px] uppercase tracking-[0.24em] text-taupe">{site.city}</p>
        </div>
      </div>
    </header>
  )
}
