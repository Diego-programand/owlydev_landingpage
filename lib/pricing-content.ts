export interface PricingColumnData {
  id: 'no-system' | 'recommended' | 'premium'
  label: string
  badge?: string
  price: string | null
  priceNote: string
  highlighted: boolean
  features: string[]
  cta: string | null
  ctaUrl?: string
}

export const pricingContent: Record<
  'es' | 'en',
  { eyebrow: string; heading: string; columns: PricingColumnData[]; disclaimer: string }
> = {
  es: {
    eyebrow: 'Qué cuesta no tener un sistema',
    heading: 'El desorden también tiene precio',
    columns: [
      {
        id: 'no-system',
        label: 'Sin sistema',
        price: null,
        priceNote: 'Lo que ya estás pagando sin saberlo',
        highlighted: false,
        features: [
          'Pedidos perdidos en WhatsApp',
          'Inventario desactualizado',
          'Reportes que nadie lee',
          'Errores que se repiten',
          'Decisiones sin datos',
          'Tiempo del equipo en tareas manuales',
        ],
        cta: null,
      },
      {
        id: 'recommended',
        label: 'Sistema a medida',
        badge: 'Recomendado',
        price: 'Desde $400 USD',
        priceNote: 'Pago único, sin mensualidades',
        highlighted: true,
        features: [
          'Panel central para todo el equipo',
          'Inventario en tiempo real',
          'Reportes automáticos',
          'Flujos sin errores manuales',
          'Métricas para decidir',
          'El equipo hace lo que importa',
        ],
        cta: 'Hablemos del proyecto',
        ctaUrl: 'https://wa.me/573028584906?text=Hola%2C+quiero+saber+m%C3%A1s+sobre+OwlyDev',
      },
      {
        id: 'premium',
        label: 'Sistema + IA',
        price: 'Desde $800 USD',
        priceNote: 'Pago único, sin mensualidades',
        highlighted: false,
        features: [
          'Todo lo del plan anterior',
          'Automatizaciones con IA',
          'Chatbot para atención al cliente',
          'Análisis predictivo de datos',
          'Integraciones con plataformas externas',
          'Soporte de mantenimiento 3 meses',
        ],
        cta: 'Ver opciones',
        ctaUrl: 'https://wa.me/573028584906?text=Hola%2C+me+interesa+el+plan+premium',
      },
    ],
    disclaimer: 'Los precios son puntos de partida. Cada proyecto se cotiza según el alcance real.',
  },
  en: {
    eyebrow: 'What no system actually costs',
    heading: 'The mess has a price too',
    columns: [
      {
        id: 'no-system',
        label: 'No system',
        price: null,
        priceNote: "What you're already paying without knowing it",
        highlighted: false,
        features: [
          'Orders lost in group chats',
          'Inventory always out of date',
          'Reports nobody reads',
          'Mistakes that keep repeating',
          'Decisions made without data',
          'Team time spent on manual tasks',
        ],
        cta: null,
      },
      {
        id: 'recommended',
        label: 'Custom system',
        badge: 'Recommended',
        price: 'From $400 USD',
        priceNote: 'One-time payment, no subscriptions',
        highlighted: true,
        features: [
          'Central panel for the whole team',
          'Real-time inventory',
          'Automatic reports',
          'Error-free workflows',
          'Metrics to make decisions',
          'Team focused on what matters',
        ],
        cta: "Let's talk",
        ctaUrl: "https://wa.me/573028584906?text=Hi%2C+I'd+like+to+know+more+about+OwlyDev",
      },
      {
        id: 'premium',
        label: 'System + AI',
        price: 'From $800 USD',
        priceNote: 'One-time payment, no subscriptions',
        highlighted: false,
        features: [
          'Everything in the previous plan',
          'AI-powered automations',
          'Customer support chatbot',
          'Predictive data analysis',
          'Third-party platform integrations',
          '3-month maintenance support',
        ],
        cta: 'See options',
        ctaUrl: 'https://wa.me/573028584906?text=Hi%2C+I%27m+interested+in+the+premium+plan',
      },
    ],
    disclaimer: 'Prices are starting points. Every project is scoped and quoted individually.',
  },
}
