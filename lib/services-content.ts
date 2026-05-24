export type ServiceVisual = 'mascot' | 'ui-ecommerce' | 'ui-chat'

export interface ServiceItem {
  number: string
  headline: string
  hook: string
  copy: string
  visual: ServiceVisual
}

export const servicesContent: Record<'es' | 'en', { eyebrow: string; heading: string; services: ServiceItem[] }> = {
  es: {
    eyebrow: 'Qué construye OwlyDev',
    heading: 'Software que reemplaza los parches',
    services: [
      {
        number: '01',
        headline: 'Paneles y dashboards a medida',
        hook: 'Si tu equipo opera en WhatsApp, hojas de cálculo o grupos de chat, cada día sin sistema es un error esperando pasar.',
        copy: 'Un sistema central donde todo el equipo opera: inventario, pedidos, reportes y métricas en una sola pantalla. Construido para el negocio, no para un demo.',
        visual: 'mascot',
      },
      {
        number: '02',
        headline: 'E-commerce con operaciones integradas',
        hook: 'Tener tienda online y manejar el inventario en otro lado es operar con una mano atada.',
        copy: 'Tienda online conectada directamente al inventario, los despachos y la facturación. Sin exportar Excel entre plataformas.',
        visual: 'ui-ecommerce',
      },
      {
        number: '03',
        headline: 'IA integrada en tus sistemas',
        hook: 'La IA no requiere cambiar todo lo que ya funciona. Requiere conectarla a lo que ya tienes.',
        copy: 'Automatizaciones, chatbots y análisis de datos que trabajan dentro del sistema que ya tienes. Sin cambiar herramientas, sin reentrenar al equipo.',
        visual: 'ui-chat',
      },
    ],
  },
  en: {
    eyebrow: 'What OwlyDev builds',
    heading: 'Software that replaces the workarounds',
    services: [
      {
        number: '01',
        headline: 'Custom admin panels and dashboards',
        hook: 'If your team runs on group chats and spreadsheets, every day without a system is a mistake waiting to happen.',
        copy: 'A central system where your whole team operates: inventory, orders, reports, and metrics in one screen. Built for your business, not for a demo.',
        visual: 'mascot',
      },
      {
        number: '02',
        headline: 'E-commerce with integrated operations',
        hook: 'Running an online store while managing inventory somewhere else means operating with one hand tied.',
        copy: 'An online store connected directly to inventory, fulfillment, and billing. No more exporting spreadsheets between platforms.',
        visual: 'ui-ecommerce',
      },
      {
        number: '03',
        headline: 'AI integrated into your existing systems',
        hook: "AI doesn't require replacing what already works. It requires connecting to what you already have.",
        copy: 'Automations, chatbots, and data analysis working inside the tools you already have. No new platforms, no retraining your team.',
        visual: 'ui-chat',
      },
    ],
  },
}
