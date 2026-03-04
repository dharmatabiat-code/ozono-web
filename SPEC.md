# Especificación Técnica - Osono Clinic

## 📋 Overview del Proyecto

| Campo | Detalle |
|-------|---------|
| **Nombre** | Osono Clinic Web |
| **Tipo** | Landing Page - Sitio Web de Clínica Médica |
| **Framework** | Astro 5.x |
| **Estilos** | Tailwind CSS 4.x |
| **Versión** | 1.0.0 |
| **Idioma** | Español |

---

## 🔧 Configuración Técnica

### package.json

```json
{
  "name": "osono-web",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.2.1",
    "astro": "^5.17.1",
    "tailwindcss": "^4.2.1"
  }
}
```

### astro.config.mjs

Configuración básica de Astro con Tailwind:

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    // Opciones de Vite
  }
});
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores

| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Teal Primary | `#338B85` | 51, 139, 133 | Color principal, CTAs |
| Teal Dark | `#2f7c77` | 47, 124, 119 | Hover states |
| Teal Light | `#0d9488` | 13, 148, 136 | Acentos secundarios |
| Red Accent | `#ef4444` | 239, 68, 68 | Acentos estratégicos |
| Red Light | `#fca5a5` | 252, 165, 165 | Hover acentos |
| Slate 900 | `#0f172a` | 15, 23, 42 | Textos oscuros |
| Slate 800 | `#1e293b` | 30, 41, 59 | Fondos oscuros |
| Slate 600 | `#475569` | 71, 85, 105 | Textos secundarios |
| Slate 50 | `#f8fafc` | 248, 250, 252 | Fondos claros |
| White | `#ffffff` | 255, 255, 255 | Fondos, textos claros |

### Tipografía

| Elemento | Font | Weight | Size |
|----------|------|--------|------|
| Headings | Plus Jakarta Sans | 700-800 | 2xl-6xl |
| Body | Plus Jakarta Sans | 400-600 | sm-xl |
| Nav | Plus Jakarta Sans | 600 | lg |
| Buttons | Plus Jakarta Sans | 700 | base |

### Espaciado (Tailwind)

```css
/* Breakpoints por defecto */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Border Radius

| Nombre | Valor | Uso |
|--------|-------|-----|
| sm | 0.25rem (4px) | Inputs |
| md | 0.5rem (8px) | Botones pequeños |
| lg | 1rem (16px) | Cards |
| xl | 1.5rem (24px) | Secciones |
| 2xl | 2rem (32px) | Containers |
| 3xl | 3rem (48px) | Cards grandes |

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
default: 0 - 639px        /* xs */
sm:    640px - 767px      /* Móviles grandes */
md:    768px - 1023px     /* Tablets */
lg:    1024px - 1279px    /* Laptops */
xl:    1280px - 1535px    /* Desktops */
2xl:   1536px+            /* Pantallas grandes */
```

---

## 🧩 Componentes

### Header
- **Archivo**: `src/components/Header.astro`
- **Estados**: Normal (transparente), Scrolled (blanco con blur)
- **Funcionalidad**: 
  - Efecto scroll con JavaScript
  - Menú móvil toggle
  - Navegación suave

### Footer
- **Archivo**: `src/components/Footer.astro`
- **Secciones**: Logo, Enlaces rápidos, Contacto, Horario
- **Redes**: Facebook, Instagram, WhatsApp, TikTok

### Layout
- **Archivo**: `src/layouts/Layout.astro`
- **Props**: `title`, `description`
- **Head**: Meta tags, favicon, fonts, styles

---

## 📄 SEO Configuration

### Meta Tags

```html
<meta name="description" content="Tratamientos avanzados de ozonoterapia para dolor crónico, hernias discales y bienestar inmunológico." />
<meta name="author" content="Osono Clinic" />
<meta name="robots" content="index, follow" />
<meta name="theme-color" content="#0d9488" />
```

### Open Graph (Sugerido)

```html
<meta property="og:title" content="Osono Clinic | Ozonoterapia Médica" />
<meta property="og:description" content="Tratamientos avanzados de ozonoterapia" />
<meta property="og:type" content="website" />
<meta property="og:image" content="/img/head/logo.png" />
```

---

## 📁 Estructura de Archivos

```
src/
├── components/
│   ├── Header.astro      # ~150 líneas
│   ├── Footer.astro      # ~120 líneas
│   └── Welcome.astro    # Componente legacy
│
├── layouts/
│   └── Layout.astro      # ~60 líneas
│
├── pages/
│   └── index.astro       # ~650 líneas (principal)
│
├── styles/
│   ├── global.css        # ~250 líneas
│   └── index.css        # ~100 líneas
│
└── js/
    └── main.js          # Funcionalidades JS
```

---

## ⚡ Rendimiento

### Lighthouse Targets

| Métrica | Target |
|---------|--------|
| Performance | > 90 |
| Accessibility | > 90 |
| Best Practices | > 90 |
| SEO | > 90 |

### Optimizaciones Aplicadas

- ✅ Astro static site generation
- ✅ Tailwind purge (por defecto en build)
- ✅ Imágenes en /public (servidas estáticamente)
- ✅ Fuentes de Google con preconnect
- ✅ CSS minimal (solo lo usado)

---

## 🧪 Testing Checklist

- [ ] Navegación funciona en todos los enlaces
- [ ] Menú móvil abre/cierra correctamente
- [ ] Formulario de contacto tiene todos los campos
- [ ] Botón WhatsApp flota correctamente
- [ ] FAQ acordeón funciona
- [ ] Responsive en 320px, 768px, 1024px, 1440px
- [ ] Imágenes cargan correctamente
- [ ] Animaciones smooth (sin jank)
- [ ] SEO meta tags presentes

---

## 🔗 Recursos Externos

| Recurso | URL |
|---------|-----|
| Font Awesome | https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css |
| Google Fonts | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap |
| Imágenes Unsplash | https://images.unsplash.com/ |

---

*Especificación técnica actualizada: 2026*

