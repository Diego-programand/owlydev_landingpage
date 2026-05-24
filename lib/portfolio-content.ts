export type ProjectVisual = 'ui-orders' | 'ui-dashboard' | 'ui-inventory' | 'ui-chatbot'

export interface ProjectItem {
  id: string
  number: string
  tag: string
  headline: string
  description: string
  tech: string[]
  visual: ProjectVisual
}

export const portfolioContent: Record<
  'es' | 'en',
  { eyebrow: string; heading: string; projects: ProjectItem[] }
> = {
  es: {
    eyebrow: 'Proyectos representativos',
    heading: 'Lo que se puede construir',
    projects: [
      {
        id: 'mobiliario',
        number: '01',
        tag: 'Mobiliaria · Medellín',
        headline: 'Panel de producción y entregas',
        description:
          'Una empresa de muebles a medida manejaba sus pedidos en WhatsApp y sus entregas en papel. Se construyó un panel donde cada pedido tiene estado, fecha de entrega y responsable asignado. Las confusiones de entrega bajaron a cero en el primer mes.',
        tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
        visual: 'ui-orders',
      },
      {
        id: 'distribuidora',
        number: '02',
        tag: 'Distribución · Bogotá',
        headline: 'Dashboard de ventas por zona',
        description:
          'Una distribuidora regional necesitaba ver en tiempo real qué vendedor estaba cumpliendo meta y en qué zona. Se construyó un dashboard con mapa de calor por zona y alertas automáticas cuando un vendedor cae por debajo del 70% de su objetivo semanal.',
        tech: ['React', 'Recharts', 'Supabase'],
        visual: 'ui-dashboard',
      },
      {
        id: 'ecommerce',
        number: '03',
        tag: 'Retail · Medellín',
        headline: 'Tienda online con inventario unificado',
        description:
          'Una tienda de ropa con local físico y ventas online actualizaba el inventario a mano en dos sistemas distintos. Se unificó en una sola plataforma: la venta en cualquier canal descuenta automáticamente del stock.',
        tech: ['Next.js', 'Stripe', 'Prisma'],
        visual: 'ui-inventory',
      },
      {
        id: 'ia',
        number: '04',
        tag: 'Servicios · Medellín',
        headline: 'Asistente IA para atención al cliente',
        description:
          'Una empresa de servicios recibía las mismas 12 preguntas por WhatsApp todos los días. Se integró un asistente que responde automáticamente, escala al humano solo cuando es necesario, y registra cada conversación en el CRM.',
        tech: ['OpenAI', 'WhatsApp API', 'Node.js'],
        visual: 'ui-chatbot',
      },
    ],
  },
  en: {
    eyebrow: 'Representative projects',
    heading: 'What gets built',
    projects: [
      {
        id: 'mobiliario',
        number: '01',
        tag: 'Furniture · Medellín',
        headline: 'Production and delivery panel',
        description:
          'A custom furniture company tracked orders via WhatsApp and deliveries on paper. A panel was built where every order has a status, delivery date, and assigned owner. Delivery mix-ups dropped to zero in the first month.',
        tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
        visual: 'ui-orders',
      },
      {
        id: 'distribuidora',
        number: '02',
        tag: 'Distribution · Bogotá',
        headline: 'Sales dashboard by territory',
        description:
          "A regional distributor needed to see in real time which sales rep was hitting quota and where. A dashboard was built with a territory heat map and automatic alerts when a rep drops below 70% of their weekly target.",
        tech: ['React', 'Recharts', 'Supabase'],
        visual: 'ui-dashboard',
      },
      {
        id: 'ecommerce',
        number: '03',
        tag: 'Retail · Medellín',
        headline: 'Online store with unified inventory',
        description:
          'A clothing store with a physical location and online sales was updating inventory manually across two systems. Both channels were unified: any sale anywhere deducts automatically from the same stock.',
        tech: ['Next.js', 'Stripe', 'Prisma'],
        visual: 'ui-inventory',
      },
      {
        id: 'ia',
        number: '04',
        tag: 'Services · Medellín',
        headline: 'AI assistant for customer support',
        description:
          'A services company received the same 12 questions on WhatsApp every day. An assistant was integrated that answers automatically, escalates to a human only when needed, and logs every conversation to the CRM.',
        tech: ['OpenAI', 'WhatsApp API', 'Node.js'],
        visual: 'ui-chatbot',
      },
    ],
  },
}
