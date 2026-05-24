# DESIGN.md — OwlyDev

> Especificación de diseño para la skill `impeccable`. Se carga junto con PRODUCT.md.
> Traducible directo a tokens de Tailwind v4. Tratar como fuente de verdad técnica.
> Las decisiones de producto (mascota, tono, servicios) viven en PRODUCT.md, no aquí.

---

## 1. Color tokens (OKLCH)

Todos los colores en OKLCH. Nunca `#hex` crudo. Todos los neutros tintados hacia el navy de la marca.

### Surfaces (cream tinted)

| Token | Valor | Uso |
|---|---|---|
| `--surface-base` | `oklch(0.96 0.012 80)` | Base principal del sitio. Combina con fondo de ilustraciones de mascota. |
| `--surface-raised` | `oklch(0.98 0.008 80)` | Elementos elevados (cards, pricing recomendado). |
| `--surface-recessed` | `oklch(0.94 0.014 80)` | Secciones embebidas / inset. |
| `--surface-deep` | `oklch(0.91 0.018 80)` | Cream más oscuro permitido, divisores grandes de sección. |

### Ink (navy ramp)

| Token | Valor | Uso |
|---|---|---|
| `--ink-primary` | `oklch(0.20 0.05 264)` | Texto principal y elementos navy sólidos. |
| `--ink-secondary` | `oklch(0.30 0.06 264)` | Navy del logo, headlines display, botón primary fill. |
| `--ink-tertiary` | `oklch(0.42 0.025 264)` | Body text muted, párrafos secundarios. |
| `--ink-quaternary` | `oklch(0.58 0.018 264)` | Captions, hints, disabled. |

### Borders (tinted hacia el navy)

| Token | Valor | Uso |
|---|---|---|
| `--border-subtle` | `oklch(0.88 0.008 264)` | Apenas visible. Divisores suaves, nav on scroll. |
| `--border-default` | `oklch(0.82 0.012 264)` | Estándar. Cards, inputs. |
| `--border-strong` | `oklch(0.65 0.015 264)` | Énfasis. Botón secondary outline. |

### Acento (ver Sección 2 para reglas de uso)

| Token | Valor | Uso |
|---|---|---|
| `--accent` | `oklch(0.72 0.10 80)` | Ocre cálido. Solo CTA WhatsApp y badge pricing. |
| `--accent-deep` | `oklch(0.55 0.10 70)` | Ocre profundo. Hover/active del CTA WhatsApp. |

### Semantic (funcional, no decorativo)

| Token | Valor | Uso |
|---|---|---|
| `--success` | `oklch(0.55 0.10 150)` | Verde desaturado. |
| `--warning` | `oklch(0.70 0.10 50)` | Ámbar cálido (distinto del acento). |
| `--danger` | `oklch(0.50 0.15 25)` | Rojo controlado. |
| `--info` | `oklch(0.60 0.10 230)` | Azul informativo. |

### WhatsApp green (canónico)

| Token | Valor | Uso |
|---|---|---|
| `--whatsapp` | `oklch(0.62 0.16 145)` | Solo para el icono dentro del botón CTA a tamaño pequeño. NUNCA como fill de superficie. |

---

## 2. Reglas de uso del acento ocre

**El ocre solo se usa en dos lugares del sitio. Punto.**

1. **Botón primary CTA de WhatsApp**: fill `--accent`, texto `--ink-primary`. Hover: `--accent-deep`.
2. **Badge y borde de "Plan recomendado" en pricing**: borde `1px solid --accent`, badge "Recomendado" con `background: --accent` y texto `--ink-primary`.

**Prohibido usar ocre en:**

- Hover states de links de body text
- Iconos decorativos
- Dividers o separadores
- Focus rings de inputs (usan `--ink-secondary` navy)
- Acordeones de FAQ
- Items de navegación
- Footer
- Background de sección
- Underlines de párrafo
- Cualquier elemento decorativo

**Superficie total objetivo: menos del 3% del sitio.**

Si al implementar parece que falta calidez en otra zona: NO se resuelve con más ocre. Se resuelve con mejor jerarquía tipográfica, mejor uso del cream como superficie activa, o con motion bien colocado.

---

## 3. Typography

### Fuentes

**Display**: Fraunces
- Fuente: Google Fonts variable
- Variable axes: `opsz` (9..144), `wght` (400..700), `SOFT` (0..100)
- Default para display: `opsz=144 wght=500 SOFT=50` (ligeramente suave, no sharp editorial)
- Importar vía `next/font/google` con `axes: ['opsz', 'wght', 'SOFT']`

**Body/UI**: Geist
- Fuente: paquete `geist` de Vercel (`geist/font/sans`)
- Weights usados: 400, 500
- **Nunca 600 ni 700** — las refinadas no necesitan peso, necesitan espacio

### Escala tipográfica (ratio 1.333)

| Nombre | Tamaño desktop | line-height | letter-spacing | Uso |
|---|---|---|---|---|
| `display-1` | 72px / 4.5rem | 1.05 | -0.02em | Hero H1 |
| `display-2` | 56px / 3.5rem | 1.08 | -0.015em | H1 inner pages |
| `heading-1` | 40px / 2.5rem | 1.15 | -0.01em | H2 de secciones |
| `heading-2` | 28px / 1.75rem | 1.25 | 0 | H3 subsecciones |
| `heading-3` | 20px / 1.25rem | 1.35 | 0 | H4 |
| `body-lg` | 18px / 1.125rem | 1.65 | 0 | Lead paragraphs, hero copy |
| `body` | 16px / 1rem | 1.60 | 0 | Cuerpo principal |
| `body-sm` | 14px / 0.875rem | 1.50 | 0 | Captions de componentes, labels |
| `caption` | 13px / 0.8125rem | 1.45 | 0.01em | Metadatos, timestamps |
| `micro` | 11px / 0.6875rem | 1.40 | 0.02em | Badges, chips, disclaimers |

### Ajustes mobile (< 768px)

| Token | Desktop | Mobile |
|---|---|---|
| `display-1` | 72px | 44px |
| `display-2` | 56px | 36px |
| `heading-1` | 40px | 30px |
| `heading-2` | 28px | 24px |
| Body sizes | — | Sin cambio. Nunca bajar de 16px en body |

### Reglas

- Body prose máximo **68ch** de ancho.
- Headings display van en Fraunces, weight 500 default. Weight 400 italic para énfasis ocasional.
- Body y UI van en Geist, weight 400 default, weight 500 para emphasis o headings de UI.
- Display y body **nunca** en el mismo tamaño aunque coincida — siempre marcar contraste de escala.
- Line height de headings siempre ≤ 1.25. Nunca `line-height: 1` — es trampa visual.
- **Eyebrow text**: labels pequeños en uppercase sobre headings de sección. Tamaño: 11–13px, Geist weight 500, `letter-spacing: var(--tracking-eyebrow)`. Token: `--tracking-eyebrow: 0.08em`.

---

## 4. Spacing

### Escala base 4px

| Paso | Valor rem | Valor px |
|---|---|---|
| 0 | 0 | 0 |
| 1 | 0.25rem | 4px |
| 2 | 0.5rem | 8px |
| 3 | 0.75rem | 12px |
| 4 | 1rem | 16px |
| 5 | 1.25rem | 20px |
| 6 | 1.5rem | 24px |
| 8 | 2rem | 32px |
| 10 | 2.5rem | 40px |
| 12 | 3rem | 48px |
| 16 | 4rem | 64px |
| 20 | 5rem | 80px |
| 24 | 6rem | 96px |
| 32 | 8rem | 128px |
| 40 | 10rem | 160px |
| 48 | 12rem | 192px |

### Reglas de ritmo (no negociable)

- **No usar el mismo padding vertical en todas las secciones.** Alterna entre generosas (96–128px) y compactas (64–80px) para crear ritmo. La monotonía de spacing es señal de IA-slop.
- Padding interno de componentes: 16–32px.
- Gap entre elementos relacionados: 8–16px.
- Gap entre elementos no relacionados dentro de una sección: 32–48px.
- Hero section `padding-top`: **128px desktop**, **80px mobile**.

### Secciones y su peso vertical (one-page principal)

| # | Sección | Token | Desktop | Mobile |
|---|---|---|---|---|
| 1 | Hero | narrative | 128px | 80px |
| 2 | Por qué OwlyDev | standard | 96px | 64px |
| 3 | Servicios | transitional | 80px | 56px |
| 4 | Portafolio | standard | 96px | 64px |
| 5 | Pricing | narrative | 128px | 80px |
| 6 | Testimonios | transitional | 80px | 56px |
| 7 | FAQ | standard | 96px | 64px |
| 8 | CTA final | narrative | 128px | 80px |
| 9 | Footer | — | ~64px | ~48px |

> El sistema usa tres tiers semánticos de padding vertical para crear un ritmo de scroll variado sin caer en monotonía ni en arbitrariedad. `narrative` (128px) marca los anchors del recorrido: hero, decisión de pricing, CTA final. `transitional` (80px) marca secciones de scan rápido donde el usuario no se detiene a contemplar. `standard` (96px) es el conector entre ambos extremos, evita pares consecutivos con el mismo valor y da respiración. El patrón de scroll resultante (128 - 96 - 80 - 96 - 128 - 80 - 96 - 128) tiene un pulse claro: tres anclajes al inicio, medio y final, con descensos y ascensos controlados entre ellos. Mobile mantiene la misma estructura rítmica, comprimida proporcionalmente.

---

## 5. Layout

### Max widths

| Token | Valor | Uso |
|---|---|---|
| `--max-page` | 1280px | Wrapper general del sitio |
| `--max-content` | 1100px | Contenido de secciones estándar |
| `--max-prose` | 680px | Párrafos largos (FAQ, testimonios, copy del hero) |
| `--max-hero` | 1100px | Hero section |

### Breakpoints (Tailwind v4 default)

| Alias | Valor |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

### Grid

- 12 columnas, gap 24px desktop, 16px mobile.
- **No usar grid de 12 columnas reflexivamente.** Para secciones específicas, usar layouts asimétricos (60/40, 70/30) cuando aporten al ritmo visual.
- Columna de máscara (para mascotas en columna lateral): ancho fijo de 280–320px en desktop, full-width en mobile con altura limitada.

---

## 6. Elevation

Casi sin sombras por default. La elevación se siente principalmente por **contraste de surface tint**, no por sombras.

| Token | Valor | Uso |
|---|---|---|
| `--shadow-subtle` | `0 1px 2px oklch(0.20 0.05 264 / 0.04)` | Apenas perceptible. Default para cualquier card. |
| `--shadow-raised` | `0 4px 16px oklch(0.20 0.05 264 / 0.06)` | Cards excepcionales (pricing recomendado). |

**Prohibido**: sombras grandes, glow shadows, sombras de color distinto al navy tint, glassmorphism, `backdrop-blur` como decoración.

---

## 7. Motion

### Duraciones

| Token | Valor | Uso |
|---|---|---|
| `--duration-micro` | 120ms | Hover states, focus |
| `--duration-short` | 220ms | Cambios de estado (botones, toggles) |
| `--duration-medium` | 400ms | Reveals individuales |
| `--duration-long` | 700ms | Reveals del hero, transiciones grandes |

### Easing curves

| Token | Valor | Uso |
|---|---|---|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary — reveals y entradas |
| `--ease-out-quart` | `cubic-bezier(0.25, 1, 0.5, 1)` | Secondary — cambios de estado |
| `linear` | — | Solo para crossfades de opacidad pura |

### Stagger

80ms entre elementos consecutivos en una secuencia (Framer Motion `staggerChildren: 0.08`).

### Principios (no negociable)

- Animar SOLO `transform`, `opacity`, `color`, `filter`. **NUNCA** `width`, `height`, `padding`, `margin`, `top`, `left`.
- Sin bounce, sin elastic, sin spring overshoot.
- Parallax: ratio entre 0.3 y 0.5 máximo. Más allá se siente kitsch.
- Text reveals: stagger por **palabra** (no por letra), 30ms cada una, fade + `translate-y 8px`.
- `prefers-reduced-motion`: deshabilitar parallax y reveals. Mantener solo crossfades a 120ms.

---

## 8. Componentes

### Buttons

**Primary (acciones internas)**
- Fill: `--ink-secondary` (navy)
- Texto: `--surface-base` (cream)
- Hover: fill `--ink-primary` (un punto más oscuro)
- Radius: `0.5rem`
- Padding: `12px 20px`
- Font: Geist 500 14px

**WhatsApp CTA**
- Fill: `--accent` (ocre)
- Texto: `--ink-primary` (navy oscuro)
- Hover: fill `--accent-deep`
- Icon WhatsApp: color `--whatsapp` (verde canónico), 18px
- Radius: `0.5rem`
- Padding: `14px 24px` (más generoso que el primary, es el CTA más importante)

**Secondary**
- Outline: `1px solid var(--border-strong)`
- Texto: navy
- Fill: transparente
- Hover: fill `--surface-raised`

**Tertiary (text-only)**
- Texto: navy
- Hover: underline animado — la línea sube desde abajo con `translate-y` en `out-quart 220ms`

### Cards

Usar con criterio. Cards son la respuesta lazy — usarlas solo cuando son verdaderamente el mejor affordance. Nunca cards anidadas.

Cuando se usen:
- Border: `0.5px solid var(--border-subtle)`
- Radius: `0.75rem`
- Padding: 24–32px
- Sin sombra default (usar `--shadow-subtle` solo si hay necesidad de jerarquía)

### Forms

- Inputs estilo underline editorial: sin caja, solo línea inferior de `1px solid var(--border-default)`.
- Focus: línea `2px solid var(--ink-secondary)`.
- Etiqueta arriba, persistente. **No floating labels.**
- Padding vertical del input: 12px.
- Font: Geist 16px. Nunca menos en mobile (evita auto-zoom en iOS).
- Transición del focus: `out-quart 220ms` en `border-color`.

### Pricing table

- Tres columnas, gap 24px desktop.
- **Columna 1 "Sin sistema"**: texto `--ink-tertiary`, surface `--surface-recessed`, sin border. Sensación de estado actual doloroso, descolorido.
- **Columna 2 "Plan recomendado"**: surface `--surface-raised`, borde `1px solid var(--accent)`, badge "Recomendado" con `background: var(--accent)` y texto `--ink-primary`. Sombra `--shadow-raised`. Elevada `8px translateY` del baseline.
- **Columna 3 "Plan premium"**: surface `--surface-base`, borde `0.5px solid var(--border-default)`. Estándar, sin énfasis especial.

**Mobile (< 768px)**: las tres columnas se apilan verticalmente en este orden: "Sin sistema" → "Plan recomendado" → "Plan premium". **PROHIBIDO scroll horizontal** bajo cualquier circunstancia. El "Plan recomendado" mantiene su acento ocre (borde + badge) y se eleva visualmente del resto (puede tener `scale(1.02)` o background ligeramente más raised). La narrativa comparativa visual se resuelve en el `shape` de la sección, no acá.

### Navigation

- Sticky on scroll.
- En top de página: background transparente, texto navy.
- Tras `scrollY > 80px`: background `--surface-base`, borde inferior `1px solid var(--border-subtle)`.
- Transición del background: `out-quart 220ms`.
- **No usar `backdrop-blur`.**
- Toggle ES/EN en el nav: botón tertiary, texto del idioma activo en `--ink-secondary`, inactivo en `--ink-quaternary`.

### Footer

- Surface: `--surface-deep` (no el mismo cream que el body — rompe el ritmo visual al final).
- Borde superior: `1px solid var(--border-subtle)`.
- Tres columnas máximo desktop, una columna mobile.
- Sin iconos sociales decorativos. Solo links esenciales y datos de contacto.

---

## 9. Iconography

- Librería: **Lucide React** (ya en stack).
- Tamaños:
  - small: 16px
  - default: 20px
  - large: 24px
  - Nunca más de 24px en UI. Los iconos no son ilustraciones.
- Color: `currentColor` siempre.
- Stroke width: **1.5** (el default de Lucide es 2 — 1.5 es más refinado y matchea el aesthetic editorial).

---

## 10. Imagery

### Mascota

Las reglas de placement viven en PRODUCT.md (sección "Biblioteca de imágenes"). Reglas técnicas:

- Servir siempre vía `next/image`.
- `priority={true}` solo en `mascota-saludo.webp` (hero).
- Parallax al scroll: `translate-y` a ratio `0.3` (la mascota se mueve al 30% de la velocidad del scroll).
- En hover (cuando aplique): sin movimiento de posición, solo `scale(1.02)` en `out-quart 220ms`.
- Ancho contenedor en desktop: 280–320px. La imagen no compite con el texto.

**Excepción Hero**: la mascota del Hero (`mascota-saludo.webp`) se renderiza más grande que el default, en el rango **400–480px de ancho** (desktop). Las demás mascotas del sitio mantienen el rango 280–320px.

### Otras imágenes

- Formato preferido: WebP. AVIF cuando el pipeline lo soporte.
- Lazy load por default (Next.js Image lo gestiona nativamente).
- Nunca imágenes de stock genéricas.

---

## 11. Implementación en Tailwind v4

Todos los tokens se exponen vía `@theme` en `app/globals.css`. El bloque está listo para pegar:

```css
@import "tailwindcss";

@theme {
  /* ─── Surfaces ─── */
  --color-surface-base:      oklch(0.96 0.012 80);
  --color-surface-raised:    oklch(0.98 0.008 80);
  --color-surface-recessed:  oklch(0.94 0.014 80);
  --color-surface-deep:      oklch(0.91 0.018 80);

  /* ─── Ink ─── */
  --color-ink-primary:       oklch(0.20 0.05 264);
  --color-ink-secondary:     oklch(0.30 0.06 264);
  --color-ink-tertiary:      oklch(0.42 0.025 264);
  --color-ink-quaternary:    oklch(0.58 0.018 264);

  /* ─── Borders ─── */
  --color-border-subtle:     oklch(0.88 0.008 264);
  --color-border-default:    oklch(0.82 0.012 264);
  --color-border-strong:     oklch(0.65 0.015 264);

  /* ─── Accent (USO RESTRINGIDO — ver sección 2) ─── */
  --color-accent:            oklch(0.72 0.10 80);
  --color-accent-deep:       oklch(0.55 0.10 70);

  /* ─── Semantic ─── */
  --color-success:           oklch(0.55 0.10 150);
  --color-warning:           oklch(0.70 0.10 50);
  --color-danger:            oklch(0.50 0.15 25);
  --color-info:              oklch(0.60 0.10 230);

  /* ─── WhatsApp ─── */
  --color-whatsapp:          oklch(0.62 0.16 145);

  /* ─── Shadows ─── */
  --shadow-subtle:  0 1px 2px oklch(0.20 0.05 264 / 0.04);
  --shadow-raised:  0 4px 16px oklch(0.20 0.05 264 / 0.06);

  /* ─── Typography ─── */
  --font-display: 'Fraunces', serif;
  --font-sans:    'Geist', system-ui, sans-serif;

  /* ─── Font sizes (desktop) ─── */
  --text-display-1: 4.5rem;    /* 72px */
  --text-display-2: 3.5rem;    /* 56px */
  --text-heading-1: 2.5rem;    /* 40px */
  --text-heading-2: 1.75rem;   /* 28px */
  --text-heading-3: 1.25rem;   /* 20px */
  --text-body-lg:   1.125rem;  /* 18px */
  --text-body:      1rem;      /* 16px */
  --text-body-sm:   0.875rem;  /* 14px */
  --text-caption:   0.8125rem; /* 13px */
  --text-micro:     0.6875rem; /* 11px */

  /* ─── Layout ─── */
  --max-page:    1280px;
  --max-content: 1100px;
  --max-prose:   680px;
  --max-hero:    1100px;

  /* ─── Section padding (semantic, 3 tiers) ─── */
  --padding-section-narrative:             8rem;    /* 128px desktop */
  --padding-section-standard:              6rem;    /* 96px desktop */
  --padding-section-transitional:          5rem;    /* 80px desktop */

  --padding-section-narrative-mobile:      5rem;    /* 80px mobile */
  --padding-section-standard-mobile:       4rem;    /* 64px mobile */
  --padding-section-transitional-mobile:   3.5rem;  /* 56px mobile */

  /* ─── Motion durations ─── */
  --duration-micro:  120ms;
  --duration-short:  220ms;
  --duration-medium: 400ms;
  --duration-long:   700ms;

  /* ─── Motion easings ─── */
  --ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);

  /* ─── Letter spacing ─── */
  --tracking-eyebrow: 0.08em;
}

/* ─── Prefers reduced motion ─── */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 120ms !important;
    transition-duration: 120ms !important;
  }
}
```

> **Nota**: Tailwind v4 autogenera la escala numérica de spacing desde su token base (`--spacing: 0.25rem`). No redefinir esa escala aquí. Los únicos tokens de spacing en `@theme` son los semánticos de sección (`--padding-section-*`), que no colisionan con la escala nativa.

---

## 12. Anti-patterns prohibidos

### De `impeccable` (absolutos, no negociables)

- Side-stripe borders (`border-left` o `border-right` > 1px coloreado en cards/callouts/alerts)
- Gradient text (`background-clip: text` con gradient background)
- Glassmorphism como decoración default (`backdrop-blur` en nav, cards, overlays)
- El hero-metric template (número grande + label pequeño + supporting stats al costado)
- Card grids idénticas y monótonas (misma altura, mismo padding, mismo contenido en estructura)
- Modal como primera respuesta a cualquier interacción
- Em dashes en copy — usar coma, dos puntos, punto y coma, o paréntesis en su lugar

### De OwlyDev (específicos del proyecto)

- Cualquier uso de ocre fuera de los dos lugares definidos en la Sección 2
- Animar layout properties: `padding`, `margin`, `width`, `height`, `top`, `left`
- Cursor personalizado
- Partículas, canvas decorativo, efectos 3D
- Stock photos de cualquier tipo
- Iconos de engranajes, cohetes, gráficas decorativas inventadas
- Blanco puro (`#ffffff` o `oklch(1 0 0)`) como superficie — siempre usar cream tintado
- Más de un peso de Geist en body text (400 y 500 son suficientes)
- Fraunces en tamaño body (es una display face — mínimo `heading-3` para usarla)
