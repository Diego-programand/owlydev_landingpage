export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
}

export const testimonialsContent: Record<
  'es' | 'en',
  { eyebrow: string; heading: string; testimonials: Testimonial[] }
> = {
  es: {
    eyebrow: 'Lo que dicen quienes ya lo tienen',
    heading: 'Resultados que se miden',
    testimonials: [
      {
        id: 'vane',
        quote:
          'Antes perdíamos pedidos porque todo vivía en WhatsApp. Ahora cada pedido tiene un estado y una fecha, y mi equipo sabe exactamente qué hacer sin preguntarme a mí.',
        author: 'Vanessa',
        role: 'Fundadora',
        company: 'Mobiliarios Vane',
      },
      {
        id: 'generic-2',
        quote:
          'La implementación fue más rápida de lo que esperábamos y el sistema quedó exactamente como lo necesitábamos. Sin tecnicismos, sin complicaciones.',
        author: 'Cliente OwlyDev',
        role: 'Gerente de operaciones',
        company: 'Distribuidora · Bogotá',
      },
      {
        id: 'generic-3',
        quote:
          'El retorno lo vimos en las primeras semanas. El tiempo que ahorramos en tareas manuales lo invertimos en conseguir nuevos clientes.',
        author: 'Cliente OwlyDev',
        role: 'Director comercial',
        company: 'Retail · Medellín',
      },
    ],
  },
  en: {
    eyebrow: 'From people who already have it',
    heading: 'Results that can be measured',
    testimonials: [
      {
        id: 'vane',
        quote:
          'We used to lose orders because everything lived in WhatsApp. Now every order has a status and a date, and my team knows exactly what to do without asking me.',
        author: 'Vanessa',
        role: 'Founder',
        company: 'Mobiliarios Vane',
      },
      {
        id: 'generic-2',
        quote:
          'The rollout was faster than we expected and the system was exactly what we needed. No technical jargon, no complications.',
        author: 'OwlyDev client',
        role: 'Operations manager',
        company: 'Distribution · Bogotá',
      },
      {
        id: 'generic-3',
        quote:
          'We saw the return in the first few weeks. The time we saved on manual tasks went straight into finding new clients.',
        author: 'OwlyDev client',
        role: 'Commercial director',
        company: 'Retail · Medellín',
      },
    ],
  },
}
