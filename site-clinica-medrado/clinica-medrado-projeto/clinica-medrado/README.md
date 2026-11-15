# Clínica Medrado — site institucional

Landing page em **React + Tailwind CSS (v4)**, com Vite.

## Rodar o projeto

```bash
npm install
npm run dev        # ambiente de desenvolvimento
npm run build      # versão final em /dist (pronta para hospedar)
npm run build:single   # gera preview/index.html, um único arquivo autocontido
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos, serviços, FAQ, contatos, **número do WhatsApp** | `src/config/site.js` |
| Fotos (caminhos) | `src/config/site.js` → `images` (arquivos em `public/images/`) |
| Depoimentos (seção aparece sozinha quando houver itens) | `src/config/site.js` → `testimonials` |
| Cores, fontes e animações | `src/index.css` (bloco `@theme`) |
| Título, descrição e dados de SEO | `index.html` |

## Estrutura

```
src/
  config/site.js      conteúdo e configurações
  hooks/              useReveal (animação na rolagem), useScrolled
  components/         Button, Photo, Reveal, SectionHeading, Icons, WhatsAppFloat
  sections/           Header, Hero, Marquee, About, Services, Differentials,
                      Gallery, Testimonials, Faq, FinalCta, Footer
```

## Antes de publicar

- As fotos atuais são recortes de posts do Instagram (baixa resolução). Para a versão final, substituir pelos arquivos originais em `public/images/` mantendo os mesmos nomes (WebP, até ~250 KB cada).
- Definir o domínio na tag `canonical` e adicionar `og:image` em `index.html`.
- Revisar os textos com a profissional (inclusive exigências do conselho de classe sobre publicidade).
