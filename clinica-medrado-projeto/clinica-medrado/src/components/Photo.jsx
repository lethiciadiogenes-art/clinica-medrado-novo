/**
 * Foto com proporção fixa. Se `src` estiver vazio (ver config/site.js),
 * mostra uma moldura decorativa indicando qual foto entra ali.
 */
const tones = {
  blush: 'from-blush via-petal to-[#DDB3AC]',
  petal: 'from-[#F1DAD4] via-[#E4BDB6] to-[#C99590]',
  rose: 'from-[#E9C2BC] via-rose to-rose-deep',
  ink: 'from-[#4A3234] to-ink',
}

export default function Photo({ src, alt, label, tone = 'blush', className = '', imgClassName = '', priority = false }) {
  return (
    <div className={`relative overflow-hidden bg-blush [container-type:inline-size] ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div role="img" aria-label={alt} className={`absolute inset-0 bg-gradient-to-b ${tones[tone]} ${tone === 'ink' ? 'bg-ink' : ''}`}>
          <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_30%_10%,rgba(255,255,255,0.55),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.07] mix-blend-multiply [background-image:url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22160%22%20height=%22160%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%222%22/%3E%3C/filter%3E%3Crect%20width=%22160%22%20height=%22160%22%20filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
          <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(64px,22cqw,150px)] italic leading-none ${tone === 'ink' ? 'text-paper/10' : 'text-paper/45'}`}>
            M
          </span>
          {label && (
            <span className={`absolute inset-x-4 bottom-4 text-center text-[10px] uppercase tracking-[0.22em] ${tone === 'ink' || tone === 'rose' ? 'text-paper/80' : 'text-ink/55'}`}>
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
