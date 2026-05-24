export const ctaContent: Record<
  'es' | 'en',
  { eyebrow: string; heading: string; subtext: string; cta: string; ctaUrl: string; trustLine: string }
> = {
  es: {
    eyebrow: 'El primer paso no cuesta nada',
    heading: 'Cuéntanos cómo opera tu negocio',
    subtext:
      'En una llamada de 30 minutos identificamos si hay un sistema que pueda ahorrarle tiempo real a tu equipo.',
    cta: 'Hablemos por WhatsApp',
    ctaUrl: 'https://wa.me/573028584906?text=Hola%2C+quiero+saber+m%C3%A1s+sobre+OwlyDev',
    trustLine: 'Sin compromiso. Sin tecnicismos. Solo una conversación.',
  },
  en: {
    eyebrow: 'The first step costs nothing',
    heading: 'Tell us how your business operates',
    subtext:
      "In a 30-minute call we'll identify whether there's a system that can save your team real time.",
    cta: 'Talk to us on WhatsApp',
    ctaUrl: "https://wa.me/573028584906?text=Hi%2C+I'd+like+to+know+more+about+OwlyDev",
    trustLine: 'No commitment. No jargon. Just a conversation.',
  },
}
