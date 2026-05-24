export interface FAQItem {
  q: string
  a: string
}

export const faqContent: Record<
  'es' | 'en',
  { eyebrow: string; heading: string; subtext: string; items: FAQItem[] }
> = {
  es: {
    eyebrow: 'Preguntas frecuentes',
    heading: 'Lo que siempre preguntan antes de arrancar',
    subtext: 'Si tienes una duda que no está acá, el búho responde por WhatsApp.',
    items: [
      {
        q: '¿Cuánto tiempo tarda un proyecto?',
        a: 'Depende del alcance, pero un panel administrativo típico tarda entre 4 y 8 semanas desde la primera reunión hasta la entrega. Los proyectos más complejos con integraciones de IA pueden tomar 10 a 14 semanas. Antes de arrancar, el cronograma queda por escrito.',
      },
      {
        q: '¿Qué pasa si necesito cambios después de la entrega?',
        a: 'El plan premium incluye 3 meses de soporte. En el plan estándar, los ajustes menores se cotizan por separado a una tarifa preferencial. Ningún cambio se hace sin que primero se acuerde el costo.',
      },
      {
        q: '¿Necesito saber de tecnología para trabajar con OwlyDev?',
        a: 'No. El proceso está diseñado para que tú describas cómo opera tu negocio y el sistema se construya sobre eso. Las reuniones son en tu idioma, no en el de los programadores.',
      },
      {
        q: '¿El software queda en mis manos o dependo de OwlyDev para todo?',
        a: 'El repositorio, el dominio y el panel de administración quedan a tu nombre desde el primer día. Si en algún momento decides trabajar con otro proveedor, tienes todo lo necesario para hacerlo.',
      },
      {
        q: '¿Cómo se maneja el pago?',
        a: '50% al inicio del proyecto y 50% contra entrega. Para proyectos grandes se puede estructurar en tres pagos según los hitos acordados. Todo por factura.',
      },
      {
        q: '¿Trabajan con empresas fuera de Colombia?',
        a: 'Sí. Se trabaja en español e inglés, y se pueden recibir pagos internacionales. El huso horario de Colombia (UTC-5) permite reuniones en horario de negocio con clientes en América del Norte y América Latina.',
      },
    ],
  },
  en: {
    eyebrow: 'Frequently asked questions',
    heading: 'What people always ask before starting',
    subtext: "If your question isn't here, the owl answers on WhatsApp.",
    items: [
      {
        q: 'How long does a project take?',
        a: 'It depends on scope, but a typical admin panel takes 4 to 8 weeks from the first meeting to delivery. More complex projects with AI integrations can take 10 to 14 weeks. The timeline is agreed in writing before work starts.',
      },
      {
        q: 'What if I need changes after delivery?',
        a: 'The premium plan includes 3 months of support. For the standard plan, minor adjustments are quoted separately at a preferential rate. No change is made without agreeing on the cost first.',
      },
      {
        q: 'Do I need to know anything about technology to work with OwlyDev?',
        a: "No. The process is designed so you describe how your business operates, and the system is built around that. Meetings are in your language, not the developer's.",
      },
      {
        q: 'Will the software be mine or will I depend on OwlyDev for everything?',
        a: 'The repository, the domain, and the admin panel are in your name from day one. If you ever decide to work with another provider, you have everything you need to do so.',
      },
      {
        q: 'How does payment work?',
        a: '50% at the start of the project and 50% on delivery. For larger projects, payments can be structured in three installments tied to agreed milestones. Everything invoiced.',
      },
      {
        q: 'Do you work with companies outside Colombia?',
        a: "Yes. Work is done in Spanish and English, and international payments are accepted. Colombia's timezone (UTC-5) allows business-hours meetings with clients across North and Latin America.",
      },
    ],
  },
}
