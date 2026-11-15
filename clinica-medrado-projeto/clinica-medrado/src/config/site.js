/**
 * ─────────────────────────────────────────────────────────────
 *  CONFIGURAÇÃO DO SITE
 *  Todo o conteúdo editável (textos, contatos, imagens) fica aqui.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  brand: 'Clínica Medrado',
  professional: 'Dra. Polyana Medrado',
  tagline: 'Beleza com naturalidade',
  city: 'Governador Valadares · MG',

  // WhatsApp: somente números, com DDI + DDD.
  whatsapp: {
    number: '5533988850844',
    display: '(33) 98885-0844',
    defaultMessage: 'Olá! Vim pelo site e gostaria de agendar uma avaliação na Clínica Medrado.',
  },

  links: {
    instagram: 'https://www.instagram.com/drapolyanamedrado/',
    instagramHandle: '@drapolyanamedrado',
    vipGroup: 'https://chat.whatsapp.com/EKY1Svgovlc2BlcjVI8wVe',
    mentorship: 'https://wa.me/message/HXR7AJBYNPTUE1',
    maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Beija-Flor+69+Lagoa+Santa+Governador+Valadares+MG',
  },

  address: {
    line1: 'Rua Beija-Flor, 69 — Lagoa Santa',
    line2: 'Governador Valadares · MG · 35065-126',
  },

  // Horário de atendimento: preencha para exibir no rodapé (ex.: 'Seg. a sex. · 9h às 18h').
  hours: '',
}

/**
 * IMAGENS
 * Coloque os arquivos em /public/images e informe o caminho (ex.: '/images/hero.jpg').
 * Se um caminho ficar vazio (''), o site exibe uma moldura elegante no lugar da foto.
 */
export const images = {
  hero: '/images/hero.webp',
  about: '/images/sobre.webp',
  aboutDetail: '/images/sobre-detalhe.webp',
  cta: '/images/cta.webp',
  services: {
    toxina: '/images/toxina.webp',
    bioestimulador: '/images/bioestimulador.webp',
    preenchimento: '/images/preenchimento.webp',
    laser: '/images/laser.webp',
    glutea: '/images/glutea.webp',
    planejamento: '/images/planejamento.webp',
  },
  gallery: [
    '/images/galeria-1.webp',
    '/images/galeria-2.webp',
    '/images/galeria-3.webp',
    '/images/galeria-4.webp',
    '/images/galeria-5.webp',
    '/images/galeria-6.webp',
  ],
}

export const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export const services = [
  {
    id: 'toxina',
    name: 'Toxina botulínica',
    short: 'Botox',
    description:
      'Suaviza linhas de expressão preservando o movimento do rosto. O resultado é um olhar descansado, sem aparência de “congelado”.',
  },
  {
    id: 'bioestimulador',
    name: 'Bioestimulador de colágeno',
    short: 'Especialidade da clínica',
    description:
      'Estimula a produção natural de colágeno nas camadas profundas da pele, devolvendo firmeza e contorno de forma gradual.',
  },
  {
    id: 'preenchimento',
    name: 'Preenchimento facial',
    short: 'Ácido hialurônico',
    description:
      'Repõe volume e redefine contornos em pontos estratégicos, respeitando os seus traços. A quantidade é definida caso a caso.',
  },
  {
    id: 'laser',
    name: 'Laser de CO₂ fracionado',
    short: 'Tecnologia',
    description:
      'Renova a superfície da pele e estimula colágeno. Indicado para textura irregular, poros, linhas marcadas e cicatrizes de acne.',
  },
  {
    id: 'glutea',
    name: 'Harmonização glútea',
    short: 'Corporal',
    description:
      'Trata flacidez e perda de sustentação para recuperar firmeza e melhorar o desenho do corpo, com naturalidade.',
  },
  {
    id: 'planejamento',
    name: 'Planejamento facial',
    short: 'Gerenciamento do envelhecimento',
    description:
      'Um plano contínuo e personalizado, que combina protocolos ao longo do tempo e acompanha cada fase da sua pele.',
  },
]

export const differentials = [
  {
    title: 'Naturalidade como princípio',
    text: 'O objetivo nunca é transformar: é realçar. Você continua se reconhecendo no espelho.',
  },
  {
    title: 'Planejamento individual',
    text: 'Não existe protocolo pronto. Cada indicação parte de uma avaliação criteriosa do seu rosto e do seu momento.',
  },
  {
    title: 'Tecnologia com indicação precisa',
    text: 'Recursos como o laser de CO₂ fracionado, usados quando — e somente quando — fazem sentido para a sua pele.',
  },
  {
    title: 'Acompanhamento contínuo',
    text: 'Rejuvenescer bem é um processo. A clínica acompanha a evolução dos resultados em cada etapa.',
  },
]

export const facts = [
  { value: '6 anos', label: 'de Clínica Medrado' },
  { value: 'Referência', label: 'em bioestimulador de colágeno' },
  { value: 'Docência', label: 'pós-graduação e mentorias' },
]

/**
 * DEPOIMENTOS
 * Adicione apenas depoimentos reais e autorizados. Com a lista vazia, a seção não é exibida.
 * Exemplo: { name: 'Nome da paciente', text: 'Texto do depoimento.' }
 */
export const testimonials = []

export const faq = [
  {
    q: 'O resultado fica natural?',
    a: 'Naturalidade é o ponto de partida de todo planejamento na Clínica Medrado. Os tratamentos são indicados e dosados para respeitar os seus traços e a sua expressão.',
  },
  {
    q: 'Como funciona a primeira consulta?',
    a: 'Começa com uma avaliação individual: conversamos sobre o que incomoda, analisamos a pele e a estrutura do rosto e, a partir disso, montamos um plano de tratamento sob medida.',
  },
  {
    q: 'Qual tratamento é o ideal para mim?',
    a: 'Depende da sua pele, da sua idade e do que você deseja. Por isso a indicação só é feita depois da avaliação — muitas vezes o melhor resultado vem da combinação de protocolos ao longo do tempo.',
  },
  {
    q: 'Em quanto tempo vejo os resultados?',
    a: 'Varia conforme o procedimento. Alguns têm efeito perceptível em poucos dias; outros, como o bioestimulador de colágeno, evoluem de forma gradual ao longo das semanas. Tudo é explicado na avaliação.',
  },
  {
    q: 'Existe tempo de recuperação?',
    a: 'A maior parte dos procedimentos permite retomar a rotina rapidamente. Tecnologias como o laser de CO₂ fracionado pedem alguns dias de cuidado, e você recebe todas as orientações antes e depois.',
  },
  {
    q: 'Como faço para agendar?',
    a: 'O agendamento é feito pelo WhatsApp. É só clicar em qualquer botão “Agendar avaliação” desta página para falar com a equipe.',
  },
]

/** Monta o link de WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`
}
