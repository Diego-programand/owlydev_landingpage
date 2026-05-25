export const site = {
  name: "OwlyDev",
  // Propuesta de valor clara y orientada a resultados
  tagline: "Webs que venden 24/7. Sin complicaciones. Sin estafas.",

  // Colores actualizados a la nueva paleta
  colors: {
    navy: "#0F2854",
    blue: "#1C4D8D",
    blueLight: "#4988C4",
    cyan: "#BDE8F5",
    bgPrimary: "#0A0F1C",
    bgSecondary: "#0F1729",
  },
};

export const navItems = [
  { id: "hero", label: "Inicio" },
  { id: "why-us", label: "¿Por qué nosotros?" },
  { id: "services", label: "Servicios" },
  { id: "pricing", label: "Inversión" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contacto" },
] as const;

// Servicios refactorizados con enfoque en RESULTADOS
export const services = [
  {
    title: "Landing Pages que Convierten",
    problem: "Tu web actual espanta clientes",
    desc: "Diseño psicológico que guía al visitante desde la curiosidad hasta la compra. Carga en < 1 segundo = -32% de rebote.",
    benefits: [
      "100/100 en PageSpeed (garantizado)",
      "Diseño mobile-first (73% del tráfico)",
      "Copywriting orientado a conversión",
      "3 meses de ajustes incluidos"
    ],
    img: "/services/web-pro.webp",
    href: "/demos/landing-page",
    metric: "45% más conversiones en promedio"
  },
  {
    title: "Automatización con Bots",
    problem: "Pierdes horas en tareas repetitivas",
    desc: "Bots inteligentes para Discord, WhatsApp o Telegram que gestionan tu comunidad mientras tú creces el negocio.",
    benefits: [
      "Ahorra 15+ horas semanales",
      "Atención 24/7 automatizada",
      "Integración con tus sistemas",
      "Dashboard de control total"
    ],
    img: "/services/discord-bot.webp",
    href: "/demos/discord-dashboard",
    metric: "10h/semana recuperadas"
  },
  {
    title: "Ecommerce de Alto ROI",
    problem: "Tu tienda pierde ventas por fricción",
    desc: "Optimizamos cada pixel del proceso de compra. Checkout en 3 pasos. Cero abandono de carrito por UX deficiente.",
    benefits: [
      "Integración con Stripe/Shopify",
      "Upsells automáticos",
      "Recuperación de carritos",
      "Analytics avanzado"
    ],
    img: "/services/ecommerce.webp",
    href: "/demos/ecommerce",
    metric: "20-35% incremento en ticket promedio"
  },
  {
    title: "Auditoría UX/UI",
    problem: "No sabes por qué no conviertes",
    desc: "Analizamos el comportamiento real de tus usuarios y eliminamos los obstáculos que te cuestan ventas cada día.",
    benefits: [
      "Heatmaps y grabaciones reales",
      "Reporte detallado de problemas",
      "Propuesta de mejoras priorizadas",
      "ROI proyectado de cambios"
    ],
    img: "/services/ux-ui.webp",
    href: "/demos/estrategia-ux-ui",
    metric: "Identificamos 15-20 fricciones críticas"
  },
  {
    title: "Identidad Digital Premium",
    problem: "Tu marca no refleja tu valor",
    desc: "Diseño visual coherente que hace que tu marca se vea tan profesional como el servicio que entregas.",
    benefits: [
      "Logo + paleta de colores",
      "Guía de marca completa",
      "Assets para redes sociales",
      "Consistencia en todos los puntos"
    ],
    img: "/services/branding.webp",
    href: "/#contact",
    metric: "Percepción de valor +50%"
  },
] as const;

// Demos actualizados (sin cambios estructurales)
export const demos = [
  {
    title: "Ecosistema de Gestión de Comunidades",
    href: "/demos/discord-dashboard",
    desc: "Automatización total de procesos y administración de usuarios. Diseñado para reducir el trabajo operativo y escalar comunidades sin esfuerzo manual.",
    image: {
      desktop: "/demos/discord-desktop.webp",
      mobile: "/demos/discord-mobile.webp",
    },
  },
  {
    title: "Sistema Inteligente de Reservas",
    href: "/demos/reservas-dashboard",
    desc: "Panel administrativo de alto rendimiento que elimina el caos de las citas manuales, centralizando calendarios y estados en una interfaz intuitiva.",
    image: {
      desktop: "/demos/dashboard-desktop.webp",
      mobile: "/demos/dashboard-mobile.webp",
    },
  },
  {
    title: "Landing Page de Alta Conversión",
    href: "/demos/landing-desktop",
    desc: "Estructura optimizada psicológicamente para transformar visitantes en clientes potenciales, priorizando la velocidad de carga y la claridad del mensaje.",
    image: {
      desktop: "/demos/landing-desktop.webp",
      mobile: "/demos/landing-mobile.webp",
    },
  },
  {
    title: "Arquitectura Ecommerce Premium",
    href: "/demos/ecommerce",
    desc: "Experiencia de compra fluida y profesional enfocada en maximizar el ticket promedio y reducir el abandono de carrito.",
    image: {
      desktop: "/demos/ecommerce-desktop.webp",
      mobile: "/demos/ecommerce-mobile.webp",
    },
  },
] as const;

// FAQs actualizados con las objeciones REALES que me dijiste
export const faqs = [
  {
    question: "¿Cómo garantizan que mi proyecto será un éxito con su estructura actual?",
    answer: "A diferencia de las grandes agencias que delegan tu proyecto a juniors, en OwlyDev limitamos nuestra capacidad a solo 2 proyectos simultáneos. Esto nos permite aplicar un enfoque de ingeniería artesanal: garantizamos un PageSpeed de 100/100 y una arquitectura escalable desde el primer día. No buscamos acumular cientos de logos; buscamos crear 3 o 4 casos de éxito anuales que se conviertan en activos de venta reales para nuestros socios. Nuestra mejor garantía es que puedes auditar nuestro código y rendimiento antes de cualquier pago inicial."
  },
  {
    question: "Ya me estafaron antes. ¿Cómo sé que esto es diferente?",
    answer: "Entendemos completamente ese miedo. Por eso trabajamos así: (1) Primera reunión gratis donde validamos tu idea, (2) Prototipo visual en 3 días ANTES de pagar un peso, (3) Pagos por hitos (40% inicio, 60% entrega final), (4) El código y dominio quedan a TU nombre desde el día 1. Si no te gusta el resultado, no pagas el segundo hito. Sin letra chica."
  },
  {
    question: "¿Realmente me va a generar más ingresos o es solo una web bonita?",
    answer: "Una web 'bonita' sin estrategia es tirar la plata. Nosotros diseñamos basados en psicología de conversión: cada botón, cada color, cada texto tiene un propósito. Nuestras webs cargan en < 1 segundo (el 53% de usuarios abandona si tarda 3s), están optimizadas para móvil (73% del tráfico), y aparecen primero en Google (SEO incluido). Es un vendedor 24/7 que no cobra comisión."
  },
  {
    question: "¿Cuánto cuesta y cuánto tiempo tardan?",
    answer: "Soluciones desde $500K COP ($125 USD) hasta $3M COP ($750 USD) según la complejidad.Entregamos una versión funcional en menos de un mes y el proyecto final en 2 a 5 semanas. Está diseñado para que con solo 3 clientes extra al mes, tu inversión se recupere en 90 días. Nada de esperas largas"
  },
  {
    question: "¿Qué pasa después de la entrega? ¿Me dejan solo?",
    answer: "NUNCA. Incluimos 3 meses de soporte y ajustes sin costo adicional. Te enseñamos a usar el panel de administración (si aplica), te damos documentación completa, y quedas con acceso total al código. Si necesitas cambios grandes después, cobramos por proyecto, pero mantenimiento básico está cubierto. Somos tu socio tecnológico, no un proveedor desechable."
  },
] as const;