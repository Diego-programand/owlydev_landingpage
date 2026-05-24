# PRODUCT.md — OwlyDev

> Archivo de referencia de producto para la skill `impeccable` y cualquier tarea de diseño/copy.
> Denso en señal. No resumir, no embellir al leer. Tratar como fuente de verdad.

---

## Register

`brand`

El sitio web ES el producto. No es una app interna ni una herramienta operativa. Es el canal de marketing, identidad y conversión de una agencia personal. Cada decisión de diseño se evalúa contra su impacto en conversión y en la percepción de marca.

---

## Producto y equipo

- **Nombre**: OwlyDev
- **Tipo**: Agencia personal de desarrollo de software a medida
- **Equipo**: Una persona — Diego, Medellín, Colombia (no se debe mencionar nada sobre el equipo, la marca tiene personalidad propia a traves de la mascota)
- **Dominio**: owlydev.com
- **Hosting**: Vercel
- **Stack** (no negociable): Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Radix UI, Lucide React

**Por qué se rediseña**: el sitio actual se siente templated y genérico, indistinguible de cualquier otra agencia. El rediseño tiene un único objetivo: conversión — que prospectos contacten por WhatsApp.

---

## Qué vende OwlyDev

### Servicios actuales

1. **Paneles administrativos y dashboards a medida** — consolida lo que antes eran tres servicios separados: panel admin, dashboards, sistema de reportes.
2. **E-commerce con inventario y operaciones integradas**
3. **Integración de IA en sistemas existentes** — chatbots, automatizaciones, análisis de datos

### Qué NO vende OwlyDev

Landing pages genéricas, sitios web corporativos, plantillas, maquetación pura.

La diferenciación está en **software a medida que automatiza operaciones**, no en presencia digital.

### Pitch de una frase

> "Ayudo a empresas pequeñas y medianas a ser más eficientes a través de la automatización de procesos y la integración de inteligencia artificial."

---

## Usuarios / Cliente ideal

**Perfil**: PyMEs que hoy operan con procesos manuales en Excel, WhatsApp o formularios y quieren digitalizarlos. Empresas que saben que necesitan tecnología pero no tienen equipo interno.

**Presupuesto mínimo de proyecto**: 400 USD

**Mercado principal**: Colombia
**Mercado secundario**: Clientes extranjeros o colombianos que prefieran negociar en inglés

### Miedos y objeciones (el sitio debe responderlas antes de que el cliente las formule)

| Objeción | Señal que la neutraliza |
|---|---|
| "¿Vale la pena la inversión?" | ROI concreto, casos reales, pricing transparente |
| "¿Lo van a hacer bien o me van a estafar?" | Identidad personal visible, testimonios reales, proceso claro |
| "¿Lo voy a poder usar yo o queda muy técnico?" | Copy orientado a operación, no a código |
| "¿Esto me va a generar retorno real?" | Métricas de tiempo/dinero/clientes, no promesas abstractas |

---

## Mascota

Un búho 3D estilo Pixar, navy y crema, con corbata.

**La mascota ES la personalidad de la marca, no Diego.** Es el activo visual más fuerte del proyecto y el diseño debe servirle, nunca competirle. Por eso el resto del sistema visual se mantiene sobrio: la personalidad la carga el búho, no los gradientes ni los efectos.

### Biblioteca de imágenes y placement

Las ilustraciones viven en `/public`. **Cada imagen está pensada para un momento específico del sitio y NO son intercambiables.**

| Archivo | Descripción | Placement asignado |
|---|---|---|
| `/public/mascota-saludo.webp` | Cuerpo completo, escala pequeña, saludando | **Hero** — primera impresión amable |
| `/public/mascota-duo.webp` | Composición dual: búho en pánico (izq.) / búho calmado con IA (der.) | **Pricing** (contraste "Sin sistema vs Plan recomendado") o **"Por qué OwlyDev"** |
| `/public/mascota-laptop.webp` | Trabajando en laptop con logo, pulgar arriba | **Servicios** — específicamente "Paneles administrativos y dashboards" |
| `/public/mascota-aprobacion.webp` | Closeup, mano en "OK", expresión de aprobación. Formato vertical | **Testimonios / prueba social**, o diferenciador principal en "Por qué OwlyDev" |
| `/public/mascota-presentando.webp` | Búho con celular y mano extendida invitando | **CTA final de contacto / WhatsApp** — bloque previo al footer |
| `/public/mascota-victoria.webp` | Puño en alto, postura de triunfo | **Página de confirmación** post-conversión (después de click en WhatsApp o envío de formulario) |
| `/public/mascota-escritorio.webp` | ~~Descartada del flujo principal~~ | **NO usar en el rediseño.** Contiene UI falsa, mockup de navegador, badges de SEO y gráficas templated que contradicen la dirección estética. Solo considerar en sub-ruta futura de servicio SEO específico. |

---

## Tono

- **Cercano pero competente.** Ni corporativo, ni startup-bro, ni agencia genérica.
- **Directo y honesto** sobre lo que cuesta y lo que entrega.
- **Personal**: detrás del sitio hay una persona, no un equipo ficticio.
- **Bilingüe nativo.** El inglés nunca debe sonar a traducción literal del español. Se redacta nativo en cada idioma.

---

## Anti-referencias

### Visuales — el sitio NO debe tener

- Sitios SaaS oscuros con gradientes morado/azul
- Páginas tipo "agencia digital" con frases vacías
- Stock photos de personas mirando laptops o señalando pantallas
- Iconografía de engranajes, cohetes, gráficas genéricas
- Gradientes fuertes, glows, neón, glassmorphism, partículas
- Cursor personalizado, efectos 3D, canvas elaborado
- Hero-metric templates (número grande + label pequeño + stats de apoyo)
- Grids de cards idénticas y repetitivas
- Mockups de navegador con UI inventada decorando el hero

### Copy — frases prohibidas

- "Soluciones digitales integrales"
- "Transformamos tu negocio"
- "Llevamos tu empresa al siguiente nivel"
- "Innovación y excelencia"
- Cualquier lista de buzzwords sin sustancia detrás

---

## Principios estratégicos

1. **La mascota lleva la personalidad.** El resto del diseño se mantiene sobrio para que ella destaque.
2. **Placement de mascota es fijo.** Respetar la biblioteca de arriba. No improvisar usos.
3. **Base cream / blanco roto, nunca blanco puro.** La base debe combinar con el fondo de las ilustraciones de la mascota.
4. **Paleta restrained**: navy del logo, neutros tintados hacia el navy, y un solo acento cálido para CTAs y momentos puntuales — máximo 10% de la superficie del sitio.
5. **Conversión por confianza, no por presión.** WhatsApp es el CTA primario porque elimina fricción.
6. **Pricing transparente en tres columnas comparativas**:
   - "Sin sistema" — operación manual, dolor explícito
   - "Plan recomendado" — el sweet spot, visualmente destacado
   - "Plan premium" — todo incluido
   El golpe está en el contraste con la primera columna. `mascota-duo.webp` acompaña esta sección.
7. **Bilingüe real.** Toggle manual ES/EN. ES por defecto. Copy en inglés redactado nativo, no traducido.
8. **Arquitectura**: one-page principal + sub-rutas por servicio para SEO long-tail.
9. **Nivel de animación 4/5**: parallax sutil, text reveals al scroll, hover states con personalidad. Prohibido: cursor personalizado, 3D, partículas, efectos de luz fuertes.

---

## Branding existente

- **Logo / imagotipo**: `/public/branding/imago-tipo.png`
- **Isotipo**: `/public/branding/iso-tipo.webp`
- Paleta base: navy del logo como color dominante, acento cálido único para CTAs

---

## Arquitectura del sitio

### One-page principal (owlydev.com)

Secciones en orden sugerido:
1. Hero + CTA principal
2. Por qué OwlyDev / Diferenciadores
3. Servicios
4. Portafolio / Casos
5. Pricing (tres columnas comparativas)
6. Testimonios / Prueba social
7. FAQ (responde las 4 objeciones explícitamente)
8. CTA final de contacto (WhatsApp)
9. Footer

### Sub-rutas (SEO long-tail — pendiente de desarrollo)
- `/servicios/paneles-administrativos`
- `/servicios/ecommerce`
- `/servicios/integracion-ia`

---

## CTA primario

**WhatsApp** — canal de contacto principal. Elimina fricción, es el canal natural de negocio en Colombia y en mercados latinoamericanos. Todos los CTA secundarios deben converger hacia este punto.
